import React, { useState } from 'react'
import LocalizeLink from "../components/localizedLink";
import './Selector.scss'

const Selector = props => {
  const { selected, options, locale, activeDoc } = props
  const [listStatus, setListStatus] = useState(false)
  const toggleList = () => {
    setListStatus(!listStatus)
  }
  return <div className="selector-wrapper">
    <div className="selected" onClick={toggleList}>{selected}</div>
    <ul className={`options-wrapper ${listStatus && 'open'}`}>
      {
        options.map(v => (
          <li className={v === selected ? 'active' : ''} key={v}>
            {
              <LocalizeLink
                locale={locale}
                className="text"
                to={`/docs/${v}/${activeDoc.id}`}
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