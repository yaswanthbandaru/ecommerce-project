import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./Order";
import { Product } from "./Product";

@Entity({ schema: "app_ecp" })
export class OrderItem {
    @PrimaryGeneratedColumn()
    id: number 

    @ManyToOne(() => Order, (order) => order.orderItems)
    order: Order

    @ManyToOne(() => Product, (product) => product.orderItems)
    product: Product

    @Column("decimal", { precision: 12, scale: 2 })
    unitPrice: number

    @Column()
    quantity: number
}