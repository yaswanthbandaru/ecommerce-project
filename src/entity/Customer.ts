import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ schema: "app_ecp"})
export class Customer {
    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    firstName: string 

    @Column() 
    lastName: string 

    @Column()
    email: string

    @Column() 
    phone: string
    
    @Column()
    password: string

    @Column()
    city: string 

    @Column({ nullable: true }) 
    country?: string 

    @Column({ nullable: true })
    loyaltyPoints?: number

    @Column({nullable: true})
    lastPurchaseDate: Date 
}