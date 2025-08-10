import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <div className="home-page">
      <Header />

      {/* Hero Section with Action Buttons */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              제31회 KOITA<br />
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

      <Footer />

      <style jsx>{`
        .home-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .hero-section {
          background: linear-gradient(135deg,
            #1a1a2e 0%,
            #16213e 25%,
            #0f3460 50%,
            #533483 75%,
            #e94560 100%);
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          color: white;
          text-align: center;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background:
            radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
          padding: 0 20px;
        }

        .hero-text {
          margin-bottom: 40px;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          margin: 0 0 20px 0;
          line-height: 1.2;
        }

        .hero-subtitle {
          font-size: 18px;
          opacity: 0.9;
          margin: 0 0 40px 0;
        }

        .action-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          align-items: center;
        }

        .action-button {
          padding: 15px 30px;
          border-radius: 50px;
          border: 2px solid white;
          background: transparent;
          color: white;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          min-width: 160px;
        }

        .action-button.primary {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
        }

        .action-button:hover {
          background: white;
          color: #1a1a2e;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(255, 255, 255, 0.3);
        }

        .main-content {
          flex: 1;
          background: #f8f9fa;
        }

        .content-wrapper {
          max-width: 1280px;
          margin: 0 auto;
          padding: 60px 20px;
        }

        .event-overview,
        .key-programs {
          margin-bottom: 60px;
        }

        .event-overview h2,
        .key-programs h2 {
          font-size: 32px;
          font-weight: 700;
          text-align: center;
          margin-bottom: 40px;
          color: #333;
        }

        .overview-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .overview-item {
          background: white;
          padding: 30px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .overview-item h3 {
          font-size: 18px;
          font-weight: 600;
          color: rgb(255, 143, 17);
          margin: 0 0 15px 0;
        }

        .overview-item p {
          font-size: 16px;
          color: #666;
          margin: 0;
          line-height: 1.5;
        }

        .programs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .program-card {
          background: white;
          padding: 30px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .program-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
        }

        .program-card h3 {
          font-size: 20px;
          font-weight: 600;
          color: #333;
          margin: 0 0 15px 0;
        }

        .program-card p {
          font-size: 16px;
          color: #666;
          margin: 0;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 32px;
          }

          .hero-subtitle {
            font-size: 16px;
          }

          .action-buttons {
            flex-direction: column;
            gap: 15px;
          }

          .action-button {
            min-width: 200px;
            padding: 12px 25px;
            font-size: 14px;
          }

          .content-wrapper {
            padding: 40px 15px;
          }

          .event-overview h2,
          .key-programs h2 {
            font-size: 24px;
          }

          .overview-grid,
          .programs-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .overview-item,
          .program-card {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
