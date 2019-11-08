import React from "react";
import Layout from "../components/docLayout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import "./docTemplate.scss";

export default function Template({
  data,
  pageContext, // this prop will be injected by the GraphQL query below.
}) {
  console.log(data);
  const { locale, menuList } = pageContext;
  const layout = data.allFile.edges[0].node.childLayoutJson.layout;
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  const nav = {
    current: "index",
  };
  console.log(menuList);
  return (
    <Layout
      data={layout}
      locale={locale}
      nav={nav}
      pageContext={pageContext}
      menuList={menuList}
      id={frontmatter.id}
    >
      <SEO title="ZILLIZ Analytics" lang={locale} />
      <div className="doc-post-container">
        <div className="doc-post">
          {/* <h1>{frontmatter.title}</h1> */}
          <div
            className="doc-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($locale: String, $old: String) {
    markdownRemark(frontmatter: { id: { eq: $old }, lang: { eq: $locale } }) {
      html
      frontmatter {
        id
        title
      }
    }
    allFile(
      filter: { name: { eq: $locale }, relativeDirectory: { in: ["layout"] } }
    ) {
      edges {
        node {
          childLayoutJson {
            layout {
              header {
                product
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
