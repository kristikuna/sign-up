import { useQuery } from "@apollo/client"
import { useState, useEffect } from "react"
import { Button, Box, Typography } from "@mui/material"
import DataTableRow from "./DataTableRow"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableContainer from "@mui/material/TableContainer"
import { GET_SIGN_UPS } from "../../queries/signUpsQuery"
import DataTableHead from "./DataTableHead"

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) return -1
  if (b[orderBy] > a[orderBy]) return 1
  return 0
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

function DataTable() {
  const { data } = useQuery(GET_SIGN_UPS)
  const [order, setOrder] = useState("asc")
  const [orderBy, setOrderBy] = useState("name")
  const [rows, setRows] = useState([])

  useEffect(() => {
    if (data && data.signUps) {
      const sortedRows = [...data.signUps].sort(getComparator(order, orderBy))
      setRows(sortedRows)
    }
  }, [data, order, orderBy])

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc"
    setOrder(isAsc ? "desc" : "asc")
    setOrderBy(property)
  }

  const handleAddRow = () => {
    setRows((prevRows) => [
      ...prevRows,
      {
        name: "",
        food: "",
        prepNeeds: "",
        category: "",
        notes: "",
      },
    ])
  }

  const handleChange = (index, field, value) => {
    const updatedRows = [...rows]
    updatedRows[index][field] = value
    setRows(updatedRows)
  }

  return (
    <Box sx={{ background: "#fff4db", width: "100%" }}>
      <Box sx={{ p: 1, mb: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontSize: "2rem", fontWeight: "bold" }}
            color="#333"
          >
            Thanksgiving Sign-Up
          </Typography>
          <Button color="warning" variant="contained" onClick={handleAddRow}>
            Add Row
          </Button>
        </Box>
        <TableContainer sx={{ background: "#fff4db" }}>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <DataTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {rows.map((row, index) => (
                <DataTableRow
                  key={row.id}
                  row={row}
                  index={index}
                  onChange={handleChange}
                  isNewRow={index >= (data?.signUps?.length || 0)}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}

export default DataTable
