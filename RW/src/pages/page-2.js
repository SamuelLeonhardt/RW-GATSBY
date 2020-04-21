import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Claro que sim!</h1>
    <p>Hora do Show</p>
    
    <Link to="/hello/">Temos uma terceira página?</Link><br/>
    <Link to="/">Home?</Link>
  </Layout>
)

export default SecondPage
