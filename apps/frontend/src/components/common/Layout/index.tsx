import Header from "../Header";
import Footer from "../Footer";
import Title from "../Title";
import "./styles.css";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  showYearFilter?: boolean;
  yearFilterValue?: string;
  onYearChange?: (year: string) => void;
}

const Layout = ({
  children,
  title,
  showYearFilter = false,
  yearFilterValue = "2025년",
  onYearChange
}: LayoutProps) => {
  return (
    <div className="Layout">
      <Header />

      {/* Hero Section - 모든 페이지 공통 */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="action-buttons">
            <button className="action-button primary">참가신청</button>
            <button className="action-button secondary">신청내역/수정</button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="main-container">
        <div className="content-wrapper">
          <Title
            title={title}
            showYearFilter={showYearFilter}
            yearFilterValue={yearFilterValue}
            onYearChange={onYearChange}
          />

          {/* 페이지별 콘텐츠가 여기에 들어감 */}
          <div className="page-content">
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
