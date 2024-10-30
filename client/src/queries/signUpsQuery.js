import { gql } from "@apollo/client"

const GET_SIGN_UPS = gql`
  query getSignUps {
    signUps {
      name
      food
      category
      prepNeeds
      notes
      id
    }
  }
`
const GET_SIGN_UP = gql`
  query getSignUp($id: ID!) {
    signUp(id: $id) {
      name
      food
      category
      prepNeeds
      notes
      id
    }
  }
`
export { GET_SIGN_UP, GET_SIGN_UPS }
