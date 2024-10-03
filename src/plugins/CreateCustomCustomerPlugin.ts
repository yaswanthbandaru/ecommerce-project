import { makeExtendSchemaPlugin } from "graphile-utils";
import { CreateCustomCustomerSchema } from "../graphql/CreateCustomCustomerSchema";
import { CreateCustomCustomerResolver } from "../graphql/CreateCustomCustomerResolver";

export const CreateCustomCustomerPlugin = makeExtendSchemaPlugin((build) => ({
    typeDefs: CreateCustomCustomerSchema,
    resolvers: CreateCustomCustomerResolver
}))