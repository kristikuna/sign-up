import { useState } from "react"
import {
  Box,
  IconButton,
  MenuItem,
  Select,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material"
import { useNavigate } from "react-router-dom"
import CancelIcon from "@mui/icons-material/Cancel"
import CheckIcon from "@mui/icons-material/Check"
import { MENU_CATEGORIES } from "constants/categories"
import { useMutation } from "@apollo/client"
import { ADD_SIGN_UP } from "mutations/addSignUp"
import { GET_SIGN_UPS } from "queries/signUpsQuery"
import SuccessModal from "components/SuccessModal/SuccessModal"
import CategoryText from "./CategoryText"

function DataTableRow({ index, row, isNewRow, onChange, handleDeleteRow }) {
  const [selectDefaultValue, setSelectDefaultValue] = useState("side")
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const [name, setName] = useState("")
  const [food, setFood] = useState("")
  const [notes, setNotes] = useState("")
  const [category, setCategory] = useState("side")

  const [addSignUp] = useMutation(ADD_SIGN_UP, {
    variables: { name, food, notes, category },
    update(cache, { data: { addSignUp } }) {
      const { signUps } = cache.readQuery({ query: GET_SIGN_UPS })
      cache.writeQuery({
        query: GET_SIGN_UPS,
        data: { signUps: [...signUps, addSignUp] },
      })
    },
  })

  const onSubmit = (e) => {
    e.preventDefault()
    if (name === "" || food === "") {
      return alert("Please fill in all fields")
    }

    addSignUp(name, food, notes, category)
    handleClick()
  }

  const handleRowNavigate = (id) => {
    navigate(`/detail/${id}`)
  }

  const handleChange = (event) => {
    setSelectDefaultValue(event.target.value)
    setCategory(event.target.value)
  }

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <TableRow
      hover
      sx={{
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#cc5500",
        },
      }}
      onClick={() => {
        const id = row.id
        if (id) {
          handleRowNavigate(id)
        }
      }}
    >
      <TableCell sx={{ paddingLeft: 0 }}>
        {isNewRow ? (
          <TextField
            color="warning"
            required
            variant="standard"
            id="name"
            label="Name"
            onChange={(e) => setName(e.target.value)}
            sx={{ width: "100%" }}
          />
        ) : (
          <Typography>{row.name}</Typography>
        )}
      </TableCell>
      <TableCell>
        {isNewRow ? (
          <TextField
            color="warning"
            required
            variant="standard"
            id="food"
            label="Food"
            onChange={(e) => setFood(e.target.value)}
            sx={{ width: "100%" }}
          />
        ) : (
          <Typography>{row.food}</Typography>
        )}
      </TableCell>
      <TableCell>
        {isNewRow ? (
          <Select
            color="warning"
            id="category"
            label="Category"
            labelId="Category"
            variant="standard"
            value={selectDefaultValue}
            onChange={handleChange}
            sx={{ width: "100%", top: "8px" }}
          >
            {MENU_CATEGORIES.map((cat) => (
              <MenuItem key={cat.value} value={cat.value}>
                {cat.label}
              </MenuItem>
            ))}
          </Select>
        ) : (
          <CategoryText category={row.category} />
        )}
      </TableCell>
      <TableCell>
        {isNewRow ? (
          <TextField
            color="warning"
            variant="standard"
            id="notes"
            label="Notes"
            onChange={(e) => setNotes(e.target.value)}
            sx={{ width: "100%" }}
          />
        ) : (
          <Typography>{row.notes}</Typography>
        )}
      </TableCell>
      <TableCell align="right">
        {isNewRow ? (
          <Box sx={{ display: "flex" }}>
            <IconButton
              aria-label="delete"
              color="success"
              onClick={(e) => {
                e.stopPropagation()
                onSubmit(e)
              }}
            >
              <CheckIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              color="error"
              onClick={(e) => {
                e.stopPropagation()
                handleDeleteRow(index)
              }}
            >
              <CancelIcon />
            </IconButton>
          </Box>
        ) : null}
      </TableCell>
      <SuccessModal open={open} handleClose={handleClose} showHome={false} />
    </TableRow>
  )
}

export default DataTableRow
