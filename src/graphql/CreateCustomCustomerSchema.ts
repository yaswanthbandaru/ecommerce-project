import { gql } from "postgraphile";

export const CreateCustomCustomerSchema = gql`
    extend type Query {
        customCustomer(
            email: String
            phone: String
            id: Int
        ): Customer 
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
 