import { gql } from "@apollo/client"

const ADD_SIGN_UP = gql`
  mutation addSignUp(
    $name: String!
    $food: String!
    $category: SignUpCategory
    $prepNeeds: String
    $notes: String
  ) {
    addSignUp(
      # id: $id
      name: $name
      food: $food
      category: $category
      prepNeeds: $prepNeeds
      notes: $notes
    ) {
      id
      name
      food
      category
      prepNeeds
      notes
    }
  }
`

export { ADD_SIGN_UP }
