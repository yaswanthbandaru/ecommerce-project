import { makeExtendSchemaPlugin } from "graphile-utils"
import { customOrderItemSchema } from "../graphql/customOrderItemSchema"
import { customOrderItemResolver } from "../graphql/customOrderItemResolver"

export const customOrderItemPlugin = makeExtendSchemaPlugin((build) => ({
    typeDefs: customOrderItemSchema,
    resolvers: customOrderItemResolver
}))