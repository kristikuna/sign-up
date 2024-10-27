const SignUp = require("../models/SignUp")
const SignUpType = require("../types/SignUpType")
const SignUpCategoryEnum = require("../types/SignUpCategoryEnum")
const {
  GraphQLEnumType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
} = require("graphql")

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
        category: args.category,
        food: args.food,
        name: args.name,
        notes: args.notes,
        prepNeeds: args.prepNeeds,
      })

      return signUp.save()
    },
  },
  deleteSignUp: {
    type: SignUpType,
    args: {
      id: { type: GraphQLNonNull(GraphQLID) },
    },
    resolve(parent, args) {
      SignUp.find({ id: args.id }).then((signUps) => {
        signUps.forEach((signUp) => {
          signUp.deleteOne()
        })
      })
      return SignUp.findByIdAndDelete(args.id)
    },
  },
  updateSignUp: {
    type: SignUpType,
    args: {
      category: {
        type: new GraphQLEnumType({
          name: "CategoryUpdate",
          values: {
            appetizer: { value: "Appetizer" },
            condiment: { value: "Condiment" },
            dessert: { value: "Dessert" },
            main: { value: "Main Dish" },
            salad: { value: "Salad" },
            side: { value: "Side Dish" },
          },
        }),
      },
      food: { type: GraphQLString },
      id: { type: GraphQLNonNull(GraphQLID) },
      name: { type: GraphQLString },
      notes: { type: GraphQLString },
      prepNeeds: { type: GraphQLString },
    },
    resolve(parents, args) {
      return SignUp.findByIdAndUpdate(
        args.id,
        {
          $set: {
            category: args.category,
            food: args.food,
            name: args.name,
            notes: args.notes,
            prepNeeds: args.prepNeeds,
          },
        },
        { new: true }
      )
    },
  },
}

module.exports = signUpMutations
