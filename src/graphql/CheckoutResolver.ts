import { logger } from "../logger"

export const CheckoutResolver = {
    Mutation: {
        checkout: async (_, { userId }) => {
            logger.info('Checkout request is requested')
            return {
                success: true,
                message: "order has been placed successful",
                totalAmount: 221
            }
        }
    }
}