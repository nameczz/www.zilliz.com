import React, { useEffect, useState, useRef } from "react";
import LocalizeLink from "../components/localizedLink";
import "./Menu.scss";

const findItem = (key, value, arr) => {
  let find = undefined;
  arr.forEach(v => {
    if (find) return;
    if (v[key] === value) {
      find = v;
    } else if (v.children && v.children.length) {
      find = findItem(key, value, v.children);
    }
  });
  return find;
};

const Menu = props => {
  const preLink = "/docs";
  const { menuList, activeDoc } = props;

  const [menuStatus, setMenuStatus] = useState(false);

  const [realMenuList, setRealMenuList] = useState([]);
  useEffect(() => {
    const generateMenu = list => {
      // get all labels , make sure will generate menu from top to bottom
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

        // find top menu by current label
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
            showChildren: true,
            isActive: false,
            isLast: !labelKeys[index],
          };
          if (index === 0) {
            copyMenu.push(item);
          } else {
            const parent = findItem("title", v[parentLabel], copyMenu);
            parent && parent.children.push(item);
          }
        });

        index++;
        return innerFn(copyMenu);
      };
    };

    const checkActive = list => {
      const findDoc = findItem("id", activeDoc, list);
      const labelKeys = Object.keys(findDoc).filter(v => v.includes("label"));

      findDoc.isActive = true;

      labelKeys.forEach(label => {
        const parentDoc = findItem("title", findDoc[label], list);
        parentDoc && (parentDoc.showChildren = true);
      });
    };

    const arr = generateMenu(menuList)();
    checkActive(arr);
    setRealMenuList(arr);
  }, [menuList, activeDoc]);

  const [screenWidth, setScreenWidth] = useState(null);
  useEffect(() => {
    const cb = () => {
      setScreenWidth(document.body.clientWidth);
      setMenuStatus(document.body.clientWidth > 1000);
    };
    cb();
    window.addEventListener("resize", cb);
    return () => {
      window.removeEventListener("resize", cb);
    };
  }, []);

  const menuRef = useRef(null)
  useEffect(() => {
    let targetY = null
    menuRef.current.addEventListener('touchstart', function (e) {
      // use to confirm move direction  clientY-客户区坐标Y 、pageY-页面坐标Y
      targetY = Math.floor(e.targetTouches[0].clientY);
    });
    menuRef.current.addEventListener('touchmove', e => {
      let newTargetY = Math.floor(e.targetTouches[0].clientY)
      let diff = menuRef.current.scrollHeight - document.body.clientHeight
      if (diff <= 0) {
        e.cancelable && e.preventDefault()
        return
      }
      // direction down && touch bottom
      if (newTargetY - targetY < 0 && diff <= menuRef.current.scrollTop) {
        e.cancelable && e.preventDefault()
      } else if (newTargetY - targetY >= 0 && diff > menuRef.current.scrollTop) { // up && touch top
        e.cancelable && e.preventDefault()
      }
    }, true)
  }, [])

  const generageMenuDom = (list, className = "") => {
    return list.map(doc => (
      <div
        className={`${className} ${doc.isLast &&
          "menu-last-level"} ${doc.isActive && "active"}`}
        key={doc.id}
      >
        <div className="menu_name-wrapper">
          {doc.outLink ? (
            <a href={doc.outLink} className="text">
              {doc.title}
            </a>
          ) : doc.isMenu === "true" ? (
            <span className="text">{doc.title}</span>
          ) : (
                <LocalizeLink
                  locale={doc.lang}
                  className="text"
                  to={`${preLink}/${doc.id}`}
                >
                  {doc.title}
                </LocalizeLink>
              )}

          {doc.children && doc.children.length ? (
            <i
              className={`fas fa-chevron-down arrow ${
                doc.showChildren ? "" : "top"
                }`}
              onClick={() => {
                toggleMenuChild(doc);
              }}
            ></i>
          ) : null}
        </div>
        <div className={`menu-child-wrapper ${doc.showChildren ? "open" : ""}`}>
          {doc.children && doc.children.length
            ? generageMenuDom(doc.children, "menu-child")
            : null}
        </div>
      </div>
    ));
  };

  const toggleMenuChild = doc => {
    const copyMenu = JSON.parse(JSON.stringify(realMenuList));
    const findDoc = findItem("title", doc.title, copyMenu);
    findDoc.showChildren = !findDoc.showChildren;
    setRealMenuList(copyMenu);
  };

  const toggleMenu = status => {
    setMenuStatus(status);
  };

  return (
    <>
      <section className={`menu-container ${menuStatus ? "" : "hide"}`} ref={menuRef} >
        {screenWidth <= 1000 ? (
          <i
            className="fas fa-times close"
            onClick={() => {
              toggleMenu(false);
            }}
          ></i>
        ) : null}

        <h1 className="title border-bottom">ZILLIZ ANALYTICS</h1>
        {generageMenuDom(realMenuList, "menu-top-level border-bottom")}

      </section>
      {!menuStatus ? (
        <div
          className="mini-menu-control"
          onClick={() => {
            toggleMenu(true);
          }}
        >
          <i className="fas fa-bars"></i>
        </div>
      ) : null}
    </>
  );
};

export default Menu;
