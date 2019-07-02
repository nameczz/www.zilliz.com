import React from "react";
import { graphql } from "gatsby";
import LocalizeLink from '../components/localizedLink'
import Layout from "../components/layout";
import SEO from "../components/seo";
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  pageContext
}) {
  // console.log(data);
  const { currentPage, numPages, locale } = pageContext;
  const layout = data.allFile.edges[0].node.childLayoutJson.layout;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/blog/' : (currentPage - 1).toString();
  const nextPage = `/blog/${(currentPage + 1).toString()}`;
  const { edges } = data.allMarkdownRemark; // data.markdownRemark holds our post data
  return (
    <Layout data={layout} locale={locale} >
      <SEO title="Blog" />
      <div className="bloglist container" style={{ height: '80%', 'paddingTop': '3vh', 'paddingBottom': '5vh', 'minHeight': '70vh' }}>
        <h3 className="pb-4 mb-4 border-bottom">Latest Blogs</h3>
        {
          edges.map(edge => {
            const { node } = edge;
            if(node.fileAbsolutePath.indexOf(`${locale}.md`) === -1 ) return '';
            return (
              <div key={node.id} className="col-md-10" style={{ 'paddingLeft': 0 }}>
                <div className="row no-gutters border overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">{node.frontmatter.author}</strong>
                    <h3 className="mb-0"><LocalizeLink locale={locale} to={node.frontmatter.path}>{node.frontmatter.title}</LocalizeLink></h3>
                    <div className="mb-1 text-muted">{node.frontmatter.date}</div>
                    <p className="card-text mb-auto">{node.excerpt}</p>
                    <LocalizeLink locale={locale} className="stretched-link" to={node.frontmatter.path}>Continue reading</LocalizeLink>
                  </div>
                </div>
              </div>
            )
          })
        }
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            listStyle: 'none',
            padding: 0,
          }}
        >
          {!isFirst && (
            <LocalizeLink locale={locale} to={prevPage} rel="prev">
              ← Previous Page
            </LocalizeLink>
          )}
          {(!isLast && edges.length === 10) && (
            <LocalizeLink locale={locale} to={nextPage} rel="next">
              Next Page →
            </LocalizeLink>
          )}
        </ul>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!, $locale: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            path
            author
            title
          }
          fileAbsolutePath
        }
      }
    },
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