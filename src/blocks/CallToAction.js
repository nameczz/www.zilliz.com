import React from "react"
import { Link } from 'gatsby'
import bg from '../images/hero/blue.svg';
import Carousel from 'rmc-m-carousel'

class CallToAction extends React.Component {

  componentWillUnmount() {
    var id = window.setTimeout(function () { }, 0);
    while (id--) {
      window.clearTimeout(id); 
    }
  }
  render() {
    return (
      <div>
        <Carousel>
          <section className="fdb-block bg-dark fdb-viewport" style={{ backgroundImage: `url(${bg})` }}>
            <div className="container justify-content-center align-items-center d-flex">
              <div className="row justify-content-center text-center">
                <div className="col-12 col-md-8">
                  <h1>Zilliz</h1>
                  <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <p className="mt-5"><Link to='/' className="btn btn-primary">Learn More</Link></p>
                </div>
              </div>
            </div>
          </section>
          <section className="fdb-block fdb-viewport bg-dark" style={{ backgroundImage: `url(${bg})` }}>
            <div className="container justify-content-center align-items-center d-flex">
              <div className="row justify-content-center text-center">
                <div className="col-12 col-md-8">
                  <h1>Milvus</h1>
                  <p className="lead">A Distributed High Performance Vector Database System</p>
                  <p className="mt-5"><a href='https://www.milvus.com/docs/en/QuickStart/' className="btn btn-primary">Get Started</a></p>

                </div>
              </div>
            </div>
          </section>
          <section className="fdb-block fdb-viewport bg-dark" style={{ backgroundImage: `url(${bg})` }}>
            <div className="container justify-content-center align-items-center d-flex">
              <div className="row justify-content-center text-center">
                <div className="col-12 col-md-8">
                  <h1>Megawise</h1>
                  <p className="lead">OmniSci has redefined the limits of speed and scale in big data querying and visualization</p>
                  <p className="mt-5"><Link to='/megawise' className="btn btn-primary">Learn More</Link></p>
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
      </div>
    )
  }
}

export default CallToAction;
