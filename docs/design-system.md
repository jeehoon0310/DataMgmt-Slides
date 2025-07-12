# 데이터분석 팀 관리 슬라이드 디자인 시스템

프로젝트: 데이터분석 팀 관리 개선 프레젠테이션  
폰트: Pretendard  
제작일: 2025년 7월 12일  
화면 비율: 16:9  
슬라이드 수: 6개 (문제정의 → 솔루션 → 타겟분석 → 실행계획 → 성과예측 → 제안)

## 🎨 컬러 시스템

### 기본 컬러 팔레트 (비즈니스 데이터 특화)

```css
/* Primary - 신뢰성과 전문성 (블루 계열) */
--primary-blue: #1e3a8a;        /* Deep Business Blue */
--primary-blue-light: #3b82f6;  /* Bright Blue */
--primary-blue-soft: #60a5fa;   /* Soft Blue */

/* Secondary - 데이터와 기술 (청록 계열) */
--secondary-teal: #0891b2;       /* Data Teal */
--secondary-cyan: #06b6d4;       /* Bright Cyan */
--secondary-cyan-soft: #67e8f9;  /* Soft Cyan */

/* Success - 성과와 개선 (녹색 계열) */
--success-green: #059669;        /* Success Green */
--success-emerald: #10b981;      /* Bright Emerald */
--success-green-soft: #6ee7b7;   /* Soft Green */

/* Warning - 문제점과 주의사항 (주황 계열) */
--warning-orange: #ea580c;       /* Warning Orange */
--warning-amber: #f97316;        /* Bright Amber */
--warning-orange-soft: #fdba74;  /* Soft Orange */

/* Accent - 강조와 CTA (보라 계열) */
--accent-purple: #7c3aed;        /* Action Purple */
--accent-violet: #8b5cf6;        /* Bright Violet */
--accent-purple-soft: #c4b5fd;   /* Soft Purple */

/* Background & Glass */
--background-dark: #0f172a;      /* Dark Navy */
--background-medium: #1e293b;    /* Medium Navy */
--background-light: #334155;     /* Light Navy */
--glass-bg: rgba(30, 41, 59, 0.8);
--glass-border: rgba(255, 255, 255, 0.1);

/* Text Palette */
--text-primary: #f8fafc;         /* Primary White */
--text-secondary: #cbd5e1;       /* Secondary Gray */
--text-muted: #94a3b8;           /* Muted Gray */
--text-accent: #e2e8f0;          /* Light Accent */
```

### 슬라이드별 색상 매핑

```css
/* 슬라이드 1: 문제 정의 - 경고색 중심 */
.slide-problem {
  --slide-primary: var(--warning-orange);
  --slide-secondary: var(--warning-amber);
  --slide-accent: var(--warning-orange-soft);
}

/* 슬라이드 2: 솔루션 - 혁신색 중심 */
.slide-solution {
  --slide-primary: var(--secondary-teal);
  --slide-secondary: var(--secondary-cyan);
  --slide-accent: var(--secondary-cyan-soft);
}

/* 슬라이드 3: 타겟 분석 - 데이터색 중심 */
.slide-target {
  --slide-primary: var(--primary-blue);
  --slide-secondary: var(--primary-blue-light);
  --slide-accent: var(--primary-blue-soft);
}

/* 슬라이드 4: 실행 계획 - 프로세스색 중심 */
.slide-process {
  --slide-primary: var(--primary-blue-light);
  --slide-secondary: var(--secondary-cyan);
  --slide-accent: var(--primary-blue-soft);
}

/* 슬라이드 5: 성과 예측 - 성공색 중심 */
.slide-results {
  --slide-primary: var(--success-green);
  --slide-secondary: var(--success-emerald);
  --slide-accent: var(--success-green-soft);
}

/* 슬라이드 6: 제안/CTA - 액션색 중심 */
.slide-cta {
  --slide-primary: var(--accent-purple);
  --slide-secondary: var(--accent-violet);
  --slide-accent: var(--accent-purple-soft);
}
```

### 그라데이션 조합

