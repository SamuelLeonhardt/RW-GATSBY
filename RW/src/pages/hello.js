import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="Page Hello" />
    <h1>Claro que sim!</h1>
    <p>Hora do Show</p> 
    <Link to="/">Home?</Link>
  </Layout>
)

export default ThirdPage
