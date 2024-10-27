const mongoose = require("mongoose")

const SignUpSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  category: {
    type: String,
    enum: [
      "Appetizer",
      "Condiment",
      "Dessert",
      "Main Dish",
      "Salad",
      "Side Dish",
    ],
  },
  food: {
    type: String,
  },
  notes: {
    type: String,
  },
  prepNeeds: {
    type: String,
  },
})

module.exports = mongoose.model("SignUp", SignUpSchema)
