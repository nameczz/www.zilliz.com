const path = require(`path`);
const locales = require("./src/constants/locales");

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  return new Promise(resolve => {
    deletePage(page);
    Object.keys(locales).map(lang => {
      const localizedPath = locales[lang].default
        ? page.path
        : locales[lang].path + page.path;
      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale: lang,
        },
      });
    });
    resolve();
  });
};

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions;

//   const blogPost = path.resolve(`./src/templates/blogTemplate.js`);
//   const blogList = path.resolve("./src/templates/blogListTemplate.js");
//   return graphql(
//     `
//       {
//         allMarkdownRemark(
//           sort: { fields: [frontmatter___date], order: DESC }
//           limit: 1000
//         ) {
//           edges {
//             node {
//               frontmatter {
//                 title
//                 path
//               }
//               fileAbsolutePath
//             }
//           }
//         }
//       }
//     `
//   ).then(result => {
//     // console.log(`--------result is --------------: ${result}`);
//     if (result.errors) {
//       throw result.errors;
//     }

//     // Create blog posts pages.
//     const posts = result.data.allMarkdownRemark.edges;
//     const posts_en = [];
//     const posts_cn = [];

//     // to do : build a better function to support all language without hardcode
//     posts.forEach((post, index) => {
//       // console.log(post.node.fileAbsolutePath);
//       const absFilePath = post.node.fileAbsolutePath;
//       const type = absFilePath.substring(absFilePath.length - 5);
//       type === "cn.md" ? posts_cn.push(post) : posts_en.push(post);
//     });
//     // console.log('___________________________________________________', `posts_en.length:${posts_en.length}, posts_cn.length: ${posts_cn.length}`)

//     posts_en.forEach((post, index) => {
//       const previous =
//         index === posts.length - 1 ? null : posts[index + 1].node;
//       const next = index === 0 ? null : posts[index - 1].node;
//       createPage({
//         path: post.node.frontmatter.path,
//         component: blogPost,
//         context: {
//           slug: post.node.frontmatter.path,
//           locale: "en",
//           previous,
//           next,
//         },
//       });
//     });
//     // console.log('___________________________________________________', 'en blog page done')
//     posts_cn.forEach((post, index) => {
//       const previous =
//         index === posts.length - 1 ? null : posts[index + 1].node;
//       const next = index === 0 ? null : posts[index - 1].node;
//       createPage({
//         path: "cn" + post.node.frontmatter.path,
//         component: blogPost,
//         context: {
//           slug: post.node.frontmatter.path,
//           locale: "cn",
//           previous,
//           next,
//         },
//       });
//     });
//     // console.log('___________________________________________________', 'cn blog page done')

//     const postsPerPage = 10;
//     const cnNumPages = Math.ceil(posts_cn.length / postsPerPage);
//     const enNumPages = Math.ceil(posts_en.length / postsPerPage);

//     Array.from({ length: cnNumPages }).forEach((_, i) => {
//       createPage({
//         path: i === 0 ? `cn/blog` : `cn/blog/${i + 1}`,
//         component: blogList,
//         context: {
//           locale: "cn",
//           limit: postsPerPage,
//           skip: i * postsPerPage,
//           cnNumPages,
//           currentPage: i + 1,
//         },
//       });
//     });
//     // console.log('___________________________________________________', 'cn bloglist page done')

//     Array.from({ length: enNumPages }).forEach((_, i) => {
//       createPage({
//         path: i === 0 ? `/blog` : `/blog/${i + 1}`,
//         component: blogList,
//         context: {
//           locale: "en",
//           limit: postsPerPage,
//           skip: i * postsPerPage,
//           enNumPages,
//           currentPage: i + 1,
//         },
//       });
//     });
//     // console.log('___________________________________________________', 'en bloglist page done')

//     //   Array.from({ length: numPages }).forEach((_, i) => {
//     //     Object.keys(locales).map(lang => {
//     //       let path = locales[lang].default ? '' : `/${lang}`
//     //       createPage({
//     //         path:  i === 0 ? `${path}/blog` : `${path}blog/${i + 1}`,
//     //         component: blogList,
//     //         context: {
//     //           locale: lang,
//     //           limit: postsPerPage,
//     //           skip: i * postsPerPage,
//     //           numPages,
//     //           currentPage: i + 1
//     //         },
//     //       })
//     //     })
//     //   });
//     // }).catch(err=>console.log(err))
//   });
// };

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    createNodeField({
      name: `slug`,
      node,
      value: node.frontmatter.path,
    });
  }
};
