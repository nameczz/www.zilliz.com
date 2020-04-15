import React, { useState, useEffect } from 'react'
import LocalizeLink from "../components/localizedLink";
import './Selector.scss'

const Selector = props => {
  const { selected, options, locale, activeDoc } = props
  const [listStatus, setListStatus] = useState(false)
  const toggleList = (e) => {
    e.stopPropagation()
    setListStatus(!listStatus)
  }

  useEffect(() => {
    const cb = () => {
      setListStatus(false)
    }
    window.addEventListener('click', cb)
    return () => {
      window.removeEventListener('click', cb)
    };
  }, [])

  return <div className="selector-wrapper">
    <div className="selected" onClick={toggleList}>{selected}
      <i className="fas fa-chevron-down arrow"></i>
    </div>
    <ul className={`options-wrapper ${listStatus && 'open'}`}>
      {
        options.map(v => (
          <li className={v === selected ? 'active' : ''} key={v}>
            {
              <LocalizeLink
                locale={locale}
                className="text"
                to={`/docs/${v}/${activeDoc}`}
              >
                {v}
              </LocalizeLink>
            }
          </li>
        ))
      }
    </ul>
  </div>
}

export default Selector