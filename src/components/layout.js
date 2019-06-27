import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import Header from '../blocks/Header';
import Footer from '../blocks/Footer';

import "./layout.css"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  return (
    <div onClick={()=>{
      console.log('clicked')
      if(document && document.querySelector('.md-nav-contaienr')) {
        document.querySelector('.md-nav-contaienr').classList.add('ele-hide')
      }
      return false;
    }}>
      <Header />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
