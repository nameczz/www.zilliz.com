import React from 'react'
import Layout from "../components/layout";
import SEO from '../components/seo';

const Blog = props => {
  return (
    <Layout>
      <SEO title='blog' />
      <div>this is blog page</div>
    </Layout>
  )
}

export default Blog