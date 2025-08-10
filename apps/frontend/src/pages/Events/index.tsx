import "./styles.css";
import {useState} from "react";

interface EventItem {
  time: string;
  type: string;
  title: string;
  speaker?: string;
}

const Events = () => {
  const [selectedDate, setSelectedDate] = useState("7월 2일 (수)");

  // TODO: 백엔드에서 가져 올 데이터
  const dates = ["7월 2일 (수)", "7월 3일 (목)", "7월 4일 (금)", "7월 5일 (토)"];

  // TODO: 백엔드에서 가져 올 데이터

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
    </div>
  );
};

export default Events;
