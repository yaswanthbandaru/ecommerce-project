const express = require('express')
const post_graphile = require('./postgraphile')
import { Timestamp } from "typeorm"
import { AppDataSource } from "./data-source"

const app = express()
const port = 4000

AppDataSource.initialize()
    .then(async () => console.log("Connected to the database ..."))
    .catch( error => console.log("Error while connecting to database:", error))

app.use(post_graphile)

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}/`)
})