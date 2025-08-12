import "./styles.css";

interface CustomNextArrowProps {
  onClick?: () => void;
}

const CustomNextArrow = (props: CustomNextArrowProps) => {
  return (<button className="custom-arrow custom-next" onClick={props.onClick}>
    ›
  </button>)
}

export default CustomNextArrow;
