import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import AboutUs from "../blocks/AboutUs";

const AboutUsPage = ({ data, pageContext }) => {
  const { locale } = pageContext;
  const layout = data.allFile.edges[0].node.childLayoutJson.layout;
  const aboutus = data.allFile.edges[0].node.childLayoutJson.aboutus;
  const nav = {
    current: "aboutus",
  };
  return (
    <Layout
      data={layout}
      locale={locale}
      nav={nav}
      wrapperClass={"wrapper-about"}
      hasSubNav={false}
    >
      <SEO title="About us" lang={locale} />
      <AboutUs data={aboutus} />
    </Layout>
  );
};

export const Query = graphql`
  query AboutQuery($locale: String) {
    allFile(
      filter: { name: { eq: $locale }, relativeDirectory: { in: ["layout"] } }
    ) {
      edges {
        node {
          childLayoutJson {
            layout {
              header {
                overview
                analytics
                milvus
                product
                aboutus
                joinus
                doc
              }
              footer {
                contactButton
                contactLeading
                address
                phone
                email
                infiniAnalytics
                aboutZilliz
                news
                product
                company
                joinus
                culture
                socialCareer
                schoolCareer
              }
            }
            aboutus {
              mission {
                p
                h2
              }
              roadmap {
                p
                h2
              }
              joinus {
                p
                h2
                h3
                button
              }
            }
          }
        }
      }
    }
  }
`;

export default AboutUsPage;
