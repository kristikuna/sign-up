import React from "react"
import Box from "@mui/material/Box"

function Header({ siteTitle }) {
  return (
    <header
      style={{
        margin: `0 auto`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
      }}
    >
      <Box
        sx={{
          color: "#fff4db",
          fontSize: "3rem",
          fontWeight: "bold",
          padding: "1rem",
        }}
      >
        {siteTitle}
      </Box>
    </header>
  )
}

export default Header
