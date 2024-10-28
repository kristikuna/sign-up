import Home from "./pages/Home/Home"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"

import "./App.css"

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
  uri: "http://localhost:5000/graphql",
  // uri: "https://project-mgmt-backend-0gbi.onrender.com/graphql",
  cache,
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/projects/:id" element={<Project />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </ApolloProvider>
  )
}

export default App
