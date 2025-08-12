import "./styles.css";

interface CustomNextArrowProps {
  onClick?: () => void;
}

const CustomNextArrow = (props: CustomNextArrowProps) => {
  return (<div className="custom-arrow custom-next" onClick={props.onClick}>
    ›
  </div>)
}

export default CustomNextArrow;
