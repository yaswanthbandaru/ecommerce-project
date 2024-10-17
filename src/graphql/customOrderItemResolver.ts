import { AppDataSource } from "../data-source"
import { OrderItem } from "../entity/OrderItem"
import { Product } from "../entity/Product"
import { logger } from "../logger"

class ProductError extends Error {
    constructor(message: string){
        super(message)
        this.name="ProductError"
        Error.captureStackTrace(this, this.constructor)
    }
}


export const customOrderItemResolver = {
    Mutation: {
        customOrderItem: async (_, { productId, quantity, orderId }) => {
            try{
                const productRepository = AppDataSource.getRepository(Product)
                const product = await productRepository.findOne({ where: { id: productId } })
                if(!product){
                    throw new Error(`Errror occured due to Product with productId: ${productId} don't exist`)
                }
                console.log("AvailableQuantity:", product.availableQuantity)
                console.log("Product:", product)
                
                const newOrderItem = new OrderItem()
                newOrderItem.product = productId
                newOrderItem.quantity = quantity
                newOrderItem.order = orderId 

                if(product.availableQuantity < quantity){
                    throw new Error(`For ${product.productName} we have only ${product.availableQuantity}. You can go for quantity ${product.availableQuantity}?`)
                }


                const orderItemRepository = AppDataSource.getRepository(OrderItem)
                const orderItem = orderItemRepository.create(newOrderItem)
                await orderItemRepository.save(orderItem)
                const Item = await orderItemRepository.findOne({ where: { id: orderItem.id }})
                console.log("OrderItem:", orderItem)
                return { 
                    product: product,
                    orderItem: orderItem
                }
            } catch (e) {
                logger.error(e.message)
                throw new Error(e.message)
            }
        }
    }
}