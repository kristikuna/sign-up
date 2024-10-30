import { gql } from "@apollo/client"

const UPDATE_SIGN_UP = gql`
  mutation UpdateSignUp(
    $id: ID!
    $name: String!
    $food: String!
    $category: CategoryUpdate
    $prepNeeds: String
    $notes: String
  ) {
    updateSignUp(
      id: $id
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

export { UPDATE_SIGN_UP }
