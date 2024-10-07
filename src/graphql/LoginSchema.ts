import { gql } from "graphile-utils"

export const LoginSchema = gql`
    type JwtToken {
        token: String
        userId: Int
        # username: String!
        # exp: Int! # Expirey time in timestamp
    }

    type LoginPayload {
        jwtToken: JwtToken
    }
    
    extend type Mutation {
        login(
            email: String!,
            password: String!
        ): LoginPayload
    }
`