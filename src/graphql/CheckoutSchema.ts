import { gql } from "graphile-utils";

export const CheckoutSchema = gql`
    type CheckoutPayLoad {
        success: Boolean
        message: String 
        totalAmount: Int
        orderId: Order
    }

    extend type Mutation {
        checkout(
            userId: Int
            orderId: ID
        ): CheckoutPayLoad 
    }
`