# KOITA 하계포럼 프로젝트 코드 스타일 가이드

## 언어 설정
- 모든 코드 리뷰 및 피드백은 **한국어**로 제공해주세요.
- 댓글과 설명은 한국어로 작성하며, 기술 용어는 적절히 영어와 함께 사용합니다.

## 프로젝트 개요
- **모노레포 구조**: frontend (React + TypeScript), backend (NestJS + TypeScript) 포함
- **Frontend**: React + TypeScript + Vite + React Router
- **Backend**: NestJS + TypeScript + Drizzle ORM + MySQL/PostgreSQL
- **CSS 모듈** 또는 **별도 CSS 파일** 스타일링

## 코딩 스타일 가이드

### Frontend (React + TypeScript)

#### React 컴포넌트
- **함수형 컴포넌트** 사용 (클래스형 컴포넌트 지양)
- **React Hooks** 적극 활용 (useState, useEffect, useCallback 등)
- 컴포넌트명은 **PascalCase** 사용
- Props 인터페이스는 컴포넌트명 + `Props` 형태로 명명

#### TypeScript
- **strict 모드** 준수
- 모든 함수와 변수에 적절한 타입 명시
- `any` 타입 사용 지양, 구체적인 타입 정의 권장
- 인터페이스는 **PascalCase**, 변수는 **camelCase** 사용

#### CSS/스타일링
- 각 페이지/컴포넌트별로 **별도 CSS 파일** 관리
- 클래스명은 **kebab-case** 사용
- 반응형 디자인을 위한 **미디어 쿼리** 적극 활용
- CSS 주석을 통한 스타일 목적 설명

### Backend (NestJS + TypeScript + Drizzle)

#### NestJS 아키텍처
- **MVC 패턴** 및 **레이어드 아키텍처** 준수
- **Controller**, **Service**, **Repository** 계층 분리
- **의존성 주입(DI)** 패턴 적극 활용
- **모듈 기반** 구조로 관심사 분리

#### TypeScript (Backend)
- **strict 모드** 준수 및 강타입 활용
- **데코레이터** 적절한 사용 (`@Controller`, `@Injectable`, `@Get` 등)
- **DTO(Data Transfer Object)** 클래스로 API 스펙 명확화
- **Generic 타입** 활용으로 재사용성 증대

#### Drizzle ORM
- **타입 안전한** 쿼리 작성
- **스키마 정의**를 통한 데이터베이스 구조 관리
- **마이그레이션** 파일로 데이터베이스 변경 이력 관리
- 복잡한 쿼리는 **Raw SQL**보다 **쿼리 빌더** 우선 사용

#### RESTful API 설계
- **HTTP 메소드** 적절한 사용 (GET, POST, PUT, DELETE)
- **리소스 중심** URL 설계 (`/users/:id`, `/posts/:id/comments`)
- **응답 코드** 명확한 사용 (200, 201, 400, 404, 500 등)
- **페이지네이션**, **필터링**, **정렬** 지원

#### 데이터베이스 설계
- **정규화/비정규화** 상황에 맞는 적절한 적용
- **인덱스** 성능을 고려한 설계
- **외래 키 제약조건** 데이터 무결성 보장
- **JOIN 쿼리** 최적화 고려

### 공통 가이드
- **명확한 변수명**과 **함수명** 사용
- **주석**을 통한 복잡한 로직 설명
- **에러 처리** 적절히 구현

### OOP 및 SOLID 원칙
프로젝트의 모든 OOP 관련 코드는 **SOLID 원칙**을 준수해야 합니다.

#### S - Single Responsibility Principle (단일 책임 원칙)
- 하나의 클래스는 하나의 책임만 가져야 합니다
- 변경의 이유가 하나여야 합니다

#### O - Open/Closed Principle (개방-폐쇄 원칙)  
- 확장에는 열려있고, 수정에는 닫혀있어야 합니다
- 새로운 기능 추가 시 기존 코드 수정을 최소화해야 합니다

#### L - Liskov Substitution Principle (리스코프 치환 원칙)
- 상위 타입의 객체를 하위 타입의 객체로 치환해도 프로그램이 정상 작동해야 합니다
- 상속 관계에서 IS-A 관계를 올바르게 구현해야 합니다

#### I - Interface Segregation Principle (인터페이스 분리 원칙)
- 클라이언트는 자신이 사용하지 않는 메서드에 의존하지 않아야 합니다
- 큰 인터페이스를 작은 인터페이스들로 분리해야 합니다

