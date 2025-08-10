import "./styles.css";
import {Link} from "react-router-dom";
import Dropdown from "../../Dropdown";
import {useState, useRef, useEffect} from "react";
import {HEADER_MENU_ITEMS} from "../../../lib/constants/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // 드롭다운 외부 클릭 감지 (데스크톱용)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="Header">
      <div className="left_child">
        <Link to="/">
          <img src="/header-logo.png" alt="header-logo"/>
        </Link>
      </div>

      <div className="right_child">
        <ul className="menu">
          {HEADER_MENU_ITEMS.map((item, index) => (
            <li key={index}>
              <Link to={`/${item.path}`}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="menu_hamburger" ref={menuRef}>
          <button
            className={`hamburger-button ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="메뉴 열기"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <Dropdown isOpen={isMenuOpen} onClose={closeMenu}/>
        </div>
      </div>
    </div>
  );
};

export default Header;
