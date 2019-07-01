import React from "react";
import Layout from "../components/layout";
import { graphql } from 'gatsby'
import SEO from "../components/seo";
import CallToAction from '../blocks/CallToAction';

const IndexPage = ({data, pageContext}) => {
  const { locale } = pageContext;
  const layout = data.allFile.edges[0].node.childLayoutJson.layout;
  console.log(`locale in index page is: ${locale}`)
  return (
      <Layout data={ layout } locale = {locale}>
        <SEO title="Home" />
        <CallToAction />
      </Layout>
  )
}

export const Query = graphql`
  query Query($locale:String) {
  allFile(filter: {name: {eq: $locale}, relativeDirectory: {in: ["layout"]}}) {
    edges {
      node {
        childLayoutJson {
          layout {
            header {
              why_zilliz
              about_us
              aboutus_list
              career
              news
              product
              product_list
            }
            footer {
              product
              product_list
              company
              company_list
              contact
              contact_list
            }
          }
        }
      }
    }
  }
}

`

export default IndexPage
