const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql")

const SignUpType = new GraphQLObjectType({
  name: "SignUp",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    category: { type: GraphQLString },
    food: { type: GraphQLString },
    prepNeeds: { type: GraphQLString },
    notes: { type: GraphQLString },
  }),
})

module.exports = SignUpType
