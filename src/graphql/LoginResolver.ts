require('dotenv').config()
import { logger } from "../logger"
import { AppDataSource } from "../data-source"
import { Customer } from "../entity/Customer"
import bcrypt from 'bcrypt'
import * as jwt from "jsonwebtoken"

export const LoginResolver ={
    Mutation: {
        login: async (_, { email, password }) => {
            logger.info("Login Request is requested")

            const customerRepository = AppDataSource.getRepository(Customer)
            const customer = await customerRepository.findOne({ where: { email }})
            
            if(!customer){
                logger.error("Invalid username or password for login")
                throw new Error("Invalid username or password")
            } 

            const valid = await bcrypt.compare(password, customer.password)
            if(!valid) {
                throw new Error('Wrong password or usernmae')
            }

            const token = jwt.sign({ email: customer.email }, process.env.JWT_SECRET , { expiresIn: '1h' })
            return token 
        }
    }
}
