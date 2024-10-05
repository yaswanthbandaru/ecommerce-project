import { gql } from "postgraphile";

export const CreateCustomCustomerSchema = gql`
    type queryPayload {
        email: String
        password: String
        lastName: String 
        firstName: String
        id: Int 
    }

    extend type Query {
        customCustomer(
            email: String
            phone: String
            id: Int
        ): queryPayload
    }

    extend type Mutation {
        createCustomCustomer(
            firstName: String!
            lastName: String!
            city: String!
            country: String
            phone: String!
            email: String!
            password: String!
            lastPurchaseDate: Datetime
        ) : Customer
    }
`
 