import { useQuery } from "@apollo/client"
import { Link, useParams } from "react-router-dom"
import { Box, Typography, Paper } from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { styled } from "@mui/system"
import Layout from "components/Layout/Layout"
import Form from "components/EditSignUpForm/Form"
import Spinner from "components/Spinner/Spinner"
import { GET_SIGN_UP } from "../../queries/signUpsQuery"

const DetailBox = styled(Paper)({
  background: "#fff4db",
  padding: 2,
})

const DetailTemplate = () => {
  const { id } = useParams()
  const { loading, error, data } = useQuery(GET_SIGN_UP, { variables: { id } })

  if (loading) return <Spinner />
  if (error) return <p>Something Went Wrong</p>

  return (
    <Layout>
      <DetailBox elevation={0} sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            padding: ".5rem",
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontSize: "2rem", fontWeight: "bold" }}
            color="#333"
          >
            Edit Sign-Up
          </Typography>
          <Link to="/">
            <ArrowBackIcon color="warning" />
          </Link>
        </Box>
        <Form signUp={data?.signUp} />
      </DetailBox>
    </Layout>
  )
}

export default DetailTemplate
