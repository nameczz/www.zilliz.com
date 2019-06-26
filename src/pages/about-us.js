import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layout";
import './about-us.scss'
import CEO from '../images/photos/ceo.png'

const WhyZilliz = () => (
  <Layout>
    <section className="fdb-block" data-block-type="contents" data-id="4" draggable="true">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-10 col-sm-6 col-md-5 col-lg-4 m-auto pb-5 pb-md-0" >
            <img alt="image" className="img-fluid rounded-0" src="https://cdn.jsdelivr.net/gh/froala/design-blocks@2.0.1/dist/imgs//draws/iphone-hand.svg" />
          </div>
          <div className="col-12 ml-md-auto col-md-7 col-lg-6 pb-5 pb-md-0">
            <h1>Zilliz简介</h1>
            <p>ZILLIZ成立于2016年，专注于研发基于异构众核加速的新一代数据库系统。</p>
            <p>公司核心产品MegaWise数据库和传统数据库相比，查询性能提升100倍以上，硬件和运维成本降低10倍。同时，ZILLIZ提供使用GPU从加速数据ETL，到加速数据仓库，再到加速AI模型训练，最后到加速数据可视化的端到端数据智能整体解决方案。ZILLIZ的产品和解决方案在金融、电信、医疗、智慧城市和电子商务等领域有着广泛应用前景。</p>
            <p>
              目前，ZILLIZ已经获得来自多家一线投资机构的上亿元人民币投资。</p>
            <p className="mt-4">
              <Link className="btn btn-primary" to='/why-zilliz'>Why Zilliz</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="fdb-block" data-block-type="contents" data-id="4" draggable="true">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-10 col-sm-6 col-md-5 col-lg-4 m-auto pb-5 pb-md-0" >
            <h1>StarLoad</h1>
            <p className="lead">Founder && CEO </p>
            <ul className='list' >
              <li>数据库专家，深耕数据库行业16年</li>
              <li>在Oracle美国总部工作多年，负责数据库系统核心研发</li>
              <li>作为奠基人研发的Oracle 12c 多租户数据库产品已累计产生超过20亿美金的销售收入</li>
            </ul>
            <p className="mt-4 mb-5"><a className="btn btn-primary" href="https://www.froala.com">Learn More</a></p>

          </div>
          <div className="col-12 ml-md-auto col-md-7 col-lg-6 pb-5 pb-md-0">
            <img alt="image" className="img-fluid rounded-0" src={CEO} />
          </div>
        </div>
      </div>
    </section>
    <section className="fdb-block team-2 fp-active" data-block-type="teams" data-id="3" draggable="true">
      <div className="container">
        <div className="row text-center justify-content-center">
          <div className="col-8">
            <h1>Meet Our Team</h1>
          </div>
        </div>

        <div className="row-50"></div>

        <div className="row text-center justify-content-center">
          <div className="col-sm-3 m-sm-auto">
            <img alt="image" className="img-fluid rounded-circle" src="https://cdn.jsdelivr.net/gh/froala/design-blocks@2.0.1/dist/imgs//people/4.jpg" />

            <h2>Sara Doe</h2>
            <p>Founder</p>
          </div>

          <div className="col-sm-3 m-sm-auto">
            <img alt="image" className="img-fluid rounded-circle" src="https://cdn.jsdelivr.net/gh/froala/design-blocks@2.0.1/dist/imgs//people/5.jpg" />

            <h2>Sara Doe</h2>
            <p>Founder</p>
          </div>

          <div className="col-sm-3 m-sm-auto">
            <img alt="image" className="img-fluid rounded-circle" src="https://cdn.jsdelivr.net/gh/froala/design-blocks@2.0.1/dist/imgs//people/7.jpg" />

            <h2>Sara Doe</h2>

            <p>Founder</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default WhyZilliz