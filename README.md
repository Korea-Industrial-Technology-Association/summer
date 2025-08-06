# KOITA Summer Forum Management System

한국산업기술진흥협회(KOITA) 하계포럼 관리 시스템 - TypeScript 기반 풀스택 모노레포

## 🎯 프로젝트 개요

Java Spring Boot로 구현된 기존 KOITA 하계포럼 관리 시스템을 TypeScript + NestJS + React로 마이그레이션한 프로젝트입니다. 참가 신청, 숙박/항공 예약, 골프/투어 관리, 강의 시스템 등의 기능을 포함합니다.

## 📁 프로젝트 구조

```
koita-summer/
├── package.json                 # 루트 패키지 설정 & 스크립트
├── pnpm-workspace.yaml          # pnpm 워크스페이스 설정
├── turbo.json                   # Turbo 빌드 최적화 설정
├── apps/                        # 실행 가능한 애플리케이션들
│   ├── backend/                 # NestJS API 서버 (예정)
│   └── frontend/                # React 클라이언트 앱 (예정)
└── packages/                    # 공유 패키지들
    ├── shared/                  # 공통 타입, enum, 유틸리티
    │   ├── src/
    │   │   ├── enums/          # 비즈니스 도메인 enum (21개)
    │   │   ├── types/          # TypeScript 타입 정의
    │   │   ├── utils/          # 유틸리티 함수
    │   │   └── validators/     # 데이터 검증 로직
    │   └── package.json
    └── api-client/              # 자동 생성 API 클라이언트 (예정)
```

## 🏗️ 아키텍처 특징

### 모노레포 구조
- **pnpm workspace**: 효율적인 의존성 관리와 패키지 간 연결
- **Turbo**: 빌드 캐싱과 병렬 실행으로 개발 생산성 향상
- **타입 공유**: 프론트엔드/백엔드 간 완전한 타입 안전성

### 기술 스택
- **백엔드**: NestJS + Drizzle ORM + PostgreSQL
- **프론트엔드**: React + TypeScript
- **공통**: TypeScript, pnpm, Turbo

## 🚀 빠른 시작

### 사전 요구사항
- Node.js >= 18.0.0
- pnpm >= 8.0.0

### 1. 저장소 클론 및 의존성 설치
```bash
git clone <repository-url>
cd koita-summer
pnpm install
```

### 2. 공통 패키지 빌드
```bash
pnpm run build:shared
```

### 3. 개발 서버 실행
```bash
# 전체 프로젝트 개발 모드
pnpm run dev

# 개별 패키지 실행
pnpm run dev:backend    # 백엔드만
pnpm run dev:frontend   # 프론트엔드만
pnpm run dev:shared     # 공통 패키지만
```

### 4. 빌드 및 검증
```bash
# 전체 빌드
pnpm run build

# 타입 체크
pnpm run type-check

# 린트 검사
pnpm run lint
```

## 📦 패키지 상세

### @koita/shared
비즈니스 도메인의 핵심 타입과 상수들을 정의합니다.

#### 포함된 Enum (21개)
| 분류 | Enum | 설명 |
|------|------|------|
| **참가 관리** | `AttendStatus` | 참가 신청 상태 (신청전/신청중/완료/취소) |
| | `AttenderType` | 참가자 유형 (개인/동반/가족) |
| | `AttenderAge` | 참가자 연령대 |
| | `Role` | 사용자 권한 |
| **결제** | `DepositStatus` | 입금 상태 |
| | `TaxBillIssuanceType` | 세금계산서 발행 유형 |
| | `TaxBillPublishStatus` | 세금계산서 발행 상태 |
| **가족/관계** | `FamilyRelation` | 가족 관계 |
| | `FamilyGroupType` | 대표/직원 구분 |
| **숙박** | `HotelRoomType` | 호텔 객실 유형 |
| | `HotelBedType` | 침대 타입 |
| **항공** | `FlightWay` | 항공편 구분 |
| | `FlightCostType` | 항공료 유형 |
| | `LeavingType` | 출발/귀국편 구분 |
| **레저** | `GolfCourseName` | 골프장명 |
| | `GolfOrderType` | 골프 참가 상태 |
| | `TourType` | 투어 유형 |
| **교육** | `LectureType` | 강의 분야 |
| **시스템** | `KoitaFileType` | 파일 유형 |
| | `Gender` | 성별 |

#### 사용 예시
```typescript
import { AttendStatus, AttendStatusDescription } from '@koita/shared';

// enum 값 사용
const status = AttendStatus.APPLYING;

// 설명 텍스트 가져오기
const description = AttendStatusDescription[AttendStatus.APPLYING]; // "신청중"

// 유틸리티 함수 사용 (일부 enum)
import { findTaxBillIssuanceType } from '@koita/shared';
const billType = findTaxBillIssuanceType(true, false, false);
```

## 🛠 개발 환경

### 코드 품질
- **TypeScript**: 전체 프로젝트 타입 안전성
- **ESLint**: 코드 스타일 및 오류 검사  
- **Prettier**: 코드 포매팅 자동화

### 빌드 시스템
- **Turbo**: 증분 빌드와 캐싱으로 빌드 속도 최적화
- **pnpm**: 디스크 공간 효율적인 패키지 관리

### 스크립트
```bash
# 개발
pnpm dev                 # 전체 개발 모드
pnpm dev:backend         # 백엔드만
pnpm dev:frontend        # 프론트엔드만

# 빌드
pnpm build               # 전체 빌드
pnpm build:backend       # 백엔드만
pnpm build:frontend      # 프론트엔드만

# 품질 검사
pnpm type-check          # TypeScript 타입 체크
pnpm lint                # ESLint 검사
pnpm test                # 테스트 실행

# 유틸리티
pnpm clean               # 빌드 결과물 정리
pnpm generate:types      # API 타입 생성
```

## 🗓 개발 로드맵

### ✅ 완료
- [x] 모노레포 기본 구조 설정
- [x] Java enum을 TypeScript로 완전 마이그레이션 (21개)
- [x] 공통 패키지 구조 정립

### 🚧 진행 예정
- [ ] NestJS 백엔드 애플리케이션 생성
- [ ] React 프론트엔드 애플리케이션 생성  
- [ ] Drizzle ORM 스키마 정의
- [ ] API 엔드포인트 구현
- [ ] 인증/권한 시스템
- [ ] 프론트엔드 UI 구현

## 🤝 기여 방법

1. 이슈 생성 또는 확인
2. 기능 브랜치 생성 (`git checkout -b feature/amazing-feature`)
3. 변경사항 커밋 (`git commit -m 'Add amazing feature'`)
4. 브랜치 푸시 (`git push origin feature/amazing-feature`)
5. Pull Request 생성

## 📄 라이선스

이 프로젝트는 한국산업기술진흥협회의 내부 프로젝트입니다.