const path = require("path");
const ReadVersionJson = require("./walkFile");
const locales = require("./src/constants/locales");
const DOC_LANG_FOLDERS = ["doc_en", "doc_cn"];

// the version is same for different lang, so we only need one
const DOC_ROOT = "src/pages/doc_cn/versions";
const versionInfo = ReadVersionJson(DOC_ROOT);

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

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const docTemplate = path.resolve(`src/templates/docTemplate.js`);

  // isMenu outLink can be add when need to use
  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              id
              lang
            }
            fileAbsolutePath
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const defaultLang = Object.keys(locales).find(
      lang => locales[lang].default
    );
    const findVersion = str => {
      const regx = /versions\/([v\d\.]*)/;
      const match = str.match(regx);
      return match ? match[1] : "";
    };

    // get all version for version menu
    const versions = new Set();
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const fileAbsolutePath = node.fileAbsolutePath;
      const version = findVersion(fileAbsolutePath);

      // released: no -> not show , yes -> show
      console.log(version)
      console.log(versionInfo)
      if (versionInfo[version] && versionInfo[version].released === "yes") {
        versions.add(version);
      }
    });

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const fileAbsolutePath = node.fileAbsolutePath;
      let version = findVersion(fileAbsolutePath);

      const fileLang = DOC_LANG_FOLDERS.reduce((pre, cur) => {
        if (fileAbsolutePath.includes(cur)) {
          pre = cur.split("_")[1];
        }
        return pre;
      }, "");

      const localizedPath =
        fileLang === defaultLang
          ? `/docs/${version}/${node.frontmatter.id}`
          : `${fileLang}/docs/${version}/${node.frontmatter.id}`;

      // the newest doc version is master so we need to make route without version.
      // for easy link to the newest doc
      if (!version && fileAbsolutePath.includes("master")) {
        const masterPath =
          fileLang === defaultLang
            ? `/docs/${node.frontmatter.id}`
            : `${fileLang}/docs/${node.frontmatter.id}`;
        return createPage({
          path: masterPath,
          component: docTemplate,
          context: {
            locale: fileLang,
            version: versionInfo.master.version, // get master version
            versions: Array.from(versions),
            old: node.frontmatter.id,
          }, // additional data can be passed via context
        });
      }

      //  normal pages
      return createPage({
        path: localizedPath,
        component: docTemplate,
        context: {
          locale: fileLang,
          version,
          versions: Array.from(versions),
          old: node.frontmatter.id,
        }, // additional data can be passed via context
      });
    });
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

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions;

//   if (node.internal.type === `MarkdownRemark`) {
//     createNodeField({
//       name: `slug`,
//       node,
//       value: node.frontmatter.path,
//     });
//   }
// };
