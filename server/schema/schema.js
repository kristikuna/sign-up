const SignUp = require("../models/SignUp")

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLEnumType,
  GraphQLNonNull,
} = require("graphql")

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

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    signUps: {
      type: new GraphQLList(SignUpType),
      resolve(parent, args) {
        return SignUp.find()
      },
    },
    signUp: {
      type: SignUpType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return SignUp.findById(args.id)
      },
    },
  },
})

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // Add a sign-up
    addSignUp: {
      type: SignUpType,
      args: {
        name: {
          type: GraphQLNonNull(GraphQLString),
        },
        category: {
          type: new GraphQLEnumType({
            name: "SignUpCategory",
            values: {
              main: { value: "Main Dish" },
              appeteizer: { value: "Appetizer" },
              condiment: { value: "Condiment" },
              dessert: { value: "Dessert" },
              salad: { value: "Salad" },
              side: { value: "Side Dish" },
            },
          }),
          defaultValue: "Side Dish",
        },
        food: {
          type: GraphQLNonNull(GraphQLString),
        },
        prepNeeds: {
          type: GraphQLString,
        },
        notes: {
          type: GraphQLString,
        },
      },
      resolve(parent, args) {
        const signUp = new SignUp({
          name: args.name,
          category: args.category,
          food: args.food,
          prepNeeds: args.prepNeeds,
          notes: args.notes,
        })

        return signUp.save()
      },
    },
  },
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
})
