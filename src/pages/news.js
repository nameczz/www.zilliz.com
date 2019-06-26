import React from 'react'
import Layout from "../components/layout";
import SEO from "../components/seo";
import './about-us.scss'
import news_190211 from '../images/photos/news-20190211.jpg'
import bg from '../images/hero/blue.svg';
import './news.scss'

const newsList = [
  {
    title: "ZILLIZ入选微软加速器 · 上海第五期",
    text: "2019年1月31日，微软正式公布了“微软加速器·上海第5期”入选名单！ZILLIZ经过激烈的角逐，从众多候选企业中脱颖而出，最终成功入选！",
    date: '2019-02-11',
    link: 'https://mp.weixin.qq.com/s?__biz=MzUzMDI5OTA5NQ==&mid=2247483956&idx=1&sn=43e3fe0e669960ce9dc32149c88cc4f5&chksm=fa52a38ccd252a9a3995c16a936e7db618ad17903b52471cc7c5b0debf7c5d16799498442cc2&mpshare=1&scene=1&srcid=0226Ywl7KOMVceQFRXaRgtBP&pass_ticket=vpg8QtCcehvRi1iC6Pxv3t9faI8hdBUyxNn3i4RH6I1wKltGDU26asWyrkh21cBF#rd',
    imgSite: news_190211
  },
  {
    title: 'ZILLIZ受邀参加2018 OpenPOWER中国高峰论坛',
    text: '2018年12月12日，由OpenPOWER全球基金会主办的，主题为“开放蓄势、智领未来”的2018OpenPOWER中国高峰论坛在北京金隅喜来登大酒店盛大召开。',
    date: ' 2018-12-13',
    link: 'https://mp.weixin.qq.com/s/dv4t1lGwPNclZFNOsBb45w',
    imgSite: news_190211,
  },
  {
    title: 'ZILLIZ亮相CCF第七届太湖论坛暨自主可控大数据与人工智能大会',
    text: ' 12月7日，由中国计算机协会主办，中国计算机学会无锡分部和无锡市计算机学会联合承办的“CCF第七届太湖论坛暨自主可控大数据与人工智能大会”在无锡顺利召开。',
    date: '2018-12-11',
    link: 'https://mp.weixin.qq.com/s/d2ZHhEGlhRA23Haj2Wwafw',
    imgSite: news_190211,
  }, {
    title: 'ZILLIZ Speeds up GPU Database Commercialization Layout After Completing $10 Million A1 Round Financing',
    text: ' SHANGHAI, June 6, 2018 /PRNewswire/ -- On May 31, Chinese GPU database company ZILLIZ announced that it had already completed its $10 million A1 round financing in January 2018.',
    date: '2018-06-06',
    link: 'https://www.prnewswire.com/news-releases/zilliz-speeds-up-gpu-database-commercialization-layout-after-completing-10-million-a1-round-financing-300660628.html',
    imgSite: news_190211,
  }, {
    title: 'GPU数据库公司Zilliz完成1000万美元A1轮融资，加速GPU数据库商业化进程 |首发',
    text: ' 创业邦获悉，GPU数据库公司Zilliz宣布已于2018年1月成功完成1000万美元的A1轮融资。本次融资由晨兴资本领投，松禾资本跟投，天使轮投资方云启资本和靖亚资本继续增持。本轮融资将帮助Zilliz加速产品研发，进一步推动GPU数据库的商业化进程。',
    date: ' 2018-05-31',
    link: 'http://www.cyzone.cn/a/20180531/332814.html',
    imgSite: news_190211,
  }, {
    title: '公司存在大量数据浪费？那是你的数据库用错了',
    text: ' GPU处理大数据已经成为一种趋势。各种深度学习的软件框架例如TensorFlow，需要运行在计算设备上，与CPU相比，GPU更能让其高效的工作，在性价比以及计算力上都有较大的优势。',
    date: '2018-02-24',
    link: 'https://www.iyiou.com/p/66718.html',
    imgSite: news_190211,
  }, {
    title: 'GPU+分布式计算，能把数据性能提升100倍吗？',
    text: ' ZILLIZ是中国首家将GPU的技术应用在分布式数据库中的数据处理公司，据星爵透露，Zilliz的处理性能比普通数据库的性能提高100倍，并且能够在此基础上，将硬件成本降低10倍。',
    date: '2018-02-09',
    link: 'http://www.bjnews.com.cn/invest/2018/02/09/476008.html',
    imgSite: news_190211,
  }, {
    title: '性能提升百倍，看Zilliz如何用GPU玩转数据分析',
    text: ' 成立于2016年3月的Zilliz，是一家专注于人工智能技术和大数据技术的初创公司。2017年公司发布的OLAP数据库系统，基于GPU硬件加速，与传统的CPU数据库相比，可以将数据处理性能提高30-100倍，同时降低10倍硬件成本、20倍计算能耗……',
    date: '2018-01-23',
    link: 'https://mp.weixin.qq.com/s/8b08qb1uDfNylJXFHncxEQ',
    imgSite: news_190211,
  }, {
    title: 'ZILLIZ 星爵：高维打击，OLAP 数据库的下一程',
    text: ' 一个月前， Open Power 高峰论坛之后，IBM Systems Open Power 总经理 Ken King 在媒体沟通会上向记者们再次强调了 Power9 架构的优势。总之，在性能上，与 X86 相比，就差他说“吊打”二字了。',
    date: '2018-01-22',
    link: 'https://www.leiphone.com/news/201801/vdZtykR1EcL37gTs.html',
    imgSite: news_190211,
  }, {
    title: 'IF创新聚变·第15场——苟日新，日日新，又日新',
    text: ' 快公司将创新者聚一起,为的是专注思考带来启发 ,与快公司相处一个下午,刷新你对创新的认知。',
    date: '2018-01-16',
    link: 'https://mp.weixin.qq.com/s/Y4uT57JZBn8qcNe6gwdf0g',
    imgSite: news_190211,
  }, {
    title: '性能提升100倍，硬件成本降低10倍，ZILLIZ成立近2年，竞争对手却只有3家国外公司',
    text: ' 官方显示，Zilliz专注于人工智能技术和大数据技术，并研发新一代智能数据处理平台，翻译来说就是做基于GPU硬件加速的新一代OLAP（联机分析处理）数据库系统，应用领域包括了金融、游戏、电商、物联网、零售、电信等领域。',
    date: '2017-12-26',
    link: 'http://www.cyzone.cn/article/170356.html',
    imgSite: news_190211,
  }, {
    title: 'Zilliz发布GPU数据库一体机MEGAWISE',
    text: ' 2017年12月13日，在北京举行的2017 OpenPOWER中国高峰论坛上，Zilliz联合IBM发布了国内首台GPU硬件加速数据库一体机MEGAWISE。',
    date: '2017-12-16',
    link: 'https://mp.weixin.qq.com/s/NZCjSkKAsfcZke-mBoKncA',
    imgSite: news_190211,
  }, {
    title: 'Zilliz荣获2017年度“OpenPOWER杰出贡献奖”',
    text: ' 在本次高峰论坛上，Zilliz因为在GPU硬件加速数据库领域做出的突出贡献，被OpenPOWER全球基金会授予2017年度“OpenPOWER杰出贡献奖”。',
    date: '2017-12-15',
    link: 'https://mp.weixin.qq.com/s/lcAPLiQYm6N1OOZluHAZZg',
    imgSite: news_190211,
  }, {
    title: '36氪独家 | 把数据库搬到GPU上性能可提高100倍，Zilliz获数千万元天使轮融资',
    text: ' Zilliz定位做基于GPU硬件加速的新一代OLAP数据库系统。公司成立于2016年3月，并于2017年8月完成云启资本领投，靖亚资本、华岩资本跟投的数千万元天使轮融资。',
    date: '2017-11-10',
    link: 'http://36kr.com/p/5102091.html',
    imgSite: news_190211,
  }, {
    title: '让实时数据分析成为可能，站在硅谷技术投资风口，GPU数据库的创业机会来了',
    text: ' 随着数据价值越来越受到企业的重视，数据分析成为了十分重要的一环，而OLAP(Online Analytical Processing)作为一种数据处理技术，被用于支持复杂的分析操作，可以根据分析人员的要求快速、灵活地进行大数据的复杂查询处理……',
    date: '2017-07-13',
    link: 'http://tobshe.com/2017/07/13/zerone/',
    imgSite: news_190211,
  }, {
    title: 'AI瓶颈竟在这？Zerone打造基于GPU的新型数据库系统',
    text: ' 在大数据和人工智能时代，企业每天产生的数据量正呈爆炸式增长，传统的IT基础架构和处理技术已逐渐无法适应巨大的数据处理需求。企业亟待寻找新的解决方案，实现由数据驱动的精细化运营。',
    date: '2017-07-11',
    link: 'https://www.lieyunwang.com/archives/335402',
    imgSite: news_190211,
  }, {
    title: '他把半个机房浓缩进小盒子 用GPU将数据库处理性能提升100倍',
    text: ' 自2005年飞赴美国留学，4年后年进入Oracle公司，从事数据库项目12c核心研发工作，到2015年归国创业，这位创始人始终认为自己像漫威漫画中的“星爵”一样，在探索新世界',
    date: ' 2017-07-09',
    link: 'https://www.pencilnews.cn/p/14536.html',
    imgSite: news_190211,
  }
]

const OneNew = props => {
  const { news } = props;
  const { title, text, imgSite, link, date } = news;
  return (
    <div className="col-12 col-md-8 m-auto col-lg-4 news-top-container" style={{ zIndex: 10000 }}>
      <a href={link} target='blank' style={{ display: 'block' }}>
        <div className="fdb-box news-container">
          <img alt="imageSite" src={imgSite} />
          <div className='text-container'>
            <h4>{title}</h4>
            <p>{date}</p>
            <p>{text}</p>
          </div>
        </div>
      </a>
    </div>
  )
}
const News = () => (
  <Layout>
    <SEO title="Latest News" />
    <section className="fdb-block bg-dark fdb-viewport" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container justify-content-center align-items-center d-flex">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-md-8">
            <h1>News&nbsp;&nbsp;Center</h1>
            <p className="lead">here you see what we do in the market </p>
          </div>
        </div>
      </div>
    </section>
    <section className="fdb-block fp-active" data-block-type="features" data-id="2">
      <div className="container">
        <div className="row text-left">
          {newsList.map((news, i) => <OneNew news={news} key={i} />)}
        </div>
      </div>
    </section>
  </Layout>
)

export default News
