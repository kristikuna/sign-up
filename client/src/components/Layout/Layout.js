import React from "react"
import { Box, Typography } from "@mui/material"
import { styled } from "@mui/system"

const MainContent = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: "0 5rem 7rem 5rem",
})

function Layout({ children }) {
  const EMOJI_LIST = ["❤️", "☕", "🐱"]
  const madeWithEmoji =
    EMOJI_LIST[Math.floor(Math.random() * EMOJI_LIST.length)]
  return (
    <>
      {/* <Header siteTitle={`Hey, Fam 👋`} /> */}
      {/* <MainContent component="main">{children}</MainContent> */}
      {/* TODO: move footer to component */}
      {/* <Box
        component="footer"
        sx={{
          background: "#fff4db",
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // fontSize: `var(--font-sm)`,
          height: "7vh",
          position: "fixed",
          width: "100%",
        }}
      >
        <Typography>{`Made with ${madeWithEmoji} by Kristi Kuna`}</Typography>
      </Box> */}
      <div>test</div>
    </>
  )
}

export default Layout
