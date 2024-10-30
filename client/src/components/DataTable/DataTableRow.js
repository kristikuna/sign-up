import React from "react"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import { useNavigate } from "react-router-dom"

function DataTableRow({ index, row }) {
  const navigate = useNavigate()

  const labelId = `enhanced-table-checkbox-${index}`

  const handleRowNavigate = (id) => {
    navigate(`/detail/${id}`)
  }
  return (
    <TableRow
      hover
      role="checkbox"
      tabIndex={-1}
      sx={{ cursor: "pointer" }}
      onClick={() => handleRowNavigate(row.id)}
    >
      <TableCell component="th" id={labelId} scope="row" padding="none">
        {row.name}
      </TableCell>
      <TableCell align="right">{row.food}</TableCell>
      <TableCell align="right">{row.prepNeeds}</TableCell>
      <TableCell align="right">{row.category}</TableCell>
      <TableCell align="right">{row.notes}</TableCell>
    </TableRow>
  )
}

export default DataTableRow
