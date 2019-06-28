module.exports = {
  siteMetadata: {
    title: `Zilliz.com`,
    description: `Zilliz专注于研发基于异构众核加速的新一代数据库系统。公司核心产品MegaWise数据库和传统数据库相比，查询性能提升100倍以上，硬件和运维成本降低10倍。同时，Zilliz提供使用异构众核加速数据ETL，到加速数据仓库，再到加速AI模型训练，最后到加速数据可视化的端到端数据智能整体解决方案。Zilliz的产品和解决方案在金融、电信、医疗、智慧城市和电子商务等领域有着广泛应用。`,
    author: `@zilliz.com`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options:{
        name: `blogs`,
        path: `${__dirname}/src/pages/blogs`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/blogs/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          }
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-142992812-2",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
