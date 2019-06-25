import React from "react"
import { Link } from 'gatsby'
import logo from "../images/logo.svg" // Tell Webpack this JS file uses this image

const Header = () => {
  return (
    <header className="bg-dark">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="https://www.zilliz.com">
            <img src={logo} height="30" alt="logo" />
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav13" aria-controls="navbarNav13" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav13">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="https://www.zilliz.com">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/why-zilliz">Why Zilliz</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/milvus">Milvus</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.zilliz.com">MegaWise</a>
              </li>
            </ul>

            <ul className="navbar-nav justify-content-end ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="https://www.zilliz.com">Join us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.zilliz.com">Contact</a>
              </li>

            </ul>

            {/* <a className="btn btn-light ml-md-3" href="https://www.zilliz.com">Button</a> */}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;
