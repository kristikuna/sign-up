import React from "react"
import Typography from "@mui/material/Typography"

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
      <Typography
        variant="h1"
        sx={{
          color: "#fff4db",
          fontSize: "3rem",
          fontWeight: "bold",
          padding: "1rem",
        }}
      >
        {siteTitle}
      </Typography>
    </header>
  )
}

export default Header
