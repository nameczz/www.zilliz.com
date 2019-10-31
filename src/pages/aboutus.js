import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import AboutUs from "../blocks/AboutUs";

const SubNav = () => (
  <nav className="wrapper sub-nav">
    <h3>About Us</h3>
    <ul>
      <li>
        <a href="/#mission">Mission</a>
      </li>
      <li>
        <a href="/#history">历程</a>
      </li>
      <li>
        <a href="/#news">新闻</a>
        <a href="/#friends">合作伙伴</a>
      </li>
    </ul>
  </nav>
);

const pageAboutUs = ({ data, pageContext }) => {
  const { locale } = pageContext;
  const layout = data.allFile.edges[0].node.childLayoutJson.layout;
  const nav = {
    current: 'aboutus'
  }
  // console.log(`locale in index page is: ${locale}`)
  return (
    <Layout data={layout} locale={locale} nav={nav} subNav={<SubNav />}>
      <SEO title="关于我们" />
      <AboutUs />
    </Layout>
  );
};

export const Query = graphql`
  query QueryPageAboutus($locale: String) {
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

export default pageAboutUs;
