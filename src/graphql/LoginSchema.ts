import { gql } from "graphile-utils"

export const LoginSchema = gql`
    extend type Mutation {
        login(
            email: String!,
            password: String!
        ): String
    }
`