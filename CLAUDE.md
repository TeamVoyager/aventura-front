# Aventura Project Guide

## 프로젝트 개요
Aventura는 AI 여행 동반자 서비스로, 사용자와 AI가 대화하며 여행 정보를 제공하고 맞춤형 여행 경험을 제공하는 React 웹 애플리케이션입니다.

## 기술 스택
- **Frontend**: React 19, TypeScript
- **빌드 도구**: Vite
- **라우팅**: React Router DOM
- **스타일링**: Emotion (CSS-in-JS)
- **상태관리**: Zustand
- **외부 API**: ChatGPT API, TourAPI, STT

## 프로젝트 구조
```
src/
├── components/           # 공통 컴포넌트
│   └── navigation-bar/   # 하단 네비게이션 바
├── pages/               # 페이지 컴포넌트
│   ├── message/         # AI 동반자 대화 페이지 (메인)
│   ├── menu/            # 프로필/메뉴 페이지
│   └── management/      # 동반자 관리 페이지
├── assets/
│   └── icon/           # SVG 아이콘 컴포넌트들
├── App.tsx             # 라우터 설정
└── main.tsx            # 앱 진입점
```

## 라우팅 구조
- `/` → AI 동반자 페이지 (message)
- `/menu` → 프로필 페이지
- `/management` → 동반자 관리 페이지

## Path Alias 설정
- `@` → `./src`
- `@assets` → `./src/assets`
- `@components` → `./src/components`
- `@pages` → `./src/pages`

## 주요 기능 명세

### 1. AI 동반자 페이지 (/)
**주요 기능:**
- 프롬프트 또는 음성인식을 통한 대화
- 여행지 관련 정보 제공
- 위치 기반 방언 시스템
- 대화 기록 관리

**API 연동:**
- ChatGPT API (대화, 방언)
- TourAPI (여행 정보)
- STT (음성인식)

### 2. 프로필 페이지 (/menu)
**주요 기능:**
- 로그인/회원가입
- 프로필 정보 관리 (이미지, 이름, 생년월일, 여행스타일, 이메일)
- 대화기록, 플랜 구독 네비게이션

### 3. 동반자 관리 페이지 (/management)
**주요 기능:**
- 사용자 맞춤 동반자 생성 (유료 플랜)

## 개발 명령어
```bash
npm run dev        # 개발 서버 실행
npm run build      # 프로덕션 빌드
npm run lint       # ESLint 검사
npm run preview    # 빌드 결과 미리보기
```

## 스타일링 가이드
- **Emotion** 사용 (CSS-in-JS)
- 컴포넌트별 `style.ts` 파일로 분리
- 반응형 디자인 고려

## 상태 관리
- **Zustand** 사용
- 전역 상태: 사용자 정보, 대화 기록, 동반자 설정

## 개발 우선순위
1. **AI 동반자 페이지** - 채팅 인터페이스, API 연동
2. **프로필 페이지** - 사용자 인증 시스템
3. **동반자 관리 페이지** - 맞춤 동반자 생성

## 코딩 컨벤션
- TypeScript 엄격 모드 사용
- React Functional Components + Hooks
- ESLint 규칙 준수
- 컴포넌트명: PascalCase
- 파일명: kebab-case (폴더), camelCase (파일)

## 주의사항
- 이메일 기반 인증 시스템 구현 필요
- 유료 플랜 구분 로직 필요
- 위치 기반 서비스 권한 처리
- 음성인식 브라우저 호환성 확인