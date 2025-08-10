# KOITA Summer Forum Frontend

KOITA 하계포럼 프론트엔드 애플리케이션

## 🚀 기술 스택

- **React 19** + **TypeScript**
- **Vite** (빌드 도구)
- **React Router DOM** (라우팅)
- **Tailwind CSS** (스타일링)

## 📁 프로젝트 구조

```
src/
├── components/
│   ├── common/           # 공통 컴포넌트
│   │   ├── Layout/       # 페이지 레이아웃
│   │   ├── Header/       # 헤더
│   │   ├── Footer/       # 푸터
│   │   ├── Title/        # 페이지 타이틀
│   │   ├── Button/       # 버튼 컴포넌트
│   │   ├── Loading/      # 로딩 컴포넌트
│   │   └── Table/        # 테이블 컴포넌트
│   └── Dropdown/         # 드롭다운 메뉴
├── pages/                # 페이지 컴포넌트들
├── lib/
│   └── constants/        # 상수 정의
├── hooks/                # 커스텀 훅
├── store/                # 상태 관리
└── assets/               # 정적 자원
```

## 🏗️ Layout 시스템

### 기본 Layout 사용법

```tsx
import { Layout } from "../components/common";

// 기본 사용
<Layout title="페이지 제목">
  <YourPageContent />
</Layout>

// 연도 필터가 있는 페이지
<Layout title="행사일정" showYearFilter>
  <EventsContent />
</Layout>
```

### Layout Props

```tsx
interface LayoutProps {
  children: React.ReactNode;
  title: string;                    // 페이지 제목
  showYearFilter?: boolean;         // 연도 필터 표시 여부
  yearFilterValue?: string;         // 선택된 연도
  onYearChange?: (year: string) => void; // 연도 변경 핸들러
}
```

## 🧩 공통 컴포넌트

### Button 컴포넌트

```tsx
import { Button } from "../components/common";

// 기본 사용
<Button onClick={() => console.log('clicked')}>
  클릭하세요
</Button>

// 다양한 variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>

// 다양한 sizes
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>
```

### Table 컴포넌트

```tsx
import { Table } from "../components/common";

const columns = [
  {
    key: 'id',
    title: '번호',
    width: '80px',
    align: 'center' as const
  },
  {
    key: 'title',
    title: '제목',
    align: 'left' as const,
    render: (value: string, record: any) => (
      <a href={`/detail/${record.id}`}>{value}</a>
    )
  }
];

<Table 
  columns={columns}
  data={tableData}
  loading={isLoading}
  emptyText="데이터가 없습니다."
/>
```

### Loading 컴포넌트

```tsx
import { Loading } from "../components/common";

// 기본 사용
<Loading />

// 커스텀 텍스트
<Loading text="데이터를 불러오는 중..." />

// 전체 화면 오버레이
<Loading overlay text="처리 중..." />

// 다양한 크기
<Loading size="small" />
<Loading size="large" />
```

## 🎨 스타일링

- **CSS Modules**: 컴포넌트별 스타일링
- **Tailwind CSS**: 유틸리티 클래스
- **반응형 디자인**: 모바일 우선 접근

### 색상 시스템

```css
/* Primary Color */
rgb(255, 143, 17)  /* KOITA 오렌지 */

/* Gray Scale */
#333               /* 진한 텍스트 */
#666               /* 중간 텍스트 */
#999               /* 연한 텍스트 */
#f8f9fa            /* 배경색 */
```

## 🛣️ 라우팅

```tsx
// 홈페이지 (특별한 레이아웃)
<Route path="/" element={<Home />} />

// 일반 페이지 (공통 Layout 사용)
<Route path="/notices" element={
  <Layout title="공지사항">
    <Notice />
  </Layout>
} />
```

## 📱 반응형 디자인

- **Desktop**: > 850px
- **Mobile**: ≤ 850px

주요 브레이크포인트에서 햄버거 메뉴, 레이아웃 조정 등이 적용됩니다.

## 🚀 개발 시작하기

```bash
# 의존성 설치
pnpm install

# 개발 서버 시작
pnpm dev

# 빌드
pnpm build

# 타입 체크
pnpm type-check

# 린트
pnpm lint
```

## 📝 새 페이지 추가하기

1. `src/pages/` 에 새 페이지 컴포넌트 생성
2. `src/App.tsx` 에 라우트 추가
3. `src/lib/constants/navigation.ts` 에 메뉴 아이템 추가 (필요시)

```tsx
// 새 페이지 예시
const NewPage = () => {
  return (
    <div>
      <h2>새 페이지 내용</h2>
      {/* 페이지 컨텐츠 */}
    </div>
  );
};

// App.tsx에 라우트 추가
<Route path="/new-page" element={
  <Layout title="새 페이지">
    <NewPage />
  </Layout>
} />
```
