import React, { useState, useRef, useEffect } from "react";
import LocalizeLink from "../components/localizedLink";

import "./search.scss";
const DOCS_JSON = require("../search.json");
let timer = null;
const Search = props => {
  const [query, setQuery] = useState("");
  const [focus, setFocus] = useState("");
  const [loading, setLoading] = useState(false);
  const [matchData, setMatchData] = useState([]);
  const ref = useRef(null);
  const containerRef = useRef(null);

  const handleChange = e => {
    setQuery(ref.current.value);
    setLoading(true);
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      const matchData = DOCS_JSON.map(v => {
        const { version, id, fileLang } = v;
        const find = v.values.find(text =>
          text.toLowerCase().includes(ref.current.value.toLowerCase())
        );
        const regx = new RegExp(ref.current.value, "gi");
        const highlight = find
          ? find.replace(regx, search => `<em>${search}</em>`)
          : "";
        return find
          ? {
              title: highlight,
              id,
              lang: fileLang,
              version,
              isId: id === find,
            }
          : "";
      }).filter(v => v);
      setMatchData(matchData);
      setLoading(false);
    }, 400);
  };
  const handleFocus = e => {
    setFocus(true);
  };
  const useClickOutside = (ref, handler, events) => {
    if (!events) events = [`mousedown`, `touchstart`];
    const detectClickOutside = event => {
      !ref.current.contains(event.target) && handler();
    };
    useEffect(() => {
      for (const event of events)
        document.addEventListener(event, detectClickOutside);
      return () => {
        for (const event of events)
          document.removeEventListener(event, detectClickOutside);
      };
    }, []);
  };
  useClickOutside(containerRef, () => setFocus(false));

  return (
    <div className="search-wrapper" ref={containerRef}>
      <input
        placeholder="search"
        value={query}
        onChange={handleChange}
        onFocus={handleFocus}
        ref={ref}
      ></input>
      {query.length && focus ? (
        <ul className="result-list">
          {matchData.length
            ? matchData.map((v, index) => {
                const { lang, version, id, title, isId } = v;
                /* eslint-disable-next-line */
                const normalVal = title.replace(/[\,\/]/g, "");
                const anchor = normalVal.split(" ").join("-");
                return (
                  <li key={index}>
                    <LocalizeLink
                      locale={lang}
                      to={`/docs/${version}/${id}${isId ? "" : `#${anchor}`}`}
                    >
                      <span
                        dangerouslySetInnerHTML={{
                          __html: `${title} ${version} ${
                            lang === "cn" ? "中文" : "en"
                          }`,
                        }}
                      ></span>
                    </LocalizeLink>
                  </li>
                );
              })
            : loading
            ? "Loading"
            : "未查询到数据"}
        </ul>
      ) : null}
    </div>
  );
};

export default Search;
