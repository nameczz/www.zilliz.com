import React from 'react'
import Layout from "../components/layout";
import SEO from '../components/seo';

import { Hadoop, Spark, GPUSpark, Rapids } from '../components/charts/DataEvolution'
import { RectTop, RectVBottom, RectMiddle } from '../components/charts/arrows'
import { ETLPie, RobertDay, RobertNewDay } from '../components/charts/ETLPie'
import './why-zilliz.scss'

const WhyZilliz = () => (
  <Layout>
    <SEO title='why zilliz' />
    <section className="fdb-block" style={{ backgroundImage: `url(https://cdn.jsdelivr.net/gh/froala/design-blocks@2.0.1/dist/imgs//shapes/8.svg)` }} data-block-type="contents" data-id="3" draggable="true">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 col-lg-5">
            <img alt='imgplaceholder' className="fdb-icon" src="https://cdn.jsdelivr.net/gh/froala/design-blocks@2.0.1/dist/imgs//icons/github.svg" />
            <h1>Why Zilliz</h1>
            <p className="lead">Coz Zilliz reinvent Data Science loading.</p>
          </div>
          <div className="col-10 col-sm-6 m-auto col-md-4 pt-4 pt-md-0">
            <img alt='imgplaceholder' className="img-fluid rounded-0" src="https://cdn.jsdelivr.net/gh/froala/design-blocks@2.0.1/dist/imgs//draws/chat.svg" />
          </div>
        </div>
      </div>
    </section>
    {/* What is Accelerated DS */}
    <section className="fdb-block" data-block-type="contents" data-id="1" draggable="true">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col col-md-8 text-center">
            <h1>What is Accelerated DS</h1>
            <p className="lead">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far <a href="https://www.froala.com">World of Grammar</a>.</p>
          </div>
        </div>
      </div>
    </section>
    {/* Bottleneck of Current Tech   */}
    <section className="fdb-block" data-block-type="contents" data-id="5" draggable="true">
      <div className="container">
        <div className="row align-items-center" >
          <div className="col-12 col-md-6 col-lg-5">
            <h1>Bottleneck of Current Tech</h1>
            <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
          <div className="col-12 col-md-6 ml-md-auto mt-4 mt-md-0" style={{ height: '475px' }}>
            <ETLPie />
          </div>
        </div>
      </div>
    </section>
    {/* Robot's Day */}
    <section className="fdb-block fp-active" data-block-type="contents" data-id="8" draggable="true">
      <div className="container">
        <div className="row align-items-center" >
          <div className="col-12 col-md-12 col-lg-6 col-xl-5">
          <h1>Robot's Day</h1>
            <p className="lead">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
          </div>
          <div className="col-12 col-md-8 m-auto ml-lg-auto mr-lg-0 col-lg-6 pt-5 pt-lg-0" style={{ height: '475px' }}>
            <RobertDay />
          </div>
        </div>
      </div>
    </section>
    <section className="fdb-block fp-active" data-block-type="contents" data-id="17" draggable="true">
      <div className="container" style={{ minWidth: '1140px' }}>
        <div className="row text-center">
          <div className="col-12" style={{ zIndex: 10000 }}>
            <h1>DATA PROCESSING EVOLUTION</h1>
            <p className="h2"><em>Faster Data Access Less Data Movement.</em></p>
          </div>
        </div>
        <div className='content'>
          {/* item-hadoop */}
          <div className='item'>
            <div className='svg'>
              <p>Hadoop Processing, Reading from disk</p>
              <Hadoop />
            </div>
          </div>
          {/* item-spark */}
          <div className='item' >
            <div className='cover arrow'><RectTop /></div>
            <div className='cover word'>
              <p>25-100x improvement</p>
              <p>Less code</p>
              <p>Language flexible</p>
              <p>Primarily In-Memory</p>
            </div>
            <div className='svg'>
              <p>Spark In-Memory Processing</p>
              <Spark />
            </div>
          </div>
          {/* item-gpu-spark && item-rapids */}
          <div className='item'>
            <div className='arrow-middle'><RectMiddle /></div>
            <div className='cover word word2'>
              <p>5-10x improvement</p>
              <p>More code</p>
              <p>Language rigid</p>
              <p>Substantially on GPU</p>
            </div>
            <div className='svg'>
              <p>GPU/Spark In-Memory Processing</p>
              <GPUSpark />
            </div>
          </div>
          {/* item-rapids */}
          <div className='item item-rapids'>
            <div className='arrow-bottom'><RectVBottom /></div>
            <div className='cover word word2'>
              <p>50-100x improvement</p>
              <p>Same code</p>
              <p>Language flexible</p>
              <p>Primarily on GPU</p>
            </div>
            <div className='svg'>
              <p>RAPIDS</p>
              <Rapids />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Robot's New Day */}
    <section className="fdb-block fp-active" data-block-type="contents" data-id="8" draggable="true">
      <div className="container">
        <div className="row align-items-center" >
          <div className="col-12 col-md-12 col-lg-6 col-xl-5">
            <h1>Robot's New Day</h1>
            <p className="lead mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
          <div className="col-12 col-md-8 m-auto ml-lg-auto mr-lg-0 col-lg-6 pt-5 pt-lg-0" style={{ height: '475px' }}>
            <RobertNewDay />
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default WhyZilliz