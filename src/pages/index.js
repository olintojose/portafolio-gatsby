import React from "react"
import Layout from "../components/layout"
import ImageWall from "../components/ImageWall"

import SEO from "../components/seo.js"


const IndexPage = () => {
 

  return (
    <Layout>
      <ImageWall />
      <SEO title="Home" />
  
    </Layout>
  )
}

export default IndexPage
