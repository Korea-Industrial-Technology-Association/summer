import "./styles.css";
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

  // TODO: 백엔드에서 가져올 데이터
  const dates = ["7월 3일 (목)", "7월 4일 (금)"];

  // TODO: 백엔드에서 가져올 데이터
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
    </div>
  );
};

export default Programs;
