import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import SubNav from "../blocks/SubNav";
import Bi from "../blocks/Bi";

const InfiniPage = ({ data, pageContext }) => {
  const { locale } = pageContext;
  const layout = data.allFile.edges[0].node.childLayoutJson.layout;
  const bi = data.allFile.edges[0].node.childLayoutJson.bi;

  console.log(`locale in index page is: ${locale}`, data, pageContext);
  const nav = {
    current: "index",
  };
  return (
    <Layout
      data={layout}
      locale={locale}
      nav={nav}
      pageContext={pageContext}
      wrapperClass={"wrapper-infini"}
      subNav={
        <SubNav data={layout.header} locale={locale} current="infini" />
      }
    >
      <SEO title="Data Analytics Engine" lang={locale} />
      <Bi data={bi} locale={locale} />
    </Layout>
  );
};

export const Query = graphql`
  query BiQuery($locale: String) {
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
            bi {
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
              }
            }
          }
        }
      }
    }
  }
`;

export default InfiniPage;
