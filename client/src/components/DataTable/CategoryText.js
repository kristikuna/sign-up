import React from "react"
import { Chip } from "@mui/material"
import theme from "theme"

const CategoryText = ({ category }) => {
  let backgroundColor

  switch (category) {
    case "Appetizer":
      backgroundColor = theme.palette.blue.main
      break
    case "Condiment":
      backgroundColor = theme.palette.red.main
      break
    case "Dessert":
      backgroundColor = theme.palette.yellow.main
      break
    case "Main Dish":
      backgroundColor = theme.palette.primary.main
      break
    case "Side Dish":
      backgroundColor = theme.palette.brown.main
      break
    case "Salad":
      backgroundColor = theme.palette.green.main
      break
    default:
      backgroundColor = "gray"
  }

  return (
    <Chip
      sx={{
        backgroundColor,
        color: "#fff4db",
      }}
      label={category}
    />
  )
}

export default CategoryText
