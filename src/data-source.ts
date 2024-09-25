import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "avatar007",
    database: "EcommerceDb",
    synchronize: false,
    logging: false,
    entities: ["./src/entity/*.ts"],
    migrations: ["./src/migration/*.ts"]
})