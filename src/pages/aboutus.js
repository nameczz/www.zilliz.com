import React from "react";
import Layout from "../components/layout";
import LocalizeLink from "../components/localizedLink";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import AboutUs from "../blocks/AboutUs";

const SubNav = ({ data, locale }) => {
  const preLink = "/aboutus";
  return (
    <nav className="wrapper sub-nav-wrapper">
      <div className="inner-container sub-nav">
        <h3>{data.aboutus}</h3>
        <ul>
          <li>
            <LocalizeLink locale={locale} to={`${preLink}/#mission`}>
              {data.mission}
            </LocalizeLink>
          </li>
          <li>
            <LocalizeLink locale={locale} to={`${preLink}/#roadmap`}>
              {data.roadmap}
            </LocalizeLink>
          </li>
          <li>
            <LocalizeLink locale={locale} to={`${preLink}/#opportunities`}>
              {data.chance}
            </LocalizeLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const AboutUsPage = ({ data, pageContext }) => {
  const { locale } = pageContext;
  const layout = data.allFile.edges[0].node.childLayoutJson.layout;
  const aboutus = data.allFile.edges[0].node.childLayoutJson.aboutus;
  console.log(`locale in index page is: ${locale}`, data, pageContext);
  const nav = {
    current: "aboutus",
  };
  return (
    <Layout
      data={layout}
      locale={locale}
      nav={nav}
      wrapperClass={"wrapper-about"}
      subNav={<SubNav data={layout.header} locale={locale} />}
    >
      <SEO title="About us" />
      <AboutUs data={aboutus} />
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
                joinus
                doc
                mission
                roadmap
                chance
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
            aboutus {
              mission {
                p
                h2
              }
              roadmap {
                p
                h2
              }
              joinus {
                p
                h2
                h3
                button
              }
            }
          }
        }
      }
    }
  }
`;

export default AboutUsPage;
