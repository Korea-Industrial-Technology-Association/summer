import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./styles.css";
import { DROPDOWN_MENU_ITEMS } from "../../lib/constants/navigation";

interface DropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const Dropdown = ({ isOpen, onClose }: DropdownProps) => {
  // ESC 키로 드롭다운 닫기
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      // 모바일에서 배경 스크롤 방지
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* 배경 오버레이 - 클릭하면 드롭다운 닫힘 */}
      <div
        className={`dropdown-overlay ${isOpen ? 'show' : ''}`}
        onClick={onClose}
      />

      {/* 드롭다운 메뉴 */}
      <div className={`Dropdown ${isOpen ? 'open' : ''}`}>
        <div className="dropdown-header">
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>

        <ul className="dropdown-menu">
          {DROPDOWN_MENU_ITEMS.map((item, index) => (
            <li key={index} className="dropdown-item">
              <Link to={`/${item.path}`} onClick={onClose}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
