import "./styles.css";

interface TitleProps {
  title: string;
  showYearFilter?: boolean;
  yearFilterValue?: string;
  onYearChange?: (year: string) => void;
}

const Title = ({
                 title,
                 showYearFilter = false,
                 yearFilterValue = "2025년",
                 onYearChange
               }: TitleProps) => {
  const years = ["2025년", "2024년", "2023년", "2022년", "2021년"];

  return (
    <div className="title-container">
      <div className="title-main">
        <h1 className="page-title">{
          title
        }</h1>

        {showYearFilter && (
          <div className="year-filter">
            <span>연도별 {title} </span>
            <select
              className="year-select"
              value={yearFilterValue}
              onChange={(e) => onYearChange?.(e.target.value)}
            >
              {years.map((year) => (
                <option key={year} value={year}>{year}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default Title;
