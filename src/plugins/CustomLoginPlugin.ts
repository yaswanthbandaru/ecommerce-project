import { makeExtendSchemaPlugin } from "graphile-utils"
import { LoginResolver } from "../graphql/LoginResolver"
import { LoginSchema } from "../graphql/LoginSchema"

export const CustomLoginPlugin = makeExtendSchemaPlugin((build) => ({
    typeDefs: LoginSchema,
    resolvers: LoginResolver
}))