```css
/* 1️⃣ 메인 타이틀용 그라데이션 */
.gradient-title {
  background: linear-gradient(135deg, var(--slide-primary) 0%, var(--slide-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* 2️⃣ 데이터 강조용 그라데이션 */
.gradient-data {
  background: linear-gradient(90deg, var(--slide-secondary) 0%, var(--slide-accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* 3️⃣ 카드 및 UI용 그라데이션 */
.gradient-card {
  background: linear-gradient(120deg, var(--slide-primary) 0%, var(--slide-secondary) 100%);
  box-shadow: 0 8px 30px rgba(var(--slide-primary), 0.3);
}

/* 4️⃣ 차트 배경용 그라데이션 */
.gradient-chart {
  background: linear-gradient(180deg, 
    rgba(var(--slide-primary), 0.1) 0%, 
    rgba(var(--slide-secondary), 0.05) 100%);
}
```

## ✍️ 타이포그래피 시스템

### 폰트 패밀리
```css
font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
```

### 텍스트 계층 구조

```css
/* 레벨 1: H1 - 메인 타이틀 (4rem / 64px) */
.typography-h1 {
  font-size: 4rem;
  font-weight: 800; /* ExtraBold */
  line-height: 1.1;
  letter-spacing: -0.02em;
  /* 메인 타이틀용 그라데이션 적용 */
}

/* 레벨 2: H2 - 섹션 타이틀 (2.5rem / 40px) */
.typography-h2 {
  font-size: 2.5rem;
  font-weight: 700; /* Bold */
  line-height: 1.2;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
}

/* 레벨 3: H3 - 서브 타이틀 (1.5rem / 24px) */
.typography-h3 {
  font-size: 1.5rem;
  font-weight: 600; /* SemiBold */
  line-height: 1.3;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

/* 레벨 4: Body - 본문 텍스트 (1.125rem / 18px) */
.typography-body {
  font-size: 1.125rem;
  font-weight: 400; /* Regular */
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

/* 레벨 5: Data - 핵심 수치/키워드 (3rem / 48px) */
.typography-data {
  font-size: 3rem;
  font-weight: 700; /* Bold */
  line-height: 1;
  color: var(--slide-primary);
  text-shadow: 0 0 20px rgba(var(--slide-primary), 0.4);
}

/* 차트 관련 타이포그래피 */
.typography-chart-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.typography-chart-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-muted);
}

.typography-tooltip {
  font-size: 0.75rem;
  font-weight: 400;
  color: var(--text-primary);
  background: var(--background-dark);
  padding: 0.5rem;
  border-radius: 4px;
}
```

## 💎 레이아웃 & 컴포넌트 시스템

### 슬라이드 기본 구조

```css
.slide {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: linear-gradient(135deg, var(--background-dark) 0%, var(--background-medium) 100%);
  padding: 3rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 2rem;
  overflow: hidden;
  position: relative;
}

.slide-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.slide-content {
  display: grid;
  gap: 2rem;
  align-items: center;
}

.slide-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  color: var(--text-muted);
}
```

### 데이터 시각화 컨테이너

```css
.chart-container {
  background: var(--glass-bg);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  border: 1px solid var(--glass-border);
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.chart-wrapper {
  width: 100%;
  height: 400px;
  position: relative;
}

.chart-legend {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.chart-legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.chart-legend-color {
  width: 12px;
  height: 12px;
  border-radius: 2px;
}
```

### 카드 시스템

```css
/* 기본 카드 */
.card {
  background: var(--glass-bg);
  backdrop-filter: blur(12px);
  border-radius: 12px;
  border: 1px solid var(--glass-border);
  padding: 1.5rem;
  transition: all 0.3s ease;
}

/* 페르소나 카드 */
.persona-card {
  perspective: 1000px;
  height: 200px;
}

.persona-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.persona-card:hover .persona-card-inner {
  transform: rotateY(180deg);
}

.persona-card-front,
.persona-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: var(--glass-bg);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.persona-card-back {
  transform: rotateY(180deg);
}

/* 성과 지표 카드 */
.metric-card {
  text-align: center;
  background: linear-gradient(135deg, var(--slide-primary) 0%, var(--slide-secondary) 100%);
  color: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.metric-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 16px 40px rgba(var(--slide-primary), 0.4);
}

.metric-value {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.metric-label {
  font-size: 0.875rem;
  opacity: 0.9;
}
```

### 프로그레스 바

