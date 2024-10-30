import { TableCell, TableRow, Typography } from "@mui/material"

import { useNavigate } from "react-router-dom"
import { Input } from "@mui/material"

function DataTableRow({ index, row, isNewRow, onChange }) {
  const navigate = useNavigate()

  const handleRowNavigate = (id) => {
    navigate(`/detail/${id}`)
  }
  console.log(isNewRow)

  return (
    <TableRow
      hover
      role="checkbox"
      tabIndex={-1}
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
      <TableCell component="th" scope="row" padding="none">
        {isNewRow ? (
          <Input onChange={(e) => onChange("name", e.target.value)} />
        ) : (
          <Typography>{row.name}</Typography>
        )}
      </TableCell>
      <TableCell align="right">
        {isNewRow ? (
          <Input onChange={(e) => onChange("food", e.target.value)} />
        ) : (
          <Typography>{row.food}</Typography>
        )}
      </TableCell>
      <TableCell align="right">
        {isNewRow ? (
          <Input onChange={(e) => onChange("prepNeeds", e.target.value)} />
        ) : (
          <Typography>{row.prepNeeds}</Typography>
        )}
      </TableCell>
      <TableCell align="right">
        {isNewRow ? (
          <Input onChange={(e) => onChange("category", e.target.value)} />
        ) : (
          <Typography>{row.category}</Typography>
        )}
      </TableCell>
      <TableCell align="right">
        {isNewRow ? (
          <Input onChange={(e) => onChange("notes", e.target.value)} />
        ) : (
          <Typography>{row.notes}</Typography>
        )}
      </TableCell>
    </TableRow>
  )
}

export default DataTableRow
