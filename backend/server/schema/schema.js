const { GraphQLObjectType, GraphQLSchema } = require("graphql")
const signUpQueries = require("../queries/signUpQueries.js")
const signUpMutations = require("../mutations/signUpMutations.js")

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: signUpQueries,
})

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: signUpMutations,
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
})
