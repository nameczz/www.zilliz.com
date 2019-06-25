import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import CallToAction from '../blocks/CallToAction';

const IndexPage = props => {
  return (
      <Layout>
        <SEO title="Home" />
        <CallToAction />
      </Layout>
  )
}

export default IndexPage
