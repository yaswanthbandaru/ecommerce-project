import { AppDataSource } from "../data-source"
import { Customer } from "../entity/Customer"

export const checkEmailExists = async ( email : string) : Promise<boolean> => {
    const customerRepository = AppDataSource.getRepository(Customer)
    const customer = await customerRepository.findOne({ where: { email }})
    return !customer
}