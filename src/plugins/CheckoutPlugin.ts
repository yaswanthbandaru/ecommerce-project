import { makeExtendSchemaPlugin, gql } from "graphile-utils"
import { CheckoutSchema } from "../graphql/CheckoutSchema"
import { CheckoutResolver } from "../graphql/CheckoutResolver"

export const CheckoutPlugin = makeExtendSchemaPlugin((build) => ({
    typeDefs: CheckoutSchema,
    resolvers: CheckoutResolver
}))