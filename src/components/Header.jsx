import React, { useState } from "react"; //useState 변수를 쓰겠다고 선언해줘야 함

const headerNav = [
    {
        title: "intro",
        url: "#intro"
    },
    {
        title: "skill",
        url: "#skill"
    },
    {
        title: "site",
        url: "#site"
    },
    {
        title: "portfolio",
        url: "#port"
    },
    {
        title: "contact",
        url: "#contact"
    }
];

const Header = () => {
    const [show, setShow] = useState(false); //처음에 값은 아무것도 없기때문에 false로 처리/ show, setShow: 상태변수값
    const toggleMenu = () => {
        setShow((prevShow) => !prevShow); // true가 되면 false가 되고, false가 되면 true가 되라
  } //화살표함수, 일반함수 차이점 알아두기 체크! 

  return (
    <header id="header" role="banner">
        <div className="header__inner">
            <div className="header__logo">
                <h1><a href="/">portfolio<em>react.js</em></a></h1>
            </div>
            <nav 
                className={`header__nav ${show ? "show" : ""}`} role="navigation" 
                aria-label="메인메뉴"
            >
            {/* 클래스에 show가 붙'거나 아니라면'(?) 아무것도 없게/= show의 값이 true면 show를 붙여주고, false면 아무것도 없게!!  */}
                <ul>
                    {headerNav.map((nav, key) => ( //key:index
                        <li key={key}>
                            <a href={nav.url}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div
                className="header__nav__mobile" 
                id="headerToggle" 
                aria-controls="primary-menu" 
                aria-expanded={show ? "true" : "false"} 
                role="button" 
                tabIndex="0" 
                onClick={toggleMenu}
            > 
          {/* show라면(?) 트루, 아니라면(:) false */}
                <span></span>
            </div>
        </div>
    </header>
    );
};

export default Header;