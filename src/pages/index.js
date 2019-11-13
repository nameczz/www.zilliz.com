import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import Infini from "../blocks/Infini";
import SubNav from '../blocks/SubNav';

const IndexPage = ({ data, pageContext }) => {
  const { locale } = pageContext;
  const layout = data.allFile.edges[0].node.childLayoutJson.layout;
  const infini = data.allFile.edges[0].node.childLayoutJson.infini;
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
      subNav={<SubNav data={layout.header} locale={locale} current="overview" />}
    >
      <SEO title="ZILLIZ Analytics" lang={locale} />
      <Infini data={infini} locale={locale} />
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
                overview
                analytics
                product
                milvus
                aboutus
                feature
                arch
                joinus
                solution
                infiniAnalytics
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
            infini {
              landing {
                h3
                h4
                leading
                button
                buttonMega
              }
              features {
                h2
                h3
                f1Title
                f1P
                f2Title
                f2P
                f3Title
                f3P
              }
              arch {
                h3
              }
              solution {
                h3
                leading
                tab1
                tab2
                question
                solution
                effect
                q1
                s1
                detail
                el1_1
                el1_2
                el1_3
                el1_4
                el1_5
                q2
                s2
                el2_1
                el2_2
                el2_3
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
