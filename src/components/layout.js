import React from "react"
import Header from '../blocks/Header';
import Footer from '../blocks/Footer';

import "./layout.css"

export default props => {
    console.log(`props in layout is : ${props}`)
    const {data, children, locale} = props;
    const {header, footer} = data;
    console.log(`locale in layout is ${locale}`)
  return (
    <div onClick={() => {
      if (document && document.querySelector('.md-nav-contaienr')) {
        document.querySelector('.md-nav-contaienr').classList.add('ele-hide')
      }
      return false;
    }}>
      <Header data={header} locale={locale} />
      <div>
        <main>{children}</main>
        <Footer data={footer} locale={locale} />
      </div>
    </div>
  )
}

