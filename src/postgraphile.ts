const { postgraphile } = require('postgraphile')

module.exports = postgraphile(
	"postgres://postgres:avatar007@localhost:5432/EcommerceDb",
	"app_ecp",
	{
		watchPg: true,
		graphiql: true,
		enhanceGraphiql: true,
		dynamicJson: true,
		exportGqlSchemaPath: './src/generated/schema.graphql',
	}
)

