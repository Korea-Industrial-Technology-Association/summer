import Header from "../Header";
import Footer from "../Footer";
import Title from "../Title";
import "./styles.css";
import {useNavigate} from "react-router-dom";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  showYearFilter?: boolean;
  onYearChange?: (year: string) => void;
}

const Layout = ({
                  children,
                  title,
                  showYearFilter = false,
                  onYearChange
                }: LayoutProps) => {
  const yearFilterValue = new Date().getFullYear() + "년"; // 현재 연도를 기본값으로 설정
  const navigate = useNavigate();
  const onClickRegistration = () => {
    navigate("/registration");
  }
  const onClickMyRegistration = () => {
    navigate("/my-registration");
  }

  return (
    <div className="Layout">
      <Header/>

      {/* Hero Section - 모든 페이지 공통 */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="action-buttons">
            <button className="action-button primary" onClick={onClickRegistration}>
              참가신청
            </button>
            <button className="action-button secondary" onClick={onClickMyRegistration}>신청내역/수정</button>
          </div>
        </div>
      </section>

      {/* Main Content Area */
      }
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

      <Footer/>
    </div>
  )
    ;
};

export default Layout;
