import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import AboutUs from "../blocks/AboutUs";

const SubNav = () => (
  <nav className="wrapper sub-nav">
    <h3>About Us</h3>
    <ul>
      <li>
        <a href="/aboutus#mission">Mission</a>
      </li>
      <li>
        <a href="/aboutus#history">历程</a>
      </li>
      <li>
        <a href="/aboutus#news">新闻</a>
        <a href="/aboutus#friends">合作伙伴</a>
      </li>
    </ul>
  </nav>
);

const pageAboutUs = ({ data, pageContext }) => {
  const { locale } = pageContext;
  const nav = {
    current: 'aboutus'
  }
  // console.log(`locale in index page is: ${locale}`)
  return (
    <Layout locale={locale} nav={nav} subNav={<SubNav />}>
      <SEO title="关于我们" />
      <AboutUs />
    </Layout>
  );
};


export default pageAboutUs;
