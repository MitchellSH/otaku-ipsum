import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Generate from "../components/generate"

const IndexPage = () => (
  <Layout>
    <SEO title="Otaku Ipsum" keywords={[`otaku`, `lorum ipsum`, `generator`]} />
    <Generate />
  </Layout>
)

export default IndexPage
