/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from '../blocks/Header';

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
    <>
      <Header />
      <div>
        <main>{children}</main>
        <footer className="fdb-block footer-small bg-dark fp-active" data-block-type="footers" data-id="9">
          <div className="container">
            <div className="row text-center align-items-center">
              <div className="col">
                <ul className="nav justify-content-center">
                  <li className="nav-item">
                    <a className="nav-link active" href="https://www.froala.com">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://www.froala.com">Why Zilliz</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://www.froala.com">Milvus</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://www.froala.com">MegaWise</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://www.froala.com">Join US</a>
                  </li>
                </ul>
                © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
