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
            headings {
              value
              depth
            }
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

    // get all version and header(h1,h2)
    const versions = new Set();
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const fileAbsolutePath = node.fileAbsolutePath;
      const version = findVersion(fileAbsolutePath);

      // released: no -> not show , yes -> show
      if (versionInfo[version] && versionInfo[version].released === "yes") {
        versions.add(version);
      }
      console.log(versions);
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
          headings: node.headings.filter(v => v.depth < 4 && v.depth > 1),
        }, // additional data can be passed via context
      });
    });
  });
};
