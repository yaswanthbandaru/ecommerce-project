import { gql } from "graphile-utils"

export const customOrderItemSchema = gql`
    type OutputPayLoad {
        product: Product
        orderItem: OrderItem
    }

    extend type Mutation {
        customOrderItem(
            quantity: Int
            orderId: Int
            productId: Int
        ): OutputPayLoad
    }
`