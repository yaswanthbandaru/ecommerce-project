import { AppDataSource } from "../data-source"
import { Customer } from "../entity/Customer"
import { logger } from "../logger"
import { decrypt } from "./crypto"
import * as jwt from "jsonwebtoken"

export const LoginService = async (email: string, password: string) => {
    const customerRepository = AppDataSource.getRepository(Customer)
    const customer = await customerRepository.findOne({ where: { email }})
    if(!customer){
        logger.error("Invalid username or password for login")
        throw new Error("Invalid email")
    }
    const encryptedPassword = customer.password
    console.log('encyrpted password:', encryptedPassword)
    const decryptedPassword = decrypt(encryptedPassword)
    console.log('decrypted password:', decryptedPassword)
    if(password === decryptedPassword) {
        const token = jwt.sign({ email: email }, process.env.JWT_SECRET, { expiresIn: '7d'})
        console.log("jwtToken:", token)
        return {
            token: token,
            userId: customer.id 
        }
    }
    else {
        logger.error("Wrong password or username arises due to mismatch in password")
        throw new Error("Wrong password or username")
    }
}