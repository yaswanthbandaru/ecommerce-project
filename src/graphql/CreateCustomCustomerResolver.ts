import { logger } from "../logger"
import * as Chance from 'chance'
import { checkEmailExists } from "../service/CheckCustomerExists"
import { AppDataSource } from "../data-source"
import { Customer } from "../entity/Customer"
import { Query } from "pg"
import { decrypt, encrypt } from "../service/crypto"

export const CreateCustomCustomerResolver = {
    Query: {
        customCustomer: async (_, { email, phone, id }) => {
            logger.info(`Custom Query for finding the User by ID, email, phone : ${phone}`)
            const customerRepository = AppDataSource.getRepository(Customer)
            const conditions = []
            if (email) {
                conditions.push({ email });
            }
            if (phone) {
                conditions.push({ phone });
            }
            if (id) {
                conditions.push({ id });
            }
            const customer = await customerRepository.findOne({ where : conditions.length > 1 ? [{ email }, { phone }, { id }] : conditions[0] })

            return customer
        }
    },
    Mutation: {
        createCustomCustomer: async (_, { firstName, lastName, email, password, phone }) => {
            logger.info("Create custom customer mutation is requested")

            logger.info(`${process.env.JWT_SECRET}`)

            var chance = new Chance()
            const name =  chance.name().split(' ')
            const phonenumber = chance.phone()
            const firstname = name[0]
            const lastname = name[1]
            logger.warn(lastname)
            

            const newCustomer = {
                firstName: firstname,
                lastName: lastname,
                city: 'London',
                country: 'UK',
                phone: phonenumber,
                email: email,
                password: encrypt(password).encryptedData
            }

            let bool = await checkEmailExists(email)
            logger.warn(`Does ${email} exist in Database?: ${bool}`)

            const customerRepository = AppDataSource.getRepository(Customer)
            const customer = customerRepository.create(newCustomer)
            await customerRepository.save(customer)
            return customer
        }
    }
}
