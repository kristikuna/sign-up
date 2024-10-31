import { useState } from "react"
import {
  Box,
  Button,
  Select,
  TextField,
  MenuItem,
  InputLabel,
} from "@mui/material"
import { styled } from "@mui/system"

import { useMutation } from "@apollo/client"
import { UPDATE_SIGN_UP } from "mutations/updateSignUp"
import { MENU_CATEGORIES } from "constants/categories"
import DeleteButton from "./DeleteButton"
import SuccessModal from "../SuccessModal/SuccessModal"

const FormBox = styled(Box)({
  display: "grid",
  gap: "1rem",
  gridTemplateColumns: "repeat(2, 1fr)",
  padding: "1rem",
})

export default function Form({ signUp }) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState(signUp?.name)
  const [food, setFood] = useState(signUp?.food)
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
    variables: { id: signUp.id, name, food, category, notes },
  })

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    updateSignUp(name, food, category, notes)
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
        <InputLabel
          id="Category"
          variant="standard"
          color="warning"
          sx={{
            gridColumn: 1,
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
            gridColumn: 1,
            gridRow: 2,
            padding: 0,
          }}
        >
          {MENU_CATEGORIES.map((cat) => (
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
          sx={{ gridColumn: 2, gridRow: 2 }}
        />
        <DeleteButton signUpId={signUp.id} />
        <Button
          aria-label="update"
          color="warning"
          sx={{ gridColumn: 1, gridRow: 4, fontWeight: "bold" }}
          variant="contained"
          type="submit"
        >
          UPDATE
        </Button>
        <SuccessModal open={open} handleClose={handleClose} showHome />
      </FormBox>
    </>
  )
}
