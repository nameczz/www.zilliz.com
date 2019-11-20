import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import SubNav from "../blocks/SubNav";
import Megawise from "../blocks/Megawise";

const MegawisePage = ({ data, pageContext }) => {
  const { locale } = pageContext;
  const layout = data.allFile.edges[0].node.childLayoutJson.layout;
  const megawise = data.allFile.edges[0].node.childLayoutJson.megawise;

  // console.log(`locale in index page is: ${locale}`, data, pageContext);
  const nav = {
    current: "index",
  };
  return (
    <Layout
      data={layout}
      locale={locale}
      nav={nav}
      pageContext={pageContext}
      wrapperClass={"wrapper-megawise"}
      subNav={
        <SubNav data={layout.header} locale={locale} current="megawise" />
      }
    >
      <SEO title="Data Analytics Engine" lang={locale} />
      <Megawise data={megawise} locale={locale} />
    </Layout>
  );
};

export const Query = graphql`
  query MegaQuery($locale: String) {
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
            megawise {
              landing {
                h3
                h4
                p
                readMore
              }
              features {
                h3
                f1 {
                  h4
                  p
                }
                f2 {
                  h4
                  p
                }
                f3 {
                  h4
                  p
                }
                f4 {
                  h4
                  p
                }
                learnMore
                viewDoc
                comparison
              }
            }
          }
        }
      }
    }
  }
`;

export default MegawisePage;