```css
.progress-container {
  background: var(--background-light);
  border-radius: 8px;
  overflow: hidden;
  height: 8px;
  position: relative;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--slide-primary) 0%, var(--slide-secondary) 100%);
  border-radius: 8px;
  transition: width 1s ease-out;
  position: relative;
  overflow: hidden;
}

.progress-bar::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  animation: progress-shine 2s infinite;
}

@keyframes progress-shine {
  0% { left: -100%; }
  100% { left: 100%; }
}
```

### 체크리스트

```css
.checklist {
  list-style: none;
  padding: 0;
}

.checklist-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--glass-border);
  transition: all 0.3s ease;
}

.checklist-item:hover {
  background: rgba(var(--slide-primary), 0.1);
  border-radius: 8px;
  padding-left: 1rem;
  padding-right: 1rem;
}

.checklist-checkbox {
  width: 20px;
  height: 20px;
  border: 2px solid var(--slide-primary);
  border-radius: 4px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
}

.checklist-checkbox.checked {
  background: var(--slide-primary);
}

.checklist-checkbox.checked::after {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 14px;
  font-weight: bold;
}
```

### CTA 버튼

```css
.cta-button {
  background: linear-gradient(135deg, var(--accent-purple) 0%, var(--accent-violet) 100%);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(var(--accent-purple), 0.4);
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s ease;
}

.cta-button:hover::before {
  left: 100%;
}
```

## 🎮 인터랙션 & 애니메이션

### 기본 전환 효과

```css
/* 슬라이드 등장 애니메이션 */
.slide-enter {
  opacity: 0;
  transform: translateY(30px);
  animation: slideEnter 0.8s ease-out forwards;
}

@keyframes slideEnter {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 요소별 순차 등장 */
.stagger-animation > * {
  opacity: 0;
  transform: translateY(20px);
  animation: staggerItem 0.6s ease-out forwards;
}

.stagger-animation > *:nth-child(1) { animation-delay: 0.1s; }
.stagger-animation > *:nth-child(2) { animation-delay: 0.2s; }
.stagger-animation > *:nth-child(3) { animation-delay: 0.3s; }
.stagger-animation > *:nth-child(4) { animation-delay: 0.4s; }

@keyframes staggerItem {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### 차트 애니메이션

```css
/* 카운터 애니메이션 */
.counter {
  font-variant-numeric: tabular-nums;
}

.counter[data-animate="true"] {
  animation: countUp 2s ease-out;
}

/* 차트 바 애니메이션 */
.chart-bar {
  transform: scaleY(0);
  transform-origin: bottom;
  animation: barGrow 1s ease-out forwards;
}

@keyframes barGrow {
  to { transform: scaleY(1); }
}

/* 원형 차트 애니메이션 */
.pie-slice {
  stroke-dasharray: 0 100;
  animation: pieGrow 1.5s ease-out forwards;
}

@keyframes pieGrow {
  to { stroke-dasharray: var(--percentage) 100; }
}
```

### 호버 효과

```css
/* 범용 호버 효과 */
.hover-lift {
  transition: all 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.2);
}

/* 글로우 효과 */
.hover-glow {
  transition: all 0.3s ease;
}

.hover-glow:hover {
  box-shadow: 0 0 30px rgba(var(--slide-primary), 0.5);
}

