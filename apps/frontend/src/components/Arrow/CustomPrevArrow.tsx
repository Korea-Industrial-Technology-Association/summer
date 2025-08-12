import "./styles.css";

interface CustomPrevArrowProps {
  onClick?: () => void;
}

const CustomPrevArrow = (props: CustomPrevArrowProps) => {
  return (<div className="custom-arrow custom-prev" onClick={props.onClick}>
    ‹
  </div>)
}

export default CustomPrevArrow;
