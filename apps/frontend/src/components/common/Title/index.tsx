import "./styles.css";

interface TitleProps {
  title: string;
  onToggle?: () => void;
};

const Title = (props: TitleProps) => {
  return (
    <div className={"main-container-title_box"}>
      <h1 className={"main-container-title_text"}>
        {props.title}
      </h1>
      {props.onToggle && (
        <p className={"main-container-title_subtext"}>
          {props.title}
        </p>
      )}
      <button
        className="toggle-button"
        onClick={props.onToggle}
      />
    </div>
  );
}

export default Title;
