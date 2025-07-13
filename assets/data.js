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
