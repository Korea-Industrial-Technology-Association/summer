import { useState } from "react";

interface ProgramItem {
  id: number;
  title: string;
  subtitle: string;
  adultPrice: string;
  childPrice: string;
  image: string;
}

const Programs = () => {
  const [selectedDate, setSelectedDate] = useState("7월 3일 (목)");

  const dates = ["7월 3일 (목)", "7월 4일 (금)"];

  const programsData: Record<string, ProgramItem[]> = {
    "7월 3일 (목)": [
      {
        id: 1,
        title: "섬 투 어",
        subtitle: "섬 속의 섬 우도8경 투어",
        adultPrice: "성인 95,000원",
        childPrice: "소인 90,000원",
        image: "/2025_pc_back.png"
      }
    ],
    "7월 4일 (금)": [
      {
        id: 2,
        title: "골프 투어",
        subtitle: "제주 골프장 라운딩",
        adultPrice: "성인 120,000원",
        childPrice: "소인 100,000원",
        image: "/2025_mobile-back.png"
      }
    ]
  };

  return (
    <div className="programs-container">
      {/* 날짜 탭 */}
      <div className="date-tabs">
        {dates.map((date) => (
          <button
            key={date}
            className={`date-tab ${selectedDate === date ? 'active' : ''}`}
            onClick={() => setSelectedDate(date)}
          >
            {date}
          </button>
        ))}
      </div>

      {/* 선택된 날짜의 프로그램 */}
      <div className="programs-content">
        <h2 className="date-title">{selectedDate}</h2>

        <div className="programs-grid">
          {programsData[selectedDate]?.map((program) => (
            <div key={program.id} className="program-card">
              <div className="program-image">
                <img src={program.image} alt={program.title} />
              </div>

              <div className="program-info">
                <div className="program-header">
                  <h3 className="program-title">{program.title}</h3>
                  <p className="program-subtitle">{program.subtitle}</p>
                  <p className="program-detail">
                    중식(전복죽메뉴) → 우도8경 투어(잠월마을, 서빈백사 등)
                  </p>
                </div>

                <div className="program-pricing">
                  <div className="price-item">
                    <span className="price">{program.adultPrice}</span>
                  </div>
                  <div className="price-item">
                    <span className="price">{program.childPrice}</span>
                  </div>
                  <p className="price-note">※ 식비포함 필참</p>
                </div>
              </div>
            </div>
          )) || (
            <div className="no-programs">해당 날짜에 예정된 프로그램이 없습니다.</div>
          )}
        </div>
      </div>

      <style jsx>{`
        .programs-container {
          width: 100%;
        }

        .date-tabs {
          display: flex;
          border-bottom: 2px solid #f0f0f0;
          margin-bottom: 30px;
          overflow-x: auto;
        }

        .date-tab {
          padding: 12px 24px;
          border: none;
          background: transparent;
          font-size: 16px;
          font-weight: 500;
          color: #666;
          cursor: pointer;
          white-space: nowrap;
          border-bottom: 3px solid transparent;
          transition: all 0.3s ease;
        }

        .date-tab:hover {
          color: rgb(255, 143, 17);
        }

        .date-tab.active {
          color: rgb(255, 143, 17);
          border-bottom-color: rgb(255, 143, 17);
        }

        .programs-content {
          width: 100%;
        }

        .date-title {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 30px;
          color: #333;
        }

        .programs-grid {
          display: grid;
          gap: 30px;
        }

        .program-card {
          display: flex;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border: 1px solid #e5e7eb;
        }

        .program-image {
          flex: 1;
          min-height: 200px;
          background: #f3f4f6;
        }

        .program-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .program-info {
          flex: 1;
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .program-header {
          margin-bottom: 20px;
        }

        .program-title {
          font-size: 24px;
          font-weight: 700;
          color: rgb(255, 143, 17);
          margin: 0 0 8px 0;
        }

        .program-subtitle {
          font-size: 18px;
          font-weight: 600;
          color: #333;
          margin: 0 0 12px 0;
        }

        .program-detail {
          font-size: 14px;
          color: #666;
          line-height: 1.5;
          margin: 0;
        }

        .program-pricing {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .price-item {
          display: flex;
          align-items: center;
        }

        .price {
          font-size: 16px;
          font-weight: 600;
          color: #333;
        }

        .price-note {
          font-size: 12px;
          color: #666;
          margin: 8px 0 0 0;
          font-style: italic;
        }

        .no-programs {
          text-align: center;
          padding: 40px;
          color: #999;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .date-tab {
            padding: 10px 16px;
            font-size: 14px;
          }

          .program-card {
            flex-direction: column;
          }

          .program-image {
            min-height: 150px;
          }

          .program-info {
            padding: 20px;
          }

          .program-title {
            font-size: 20px;
          }

          .program-subtitle {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default Programs;
