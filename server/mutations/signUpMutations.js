const SignUp = require("../models/SignUp")
const SignUpType = require("../types/SignUpType")
const SignUpCategoryEnum = require("../types/SignUpCategoryEnum")
const { GraphQLNonNull, GraphQLString } = require("graphql")

const signUpMutations = {
  addSignUp: {
    type: SignUpType,
    args: {
      name: { type: GraphQLNonNull(GraphQLString) },
      category: { type: SignUpCategoryEnum, defaultValue: "Side Dish" },
      food: { type: GraphQLNonNull(GraphQLString) },
      prepNeeds: { type: GraphQLString },
      notes: { type: GraphQLString },
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
}

module.exports = signUpMutations
