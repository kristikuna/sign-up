const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql")

const SignUpType = new GraphQLObjectType({
  name: "SignUp",
  fields: () => ({
    category: { type: GraphQLString },
    food: { type: GraphQLString },
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    notes: { type: GraphQLString },
    prepNeeds: { type: GraphQLString },
  }),
})

module.exports = SignUpType
