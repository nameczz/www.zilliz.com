import React, { useEffect, useState } from "react";
import LocalizeLink from "../components/localizedLink";
import './Menu.scss'

const findItem = (key, arr) => {
  let find = undefined;
  arr.forEach(v => {
    if (v.title === key) {
      find = v;
      return
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
        let copyMenu = JSON.parse(JSON.stringify(formatMenu))
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

  const generageMenuDom = (list, className="") =>{
    return list.map(doc => (
      <div className={className} key={doc.id}>
        <LocalizeLink locale={doc.lang} to={`${preLink}/${doc.id}`}>
          {doc.title}
        </LocalizeLink>
        {
          doc.children && doc.children.length ?
            generageMenuDom(doc.children, 'menu-child') : null
        }
      </div>
    ))
  }

  return (
    <section className="menu-container">
      {generageMenuDom(realMenuList, 'menu-item')}
    </section>
  );
};

export default Menu;
