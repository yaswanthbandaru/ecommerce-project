import { CheckoutPlugin } from "./plugins/CheckoutPlugin"
import { CreateCustomCustomerPlugin } from "./plugins/CreateCustomCustomerPlugin"
import { CustomLoginPlugin } from "./plugins/CustomLoginPlugin"

const { postgraphile } = require('postgraphile')

module.exports = postgraphile(
	"postgres://postgres:avatar007@localhost:5432/EcommerceDb",
	"app_ecp",
	{
		watchPg: true,
		graphiql: true,
		enhanceGraphiql: true,
		dynamicJson: true,
		appendPlugins: [CreateCustomCustomerPlugin, CustomLoginPlugin, CheckoutPlugin],
		exportGqlSchemaPath: './src/generated/schema.graphql',
	}
)

