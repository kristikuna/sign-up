const SignUp = require("../models/SignUp")
const SignUpType = require("../types/SignUpType")
const { GraphQLList, GraphQLID } = require("graphql")

const signUpQueries = {
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
}

module.exports = signUpQueries
