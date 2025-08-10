import "./styles.css";
import {Footer, Header} from "../../components/common";

const Home = () => {
  return (
    <div className="home-page">
      <Header/>

      {/* Hero Section with Action Buttons */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              제31회 KOITA<br/>
              기술경영인 하계포럼
            </h1>
            <p className="hero-subtitle">
              혁신과 성장을 위한 기술경영 리더들의 만남
            </p>
          </div>

          <div className="action-buttons">
            <button className="action-button primary">참가신청</button>
            <button className="action-button secondary">신청내역/수정</button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-wrapper">
          {/* 행사 개요 */}
          <section className="event-overview">
            <h2>행사 개요</h2>
            <div className="overview-grid">
              <div className="overview-item">
                <h3>일시</h3>
                <p>2025년 7월 2일(수) ~ 7월 5일(토)</p>
              </div>
              <div className="overview-item">
                <h3>장소</h3>
                <p>제주도 라마다플라자 제주호텔</p>
              </div>
              <div className="overview-item">
                <h3>주제</h3>
                <p>기술혁신과 지속가능한 성장</p>
              </div>
              <div className="overview-item">
                <h3>참가대상</h3>
                <p>기술경영인, 연구개발 책임자 등</p>
              </div>
            </div>
          </section>

          {/* 주요 프로그램 */}
          <section className="key-programs">
            <h2>주요 프로그램</h2>
            <div className="programs-grid">
              <div className="program-card">
                <h3>기조 강연</h3>
                <p>기술패러다임의 변화와 우리의 도전</p>
              </div>
              <div className="program-card">
                <h3>패널 토론</h3>
                <p>디지털 전환 시대의 기술경영 전략</p>
              </div>
              <div className="program-card">
                <h3>네트워킹</h3>
                <p>기술경영인들 간의 교류 및 정보 공유</p>
              </div>
              <div className="program-card">
                <h3>문화 체험</h3>
                <p>제주도 우도8경 투어 및 골프</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer/>
    </div>
  );
};

export default Home;
