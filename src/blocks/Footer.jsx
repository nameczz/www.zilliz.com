import React from "react";
import logo from "../images/logo-gray.svg"; // Tell Webpack this JS file uses this image
import qrCode from "../images/qrcode.jpeg"; // Tell Webpack this JS file uses this image
import LocalizeLink from "../components/localizedLink";

import "./Footer.scss";

const Footer = ({ data, locale }) => {
  return (
    <>
      <footer className="wrapper footer">
        <div className="left">
          <img className="logo" src={logo} alt="logo" />
          {data.address}
          <br />
          {data.phone}
          <br />
          {data.email}
        </div>

        <div className="right">
          <div className="item">
            <h4>{data.product}</h4>
            <ul>
              <li>{data.infiniAnalytics}</li>
              <li>
                <a href="https://www.milvus.io/">Milvus</a>
              </li>
            </ul>
          </div>

          <div className="item">
            <h4>{data.company}</h4>
            <ul>
              <li>
                <LocalizeLink locale={locale} to="/aboutus">
                  {data.aboutZilliz}
                </LocalizeLink>
              </li>
              <li>
                <LocalizeLink locale={locale} to="/news">
                  {data.news}
                </LocalizeLink>
              </li>
            </ul>
          </div>

          <div className="item">
            <h4>{data.joinus}</h4>
            <ul>
              <li>
                <a href="https://zilliz.gllue.com/portal/socialpositions?page=1&gql=">
                  {data.socialCareer}
                </a>
              </li>
              <li>
                <a href="https://zilliz.gllue.com/portal/campuspositions?gql=">
                  {data.schoolCareer}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <footer className="wrapper bottom-footer">
        <div className="bottom-footer-container">
          <div>
            @ {new Date().getFullYear()} ZILLIZ <sup>TM</sup>
          </div>
          <div>
            <a href="#!" className="wechat" onClick={e => e.preventDefault()}>
              <svg
                fill="#EEE"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M21.502 19.525c1.524-1.105 2.498-2.738 2.498-4.554 0-3.326-3.237-6.023-7.229-6.023s-7.229 2.697-7.229 6.023c0 3.327 3.237 6.024 7.229 6.024.825 0 1.621-.117 2.36-.33l.212-.032c.139 0 .265.043.384.111l1.583.914.139.045c.133 0 .241-.108.241-.241l-.039-.176-.326-1.215-.025-.154c0-.162.08-.305.202-.392zm-12.827-17.228c-4.791 0-8.675 3.236-8.675 7.229 0 2.178 1.168 4.139 2.997 5.464.147.104.243.276.243.471l-.03.184-.391 1.458-.047.211c0 .16.13.29.289.29l.168-.054 1.899-1.097c.142-.082.293-.133.46-.133l.255.038c.886.255 1.842.397 2.832.397l.476-.012c-.188-.564-.291-1.158-.291-1.771 0-3.641 3.542-6.593 7.911-6.593l.471.012c-.653-3.453-4.24-6.094-8.567-6.094zm5.686 11.711c-.532 0-.963-.432-.963-.964 0-.533.431-.964.963-.964.533 0 .964.431.964.964 0 .532-.431.964-.964.964zm4.82 0c-.533 0-.964-.432-.964-.964 0-.533.431-.964.964-.964.532 0 .963.431.963.964 0 .532-.431.964-.963.964zm-13.398-5.639c-.639 0-1.156-.518-1.156-1.156 0-.639.517-1.157 1.156-1.157.639 0 1.157.518 1.157 1.157 0 .638-.518 1.156-1.157 1.156zm5.783 0c-.639 0-1.156-.518-1.156-1.156 0-.639.517-1.157 1.156-1.157.639 0 1.157.518 1.157 1.157 0 .638-.518 1.156-1.157 1.156z" />
              </svg>
              <img
                style={{ maxWidth: "initial" }}
                width="150"
                height="150"
                src={qrCode}
                alt="zilliz QR code"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
