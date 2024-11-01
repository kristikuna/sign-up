import Home from "./pages/Home/Home"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import { ThemeProvider } from "@mui/material/styles"
import theme from "theme"
import "./App.css"
import Detail from "./pages/Detail/Detail"

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        signups: {
          merge(existing, incoming) {
            return incoming
          },
        },
      },
    },
  },
})

const client = new ApolloClient({
  // uri: "http://localhost:5000/graphql",
  uri: "https://sign-up-backend.onrender.com/graphql",
  cache,
})

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
