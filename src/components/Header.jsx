import { useState, useEffect } from "react";
import { HeaderStyled } from "./styled/HeaderStyle";
import { Menu } from "@styled-icons/feather/Menu";
import { Close } from "@styled-icons/evil/Close";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  if (menuOpen) {
    document?.querySelector(".headerNav")?.classList.add("open");
    document.querySelector("body").style.height = "100%";
    document.querySelector("body").style.overflow = "hidden";
  } else {
    document?.querySelector(".headerNav")?.classList.remove("open");
    document.querySelector("body").style.overflow = "unset";
  }

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
    document?.querySelector(".headerNav")?.classList.toggle("open");
  };

  const closeNav = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      document?.querySelector(".header")?.classList?.add("inView");
    }, 300);
  }, []);

  return (
    <HeaderStyled className="head">
      <div className="header">
        <a href="/">
          <span className="logo">{"<TomiPter />"}</span>
        </a>
        <div className="themeNav">
          <div className="menu">
            <button className="btnImg menu" onClick={handleMenu}>
              {menuOpen ? <Close /> : <Menu />}
            </button>
          </div>
          <nav className="headerNav">
            <ul>
              <li onClick={closeNav}>
                <a href="#work">Work</a>
              </li>
              <li onClick={closeNav}>
                <a href="#about">About Me</a>
              </li>
              <li onClick={closeNav}>
                <a href="#contact">Contact</a>
              </li>
              <a href="/" download>
                <li className="resume" onClick={closeNav}>
                  Resumé
                </li>
              </a>
            </ul>
          </nav>
        </div>
      </div>
    </HeaderStyled>
  );
}

export default Header;
