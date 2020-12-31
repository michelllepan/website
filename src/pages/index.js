import React from "react"

import Layout from "../components/layout-2"
import Intro from "../components/intro"
import SEO from "../components/seo"
import Experience from "../components/experience"

const IndexPage = () => (
  // <Layout>
  //   <SEO title="Home" />
  //   <h1>Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //     <Image />
  //   </div>
  //   <Link to="/page-2/">Go to page 2</Link> <br />
  //   <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  // </Layout>
  <Layout>
    <SEO title="Michelle Pan" />
    <Intro />
    {/* <Experience /> */}
  </Layout>
)

export default IndexPage
