import React from "react"
import { Link } from 'gatsby'
import logo from "../images/icons/coffee.svg" // Tell Webpack this JS file uses this image
import bg from '../images/hero/purple.svg';
import Carousel from 'rmc-m-carousel'

const CallToAction = () => {
  return (
    <div>
      <Carousel>
        <section className="fdb-block fdb-viewport bg-dark" style={{ backgroundImage: `url(${bg})` }}>
          <div className="container justify-content-center align-items-center d-flex">
            <div className="row justify-content-center text-center">
              <div className="col-12 col-md-8">
                <img alt="logo" className="fdb-icon" src={logo} />
                <h1>Froala Design 1111111</h1>
                <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <p className="mt-5"><a href="https://www.zilliz.com" className="btn btn-dark">Call to Action</a></p>
              </div>
            </div>
          </div>
        </section>
        <section className="fdb-block fdb-viewport bg-dark" style={{ backgroundImage: `url(${bg})` }}>
          <div className="container justify-content-center align-items-center d-flex">
            <div className="row justify-content-center text-center">
              <div className="col-12 col-md-8">
                <img alt="logo" className="fdb-icon" src={logo} />
                <h1>Froala Design 2222222</h1>
                <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <p className="mt-5"><a href="https://www.zilliz.com" className="btn btn-dark">Call to Action</a></p>
              </div>
            </div>
          </div>
        </section>
        <section className="fdb-block fdb-viewport bg-dark" style={{ backgroundImage: `url(${bg})` }}>
          <div className="container justify-content-center align-items-center d-flex">
            <div className="row justify-content-center text-center">
              <div className="col-12 col-md-8">
                <img alt="logo" className="fdb-icon" src={logo} />
                <h1>Froala Design 333333</h1>
                <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <p className="mt-5"><a href="https://www.zilliz.com" className="btn btn-dark">Call to Action</a></p>
              </div>
            </div>
          </div>
        </section>
      </Carousel>
      <section className="fdb-block" data-block-type="contents" data-id="20">
        <div className="container">
          <div className="row justify-content-center">
            <div style={{ width: '100%', marginBottom: '2rem' }}>
              <h2 style={{ width: '60%', marginLeft: '20%', textAlign: 'center' }}>Find out about the world's fastest stream and hyperbatch processing engine.</h2></div>
            <div><Link className="btn btn-primary" to="/why-zilliz">Learn More</Link></div>
          </div>
        </div>
      </section>
      <section className="fdb-block bg-gray" data-block-type="contacts" data-id="23" draggable="true">
        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-12 col-md-8 col-lg-7" style={{ zIndex: 1000 }}><p className="h2">support@zilliz.com</p>
              <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="fdb-block footer-large bg-dark fp-active" data-block-type="footers" data-id="22">
        <div className="container">
          <div className="row align-items-top text-center text-md-left">
            <div className="col-12 col-sm-6 col-md-4" style={{ zIndex: 1000 }}><h3><strong>Country A</strong></h3><p>Street Address 52<br />Contact Name</p><p>+44 827 312 5002</p><p><a href="https://www.froala.com">countrya@amazing.com</a></p></div>
            <div className="col-12 col-sm-6 col-md-4 mt-4 mt-sm-0" style={{ zIndex: 1000 }}><h3><strong>Country B</strong></h3><p>Street Address 100<br />
              Contact Name</p><p>+13 827 312 5002</p><p><a href="https://www.froala.com">countryb@amazing.com</a></p></div>
            <div className="col-12 col-md-4 mt-5 mt-md-0 text-md-left" style={{ zIndex: 1000 }}><h3><strong>About Us</strong></h3><p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default CallToAction;
