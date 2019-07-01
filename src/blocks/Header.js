import React from "react"
import  LocalizeLink  from '../components/localizedLink';
import logo from "../images/logo.svg" // Tell Webpack this JS file uses this image
import './Header.scss'
/* disable jsx-a11y/anchor-is-valid*/
const Header = ({ data, locale }) => {

  const {
    why_zilliz,  
    product,
    product_list, 
    news, 
    career, 
    about_us, 
    aboutus_list 
  } = data;

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

  const showMdNav = event => {
    const target = event.currentTarget.lastChild;
    target.classList.remove('ele-hide');
    event.stopPropagation()
    return false;
  }

  const toggleSubNavShow = event => {
    const target = event.currentTarget.nextSibling;
    target.classList.toggle('sub-navlist');
    event.stopPropagation()
    return false;
  }
  const toggleLanguage = () => {
    if(window){
      const {origin, href} = window.location;
      const arr = href.split(origin);
      window.location.href = locale === 'en' 
        ? `${ origin }/cn${arr[1]}`
        : `${origin}/${arr[1].slice(4)}`
    }
  }
  return (
    <header className="bg-dark">
      <div className="container">
        <nav className="navbar navbar-expand-lg" style={{ padding: 0 }}>
          <LocalizeLink locale={ locale }  to="/" className="navbar-brand">
            <img src={logo} height="50" alt="logo" style={{ overflow: 'visible ' }} />
          </LocalizeLink>
          {/* 缩起来的nav */}
          <div className="icon-list" onClick={showMdNav} onMouseEnter={showMdNav} >
            <svg t="1561538613716" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1949" width="16" height="16"><path d="M64 64h896c38.4 0 64 25.6 64 64s-25.6 64-64 64H64c-38.4 0-64-25.6-64-64s25.6-64 64-64z m0 384h896c38.4 0 64 25.6 64 64s-25.6 64-64 64H64c-38.4 0-64-25.6-64-64s25.6-64 64-64z m0 384h896c38.4 0 64 25.6 64 64s-25.6 64-64 64H64c-38.4 0-64-25.6-64-64s25.6-64 64-64z" fill="#ffffff" p-id="1950"></path></svg>
            <div className="navbar-collapse md-nav-contaienr ele-hide" id="navbarNav13">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <LocalizeLink locale={ locale }  className="nav-link" to="/why-zilliz">{why_zilliz}</LocalizeLink>
                </li>
                <li className='nav-item drop-down' onClick={ toggleSubNavShow }>
                  <span className='nav-link' ><span>{product}</span> &nbsp;<svg t="1561600107498"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4496" width="16" height="16"><path d="M511.872 676.8a32 32 0 0 1-23.232-9.984l-251.264-265.6a32 32 0 0 1 46.528-43.968l228.032 241.088 228.224-241.088a32.064 32.064 0 0 1 45.248-1.28c12.8 12.16 13.376 32.448 1.28 45.248l-251.52 265.6a32 32 0 0 1-23.296 9.984z" p-id="4497" fill="#ffffff"></path></svg></span>
                </li>
                <div className="sub-navlist">
                  <li className='product'><a className='nav-link' href='http://www.milvus.io' target='blank'>{product_list[0]}</a></li>
                  <li className='product'><LocalizeLink locale={ locale } className='nav-link' to='/megawise'>{product_list[1]}</LocalizeLink></li>
                </div>
                <li className="nav-item"><LocalizeLink locale={ locale } className="nav-link" to="/news">{news}</LocalizeLink></li>
                <li className='nav-item drop-down' onClick={ toggleSubNavShow }>
                  <span className='nav-link' ><span>{about_us}</span> &nbsp;
                  <svg t="1561600107498"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4496" width="16" height="16"><path d="M511.872 676.8a32 32 0 0 1-23.232-9.984l-251.264-265.6a32 32 0 0 1 46.528-43.968l228.032 241.088 228.224-241.088a32.064 32.064 0 0 1 45.248-1.28c12.8 12.16 13.376 32.448 1.28 45.248l-251.52 265.6a32 32 0 0 1-23.296 9.984z" p-id="4497" fill="#ffffff"></path></svg>
                    {/* <svg t="1561497913193" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3417" width="16" height="16"><path d="M506.39 335.583c-9.004-0.189-18.004 3.11-24.837 9.945l-279.402 279.402c-13.197 13.197-13.243 34.926 0.141 48.311 13.479 13.479 35.020 13.434 48.311 0.141l255.741-255.741 255.741 255.741c13.293 13.293 34.832 13.34 48.311-0.141 13.385-13.385 13.34-35.113 0.141-48.311l-279.402-279.402c-6.833-6.833-15.838-10.181-24.837-9.945z" p-id="3418" fill="#ffffff"></path></svg> */}
                  </span>
                </li>
                <div className='sub-navlist'>
                  <li className='about-us'><LocalizeLink locale={ locale } className='nav-link' to='/culture'>{aboutus_list[0]}</LocalizeLink></li>
                  <li className='about-us'><LocalizeLink locale={ locale } className='nav-link' to='/about-us'>{aboutus_list[1]}</LocalizeLink></li>
                </div>
                <li className='about-us'><a className='nav-link' href='https://zilliz.gllue.com/portal/zilliz?lang=en' target='blank'>{career}</a></li>
                <li className='about-us' style={{cursor: 'pointer'}}><span className='nav-link' onClick={toggleLanguage} >{ locale === 'en' ? '切换中文' : 'Switch to English' }</span></li>
              </ul>

            </div>
          </div>
          {/* 展开的nav */}
          <div className="navbar-collapse all-nav-container" id="navbarNav13">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <LocalizeLink locale={ locale }  className="nav-link" to="/why-zilliz">{why_zilliz}</LocalizeLink>
              </li>
              <li className='nav-item drop-down' onMouseEnter={handleDropDown} onMouseLeave={handleDropDown}>
                <span className='nav-link'><span>{product}</span> &nbsp;
                <svg t="1561600107498"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4496" width="16" height="16"><path d="M511.872 676.8a32 32 0 0 1-23.232-9.984l-251.264-265.6a32 32 0 0 1 46.528-43.968l228.032 241.088 228.224-241.088a32.064 32.064 0 0 1 45.248-1.28c12.8 12.16 13.376 32.448 1.28 45.248l-251.52 265.6a32 32 0 0 1-23.296 9.984z" p-id="4497" fill="#ffffff"></path></svg>
                  {/* <svg t="1561497913193" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3417" width="16" height="16"><path d="M506.39 335.583c-9.004-0.189-18.004 3.11-24.837 9.945l-279.402 279.402c-13.197 13.197-13.243 34.926 0.141 48.311 13.479 13.479 35.020 13.434 48.311 0.141l255.741-255.741 255.741 255.741c13.293 13.293 34.832 13.34 48.311-0.141 13.385-13.385 13.34-35.113 0.141-48.311l-279.402-279.402c-6.833-6.833-15.838-10.181-24.837-9.945z" p-id="3418" fill="#ffffff"></path></svg> */}
                </span>
                <ul className='list' onMouseEnter={handleSublist} onMouseLeave={handleSublist}>
                  <li className='product'><a className='nav-link' href='http://www.milvus.io' target='blank'>{product_list[0]}</a></li>
                  <li className='product'><LocalizeLink locale={ locale } className='nav-link' to='/megawise'>{product_list[1]}</LocalizeLink></li>
                </ul>
              </li>
              <li className="nav-item">
                <LocalizeLink locale={ locale }  className="nav-link" to="/news">{news}</LocalizeLink>
              </li>
            </ul>
            <ul className="navbar-nav justify-content-end ml-auto">
              <li className='about-us'><a className='nav-link' href='https://zilliz.gllue.com/portal/zilliz?lang=en' target='blank'>{career}</a></li>
              <li className='nav-item drop-down' onMouseEnter={handleDropDown} onMouseLeave={handleDropDown}>
                <span className='nav-link'><span>{about_us}</span> &nbsp;
                <svg t="1561600107498"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4496" width="16" height="16"><path d="M511.872 676.8a32 32 0 0 1-23.232-9.984l-251.264-265.6a32 32 0 0 1 46.528-43.968l228.032 241.088 228.224-241.088a32.064 32.064 0 0 1 45.248-1.28c12.8 12.16 13.376 32.448 1.28 45.248l-251.52 265.6a32 32 0 0 1-23.296 9.984z" p-id="4497" fill="#ffffff"></path></svg>
                  {/* <svg t="1561497913193" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3417" width="16" height="16"><path d="M506.39 335.583c-9.004-0.189-18.004 3.11-24.837 9.945l-279.402 279.402c-13.197 13.197-13.243 34.926 0.141 48.311 13.479 13.479 35.020 13.434 48.311 0.141l255.741-255.741 255.741 255.741c13.293 13.293 34.832 13.34 48.311-0.141 13.385-13.385 13.34-35.113 0.141-48.311l-279.402-279.402c-6.833-6.833-15.838-10.181-24.837-9.945z" p-id="3418" fill="#ffffff"></path></svg> */}
                </span>
                <ul className='list' onMouseEnter={handleSublist} onMouseLeave={handleSublist}>
                  <li className='about-us'><LocalizeLink locale={ locale } className='nav-link' to='/culture'>{aboutus_list[0]}</LocalizeLink></li>
                  <li className='about-us'><LocalizeLink locale={ locale } className='nav-link' to='/about-us'>{aboutus_list[1]}</LocalizeLink></li>
                </ul>
              </li>
              <li className='about-us' style={{cursor: 'pointer'}}><span className='nav-link' onClick={toggleLanguage} >{ locale === 'en' ? '切换中文' : 'Switch to English' }</span></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;
