import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layout";
import SEO from '../components/seo';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

import './about-us.scss'
import CEO from '../images/photos/ceo.png'

const TimelineComp = () => {
  return (
      <Timeline lineColor={'#f6f4f4'}>
          <TimelineItem
              key="001"
              dateText="2019 Feb"
              style={{ color: '#e86971' }}
          >
              <h3>Zilliz入选微软加速器 · 上海第五期</h3>
              <h4>Subtitle</h4>
              <p>
              2019年1月31日，微软正式公布了“微软加速器·上海第5期”入选名单！Zilliz经过激烈的角逐，从众多候选企业中脱颖而出，最终成功入选！
              </p>
          </TimelineItem>
          <TimelineItem
              key="002"
              dateText="2018 Nov"
              dateInnerStyle={{ background: '#329ef7', color: '#000' }}
              bodyContainerStyle={{
              background: '#f6f4f4',
              padding: '20px',
              borderRadius: '8px',
              }}
          >
              <h3 style={{ color: '#329ef7' }}>发布MegaWise数据库1.2版</h3>
          </TimelineItem>
          <TimelineItem
              key="003"
              dateText="2018 Oct"
              dateInnerStyle={{ background: '#329ef7', color: '#000' }}
              bodyContainerStyle={{
              background: '#f6f4f4',
              padding: '20px',
              borderRadius: '8px',
              }}
          >
              <h3>发布第二代MegaWise数据库一体机</h3>
          </TimelineItem>
          <TimelineItem
              key="004"
              dateText="2018 Aug"
              dateInnerStyle={{ background: '#329ef7', color: '#000' }}
              bodyContainerStyle={{
              background: '#f6f4f4',
              padding: '20px',
              borderRadius: '8px',
              }}
          >
              <h3>发布硬件加速的AI大数据整体解决方案</h3>
          </TimelineItem>
          <TimelineItem
              key="005"
              dateText="2018 Mar"
              dateInnerStyle={{ background: '#329ef7', color: '#000' }}
              bodyContainerStyle={{
              background: '#f6f4f4',
              padding: '20px',
              borderRadius: '8px',
              }}
          >
              <h3>发布MegaWise数据库1.1版</h3>
          </TimelineItem>
          <TimelineItem
              key="006"
              dateText="2018 Jan"
              dateInnerStyle={{ background: '#329ef7', color: '#000' }}
              bodyContainerStyle={{
              background: '#f6f4f4',
              padding: '20px',
              borderRadius: '8px',
              }}
          >
              <h3>获得一千万美元A1轮投资</h3>
          </TimelineItem>
          <TimelineItem
              key="0063"
              dateText="2017 Dec"
          >
              <h3>发布MegaWise数据库一体机</h3>
          </TimelineItem>
          <TimelineItem
              key="0053"
              dateText="2017 Aug"
          >
              <h3>获得数千万人民币天使轮投资</h3>
          </TimelineItem>
          <TimelineItem
              key="00d3"
              dateText="2017 July"
          >
              <h3>获得NVIDIA创投Inception计划扶持</h3>
          </TimelineItem>
          <TimelineItem
              key="00ds3"
              dateText="2017 June"
          >
              <h3>加入OpenPower Foundation</h3>
          </TimelineItem>
          <TimelineItem
              key="0a03"
              dateText="2017 May"
          >
              <h3>发布MegaWise数据库1.0版</h3>
          </TimelineItem>
          <TimelineItem
              key="0A03"
              dateText="2017 Mar"
              dateInnerStyle={{ background: '#329ef7', color: '#000' }}
          >
              <h3>研发完成基于硬件加速的数据处理引擎</h3>
          </TimelineItem>

          <TimelineItem
              key="0Z04"
              dateText="2016 Mar"
              dateInnerStyle={{ background: '#9fe6b8' }}
          >
              <h3>获得数百万人民币种子轮投资</h3>
          </TimelineItem>
          <TimelineItem
              key="00X4"
              dateText="2016 Mar"
              dateInnerStyle={{ background: '#9fe6b8' }}
          >
              <h3>团队组建</h3>
          </TimelineItem>
      </Timeline>
  )
}
const WhyZilliz = () => (
  <Layout>
  <SEO title='About us' />
    <section className="fdb-block" data-block-type="contents" data-id="4" draggable="true">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-10 col-sm-6 col-md-5 col-lg-4 m-auto pb-5 pb-md-0" >
            <img alt="imagess" className="img-fluid rounded-0" src="https://cdn.jsdelivr.net/gh/froala/design-blocks@2.0.1/dist/imgs//draws/iphone-hand.svg" />
          </div>
          <div className="col-12 ml-md-auto col-md-7 col-lg-6 pb-5 pb-md-0">
            <h1>Zilliz简介</h1>
            <h5>Zilliz成立于2016年，专注于研发基于异构众核加速的新一代数据库系统。</h5>
            <p>公司核心产品MegaWise数据库和传统数据库相比，查询性能提升100倍以上，硬件和运维成本降低10倍。同时，Zilliz提供使用GPU从加速数据ETL，到加速数据仓库，再到加速AI模型训练，最后到加速数据可视化的端到端数据智能整体解决方案。Zilliz的产品和解决方案在金融、电信、医疗、智慧城市和电子商务等领域有着广泛应用前景。</p>
            <p>
              目前，Zilliz已经获得来自多家一线投资机构的上亿元人民币投资。</p>
            <p className="mt-4">
              <Link className="btn btn-primary" to='/why-zilliz'>Why Zilliz</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
    <TimelineComp />
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
          </div>
          <div className="col-12 ml-md-auto col-md-7 col-lg-6 pb-5 pb-md-0">
            <img alt="imagess" className="img-fluid rounded-0" src={CEO} />
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
            <img alt="imagess" className="img-fluid rounded-circle" src="https://cdn.jsdelivr.net/gh/froala/design-blocks@2.0.1/dist/imgs//people/4.jpg" />

            <h2>Sara Doe</h2>
            <p>Founder</p>
          </div>

          <div className="col-sm-3 m-sm-auto">
            <img alt="imagess" className="img-fluid rounded-circle" src="https://cdn.jsdelivr.net/gh/froala/design-blocks@2.0.1/dist/imgs//people/5.jpg" />

            <h2>Sara Doe</h2>
            <p>Founder</p>
          </div>

          <div className="col-sm-3 m-sm-auto">
            <img alt="imagess" className="img-fluid rounded-circle" src="https://cdn.jsdelivr.net/gh/froala/design-blocks@2.0.1/dist/imgs//people/7.jpg" />

            <h2>Sara Doe</h2>

            <p>Founder</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default WhyZilliz