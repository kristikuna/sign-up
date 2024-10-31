import { useNavigate } from "react-router-dom"

import { useMutation } from "@apollo/client"
import { Button } from "@mui/material"
import { DELETE_SIGN_UP } from "mutations/deleteSignUp"
import { GET_SIGN_UPS } from "queries/signUpsQuery"

function DeleteButton({ signUpId }) {
  const navigate = useNavigate()
  const [deleteSignUp] = useMutation(DELETE_SIGN_UP, {
    variables: { id: signUpId },
    onCompleted: () => navigate("/"),
    refetchQueries: [{ query: GET_SIGN_UPS }],
  })

  return (
    <Button
      aria-label="delete"
      color="error"
      onClick={(e) => {
        e.stopPropagation()
        deleteSignUp()
      }}
      variant="contained"
      sx={{ gridColumn: 2, gridRow: 4, fontWeight: "bold" }}
    >
      DELETE
    </Button>
  )
}

export default DeleteButton
