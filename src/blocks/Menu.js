import React, { useEffect, useState } from "react";
import LocalizeLink from "../components/localizedLink";
import arrow from "../images/icons/arrow.svg";
import "./Menu.scss";

const findItem = (key, arr) => {
  let find = undefined;
  arr.forEach(v => {
    if (v.title === key) {
      find = v;
      return;
    }
    if (v.children && v.children.length) {
      find = findItem(key, v.children);
    }
  });
  return find;
};

const Menu = props => {
  const preLink = "/docs";
  const { menuList } = props;

  const [realMenuList, setRealMenuList] = useState([]);
  useEffect(() => {
    const generateMenu = list => {
      const labelKeys = Object.keys(menuList[0])
        .filter(v => v.includes("label"))
        .sort((a, b) => a[a.length - 1] - b[b.length - 1]);
      let index = 0;
      return function innerFn(formatMenu = []) {
        let copyMenu = JSON.parse(JSON.stringify(formatMenu));
        const parentLabel = index ? labelKeys[index - 1] : "";

        if (index && !parentLabel) {
          return copyMenu;
        }

        // top level menu
        const topMenu = list.filter(v => {
          if (!labelKeys[index] || !v[labelKeys[index]]) {
            return index > 0 ? (v[parentLabel] ? true : false) : true;
          }
          return false;
        });

        topMenu.forEach(v => {
          const item = {
            ...v,
            children: [],
            showChildren: false,
          };
          if (index === 0) {
            copyMenu.push(item);
          } else {
            const parent = findItem(v[parentLabel], copyMenu);
            parent && parent.children.push(item);
          }
        });

        index++;
        return innerFn(copyMenu);
      };
    };

    setRealMenuList(generateMenu(menuList)());
  }, [menuList]);

  const generageMenuDom = (list, className = "") => {
    return list.map((doc, index) => (
      <div className={className} key={doc.id}>
        <div className="menu_name-wrapper">
          <LocalizeLink locale={doc.lang} to={`${preLink}/${doc.id}`}>
            {doc.title}
          </LocalizeLink>

          {doc.children && doc.children.length ? (
            <img
              src={arrow}
              alt="arrow"
              className={`arrow ${doc.showChildren ? 'top' : ''}`}
              onClick={() => {
                toggleMenu(doc);
              }}
            ></img>
          ) : null}
        </div>
        <div className={`menu-child-wrapper ${doc.showChildren ? 'open' : ''}`} >
          {doc.children && doc.children.length
            ? generageMenuDom(doc.children, "menu-child")
            : null}
        </div>
      </div>
    ));
  };

  const toggleMenu = doc => {
    const copyMenu = JSON.parse(JSON.stringify(realMenuList))
    const findDoc = findItem(doc.title, copyMenu);
    findDoc.showChildren = !findDoc.showChildren
    setRealMenuList(copyMenu);
  };

  return (
    <section className="menu-container">
      {generageMenuDom(realMenuList, "menu-top-level")}
    </section>
  );
};

export default Menu;
