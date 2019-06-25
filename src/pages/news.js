import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Intro = () => {
    return (
        <section class="fdb-block">
            <div class="container">
                <div class="row">
                <div class="col text-left">
                    <h2>ZILLIZ News</h2>
                </div>
                </div>
            </div>
        </section>
    )
}

const AboutUs = props => {
  return (
      <Layout>
        <SEO title="Latest News" />
        <Intro />
      </Layout>
  )
}

export default AboutUs
