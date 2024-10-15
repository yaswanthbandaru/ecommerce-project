# Ecommerce Project

Link to the project: [here](https://www.dofactory.com/sql/sample-database/)

## Requirements

* Node
* Express
* PostgreSQL 
* TypeORM
* Postgraphile (graphql server)

## Concepts Implemented
* Authorization using jsonwebtoken
* Encryption and Decryption using **crypto** node module.

## GraphQL Requests

### createCustomer
    mutation MyMutation {
        createCustomer(
            input: {
            customer: {
                firstName: "Raja"
                lastName: "Hari"
                city: "Hyderabad"
                phone: "96462 56262"
                email: "rajahari@gmail.com"
                password: "raja123"
            }
            }
        ) {
            customer {
            id
            email
            password
            firstName
            lastName
            phone
            city
            }
        }
    }

### allcustomers
    query MyQuery {
        allCustomers {
            nodes {
            email
            password
            firstName
            lastName
            city
            phone
            id
            }
        }
    }

### createOrderItem

    mutation MyMutation {
        createOrderItem(
            input: { orderItem: { quantity: 10, productId: 10, orderId: 1 } }
        ) {
            orderItem {
            id
            orderByOrderId {
                id
                isPaymentSuccessful
            }
            }
            productByProductId {
            unitPrice
            productName
            availableQuantity
            }
        }
    }

### allOrderItems
    query MyQuery {
        allOrderItems {
            nodes {
            id
            orderByOrderId {
                id
                isPaymentSuccessful
            }
            productByProductId {
                unitPrice
                productName
                availableQuantity
            } 
            }
        }
    }

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

