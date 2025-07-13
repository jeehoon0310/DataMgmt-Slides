// 데이터분석 팀 관리 슬라이드 데이터

const slideData = {
  // 슬라이드 1: 문제 정의/현황 분석
  slide1: {
    title: "문제 정의/현황 분석",
    subtitle: "데이터 분석 프로젝트의 복잡성 증가로 팀 간 협업 비효율과 인사이트 도출 시간 지연 발생",
    
    keyMetrics: {
      processingTime: "2주",
      timeIncrease: "35%",
      workload: "150%",
      duplicateWork: "30%"
    },
    
    requestTypes: {
      data: [
        { label: "정기 리포트", value: 40, color: "#ea580c" },
        { label: "애드혹 분석", value: 35, color: "#f97316" },
        { label: "대시보드 개발", value: 25, color: "#fdba74" }
      ],
      total: 120 // 월 평균 요청 건수
    },
    
    timelineData: {
      years: ["2023", "2024", "2025"],
      values: [10, 13, 14], // 일 단위
      labels: ["10일", "13일", "14일"]
    },
    
    bottleneckStats: {
      dataPreprocessing: "70%",
      duplicateWork: "30%",
      teamOverload: "150%",
      requestBacklog: "120건"
    },
    
    detailedInfo: {
      monthlyRequests: 120,
      teamMemberOverload: "150%",
      avgProcessingTime: "2주",
      preprocessingTime: "70%",
      insights: "데이터 전처리에 70%의 시간을 소비하고 있어 핵심 인사이트 도출에 집중하지 못하고 있습니다."
    }
  },

  // 슬라이드 2: 솔루션/아이디어 제시
  slide2: {
    title: "솔루션/아이디어 제시",
    subtitle: "AI 기반 자동화 플랫폼과 셀프서비스 분석 환경 구축으로 분석 효율성 극대화",
    
    processFlow: {
      current: {
        title: "현재 프로세스",
        steps: [
          { name: "요청 접수", time: "1일" },
          { name: "분석가 배정", time: "2일" },
          { name: "데이터 전처리", time: "5일" },
          { name: "분석 수행", time: "4일" },
          { name: "결과 보고", time: "2일" }
        ],
        totalTime: "14일"
      },
      improved: {
        title: "개선된 프로세스",
        steps: [
          { name: "AI 자동 분류", time: "즉시" },
          { name: "자동 전처리", time: "1일" },
          { name: "셀프서비스", time: "2일" },
          { name: "고급 분석", time: "3일" },
          { name: "인사이트 도출", time: "1일" }
        ],
        totalTime: "7일"
      }
    },
    
    comparison: {
      before: {
        processingTime: "14일",
        analystLoad: "150%",
        automationRate: "0%",
        userSatisfaction: "6.2점",
        reusability: "20%"
      },
      after: {
        processingTime: "7일",
        analystLoad: "100%",
        automationRate: "60%",
        userSatisfaction: "8.5점",
        reusability: "80%"
      },
      improvements: {
        processingTime: "-50%",
        analystLoad: "-33%",
        automationRate: "+60%",
        userSatisfaction: "+37%",
        reusability: "+300%"
      }
    },
    
    solutions: [
      {
        icon: "🤖",
        title: "AI 자동화",
        description: "데이터 수집 및 전처리 자동화"
      },
      {
        icon: "📊",
        title: "셀프서비스",
        description: "직관적인 분석 대시보드 제공"
      },
      {
        icon: "🔄",
        title: "재사용성",
        description: "분석 템플릿 라이브러리 구축"
      }
    ],
    
    expectedBenefits: {
      timeReduction: "50%",
      costSaving: "4.5억원",
      manHourSaving: "3,600시간",
      qualityImprovement: "35%"
    },
    
    technicalDetails: {
      platform: "통합 데이터 분석 플랫폼",
      features: [
        "자동 데이터 수집",
        "AI 기반 전처리",
        "템플릿화된 분석 모듈",
        "셀프서비스 대시보드"
      ],
      targetUsers: [
        "경영진 (통합 KPI 대시보드)",
        "중간관리자 (부서별 성과 지표)",
        "실무자 (운영 현황 모니터링)"
      ]
    }
  },

  // 슬라이드 3: 타겟/시장 분석
  slide3: {
    title: "타겟/시장 분석",
    subtitle: "전사 15개 부서, 300명의 의사결정권자가 주요 수혜 대상",
    
    heatmapData: {
      departments: [
        { name: "마케팅팀", demand: 35, x: 0, y: 0, description: "고객 세그먼트 분석, 캠페인 효과 측정" },
        { name: "영업팀", demand: 28, x: 1, y: 0, description: "매출 예측, 고객 전환율 분석" },
        { name: "운영팀", demand: 22, x: 2, y: 0, description: "재고 현황, 운영 효율성 분석" },
        { name: "재무팀", demand: 20, x: 0, y: 1, description: "예산 분석, 수익성 평가" },
        { name: "인사팀", demand: 15, x: 1, y: 1, description: "인력 분석, 성과 평가" },
        { name: "기획팀", demand: 18, x: 2, y: 1, description: "전략 수립, 시장 분석" },
        { name: "IT팀", demand: 12, x: 0, y: 2, description: "시스템 성능, 보안 분석" },
        { name: "품질팀", demand: 10, x: 1, y: 2, description: "품질 지표, 개선 분석" },
        { name: "구매팀", demand: 8, x: 2, y: 2, description: "공급업체 평가, 비용 분석" },
        { name: "법무팀", demand: 5, x: 0, y: 3, description: "리스크 분석, 규정 준수" },
        { name: "홍보팀", demand: 7, x: 1, y: 3, description: "브랜드 분석, 언론 모니터링" },
        { name: "연구개발팀", demand: 14, x: 2, y: 3, description: "제품 개발, 기술 분석" },
        { name: "고객서비스팀", demand: 16, x: 0, y: 4, description: "고객 만족도, VOC 분석" },
        { name: "생산팀", demand: 11, x: 1, y: 4, description: "생산성, 불량률 분석" },
        { name: "물류팀", demand: 9, x: 2, y: 4, description: "배송 분석, 물류 최적화" }
      ],
      maxDemand: 35,
      totalRequests: 4800 // 연간
    },

    personas: [
      {
        type: "경영진",
        title: "C-Level 임원",
        count: "15명",
        needs: "통합 KPI 대시보드",
        frequency: "주 1회",
        complexity: "높음",
        frontInfo: {
          icon: "👔",
          role: "전략적 의사결정",
          priority: "높음"
        },
        backInfo: {
          requirements: [
            "실시간 전사 KPI 모니터링",
            "ROI 및 성과 지표 통합 뷰",
            "시장 동향 및 경쟁사 분석",
            "리스크 및 기회 요인 식별"
          ],
          painPoints: [
            "데이터 접근성 부족",
            "정보 취합 시간 지연",
            "일관성 없는 보고서"
          ]
        }
      },
      {
        type: "중간관리자",
        title: "팀장/실장급",
        count: "85명",
        needs: "부서별 성과 지표",
        frequency: "주 2-3회",
        complexity: "중간",
        frontInfo: {
          icon: "📊",
          role: "운영 최적화",
          priority: "높음"
        },
        backInfo: {
          requirements: [
            "부서별 성과 추적",
            "팀원 생산성 분석",
            "예산 대비 실적 모니터링",
            "목표 달성률 시각화"
          ],
          painPoints: [
            "데이터 가공 시간 소요",
            "부서간 지표 비교 어려움",
            "보고서 작성 부담"
          ]
        }
      },
      {
        type: "실무자",
        title: "사원/대리급",
        count: "200명",
        needs: "운영 현황 모니터링",
        frequency: "일 1-2회",
        complexity: "낮음",
        frontInfo: {
          icon: "💻",
          role: "일상 업무 지원",
          priority: "중간"
        },
        backInfo: {
          requirements: [
            "일일 업무 현황 조회",
            "간단한 트렌드 분석",
            "기본 통계 및 집계",
            "셀프서비스 리포팅"
          ],
          painPoints: [
            "복잡한 분석 도구",
            "IT 지원 의존성",
            "데이터 접근 제한"
          ]
        }
      }
    ],

    automationPotential: [
      { type: "정기 리포트", current: 40, automated: 90, description: "일/주/월 정형 보고서" },
      { type: "대시보드 운영", current: 25, automated: 95, description: "실시간 모니터링 화면" },
      { type: "기본 통계 분석", current: 20, automated: 85, description: "평균, 합계, 비율 계산" },
      { type: "트렌드 분석", current: 15, automated: 70, description: "시계열 패턴 분석" },
      { type: "복합 분석", current: 10, automated: 40, description: "다변량 통계 분석" },
      { type: "예측 모델링", current: 5, automated: 25, description: "머신러닝 기반 예측" }
    ]
  },

  // 슬라이드 4: 실행 계획/프로세스
  slide4: {
    title: "실행 계획/프로세스",
    subtitle: "3단계 6개월 로드맵: 기반 구축 → 파일럿 운영 → 전사 확산",
    
    phases: [
      {
        name: "1단계: 기반 구축",
        duration: "2개월",
        color: "#3b82f6",
        description: "데이터 인프라 구축과 핵심 분석 모듈 개발",
        tasks: [
          { name: "데이터 웨어하우스 구축", weeks: 6, start: 0 },
          { name: "AI 분석 엔진 개발", weeks: 8, start: 2 },
          { name: "기본 대시보드 구현", weeks: 4, start: 4 },
          { name: "보안 및 권한 설정", weeks: 3, start: 5 }
        ]
      },
      {
        name: "2단계: 파일럿 운영",
        duration: "2개월",
        color: "#06b6d4",
        description: "마케팅팀과 영업팀 대상 파일럿 진행",
        tasks: [
          { name: "파일럿 팀 선정 및 교육", weeks: 2, start: 8 },
          { name: "파일럿 시스템 배포", weeks: 4, start: 9 },
          { name: "사용자 피드백 수집", weeks: 6, start: 10 },
          { name: "시스템 안정화", weeks: 3, start: 13 }
        ]
      },
      {
        name: "3단계: 전사 확산",
        duration: "2개월",
        color: "#10b981",
        description: "전사 교육 프로그램과 단계적 확산",
        tasks: [
          { name: "전사 교육 프로그램", weeks: 4, start: 16 },
          { name: "부서별 점진적 확산", weeks: 6, start: 17 },
          { name: "변화관리 및 지원", weeks: 8, start: 16 },
          { name: "성과 측정 및 개선", weeks: 4, start: 20 }
        ]
      }
    ],

    timeline: {
      totalWeeks: 24,
      milestones: [
        { week: 4, title: "인프라 구축 완료", deliverable: "데이터 웨어하우스, 기본 아키텍처" },
        { week: 8, title: "AI 엔진 1차 완료", deliverable: "자동 분류, 전처리 모듈" },
        { week: 12, title: "파일럿 시작", deliverable: "파일럿 시스템, 교육 자료" },
        { week: 16, title: "파일럿 완료", deliverable: "피드백 수집, 개선사항" },
        { week: 20, title: "전사 확산 시작", deliverable: "교육 프로그램, 챔피언 선정" },
        { week: 24, title: "프로젝트 완료", deliverable: "전사 시스템, 운영 가이드" }
      ]
    },

    raci: {
      roles: ["분석팀", "IT팀", "비즈니스팀", "경영진"],
      activities: [
        { activity: "요구사항 정의", raci: ["R", "A", "C", "I"] },
        { activity: "시스템 설계", raci: ["C", "R", "I", "A"] },
        { activity: "개발 및 구현", raci: ["R", "R", "I", "I"] },
        { activity: "테스트 및 검증", raci: ["R", "C", "R", "I"] },
        { activity: "사용자 교육", raci: ["R", "C", "A", "I"] },
        { activity: "변화 관리", raci: ["C", "I", "R", "A"] },
        { activity: "성과 측정", raci: ["R", "I", "C", "A"] }
      ]
    },

    risks: [
      { risk: "사용자 저항", probability: "중간", impact: "높음", mitigation: "조기 참여 및 교육 강화" },
      { risk: "기술적 복잡성", probability: "낮음", impact: "높음", mitigation: "단계적 구현 및 전문가 지원" },
      { risk: "일정 지연", probability: "중간", impact: "중간", mitigation: "애자일 방법론 적용" }
    ]
  },

  // 슬라이드 5: 결과/성과 예측
  slide5: {
    title: "결과/성과 예측",
    subtitle: "분석 처리 시간 50% 단축으로 연간 3,600 man-hour 절감",
    
    roiCalculator: {
      investment: {
        initial: 500000000, // 5억원
        annual: 50000000, // 연간 5천만원
        period: 5 // 5년
      },
      savings: {
        timeReduction: 0.5, // 50%
        hourlyRate: 50000, // 시간당 5만원
        annualHours: 3600, // 연간 절감 시간
        qualityImprovement: 0.35, // 35%
        additionalRevenue: 200000000 // 추가 수익
      },
      calculations: {
        annualSavings: 450000000, // 4.5억원
        paybackPeriod: 1.1, // 1.1년
        fiveYearROI: 2.8, // 280%
        npv: 1200000000 // 12억원
      }
    },

    kpiMetrics: [
      {
        name: "처리 시간 단축",
        current: 14,
        target: 7,
        unit: "일",
        improvement: "-50%",
        color: "#06b6d4",
        description: "평균 분석 요청 처리 시간"
      },
      {
        name: "분석가 생산성",
        current: 20,
        target: 35,
        unit: "건/월",
        improvement: "+75%",
        color: "#10b981",
        description: "분석가 1인당 월 처리 건수"
      },
      {
        name: "사용자 만족도",
        current: 6.2,
        target: 8.5,
        unit: "점",
        improvement: "+37%",
        color: "#8b5cf6",
        description: "비즈니스 부서 만족도 점수"
      },
      {
        name: "자동화 비율",
        current: 0,
        target: 60,
        unit: "%",
        improvement: "+60%p",
        color: "#f97316",
        description: "전체 분석 중 자동화 비율"
      },
      {
        name: "데이터 활용도",
        current: 45,
        target: 78,
        unit: "%",
        improvement: "+73%",
        color: "#ef4444",
        description: "비즈니스 부서 데이터 활용률"
      },
      {
        name: "의사결정 속도",
        current: 7,
        target: 2,
        unit: "일",
        improvement: "-71%",
        color: "#3b82f6",
        description: "데이터 기반 의사결정 소요 시간"
      }
    ],

    cumulativeEffect: {
      years: ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"],
      investment: [-500, -550, -600, -650, -700], // 누적 투자 (백만원)
      savings: [450, 950, 1500, 2100, 2750], // 누적 절감 (백만원)
      netBenefit: [-50, 400, 900, 1450, 2050] // 순 효익
    },

    qualitativeImpacts: [
      { area: "조직 문화", description: "데이터 기반 의사결정 문화 정착", impact: "높음" },
      { area: "경쟁력", description: "시장 대응 속도 3배 향상", impact: "매우 높음" },
      { area: "직원 만족", description: "반복 업무 감소로 만족도 향상", impact: "높음" },
      { area: "고객 서비스", description: "개인화된 서비스 제공 가능", impact: "중간" },
      { area: "혁신 역량", description: "AI 기술 역량 내재화", impact: "높음" }
    ]
  },

  // 슬라이드 6: 제안/Call to Action
  slide6: {
    title: "제안/Call to Action",
    subtitle: "2025년 2월 킥오프를 목표로 즉시 TF 구성 및 상세 기획 착수 필요",
    
    actionItems: [
      {
        id: 1,
        title: "태스크포스 구성",
        description: "분석팀, IT팀, 주요 비즈니스 부서 참여",
        owner: "분석팀 관리자",
        deadline: "1주 내",
        priority: "높음",
        status: "pending"
      },
      {
        id: 2,
        title: "상세 실행 계획 수립",
        description: "6개월 로드맵 및 예산 계획 구체화",
        owner: "프로젝트 매니저",
        deadline: "2주 내",
        priority: "높음",
        status: "pending"
      },
      {
        id: 3,
        title: "파일럿 부서 선정",
        description: "마케팅팀, 영업팀 우선 선정 및 협의",
        owner: "비즈니스 리더",
        deadline: "2주 내",
        priority: "중간",
        status: "pending"
      },
      {
        id: 4,
        title: "기술 아키텍처 설계",
        description: "AI 플랫폼 및 데이터 인프라 설계",
        owner: "IT 아키텍트",
        deadline: "3주 내",
        priority: "높음",
        status: "pending"
      },
      {
        id: 5,
        title: "예산 승인 및 조달",
        description: "5억원 투자 예산 승인 절차 진행",
        owner: "CFO",
        deadline: "4주 내",
        priority: "매우 높음",
        status: "pending"
      }
    ],

    investmentTimeline: {
      quarters: ["Q1 2025", "Q2 2025", "Q3 2025", "Q4 2025", "Q1 2026"],
      investment: [200, 150, 100, 50, 50], // 분기별 투자 (백만원)
      returns: [0, 50, 150, 250, 350], // 분기별 수익 (백만원)
      breakeven: "Q2 2025"
    },

    ctaDetails: {
      urgency: "데이터 분석 혁신은 더 이상 선택이 아닌 필수",
      competitiveAdvantage: "경쟁사 대비 데이터 활용 성숙도 향상 기회",
      nextSteps: [
        "즉시 태스크포스 구성",
        "2주 내 상세 계획 수립",
        "Q1 2025 프로젝트 시작"
      ],
      contact: {
        name: "데이터분석팀 관리자",
        email: "data-analysis@company.com",
        phone: "02-1234-5678",
        department: "데이터분석팀"
      }
    },

    successFactors: [
      "경영진의 강력한 지원과 리더십",
      "사용자 중심의 점진적 변화 관리",
      "지속적인 교육과 역량 개발",
      "데이터 품질 관리 체계 구축",
      "성과 측정 및 지속적 개선"
    ]
  },

  // 공통 설정
  common: {
    company: "데이터분석팀",
    presenter: "분석팀 관리자",
    date: "2025년 7월",
    theme: {
      primary: "#0891b2",
      secondary: "#ea580c",
      accent: "#7c3aed"
    }
  },

  // 애니메이션 설정
  animations: {
    slideTransition: 800,
    staggerDelay: 100,
    counterDuration: 2000,
    chartAnimationDelay: 200
  }
};

