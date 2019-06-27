import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { nodes } = data.allMarkdownRemark; // data.markdownRemark holds our post data
  return (
    <Layout>
    <SEO title="Blog" />
    <div className="bloglist container" style={{height: '80%', 'paddingTop': '3vh', 'paddingBottom': '5vh', 'minHeight': '70vh'}}>
      <h3 className="pb-4 mb-4 border-bottom">Latest Blogs</h3>
        {
          nodes.map(node => {
            return (
              <div key={node.id} className="col-md-10" style={{'paddingLeft': 0}}>
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">{node.frontmatter.author}</strong>
                    <h3 className="mb-0"><Link to={node.frontmatter.path}>{node.frontmatter.title}</Link></h3>
                    <div className="mb-1 text-muted">{node.frontmatter.date}</div>
                    <p className="card-text mb-auto">{node.excerpt}</p>
                    <Link className="stretched-link" to={node.frontmatter.path}>Continue reading</Link>
                  </div>
                </div>
              </div>
            )
          })
        }
    </div>
    </Layout>
  )
}

export const pageQuery = graphql`
query{
  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, limit: 1000) {
    nodes {
      id
      excerpt
      frontmatter {
        author
        title
        path
        date
      }
    }
  }
}
`