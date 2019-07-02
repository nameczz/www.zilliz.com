import React from "react";
import bg from '../images/hero/blue.svg';
import {Link, graphql} from 'gatsby'

import Layout from "../components/layout";
import SEO from "../components/seo";

const Megawise = ({data, pageContext}) => {
  const { locale } = pageContext;
  const layout = data.allFile.edges[0].node.childLayoutJson.layout;

  return (
      <Layout data={layout} locale={locale}>
        <SEO title="Megawise" />
        <section className="fdb-block fdb-viewport bg-dark" style={{ backgroundImage: `url(${bg})` }}>
          <div className="container justify-content-center align-items-center d-flex">
            <div className="row justify-content-center text-center">
              <div className="col-12 col-md-8">
                <h1>Megawise</h1>
                <p className="lead">OmniSci has redefined the limits of speed and scale in big data querying and visualization</p>
                <p className="mt-5"><Link to="/megawise" className="btn btn-primary">Learn More</Link></p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
  )
}

export const QueryMegawise = graphql`
  query QueryMegawise($locale:String) {
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
              blog
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
export default Megawise