// 차트 생성을 위한 유틸리티 함수들
const chartUtils = {
  // 원형 차트 SVG 경로 생성
  createPieSlice: (centerX, centerY, radius, startAngle, endAngle) => {
    const start = polarToCartesian(centerX, centerY, radius, endAngle);
    const end = polarToCartesian(centerX, centerY, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    
    return [
      "M", centerX, centerY,
      "L", start.x, start.y,
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
      "Z"
    ].join(" ");
  },

  // 극좌표를 직교좌표로 변환
  polarToCartesian: (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  },

  // 색상 배열 생성
  generateColors: (baseColor, count) => {
    const colors = [];
    for (let i = 0; i < count; i++) {
      const opacity = 1 - (i * 0.2);
      colors.push(baseColor + Math.floor(opacity * 255).toString(16).padStart(2, '0'));
    }
    return colors;
  },

  // 애니메이션 카운터
  animateCounter: (element, start, end, duration) => {
    let startTime = null;
    
    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      const current = Math.floor(progress * (end - start) + start);
      element.textContent = current.toLocaleString();
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }
};

// 극좌표 변환 함수 (전역으로 노출)
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  return chartUtils.polarToCartesian(centerX, centerY, radius, angleInDegrees);
}

// 데이터 내보내기
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { slideData, chartUtils };
}
