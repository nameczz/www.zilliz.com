import React from "react";
import bg from '../images/hero/blue.svg';
import {Link } from 'gatsby'

import Layout from "../components/layout";
import SEO from "../components/seo";

const Megawise = props => {
  return (
      <Layout>
        <SEO title="Megawise" />
        <section className="fdb-block fdb-viewport bg-dark" style={{ backgroundImage: `url(${bg})` }}>
          <div className="container justify-content-center align-items-center d-flex">
            <div className="row justify-content-center text-center">
              <div className="col-12 col-md-8">
                <h1>Megawise</h1>
                <p className="lead">OmniSci has redefined the limits of speed and scale in big data querying and visualization</p>
                <p className="mt-5"><Link to="/megawise" className="btn btn-primary">Learn More</Link></p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
  )
}

export default Megawise
