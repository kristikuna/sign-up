const { GraphQLEnumType } = require("graphql")

const SignUpCategoryEnum = new GraphQLEnumType({
  name: "SignUpCategory",
  values: {
    appetizer: { value: "Appetizer" },
    condiment: { value: "Condiment" },
    dessert: { value: "Dessert" },
    main: { value: "Main Dish" },
    salad: { value: "Salad" },
    side: { value: "Side Dish" },
  },
})

module.exports = SignUpCategoryEnum
