import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from "./Customer";
import { OrderItem } from "./OrderItem";

@Entity({ schema: "app_ecp" })
export class Order {
    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    orderDate: Date 

    @ManyToOne(() => Customer)
    customer: Customer

    @Column("decimal", { precision: 12, scale: 2 })
    totalAmount: number 

    @OneToMany(() => OrderItem, (orderitem) => orderitem.order)
    orderItems: OrderItem[]

    @Column()
    isCompleted: boolean

    @Column()
    isPaymentSuccessful: boolean

    @Column()
    paymentType: string  // for upi, credit, debit, cod 

    @Column()
    isOrderConfirmed: boolean
}