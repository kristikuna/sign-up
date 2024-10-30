import { useState } from "react"
import {
  Box,
  Button,
  Select,
  TextField,
  MenuItem,
  InputLabel,
  IconButton,
} from "@mui/material"
import { styled } from "@mui/system"

import { useMutation } from "@apollo/client"
import { UPDATE_SIGN_UP } from "mutations/updateSignUp"
import DeleteButton from "./DeleteButton"
import Toast from "./Toast"

const FormBox = styled(Box)({
  display: "grid",
  gap: "1rem",
  gridTemplateColumns: "repeat(2, 1fr)",
  padding: "1rem",
})

const categories = [
  { value: "appetizer", label: "Appetizer" },
  { value: "condiment", label: "Condiment" },
  { value: "dessert", label: "Dessert" },
  { value: "main", label: "Main Dish" },
  { value: "salad", label: "Salad" },
  { value: "side", label: "Side Dish" },
]

export default function Form({ signUp }) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState(signUp?.name)
  const [food, setFood] = useState(signUp?.food)
  const [prepNeeds, setPrepNeeds] = useState(signUp?.prepNeeds || "")
  const [notes, setNotes] = useState(signUp?.notes || "")
  const [category, setCategory] = useState(() => {
    switch (signUp?.category) {
      case "Appetizer":
        return "appetizer"
      case "Condiment":
        return "condiment"
      case "Dessert":
        return "dessert"
      case "Main Dish":
        return "main"
      case "Salad":
        return "salad"
      case "Side Dish":
        return "side"
      default:
        throw new Error("")
    }
  })

  const [updateSignUp] = useMutation(UPDATE_SIGN_UP, {
    variables: { id: signUp.id, name, food, category, notes, prepNeeds },
    // refetchQueries: [{ query: GET_SIGN_UP, variables: { id } }],
  })

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        X
      </IconButton>
    </>
  )
  const handleSubmit = (e) => {
    e.preventDefault()

    updateSignUp(name, food, category, notes, prepNeeds)
    handleClick()
  }

  return (
    <>
      <FormBox component="form" onSubmit={handleSubmit}>
        <TextField
          id="name"
          label="Name"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
          variant="standard"
          color="warning"
          sx={{ gridColumn: 1, gridRow: 1 }}
        />
        <TextField
          id="food"
          label="What You're Bringing"
          onChange={(e) => setFood(e.target.value)}
          required
          value={food}
          variant="standard"
          color="warning"
          sx={{ gridColumn: 2, gridRow: 1 }}
        />
        <TextField
          label="Food Prep Needs"
          value={prepNeeds}
          id="prepNeeds"
          onChange={(e) => setPrepNeeds(e.target.value)}
          variant="standard"
          color="warning"
          sx={{ gridColumn: 1, gridRow: 2 }}
        />
        <InputLabel
          id="Category"
          variant="standard"
          color="warning"
          sx={{
            gridColumn: 2,
            gridRow: 2,
            transform: "translate(0, -1.5px) scale(0.75)",
          }}
        >
          Category
        </InputLabel>
        <Select
          required
          labelId="Category"
          id="category"
          value={category}
          label="Category"
          variant="standard"
          color="warning"
          onChange={(e) => setCategory(e.target.value)}
          sx={{
            gridColumn: 2,
            gridRow: 2,
            padding: 0,
          }}
        >
          {categories.map((cat) => (
            <MenuItem key={cat.value} value={cat.value}>
              {cat.label}
            </MenuItem>
          ))}
        </Select>
        <TextField
          label="Notes"
          value={notes}
          id="note"
          onChange={(e) => setNotes(e.target.value)}
          variant="standard"
          color="warning"
          sx={{ gridColumn: "1 / span 2", gridRow: 3 }}
        />
        <DeleteButton signUpId={signUp.id} />
        <Button
          aria-label="update"
          color="warning"
          sx={{ gridColumn: 1, gridRow: 4 }}
          variant="contained"
          type="submit"
        >
          UPDATE
        </Button>
      </FormBox>
      <Toast open={open} handleClose={handleClose} action={action} />
    </>
  )
}
