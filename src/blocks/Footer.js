import React from "react";
import LocalizeLink from "../components/localizedLink";
import logo from "../images/logo.svg"; // Tell Webpack this JS file uses this image
import "./Footer.scss";

const Footer = ({ data, locale }) => {
  const {
    company,
    company_list,
    contact,
    contact_list,
    product,
    product_list,
  } = data;
  return (
    <>
      <footer className="footer wrapper">
        <div className="left">
          <img className="logo" src={logo} alt="logo" />
          上海徐汇区桂箐路69号桂箐园28栋6C
          <br />
          021-33687058
          <br />
          info@zilliz.com
        </div>

        <div className="right">
          <div>
            <h4>产品</h4>
            <ul>
              <li>Infini Analytics</li>
              <li>Milvus</li>
            </ul>
          </div>

          <div>
            <h4>资源</h4>
            <ul>
              <li>博客</li>
              <li>开源项目</li>
            </ul>
          </div>

          <div>
            <h4>公司</h4>
            <ul>
              <li>关于 ZILLIZ</li>
              <li>新闻</li>
              <li>加入我们</li>
            </ul>
          </div>
        </div>
      </footer>
      <footer className="bottom wrapper">
        <div>@2019 ZILLIZ</div>{" "}
        <div>
          <a href="#">wechat</a> <a href="#">sina</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
