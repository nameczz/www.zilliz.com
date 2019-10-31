import React from "react";
import Layout from "../components/layout";
import LocalizeLink from "../components/localizedLink";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import AboutUs from "../blocks/AboutUs";

const SubNav = ({ data, locale }) => (
  <nav className="wrapper sub-nav">
    <h3>{data.infiniAnalytics}</h3>
    <ul>
      <li>
        <LocalizeLink locale={locale} to="/#features">
          {data.feature}
        </LocalizeLink>
      </li>
      <li>
        <LocalizeLink locale={locale} to="/#arch">
          {data.arch}
        </LocalizeLink>
      </li>
      <li>
        <LocalizeLink locale={locale} to="/#solution">
          {data.solution}
        </LocalizeLink>
      </li>
    </ul>
  </nav>
);

const AboutUsPage = ({ data, pageContext }) => {
  const { locale } = pageContext;
  const layout = data.allFile.edges[0].node.childLayoutJson.layout;
  console.log(`locale in index page is: ${locale}`, data, pageContext);
  const nav = {
    current: "aboutus",
  };
  return (
    <Layout
      data={layout}
      locale={locale}
      nav={nav}
      subNav={<SubNav data={layout.header} locale={locale} />}
    >
      <SEO title="首页" />
      <AboutUs  />
    </Layout>
  );
};

export const Query = graphql`
  query AboutQuery($locale: String) {
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
                leading
                button
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
                el3_3
              }
            }
          }
        }
      }
    }
  }
`;

export default AboutUsPage;
