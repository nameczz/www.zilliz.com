import React from "react"
import { Link } from 'gatsby'
import logo from "../images/logo.svg" // Tell Webpack this JS file uses this image
import './Header.scss'

const Header = () => {
  let timeOut = undefined;
  const handleDropDown = event => {
    const content = event.currentTarget.lastChild;
    event.type === 'mouseenter'
      ? content.classList.add('list-show')
      : timeOut = setTimeout(() => { content.classList.remove('list-show') }, 100);
    return false;
  }
  const handleSublist = event => {
    if (timeOut) clearTimeout(timeOut);
    const { currentTarget, type } = event;
    type === 'mouseenter'
      ? console.log('')
      : currentTarget.classList.remove('list-hide')
  }
  return (
    <header className="bg-dark">
      <div className="container">
        <nav className="navbar navbar-expand-lg" style={{padding: 0}}>
          <Link to="/" className="navbar-brand">
            <img src={logo} height="50" alt="logo" style={{overflow: 'visible '}} />
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav13">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/why-zilliz">Why Zilliz</Link>
              </li>
              <li className='nav-item drop-down'  onMouseEnter={handleDropDown} onMouseLeave={handleDropDown}>
                <a className='nav-link' href="javascript:return false;">Product
                    <svg t="1561497657372" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3057" width="16" height="16"><path d="M517.61 688.417c9.004 0.189 18.004-3.11 24.837-9.945l279.402-279.402c13.197-13.197 13.243-34.926-0.141-48.311-13.479-13.479-35.02-13.434-48.311-0.141l-255.741 255.741-255.741-255.741c-13.293-13.293-34.832-13.34-48.311 0.141-13.385 13.385-13.34 35.113-0.141 48.311l279.402 279.402c6.833 6.833 15.838 10.181 24.837 9.945z" p-id="3058" fill="#ffffff"></path></svg>
                    {/* <svg t="1561497913193" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3417" width="16" height="16"><path d="M506.39 335.583c-9.004-0.189-18.004 3.11-24.837 9.945l-279.402 279.402c-13.197 13.197-13.243 34.926 0.141 48.311 13.479 13.479 35.020 13.434 48.311 0.141l255.741-255.741 255.741 255.741c13.293 13.293 34.832 13.34 48.311-0.141 13.385-13.385 13.34-35.113 0.141-48.311l-279.402-279.402c-6.833-6.833-15.838-10.181-24.837-9.945z" p-id="3418" fill="#ffffff"></path></svg> */}
                </a>
                <ul className='list' onMouseEnter={handleSublist} onMouseLeave={handleSublist}>
                  <li className='product'><Link className='nav-link' to='/milvus'>Milvus</Link></li>
                  <li className='product'><Link className='nav-link' to='/MegaWise'>MegaWise</Link></li>
                </ul>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/milvus">Milvus</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/megawise">MegaWise</a>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/news">News</Link>
              </li>
            </ul>

            <ul className="navbar-nav justify-content-end ml-auto">
              {/* <li className="nav-item">
                <a className="nav-link" href="https://www.zilliz.com">About us</a>
              </li> */}
              <li className='nav-item drop-down'  onMouseEnter={handleDropDown} onMouseLeave={handleDropDown}>
                <a className='nav-link' href="javascript:return false;">Our Culture
                    <svg t="1561497657372" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3057" width="16" height="16"><path d="M517.61 688.417c9.004 0.189 18.004-3.11 24.837-9.945l279.402-279.402c13.197-13.197 13.243-34.926-0.141-48.311-13.479-13.479-35.02-13.434-48.311-0.141l-255.741 255.741-255.741-255.741c-13.293-13.293-34.832-13.34-48.311 0.141-13.385 13.385-13.34 35.113-0.141 48.311l279.402 279.402c6.833 6.833 15.838 10.181 24.837 9.945z" p-id="3058" fill="#ffffff"></path></svg>
                    {/* <svg t="1561497913193" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3417" width="16" height="16"><path d="M506.39 335.583c-9.004-0.189-18.004 3.11-24.837 9.945l-279.402 279.402c-13.197 13.197-13.243 34.926 0.141 48.311 13.479 13.479 35.020 13.434 48.311 0.141l255.741-255.741 255.741 255.741c13.293 13.293 34.832 13.34 48.311-0.141 13.385-13.385 13.34-35.113 0.141-48.311l-279.402-279.402c-6.833-6.833-15.838-10.181-24.837-9.945z" p-id="3418" fill="#ffffff"></path></svg> */}
                </a>
                <ul className='list' onMouseEnter={handleSublist} onMouseLeave={handleSublist}>
                  <li className='about-us'><Link className='nav-link' to='/about-us'>About us</Link></li>
                  <li className='about-us'><Link className='nav-link' to='/joinus'>Join us</Link></li>
                </ul>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="https://www.zilliz.com">Contact</a>
              </li> */}
            </ul>

            {/* <a className="btn btn-light ml-md-3" href="https://www.zilliz.com">Button</a> */}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;
