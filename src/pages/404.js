import React from "react"
import { graphql } from 'gatsby';
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({data, pageContext}) => {
  const { locale } = pageContext;
  const layout = data.allFile.edges[0].node.childLayoutJson.layout;

  return (
    <Layout data={layout} locale={locale}>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export const Query404 = graphql`
  query Query404($locale:String) {
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
export default NotFoundPage
