# Ecommerce Project

Link to the project: [here](https://www.dofactory.com/sql/sample-database/)

## Requirements

* Node
* Express
* PostgreSQL 
* TypeORM
* Postgraphile (graphql server)

## GraphQL Requests
### createOrder
    mutation MyMutation {
    createOrder(
        input: {
        order: {
            orderDate: "23-10-2024"
            totalAmount: "220"
            isCompleted: false
            isPaymentSuccessful: false
            paymentType: "UPI"
            isOrderConfirmed: false
        }
        }
    ) {
        order {
        id
        isCompleted
        paymentType
        totalAmount
        orderDate
        }
    }
    }

### allOrders

    query MyQuery {
        allOrders {
            nodes {
                id
                isPaymentSuccessful
                isOrderConfirmed
                orderItemsByOrderId {
                    nodes {
                        id
                        quantity
                        productByProductId {
                            productName
                            unitPrice
                        }
                    }
                }
            }
        }
    }

