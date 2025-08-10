import {Link} from "react-router-dom";
import "./styles.css";
import { DROPDOWN_MENU_ITEMS } from "../../lib/constants/navigation";

interface DropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const Dropdown = (props: DropdownProps) => {
  const {isOpen, onClose} = props;

  return <>
    <div className={`Dropdown ${isOpen ? 'open' : ''}`}>
      <div className="dropdown-header">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
      </div>
      <ul className="dropdown-menu">
        {DROPDOWN_MENU_ITEMS.map((item, index) => (
          <li key={index} className="dropdown-item">
            <Link to={item.path} onClick={onClose}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </>
}

export default Dropdown;
