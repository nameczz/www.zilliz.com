import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import Infini from "../blocks/Infini";

const SubNav = () => (
  <nav className="wrapper sub-nav">
    <h3>INFINI ANALYTICS</h3>
    <ul>
      <li>
        <a href="/#features">特性</a>
      </li>
      <li>
        <a href="/#arch">架构与组件</a>
      </li>
      <li>
        <a href="/#solution">解决方案</a>
      </li>
    </ul>
  </nav>
);

const IndexPage = ({ data, pageContext }) => {
  const { locale } = pageContext;
  const layout = data.allFile.edges[0].node.childLayoutJson.layout;
  // console.log(`locale in index page is: ${locale}`)
  const nav = {
    current: "index",
  };
  return (
    <Layout data={layout} locale={locale} nav={nav} subNav={<SubNav />}>
      <SEO title="Home" />
      <Infini />
    </Layout>
  );
};

export const Query = graphql`
  query Query($locale: String) {
    allFile(
      filter: { name: { eq: $locale }, relativeDirectory: { in: ["layout"] } }
    ) {
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
`;

export default IndexPage;
