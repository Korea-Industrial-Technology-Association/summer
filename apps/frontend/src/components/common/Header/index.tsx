import "./styles.css";
import {Link} from "react-router-dom";
import Dropdown from "../../Dropdown";
import {useState} from "react";
import { HEADER_MENU_ITEMS } from "../../../lib/constants/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return <div className="Header">
    <div className="left_child">
      <Link to="/">
        <img src="/header-logo.png" alt="header-logo"/>
      </Link>
    </div>
    <div className="right_child">
      <ul className="menu">
        {HEADER_MENU_ITEMS.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="menu_hamburger">
        {/*<span>*/}
        {/*  토글*/}
        {/*</span>*/}
        <button
          className={`hamburger-button ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Dropdown isOpen={isMenuOpen} onClose={closeMenu}/>
      </div>
    </div>
  </div>
}

export default Header;
