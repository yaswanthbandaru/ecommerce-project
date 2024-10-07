import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";


@Entity({ schema: "app_ecp"})
export class Cart {
    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => Product)
    product: Product

    @Column()
    quantity: number

    @Column()
    created_at: Date 

    @Column()
    modified_at: Date 
}