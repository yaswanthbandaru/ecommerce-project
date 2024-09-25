import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";


@Entity({ schema: "app_ecp"})
export class Supplier {
    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    companyName: string 

    @Column()
    contractName: string 

    @Column()
    city: string 

    @Column()
    country: string 

    @Column()
    phone: string 

    @Column()
    fax: string 

    @OneToMany(() => Product, (product) => product.supplier)
    products: Product[]
}