/* 펄스 효과 */
.pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
```

### 간격 시스템 (Spacing)

```css
:root {
  --space-xs: 0.5rem;   /* 8px */
  --space-sm: 1rem;     /* 16px */
  --space-md: 1.5rem;   /* 24px */
  --space-lg: 2rem;     /* 32px */
  --space-xl: 3rem;     /* 48px */
  --space-2xl: 4rem;    /* 64px */
  --space-3xl: 6rem;    /* 96px */
}
```

## 📱 반응형 디자인

```css
/* 모바일 (768px 이하) */
@media (max-width: 768px) {
  .slide {
    padding: 1.5rem;
    grid-template-rows: auto 1fr;
  }
  
  .typography-h1 { font-size: 2.5rem; }
  .typography-h2 { font-size: 2rem; }
  .typography-data { font-size: 2rem; }
  
  .chart-wrapper { height: 300px; }
  
  .slide-content {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

/* 태블릿 (1024px 이하) */
@media (max-width: 1024px) {
  .slide {
    padding: 2rem;
  }
  
  .typography-h1 { font-size: 3rem; }
  .chart-wrapper { height: 350px; }
}

/* 대형 화면 (1440px 이상) */
@media (min-width: 1440px) {
  .slide {
    padding: 4rem;
  }
  
  .typography-h1 { font-size: 5rem; }
  .chart-wrapper { height: 500px; }
}
```

## 🔧 성능 최적화

```css
/* GPU 가속 활용 */
.gpu-accelerated {
  will-change: transform, opacity;
  transform: translateZ(0);
}

/* 애니메이션 성능 최적화 */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* 메모리 효율성 */
.slide:not(.active) {
  visibility: hidden;
  pointer-events: none;
}
```

## ♿ 접근성 가이드라인

```css
/* 포커스 스타일 */
.focusable:focus {
  outline: 2px solid var(--accent-purple);
  outline-offset: 2px;
}

/* 고대비 모드 지원 */
@media (prefers-contrast: high) {
  :root {
    --text-primary: #ffffff;
    --text-secondary: #ffffff;
    --background-dark: #000000;
    --glass-border: rgba(255, 255, 255, 0.5);
  }
}

/* 색맹 친화적 패턴 */
.pattern-lines {
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 2px,
    rgba(255,255,255,0.1) 2px,
    rgba(255,255,255,0.1) 4px
  );
}

.pattern-dots {
  background-image: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
  background-size: 8px 8px;
}
```

## ✅ 데이터분석 팀 관리 프로젝트 체크리스트

### 제작 전
- [ ] 각 슬라이드의 핵심 데이터와 메시지가 명확한가?
- [ ] 차트 유형이 데이터 특성에 적합한가? (원형차트↔카테고리, 막대차트↔비교, 라인차트↔트렌드)
- [ ] 인터랙티브 요소가 사용자 이해를 도울 것인가?
- [ ] 색상 팔레트가 비즈니스 환경에 적합한가?

### 제작 중
- [ ] 슬라이드별 색상 테마를 일관성 있게 적용했는가?
- [ ] 데이터 시각화가 직관적이고 정확한가?
- [ ] 텍스트 계층 구조가 정보 전달에 효과적인가?
- [ ] 애니메이션이 과하지 않고 의미 있는가?
- [ ] 폰트 크기가 프레젠테이션 환경에서 읽기 쉬운가?

### 완료 후
- [ ] 전체 프레젠테이션 흐름이 논리적인가?
- [ ] 모든 인터랙티브 요소가 정상 작동하는가?
- [ ] 다양한 화면 크기에서 가독성이 확보되는가?
- [ ] 로딩 시간이 적절한가? (5초 이내)
- [ ] 접근성 기준을 충족하는가? (색대비 4.5:1 이상, 키보드 내비게이션)

### 비즈니스 검증
- [ ] 경영진 관점에서 핵심 메시지가 명확한가?
- [ ] ROI 계산과 성과 지표가 신뢰할 만한가?
- [ ] 실행 계획이 구체적이고 실현 가능한가?
- [ ] Call to Action이 명확하고 실행 가능한가?
- [ ] 슬라이드간 논리적 연결이 자연스러운가?

## 🎯 슬라이드별 특화 가이드라인

### 슬라이드 1: 문제 정의/현황 분석
- **색상**: 경고 오렌지 계열 중심 (`var(--warning-orange)`)
- **핵심 요소**: 원형 차트, 타임라인, 병목 아이콘
- **애니메이션**: 페이드인으로 문제점 순차 강조
- **인터랙션**: 차트 호버로 상세 수치, 타임라인 클릭으로 지연 원인 팝업
- **레이아웃**: 2x2 그리드 (문제 설명 + 차트 2개 + 핵심 통계)

### 슬라이드 2: 솔루션/아이디어 제시
- **색상**: 혁신 청록 계열 중심 (`var(--secondary-teal)`)
- **핵심 요소**: 플로우차트, Before/After 표, AI 아이콘
- **애니메이션**: 슬라이드 인으로 솔루션 단계별 소개
- **인터랙션**: 플로우차트 단계 클릭으로 상세 설명, 예상 단축률 표시
- **레이아웃**: 중앙 플로우차트 + 좌우 Before/After 비교

### 슬라이드 3: 타겟/시장 분석
- **색상**: 데이터 블루 계열 중심 (`var(--primary-blue)`)
- **핵심 요소**: 히트맵, 막대 그래프, 페르소나 카드
- **애니메이션**: 줌인으로 핵심 타겟 강조
- **인터랙션**: 히트맵 클릭으로 부서별 니즈, 페르소나 카드 플립 효과
- **레이아웃**: 상단 히트맵 + 하단 3개 페르소나 카드

### 슬라이드 4: 실행 계획/프로세스
- **색상**: 프로세스 블루-청록 조합 (`var(--primary-blue-light)`)
- **핵심 요소**: 간트 차트, RACI 매트릭스, 프로그레스 바
- **애니메이션**: 펄스로 현재 진행 단계 강조
- **인터랙션**: 마일스톤 호버로 산출물 표시, 타임라인 슬라이더
- **레이아웃**: 메인 간트 차트 + 사이드 RACI 매트릭스

### 슬라이드 5: 결과/성과 예측
- **색상**: 성공 녹색 계열 중심 (`var(--success-green)`)
- **핵심 요소**: ROI 계산기, 성과 대시보드, 인포그래픽
- **애니메이션**: 카운터 애니메이션으로 숫자 증가 효과
- **인터랙션**: 실시간 ROI 계산, KPI 카드 클릭으로 계산 근거
- **레이아웃**: 중앙 ROI 계산기 + 주변 성과 지표 카드들

### 슬라이드 6: 제안/Call to Action
- **색상**: 액션 보라 계열 중심 (`var(--accent-purple)`)
- **핵심 요소**: 액션 플랜 체크리스트, 투자 수익 그래프, CTA 버튼
- **애니메이션**: 전체 요약 애니메이션
- **인터랙션**: 체크리스트 클릭으로 담당자 정보, CTA 버튼 글로우 효과
- **레이아웃**: 좌측 체크리스트 + 우측 수익 그래프 + 하단 CTA

## 🚀 구현 우선순위

### Phase 1: 기본 구조 (1-2일)
1. 슬라이드 기본 레이아웃 구성
2. 타이포그래피 시스템 적용
3. 색상 시스템 설정
4. 기본 반응형 디자인

### Phase 2: 데이터 시각화 (2-3일)
1. 차트 컨테이너 구조 구축
2. 원형차트, 막대차트, 타임라인 구현
3. 기본 호버 효과 추가
4. 차트 애니메이션 적용

### Phase 3: 인터랙티브 요소 (2-3일)
1. 페르소나 카드 플립 효과
2. 체크리스트 인터랙션
3. 프로그레스 바 애니메이션
4. CTA 버튼 효과

### Phase 4: 고급 기능 (1-2일)
1. ROI 계산기 실시간 업데이트
2. 히트맵 클릭 상호작용
3. 간트차트 마일스톤 호버
4. 전체 네비게이션 시스템

### Phase 5: 최적화 & 테스트 (1일)
1. 성능 최적화
2. 접근성 검증
3. 크로스브라우저 테스트
4. 모바일 최적화

## 📁 파일 구조

```
/src
├── css/
│   ├── design-system.css     # 이 가이드의 모든 스타일
│   ├── components.css        # 개별 컴포넌트 스타일
│   └── animations.css        # 애니메이션 전용
├── js/
│   ├── slides.js            # 슬라이드 네비게이션
│   ├── charts.js            # 차트 구현
│   ├── interactions.js      # 인터랙티브 요소
│   └── utils.js             # 유틸리티 함수
├── assets/
│   ├── images/              # 아이콘, 이미지
│   └── data/                # 차트 데이터 JSON
└── index.html               # 메인 프레젠테이션 파일
```

---

**프로젝트 목표**: 데이터 기반 의사결정을 지원하는 직관적이고 전문적인 프레젠테이션을 통해 분석팀 운영 혁신의 필요성과 실행 방안을 명확히 전달한다. 🎯

**핵심 원칙**: 
- **명확성**: 복잡한 데이터를 간단하게 전달
- **신뢰성**: 비즈니스 환경에 적합한 전문적 디자인  
- **상호작용**: 사용자 참여를 유도하는 인터랙티브 요소
- **효율성**: 빠른 로딩과 부드러운 애니메이션