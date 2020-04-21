import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Samuel Renan Leonhardt</h1>
    <p>Bem Vindo ao meu universo</p>
    <p>É hora do pau</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Temos segunda página?</Link>
  </Layout>
)

export default IndexPage
