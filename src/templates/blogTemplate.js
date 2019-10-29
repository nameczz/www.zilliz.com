import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import LocalizedLink from "../components/localizedLink";
export default function Template(props) {

  // console.log(props);
  const { data, pageContext } = props;

  const { locale } = pageContext;
  const layout = data.allFile.edges[0].node.childLayoutJson.layout;

  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout data={layout} locale={locale}>
      <SEO title={frontmatter.title} />
      <div className="blog-post-container container" style={{ 'paddingTop': '3vh', 'paddingBottom': '5vh' }}>
        <LocalizedLink locale={locale} to="/blog">Return to blogs</LocalizedLink>
        <div className="blog-post">
          <h2>{frontmatter.title}</h2>
          <p className="blog-post-meta">{frontmatter.date}</p>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <LocalizedLink locale={locale} to="/blog">Return to blogs</LocalizedLink>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $locale:String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
    allFile(filter: {relativeDirectory: {eq: "layout"}, name: {eq: $locale}}) {
          edges {
            node {
              childLayoutJson {
                layout {
                  header {
                    why_zilliz
                    product_list
                    product
                    news
                    blog
                    career
                    aboutus_list
                    about_us
                  }
                  footer {
                    company
                    company_list
                    contact
                    contact_list
                    product
                    product_list
                  }
                }
              }
            }
          }
        }
  }
  

`