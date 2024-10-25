const { GraphQLEnumType } = require("graphql")

const SignUpCategoryEnum = new GraphQLEnumType({
  name: "SignUpCategory",
  values: {
    main: { value: "Main Dish" },
    appetizer: { value: "Appetizer" },
    condiment: { value: "Condiment" },
    dessert: { value: "Dessert" },
    salad: { value: "Salad" },
    side: { value: "Side Dish" },
  },
})

module.exports = SignUpCategoryEnum
