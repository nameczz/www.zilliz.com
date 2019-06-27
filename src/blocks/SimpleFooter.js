import React from "react"
import './SimpleFooter.scss';

const SimpleFooter = () => {
  return (
    <>
        <footer className="fdb-block footer-small bg-dark fp-active simple-footer" data-block-type="footers" data-id="9">
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

export default SimpleFooter;
