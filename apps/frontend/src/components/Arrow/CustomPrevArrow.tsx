import "./styles.css";

interface CustomPrevArrowProps {
  onClick?: () => void;
}

const CustomPrevArrow = (props: CustomPrevArrowProps) => {
  return (<button className="custom-arrow custom-prev" onClick={props.onClick}>
    ‹
  </button>)
}

export default CustomPrevArrow;
