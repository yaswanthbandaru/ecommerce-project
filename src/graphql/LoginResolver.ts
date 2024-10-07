require('dotenv').config()
import { logger } from "../logger"
import { LoginService } from "../service/LoginService"

interface jwttoken {
    token: string
    userId: number
}

export const LoginResolver ={
    Mutation: {
        login: async (_, { email, password }) => {
            logger.info("Login Request is requested")

            const token : jwttoken = await LoginService(email, password)
            return  { jwtToken : token }
        }
    }
}
