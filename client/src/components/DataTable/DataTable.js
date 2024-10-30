import { useQuery } from "@apollo/client"
import React, { useState, useMemo } from "react"

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
  const [orderBy, setOrderBy] = useState("food")

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc"
    setOrder(isAsc ? "desc" : "asc")
    setOrderBy(property)
  }

  const visibleRows = useMemo(() => {
    // Check if data and data.signUps exist
    if (!data || !data.signUps) return [] // Return an empty array if not available
    return [...data.signUps].sort(getComparator(order, orderBy))
  }, [data, order, orderBy])

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
            sx={{
              fontSize: "2rem",
              fontWeight: "bold",
              // padding: "1rem",
            }}
            color="#333"
          >
            Thanksgiving Sign-Up
          </Typography>
          <Button color="warning" variant="contained">
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
              {visibleRows.map((row, index) => (
                <DataTableRow key={row.id} row={row} index={index} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}

export default DataTable
