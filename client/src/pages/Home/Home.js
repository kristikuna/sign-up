import React from "react"

import DataTable from "components/DataTable/DataTable"
import Layout from "components/Layout/Layout"
import Spinner from "components/Spinner/Spinner"
import ThanksgivingCountdown from "components/Countdown/Countdown"

function Home() {
  return (
    <Layout>
      <Spinner />
      <ThanksgivingCountdown />
      <DataTable />
    </Layout>
  )
}

export default Home
