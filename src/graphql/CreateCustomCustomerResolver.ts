import { logger } from "../logger"
import * as Chance from 'chance'
import { checkEmailExists } from "../service/CheckCustomerExists"
import { AppDataSource } from "../data-source"
import { Customer } from "../entity/Customer"
import Cryptr = require("cryptr")
import { Query } from "pg"

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

            const cryptr = new Cryptr(process.env.JWT_SECRET) 

            // const encryptedPassword = cryptr.encrypt('bacon')
            // logger.info(`Password \'bacon\' is encrypted as: ${encryptedPassword}`)
            // logger.info(`${encryptedPassword} is decrypted as: ${cryptr.decrypt(encryptedPassword)}`)

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
                password: password
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
