import { gql } from "@apollo/client"

const DELETE_SIGN_UP = gql`
  mutation DeleteSignUp($id: ID!) {
    deleteSignUp(id: $id) {
      id
    }
  }
`

export { DELETE_SIGN_UP }