#### D - Dependency Inversion Principle (의존관계 역전 원칙)
- 상위 모듈은 하위 모듈에 의존해서는 안됩니다
- 추상화에 의존해야 하며, 구체화에 의존해서는 안됩니다

## 파일/폴더 구조

### Frontend
\`\`\`
apps/frontend/
├── src/
│   ├── components/          # 재사용 가능한 컴포넌트
│   ├── pages/              # 페이지별 컴포넌트
│   ├── hooks/              # 커스텀 훅
│   └── lib/                # 유틸리티 및 상수
\`\`\`

- 컴포넌트는 `components/` 디렉토리 내 기능별 분류
- 페이지는 `pages/` 디렉토리 내 개별 폴더로 관리
- 각 컴포넌트/페이지는 `index.tsx`와 `styles.css` 파일 세트로 구성

### Backend
\`\`\`
apps/backend/
├── src/
│   ├── modules/            # 기능별 모듈 (users, auth, posts 등)
│   │   ├── users/
│   │   │   ├── users.controller.ts
│   │   │   ├── users.service.ts
│   │   │   ├── users.repository.ts
│   │   │   ├── dto/        # Data Transfer Objects
│   │   │   └── entities/   # 엔터티 정의
│   ├── common/             # 공통 유틸리티, 가드, 인터셉터
│   ├── config/             # 설정 파일들
│   ├── database/           # 데이터베이스 설정 및 마이그레이션
│   └── main.ts            # 애플리케이션 진입점
\`\`\`

- **모듈별 폴더 구조**로 관심사 분리
- **Controller-Service-Repository** 패턴 준수
- **DTO**로 API 입출력 데이터 타입 정의

## 리뷰 포커스 영역

### 코드 품질
- **가독성**: 명확한 변수명과 함수명 사용
- **재사용성**: 공통 컴포넌트 및 유틸리티 함수 활용
- **일관성**: 프로젝트 전반의 코딩 스타일 통일

### SOLID 원칙 기반 코드 리뷰
OOP 관련 코드 리뷰 시 반드시 **어떤 SOLID 원칙을 위반했는지** 명시하고, **구체적인 개선 방안**을 제시해야 합니다.

#### 리뷰 예시 형식:
```
❌ 문제점: [구체적인 코드 이슈 설명]
📋 위반 원칙: SRP (Single Responsibility Principle)
✅ 개선 방안: [구체적인 수정 방법]
💡 추가 설명: [원칙 적용의 이유와 장점]
```

#### 자주 발견되는 SOLID 위반 사례:

**SRP 위반 예시:**
- 하나의 Service 클래스가 여러 비즈니스 로직을 담당
- Controller가 비즈니스 로직과 HTTP 응답 처리를 모두 담당
- DTO가 검증 로직과 변환 로직을 모두 포함

**OCP 위반 예시:**
- 새로운 기능 추가 시 기존 클래스의 수정이 필요
- if-else 또는 switch 문으로 타입 분기 처리
- 하드코딩된 구현체 의존

**LSP 위반 예시:**
- 상속받은 클래스가 부모 클래스의 계약을 위반
- Override한 메서드가 예외적인 동작을 수행
- 상속 관계에서 IS-A 관계가 성립하지 않음

**ISP 위반 예시:**
- 거대한 인터페이스에서 일부 메서드만 사용
- 클라이언트가 불필요한 의존성을 가짐
- 범용 인터페이스로 인한 강한 결합

**DIP 위반 예시:**
- 구체 클래스에 직접 의존
- new 키워드로 직접 객체 생성
- 의존성 주입 없이 내부에서 의존성 생성

### 성능 최적화
- **React.memo**, **useMemo**, **useCallback** 적절한 사용
- **불필요한 리렌더링** 방지
- **이미지 최적화** 및 **레이지 로딩** 고려

### 접근성 (Accessibility)
- **시맨틱 HTML** 요소 사용
- **alt 속성**, **aria-label** 등 접근성 속성 추가
- **키보드 네비게이션** 지원

### 보안
- **XSS 방지**를 위한 입력값 검증
- **민감한 정보** 노출 방지 (API 키, 패스워드 등)
- **SQL 인젝션** 방지 (ORM 사용 권장)
- **CORS** 설정 적절한 구성
- **외부 라이브러리** 보안 취약점 검토

### 데이터베이스 최적화
- **인덱스** 적절한 사용과 성능 모니터링
- **N+1 쿼리** 문제 방지 (eager loading 활용)
- **쿼리 성능** 분석 및 최적화
- **트랜잭션** 적절한 사용

### 테스트 코드 품질
- **Jest** 단위 테스트 작성
- **통합 테스트**를 통한 API 검증
- **테스트 커버리지** 향상
- **Mock 객체** 적절한 활용

## React 모범 사례

### Hooks 사용
\`\`\`typescript
// ✅ 좋은 예시
const [loading, setLoading] = useState<boolean>(false);
const [data, setData] = useState<DataType[]>([]);

useEffect(() => {
  // 비동기 작업
}, [dependency]);
\`\`\`

### 컴포넌트 구조
\`\`\`typescript
// ✅ 좋은 예시
interface ComponentProps {
  title: string;
  onAction: () => void;
}

const Component = ({ title, onAction }: ComponentProps) => {
  // 컴포넌트 로직
  return (
    <div className="component-container">
      {/* JSX */}
    </div>
  );
};
\`\`\`

### 에러 처리
- **try-catch** 블록 적절한 사용
- **에러 바운더리** 구현 고려
- **사용자 친화적인 에러 메시지** 제공

## NestJS SOLID 원칙 적용 사례

### SRP (단일 책임 원칙) 적용

#### ❌ SRP 위반 예시:
\`\`\`typescript
// 문제: 하나의 Service가 너무 많은 책임을 담당
@Injectable()
export class UserService {
  async createUser(dto: CreateUserDto) { /* 사용자 생성 */ }
  async sendWelcomeEmail(email: string) { /* 이메일 발송 */ }
  async validateUserData(data: any) { /* 데이터 검증 */ }
  async logUserAction(action: string) { /* 로그 기록 */ }
}
\`\`\`

#### ✅ SRP 준수 개선:
\`\`\`typescript
// 각 책임을 별도 서비스로 분리
@Injectable()
export class UserService {
  constructor(
    private readonly emailService: EmailService,
    private readonly validationService: ValidationService,
    private readonly logService: LogService,
  ) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    // 단일 책임: 사용자 생성만 담당
    const validatedData = await this.validationService.validateUserData(dto);
    const user = await this.userRepository.create(validatedData);
    
    await this.emailService.sendWelcomeEmail(user.email);
    await this.logService.logUserAction('USER_CREATED', user.id);
    
    return user;
  }
}

@Injectable()
export class EmailService {
  async sendWelcomeEmail(email: string) { /* 이메일 발송만 담당 */ }
}
\`\`\`

### DIP (의존관계 역전 원칙) 적용

#### ❌ DIP 위반 예시:
\`\`\`typescript
// 문제: 구체 클래스에 직접 의존
@Injectable()
export class UserService {
  private emailSender = new SMTPEmailSender(); // 구체 클래스에 의존

  async createUser(dto: CreateUserDto) {
    const user = await this.createUserInDB(dto);
    await this.emailSender.send(user.email, 'Welcome!'); // 강한 결합
    return user;
  }
}
\`\`\`

#### ✅ DIP 준수 개선:
\`\`\`typescript
// 인터페이스 정의 (추상화)
interface IEmailSender {
  send(to: string, subject: string, body?: string): Promise<void>;
}

// 구체 구현체
@Injectable()
export class SMTPEmailSender implements IEmailSender {
  async send(to: string, subject: string, body?: string): Promise<void> {
    // SMTP 구현
  }
}

// 서비스는 추상화에 의존
@Injectable()
export class UserService {
  constructor(
    @Inject('IEmailSender') private readonly emailSender: IEmailSender
  ) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    const user = await this.createUserInDB(dto);
    await this.emailSender.send(user.email, 'Welcome!'); // 추상화에 의존
    return user;
  }
}
\`\`\`

### OCP (개방-폐쇄 원칙) 적용

#### ❌ OCP 위반 예시:
\`\`\`typescript
// 문제: 새로운 알림 타입 추가 시 기존 코드 수정 필요
@Injectable()
export class NotificationService {
  async sendNotification(type: string, message: string) {
    if (type === 'email') {
      // 이메일 발송 로직
    } else if (type === 'sms') {
      // SMS 발송 로직
    } else if (type === 'push') { // 새로운 타입 추가 시 수정 필요
      // Push 알림 로직
    }
  }
}
\`\`\`

#### ✅ OCP 준수 개선:
\`\`\`typescript
// 추상화 정의
abstract class NotificationSender {
  abstract send(message: string): Promise<void>;
}

// 각 구현체 (확장 가능)
@Injectable()
export class EmailNotificationSender extends NotificationSender {
  async send(message: string): Promise<void> {
    // 이메일 발송 구현
  }
}

@Injectable()
export class SMSNotificationSender extends NotificationSender {
  async send(message: string): Promise<void> {
    // SMS 발송 구현
  }
}

// 새로운 알림 타입 추가 (기존 코드 수정 없이 확장)
@Injectable()
export class PushNotificationSender extends NotificationSender {
  async send(message: string): Promise<void> {
    // Push 알림 구현
  }
}

// 서비스는 확장에 열려있고 수정에 닫혀있음
@Injectable()
export class NotificationService {
  constructor(
    private readonly senders: NotificationSender[]
  ) {}

  async sendNotification(senderType: string, message: string) {
    const sender = this.senders.find(s => s.constructor.name.includes(senderType));
    await sender?.send(message);
  }
}
\`\`\`

## 코드 리뷰 시 SOLID 원칙 적용 가이드

### 리뷰 작성 시 필수 사항
모든 OOP 관련 코드 리뷰는 다음 형식으로 작성해야 합니다:

1. **위반 원칙 명시**: 어떤 SOLID 원칙을 위반했는지 명확히 표시
2. **구체적 문제점**: 현재 코드의 문제점을 구체적으로 설명  
3. **개선 방안**: 원칙을 준수하는 구체적인 코드 개선 방법 제시
4. **적용 이유**: 왜 이 원칙을 적용해야 하는지 설명

### 리뷰 품질 체크리스트
- [ ] SOLID 원칙 위반 여부를 확인했는가?
- [ ] 위반 원칙을 명확히 표시했는가? (SRP, OCP, LSP, ISP, DIP)
- [ ] 구체적인 개선 코드를 제시했는가?
- [ ] 개선 후의 이점을 설명했는가?
- [ ] 실제 적용 가능한 현실적인 해결책인가?

### 우선순위 가이드
1. **SRP 위반**: 가장 자주 발생하며 다른 원칙 위반의 근본 원인
2. **DIP 위반**: 테스트하기 어렵고 확장성을 해치는 주요 원인
3. **OCP 위반**: 기능 확장 시 기존 코드 수정을 유발
4. **ISP 위반**: 불필요한 의존성으로 인한 결합도 증가
5. **LSP 위반**: 상속 관계의 올바른 설계 확인

## 커밋 및 PR 가이드

### 커밋 메시지
- **한글**로 작성하되, 기능별로 구분
- 형식: `[타입] 간단한 설명`

#### Frontend 예시
- `[추가] 공지사항 테이블 컴포넌트 구현`
- `[수정] 홈페이지 반응형 레이아웃 개선`
- `[버그수정] 피드백 폼 유효성 검사 오류 해결`

#### Backend 예시
- `[추가] 사용자 인증 API 엔드포인트 구현`
- `[수정] 공지사항 조회 쿼리 성능 최적화`
- `[버그수정] JWT 토큰 만료 시간 오류 해결`
- `[DB] 사용자 테이블 인덱스 추가`

### Pull Request
- **상세한 설명**과 **변경사항** 명시
- **스크린샷** 또는 **GIF**로 UI 변경사항 시각화 (Frontend)
- **API 테스트 결과** 및 **Postman Collection** 첨부 (Backend)
- **테스트 커버리지** 및 **성능 테스트** 결과
- **데이터베이스 마이그레이션** 영향도 분석

## 특별 고려사항

### 다국어 지원
- 추후 영어 버전 지원을 위한 **국제화(i18n)** 고려
- 하드코딩된 텍스트 최소화

### 모바일 우선 설계
- **모바일 퍼스트** 반응형 디자인
- **터치 인터페이스** 최적화

### 브라우저 호환성
- **모던 브라우저** 지원 (Chrome, Safari, Firefox, Edge)
- **폴리필** 필요시 적용

### 모노레포 고려사항
- **앱 간 공통 코드** 재사용성 고려
- **의존성 관리** 주의
- **빌드 최적화** 및 **CI/CD** 효율성

---

이 가이드는 KOITA 하계포럼 프로젝트의 품질과 일관성을 유지하기 위한 기준입니다. 
모든 코드 리뷰는 이 가이드를 바탕으로 한국어로 진행해주세요.
EOF < /dev/null