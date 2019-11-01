import React from "react";
import Layout from "../components/layout";
import LocalizeLink from "../components/localizedLink";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import AboutUs from "../blocks/AboutUs";

const SubNav = ({ data, locale }) => {
  const preLink = "/aboutus";
  return (
    <nav className="wrapper sub-nav">
      <h3>{data.aboutus}</h3>
      <ul>
        <li>
          <LocalizeLink locale={locale} to={`${preLink}/#mission`}>
            {data.hope}
          </LocalizeLink>
        </li>
        <li>
          <LocalizeLink locale={locale} to={`${preLink}/#history`}>
            {data.history}
          </LocalizeLink>
        </li>
        <li>
          <LocalizeLink locale={locale} to={`${preLink}/#joinus`}>
            {data.chance}
          </LocalizeLink>
        </li>
      </ul>
    </nav>
  );
}

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
      wrapperClass={'wrapper-about'}
      subNav={<SubNav data={layout.header} locale={locale} />}
    >
      <SEO title="首页" />
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
                hope 
                history
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
                h3
              }
              history{
                p
                h2
                h3
              }
              joinus{
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
