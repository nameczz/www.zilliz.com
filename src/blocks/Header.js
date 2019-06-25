import React from "react"
import { Link } from 'gatsby'
import logo from "../images/logo.svg" // Tell Webpack this JS file uses this image
import './Header.scss'

const Header = () => {
  let timeOut = undefined;
  const handleDropDown = event =>{
    const content = event.currentTarget.lastChild;
    event.type === 'mouseenter'
      ? content.className = "list-show"
      : timeOut = setTimeout(() => { content.className = "list-hide" },100) ;
      return false;
  }
  const handleSublist = event => {
    if(timeOut) clearTimeout(timeOut);
    const {currentTarget, type} = event;
    type === 'mouseenter'
      ? currentTarget.className = 'list-show'
      : currentTarget.className = 'list-hide'
  }
  return (
    <header className="bg-dark">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="https://www.zilliz.com" style={{ padding: '0 1rem', overflow:'visible'}}>
            <img src={logo} height="40" alt="logo" />
          </a>
          <div className="collapse navbar-collapse" id="navbarNav13">
            <ul className="navbar-nav mr-auto">
              <li className='drop-down'  onMouseEnter={ handleDropDown } onMouseLeave={handleDropDown}>
                <a className="nav-link" href="">Products <span className="sr-only">(current)</span></a>
                <ul className='list-hide' onMouseEnter={ handleSublist } onMouseLeave={handleSublist}>
                  <li><Link to="">asdasd</Link></li>
                  <li><Link to="">asdasd</Link></li>
                  <li><Link to="">asdasd</Link></li>
                </ul>
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
