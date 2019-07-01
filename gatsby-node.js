const path = require(`path`);
const locales = require("./src/constants/locales");

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  // console.log(page)
  return new Promise(resolve => {
    deletePage(page)
    Object.keys(locales).map(lang => {
      const localizedPath = locales[lang].default
        ? page.path
        : locales[lang].path + page.path
      console.log(lang)
      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale: lang
        }
      })
    })
    resolve()
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  
  const blogPost = path.resolve(`./src/templates/blogTemplate.js`)
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                title
                path
              }
            }
          }
        }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      Object.keys(locales).map(lang => {
        console.log(`${locales[lang].default}------${locales[lang].path + post.node.frontmatter.path}`)
        createPage({
          path: locales[lang].default ? post.node.frontmatter.path : locales[lang].path + post.node.frontmatter.path ,
          component: blogPost,
          context: {
            slug: post.node.frontmatter.path,
            locale: lang,
            previous,
            next,
          },
        })
      })
    
    })

    // Create blog post list pages
    const postsPerPage = 10;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `blog/${i + 1}`,
        component: path.resolve('./src/templates/blogListTemplate.js'),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1
        },
      });
    });
  }).catch(err=>console.log(err))
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    createNodeField({
      name: `slug`,
      node,
      value: node.frontmatter.path,
    })
  }
}