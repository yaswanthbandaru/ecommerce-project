const post_graphile = require('./postgraphile')
const express = require('express')
import { Request, Response, NextFunction } from "express"
import { AppDataSource } from "./data-source"
import { logger } from "./logger"

const app = express()
const port = 4000

AppDataSource.initialize()
    .then(async () => logger.info("Data Source has been initialized!"))
    .catch( error => logger.error("Error while connecting to database:", error))

app.use((req: Request, res: Response, next: NextFunction) => {
    logger.info(`Incoming request: ${req.method} ${req.url}`),
    res.on('finish', () => { logger.info(`Response status: ${res.statusCode}`) }),
    next()
})

app.use(post_graphile)

app.listen(port, () => {
    logger.info(`Server is listening at http://localhost:${port}/`)
})