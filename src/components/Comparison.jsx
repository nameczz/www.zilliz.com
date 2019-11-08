import React, { useEffect, useRef } from "react"
import { min, max } from "d3-array";
import "./Comparison.scss"

const Comparison = props => {
  const DEFAULT_MAX_WIDTH = 100;
  const { title = "", products = [], reviseMultiple = false } = props;
  const widthBenchmark = reviseMultiple ? min(products, p => p.performance) : max(products, p => p.performance)
  const multipleBenchmark = reviseMultiple ? max(products, p => p.performance) : min(products, p => p.performance)
  const left = [];
  const right = [];
  products.forEach(product => {
    const width = DEFAULT_MAX_WIDTH * (reviseMultiple ? widthBenchmark / product.performance : product.performance / widthBenchmark)
    const label = product.label;
    left.push({ label, width, });
    const multiple = (reviseMultiple ? multipleBenchmark / product.performance : product.performance / multipleBenchmark).toFixed(1)
    right.push({ multiple, isBenchmark: multiple == 1 });
  })

  let hasBeenInViewport = false;
  const rootContainer = useRef(null);
  const onScroll = e => {
    if (hasBeenInViewport) {
      return;
    }
    const target = rootContainer.current;
    if (target.getBoundingClientRect().top <= window.innerHeight) {
      [].forEach.call(document.querySelectorAll('.line'), div => div.classList.add('line-animation'));
      [].forEach.call(document.querySelectorAll('.label'), div => div.classList.add('label-animation'));
      [].forEach.call(document.querySelectorAll('.right-label'), div => div.classList.add('right-animation'));
      hasBeenInViewport = true;
    }
  }
  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div ref={rootContainer} className="comparision-root" onScroll={onScroll}>
      <div className="left">
        <h5>{title}</h5>
        {left.map(product => {
          const { label, width } = product;
          return (
            <div className="product-container" key={label}>
              <div className="line" style={{ width: `${width}%` }}></div>
              <div className="label">{label}</div>
            </div>
          )
        })}
      </div>
      <div className="right">
        <h5></h5>
        {right.map((item, index) => <div key={index} className="product-container right-label">{`${item.isBenchmark ? "1" : `${item.multiple}x`}`}</div>)}
      </div>
    </div>
  )
}

export default Comparison