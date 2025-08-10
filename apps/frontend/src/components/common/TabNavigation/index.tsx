import "./styles.css";

// 탭 하나의 데이터 구조
interface Tab {
  id: string;      // 탭을 구분하는 고유 식별자
  label: string;   // 탭에 표시될 텍스트
  count?: number;  // 선택사항: 탭 옆에 표시될 숫자 (예: "공지사항 (5)")
}

// TabNavigation 컴포넌트가 받을 props
interface TabNavigationProps {
  tabs: Tab[];                              // 표시할 탭들의 배열
  activeTab: string;                        // 현재 활성화된 탭의 id
  onTabChange: (tabId: string) => void;     // 탭이 클릭됐을 때 실행할 함수
}

const TabNavigation = ({ tabs, activeTab, onTabChange }: TabNavigationProps) => {
  return (
    <div className="tab-navigation">
      {/* tabs 배열을 순회하면서 각 탭을 버튼으로 렌더링 */}
      {tabs.map(tab => (
        <button
          key={tab.id}  // React에서 리스트 아이템을 구분하기 위한 고유 키
          // 현재 탭이 활성 탭인지 확인해서 'active' 클래스 추가/제거
          className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
          // 탭 클릭 시 부모 컴포넌트의 onTabChange 함수 호출
          onClick={() => onTabChange(tab.id)}
        >
          {/* 탭 이름 표시 */}
          {tab.label}
          {/* count가 있으면 괄호 안에 숫자 표시 (예: "(5)") */}
          {tab.count !== undefined && (
            <span className="tab-count">({tab.count})</span>
          )}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
