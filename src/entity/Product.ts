import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Supplier } from "./Supplier";
import { OrderItem } from "./OrderItem";

@Entity({ schema: "app_ecp" })
export class Product {
    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    productName: string

    @ManyToOne(() => Supplier)
    supplier: Supplier

    @Column("decimal", { precision: 12, scale: 2 })
    unitPrice: number 

    @Column()
    package: string 

    @Column()
    isDiscontinued: boolean

    @Column({ nullable: true })
    availableQuantity?: number

    @OneToMany(() => OrderItem, (orderitem) => orderitem.product)
    orderItems: OrderItem[]
}