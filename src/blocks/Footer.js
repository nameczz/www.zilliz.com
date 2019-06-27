import React from "react"
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <>
        <footer className="fdb-block footer-large bg-dark fp-active" data-block-type="footers" data-id="22">
        <div className="container">
          <div className="row align-items-top text-center text-md-left">
            <div className="col-12 col-sm-6 col-md-4" style={{ zIndex: 1000 }}>
              <h3><strong>Zilliz Product</strong></h3>
              <p><Link to="/megawise">Megawise</Link></p>
              <p><a href="https://www.milvus.io" target='blank'>Milvus</a></p>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mt-4 mt-sm-0" style={{ zIndex: 1000 }}>
              <h3><strong>Company</strong></h3>
              <p><Link to="/about-us">About Us</Link></p>
              <p><Link to="/news">Latest News</Link></p>
              <p><Link to="/culture">Company Culture</Link></p>
            </div>
            <div className="col-12 col-md-4 mt-5 mt-md-0 text-md-left" style={{ zIndex: 1000 }}>
              <h3><strong>Contact Us</strong></h3>
              <p>021-33687058</p>
              <p><a href="mailto: info@zilliz.com">info@zilliz.com</a></p>
              <p><a href="https://3gimg.qq.com/lightmap/v1/marker/index.html?type=0&marker=coord%3A31.175017%2C121.404435%3Btitle%3AZilliz%3Baddr%3A%E4%B8%8A%E6%B5%B7%E5%BE%90%E6%B1%87%E5%8C%BA%E6%A1%82%E7%AE%90%E8%B7%AF69%E5%8F%B728%E6%A0%8B6c&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77&referer=myapp" target="about:_blank">上海徐汇区桂箐路69号桂箐园28栋6C</a></p>
            </div>
          </div>
        </div>
      </footer>
        <footer className="fdb-block footer-small bg-dark fp-active" data-block-type="footers" data-id="9">
          <div className="container">
            <div className="row text-center align-items-center">
              <div className="col">
                © {new Date().getFullYear()}.  
          {` `}
          <a href="https://www.zilliz.com">Zilliz</a>
              </div>
            </div>
          </div>
        </footer>
    </>
  )
}

export default Footer;
