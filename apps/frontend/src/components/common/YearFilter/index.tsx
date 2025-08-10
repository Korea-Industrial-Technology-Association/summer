import "./styles.css";

interface YearFilterProps {
  selectedYear: string;
  onYearChange: (year: string) => void;
  years?: string[];
  label?: string;
}

const YearFilter = ({ 
  selectedYear, 
  onYearChange, 
  years = ['2025', '2024', '2023'],
  label = "연도별"
}: YearFilterProps) => {
  return (
    <div className="year-filter">
      <label className="year-filter-label">
        {label}
      </label>
      <select 
        className="year-filter-select"
        value={selectedYear}
        onChange={(e) => onYearChange(e.target.value)}
      >
        {years.map(year => (
          <option key={year} value={year}>
            {year}년
          </option>
        ))}
      </select>
    </div>
  );
};

export default YearFilter;
