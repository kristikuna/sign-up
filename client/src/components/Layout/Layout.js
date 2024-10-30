import React from "react"
import Header from "components/Header/Header"
import Footer from "components/Footer/Footer"
import { Box } from "@mui/material"
import { styled } from "@mui/system"

const MainContent = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  // padding: "0 5rem 7rem 5rem",
  padding: "1rem",
})

function Layout({ children }) {
  return (
    <>
      <Header siteTitle={`Hey, Fam 👋`} />
      <MainContent component="main">{children}</MainContent>
      <Footer />
    </>
  )
}

export default Layout
