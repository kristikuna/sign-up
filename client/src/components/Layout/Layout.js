import Header from "components/Header/Header"
import Footer from "components/Footer/Footer"
import { Box } from "@mui/material"
import { styled } from "@mui/system"

const MainContent = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: "0rem 1rem 7rem",

  [theme.breakpoints.up("md")]: {
    padding: "0 7rem 7rem",
  },
}))

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
