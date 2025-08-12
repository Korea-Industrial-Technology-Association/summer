import "./styles.css";

interface CheckBoxProps {
  title: string;
  must: boolean;
  description: string[];
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CheckBox = (props: CheckBoxProps) => {
  return <div className="checkbox-wrapper">
    <h3>
      {props.title}
      {props.must && <span className="checkbox-must">(필수)</span>}
    </h3>
    <div className="checkbox-term-wrapper">
      {props.description && <ul className="checkbox-description">{
        props.description.map((description, idx) => {
          return <li key={idx}> · {description}</li>;
        })}</ul>}
    </div>
    <label className="checkbox-label">
      <input
        type="checkbox"
        checked={props.checked}
        onChange={(e) => props.onChange(e.target.checked)}
      />
      <span className="checkbox-custom">본인은 위 항목의 내용을 확인하였으며, 위와 같이 개인정보를 수집 및 이용하는 것에 동의합니다.</span>
    </label>
  </div>
}

export default CheckBox;
