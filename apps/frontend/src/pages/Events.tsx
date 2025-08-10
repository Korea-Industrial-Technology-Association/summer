import { useState } from "react";

interface EventItem {
  time: string;
  type: string;
  title: string;
  speaker?: string;
}

const Events = () => {
  const [selectedDate, setSelectedDate] = useState("7월 2일 (수)");

  const dates = ["7월 2일 (수)", "7월 3일 (목)", "7월 4일 (금)", "7월 5일 (토)"];

  const eventsData: Record<string, EventItem[]> = {
    "7월 2일 (수)": [
      {
        time: "16:30 - 16:40",
        type: "개회사",
        title: "구자균 회장(한국산업기술진흥협회)"
      },
      {
        time: "16:40 - 17:50",
        type: "기조 강연",
        title: "기술패러다임, 우리의 도전",
        speaker: "유홍림 총장(서울대학교)"
      }
    ],
    "7월 3일 (목)": [
      {
        time: "09:00 - 10:30",
        type: "세션 1",
        title: "디지털 전환과 혁신 전략"
      },
      {
        time: "10:45 - 12:15",
        type: "세션 2",
        title: "지속가능한 미래를 위한 기술"
      }
    ],
    "7월 4일 (금)": [
      {
        time: "09:00 - 10:30",
        type: "세션 3",
        title: "AI와 산업의 미래"
      }
    ],
    "7월 5일 (토)": [
      {
        time: "09:00 - 12:00",
        type: "종료",
        title: "마무리 및 네트워킹"
      }
    ]
  };

  return (
    <div className="events-container">
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

      {/* 선택된 날짜의 이벤트 */}
      <div className="events-content">
        <h2 className="date-title">{selectedDate}</h2>

        <div className="events-list">
          {eventsData[selectedDate]?.map((event, index) => (
            <div key={index} className="event-item">
              <div className="event-time">{event.time}</div>
              <div className="event-details">
                <div className="event-type">{event.type}</div>
                <div className="event-title">{event.title}</div>
                {event.speaker && (
                  <div className="event-speaker">{event.speaker}</div>
                )}
              </div>
            </div>
          )) || (
            <div className="no-events">해당 날짜에 예정된 행사가 없습니다.</div>
          )}
        </div>
      </div>

      <style jsx>{`
        .events-container {
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

        .events-content {
          width: 100%;
        }

        .date-title {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 30px;
          color: #333;
        }

        .events-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .event-item {
          display: flex;
          padding: 20px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          border-left: 4px solid rgb(255, 143, 17);
        }

        .event-time {
          min-width: 140px;
          font-weight: 600;
          color: #333;
          font-size: 14px;
        }

        .event-details {
          flex: 1;
          margin-left: 20px;
        }

        .event-type {
          display: inline-block;
          padding: 4px 12px;
          background: rgb(255, 143, 17);
          color: white;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
          margin-bottom: 8px;
        }

        .event-title {
          font-size: 16px;
          font-weight: 600;
          color: #333;
          margin-bottom: 4px;
        }

        .event-speaker {
          font-size: 14px;
          color: #666;
        }

        .no-events {
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

          .event-item {
            flex-direction: column;
            gap: 10px;
          }

          .event-time {
            min-width: auto;
            margin-bottom: 10px;
          }

          .event-details {
            margin-left: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Events;
