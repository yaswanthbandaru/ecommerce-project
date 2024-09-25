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
    city: string 

    @Column({ nullable: true }) 
    country?: string 

    @Column() 
    phone: string
}