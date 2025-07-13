// 데이터분석 팀 관리 슬라이드 메인 스크립트

class DataAnalysisSlideshow {
  constructor() {
    this.currentSlide = 0;
    this.totalSlides = 2;
    this.animationTimings = slideData.animations;
    this.init();
  }

  init() {
    this.setupNavigation();
    this.setupSlides();
    this.setupInteractions();
    this.showSlide(0);
  }

  // 네비게이션 설정
  setupNavigation() {
    const navContainer = document.createElement('div');
    navContainer.className = 'slide-navigation';
    
    for (let i = 0; i < this.totalSlides; i++) {
      const dot = document.createElement('div');
      dot.className = 'nav-dot';
      if (i === 0) dot.classList.add('active');
      
      dot.addEventListener('click', () => this.goToSlide(i));
      navContainer.appendChild(dot);
    }
    
    document.body.appendChild(navContainer);

    // 키보드 네비게이션
    document.addEventListener('keydown', (e) => {
      switch(e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          this.nextSlide();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          this.prevSlide();
          break;
        case 'Home':
          e.preventDefault();
          this.goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          this.goToSlide(this.totalSlides - 1);
          break;
      }
    });
  }

  // 슬라이드 초기 설정
  setupSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
      slide.style.display = index === 0 ? 'grid' : 'none';
      slide.classList.remove('active');
    });
  }

  // 인터랙션 설정
  setupInteractions() {
    this.setupTooltips();
    this.setupModals();
    this.setupHoverEffects();
  }

  // 툴팁 시스템
  setupTooltips() {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);

    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest('[data-tooltip]');
      if (target) {
        const text = target.getAttribute('data-tooltip');
        tooltip.textContent = text;
        tooltip.classList.add('show');
        this.updateTooltipPosition(e, tooltip);
      }
    });

    document.addEventListener('mousemove', (e) => {
      if (tooltip.classList.contains('show')) {
        this.updateTooltipPosition(e, tooltip);
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (!e.target.closest('[data-tooltip]')) {
        tooltip.classList.remove('show');
      }
    });
  }

  updateTooltipPosition(e, tooltip) {
    const rect = tooltip.getBoundingClientRect();
    let x = e.clientX - rect.width / 2;
    let y = e.clientY - rect.height - 10;

    // 화면 경계 처리
    if (x < 10) x = 10;
    if (x + rect.width > window.innerWidth - 10) {
      x = window.innerWidth - rect.width - 10;
    }
    if (y < 10) y = e.clientY + 10;

    tooltip.style.left = x + 'px';
    tooltip.style.top = y + 'px';
  }

  // 모달 시스템
  setupModals() {
    // 모달 오버레이 생성
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    modalOverlay.innerHTML = `
      <div class="modal-content">
        <button class="modal-close">&times;</button>
        <div class="modal-header"></div>
        <div class="modal-body"></div>
      </div>
    `;
    document.body.appendChild(modalOverlay);

    // 모달 닫기 이벤트
    const closeBtn = modalOverlay.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => this.closeModal());
    
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) this.closeModal();
    });

    // ESC 키로 모달 닫기
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay.classList.contains('show')) {
        this.closeModal();
      }
    });

    this.modal = modalOverlay;
  }

  showModal(title, content) {
    const header = this.modal.querySelector('.modal-header');
    const body = this.modal.querySelector('.modal-body');
    
    header.textContent = title;
    body.innerHTML = content;
    this.modal.classList.add('show');
  }

  closeModal() {
    this.modal.classList.remove('show');
  }

  // 호버 효과 설정
  setupHoverEffects() {
    // 차트 요소 호버 효과
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('.pie-slice')) {
        e.target.style.opacity = '0.8';
      }
      if (e.target.closest('.timeline-bar')) {
        e.target.style.opacity = '0.8';
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest('.pie-slice')) {
        e.target.style.opacity = '1';
      }
      if (e.target.closest('.timeline-bar')) {
        e.target.style.opacity = '1';
      }
    });
  }

  // 슬라이드 네비게이션
  showSlide(index) {
    if (index < 0 || index >= this.totalSlides) return;

    // 현재 슬라이드 숨기기
    const currentSlideEl = document.querySelector(`.slide:nth-child(${this.currentSlide + 1})`);
    if (currentSlideEl) {
      currentSlideEl.style.display = 'none';
      currentSlideEl.classList.remove('active');
    }

    // 새 슬라이드 보이기
    this.currentSlide = index;
    const newSlideEl = document.querySelector(`.slide:nth-child(${this.currentSlide + 1})`);
    if (newSlideEl) {
      newSlideEl.style.display = 'grid';
      
      // 애니메이션 지연 후 활성화
      setTimeout(() => {
        newSlideEl.classList.add('active');
        this.initSlideContent(this.currentSlide);
      }, 50);
    }

    // 네비게이션 업데이트
    this.updateNavigation();
  }

  initSlideContent(slideIndex) {
    switch(slideIndex) {
      case 0:
        this.initSlide1();
        break;
      case 1:
        this.initSlide2();
        break;
    }
  }

  // 슬라이드 1 초기화
  initSlide1() {
    setTimeout(() => this.createPieChart(), 200);
    setTimeout(() => this.createTimelineChart(), 400);
    setTimeout(() => this.animateCounters(), 600);
    setTimeout(() => this.addSlide1Interactions(), 800);
  }

  // 슬라이드 2 초기화
  initSlide2() {
    setTimeout(() => this.animateProcessFlow(), 200);
    setTimeout(() => this.animateComparisons(), 400);
    setTimeout(() => this.addSlide2Interactions(), 600);
  }

  nextSlide() {
    if (this.currentSlide < this.totalSlides - 1) {
      this.showSlide(this.currentSlide + 1);
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.showSlide(this.currentSlide - 1);
    }
  }

  goToSlide(index) {
    this.showSlide(index);
  }

  updateNavigation() {
    const dots = document.querySelectorAll('.nav-dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === this.currentSlide);
    });
  }

  // 원형 차트 생성
  createPieChart() {
    const container = document.querySelector('.pie-chart-container');
    if (!container) return;

    const data = slideData.slide1.requestTypes.data;
    const size = 300;
    const radius = 100;
    const centerX = size / 2;
    const centerY = size / 2;

    // SVG 생성
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'pie-chart');
    svg.setAttribute('viewBox', `0 0 ${size} ${size}`);
    svg.setAttribute('width', size);
    svg.setAttribute('height', size);

    let currentAngle = 0;
    const total = data.reduce((sum, item) => sum + item.value, 0);

    data.forEach((item, index) => {
      const sliceAngle = (item.value / total) * 360;
      const endAngle = currentAngle + sliceAngle;

      // 슬라이스 경로 생성
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const pathData = this.createPieSlice(centerX, centerY, radius, currentAngle, endAngle);
      
      path.setAttribute('d', pathData);
      path.setAttribute('fill', item.color);
      path.setAttribute('class', 'pie-slice');
      path.setAttribute('data-tooltip', `${item.label}: ${item.value}%`);
      
      // 클릭 이벤트
      path.addEventListener('click', () => {
        this.showModal(`${item.label} 상세 정보`, `
          <p><strong>비율:</strong> ${item.value}%</p>
          <p><strong>월 평균 건수:</strong> ${Math.round(slideData.slide1.requestTypes.total * item.value / 100)}건</p>
          <p><strong>처리 특성:</strong> ${this.getRequestTypeDescription(item.label)}</p>
        `);
      });

      svg.appendChild(path);
      currentAngle = endAngle;
    });

    container.appendChild(svg);

    // 범례 생성
    this.createLegend(container, data);
  }

  createPieSlice(centerX, centerY, radius, startAngle, endAngle) {
    const start = this.polarToCartesian(centerX, centerY, radius, endAngle);
    const end = this.polarToCartesian(centerX, centerY, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    
    return [
      "M", centerX, centerY,
      "L", start.x, start.y,
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
      "Z"
    ].join(" ");
  }

  polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }

  createLegend(container, data) {
    const legend = document.createElement('div');
    legend.className = 'chart-legend';

    data.forEach(item => {
      const legendItem = document.createElement('div');
      legendItem.className = 'legend-item';
      legendItem.innerHTML = `
        <div class="legend-color" style="background-color: ${item.color}"></div>
        <span>${item.label} (${item.value}%)</span>
      `;
      legend.appendChild(legendItem);
    });

    container.appendChild(legend);
  }

  // 타임라인 차트 생성
  createTimelineChart() {
    const container = document.querySelector('.timeline-container');
    if (!container) return;

    const data = slideData.slide1.timelineData;
    const barsContainer = document.createElement('div');
    barsContainer.className = 'timeline-bars';

    data.years.forEach((year, index) => {
      const bar = document.createElement('div');
      bar.className = `timeline-bar bar-${year}`;
      bar.setAttribute('data-tooltip', `${year}년: ${data.labels[index]} (전년 대비 ${index > 0 ? '+' + Math.round((data.values[index] - data.values[index-1])/data.values[index-1]*100) + '%' : '기준년도'})`);
      
      const value = document.createElement('div');
      value.className = 'bar-value';
      value.textContent = data.labels[index];
      bar.appendChild(value);

      // 클릭 이벤트
      bar.addEventListener('click', () => {
        const causes = [
          "분석 요청 복잡도 증가",
          "팀원당 업무 부하 증가",
          "비정형 데이터 증가",
          "수동 전처리 프로세스"
        ];
        this.showModal(`${year}년 지연 원인 분석`, `
          <h4>주요 지연 요인:</h4>
          <ul>
            ${causes.map(cause => `<li>${cause}</li>`).join('')}
          </ul>
          <p><strong>개선 시급도:</strong> ${index === data.years.length - 1 ? '매우 높음' : '높음'}</p>
        `);
      });

      barsContainer.appendChild(bar);
    });

    // 라벨 생성
    const labelsContainer = document.createElement('div');
    labelsContainer.className = 'timeline-labels';
    data.years.forEach(year => {
      const label = document.createElement('div');
      label.textContent = year;
      labelsContainer.appendChild(label);
    });

    container.appendChild(barsContainer);
    container.appendChild(labelsContainer);
  }

  // 카운터 애니메이션
  animateCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-counter'));
      this.animateCounter(counter, 0, target, 2000);
    });
  }

  animateCounter(element, start, end, duration) {
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

  // 프로세스 플로우 애니메이션
  animateProcessFlow() {
    const steps = document.querySelectorAll('.flow-step');
    steps.forEach((step, index) => {
      setTimeout(() => {
        step.style.opacity = '0';
        step.style.transform = 'translateX(-20px)';
        step.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
          step.style.opacity = '1';
          step.style.transform = 'translateX(0)';
        }, 50);
      }, index * 200);
    });
  }

  // 비교 애니메이션
  animateComparisons() {
    const comparisons = document.querySelectorAll('.metric-comparison');
    comparisons.forEach((comp, index) => {
      setTimeout(() => {
        comp.style.opacity = '0';
        comp.style.transform = 'scale(0.9)';
        comp.style.transition = 'all 0.4s ease';
        
        setTimeout(() => {
          comp.style.opacity = '1';
          comp.style.transform = 'scale(1)';
        }, 50);
      }, index * 150);
    });
  }

  // 슬라이드 1 인터랙션
  addSlide1Interactions() {
    // 통계 카드 호버 효과
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-5px) scale(1.05)';
        item.style.boxShadow = '0 8px 25px rgba(234, 88, 12, 0.3)';
      });

      item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
        item.style.boxShadow = 'none';
      });
    });
  }

  // 슬라이드 2 인터랙션
  addSlide2Interactions() {
    // 프로세스 스텝 클릭 이벤트
    const flowSteps = document.querySelectorAll('.flow-step');
    flowSteps.forEach((step, index) => {
      step.addEventListener('click', () => {
        const stepInfo = this.getProcessStepInfo(step.querySelector('.step-title').textContent);
        this.showModal('프로세스 단계 상세', stepInfo);
      });
    });

    // 솔루션 아이콘 인터랙션
    const solutionIcons = document.querySelectorAll('.solution-icon');
    solutionIcons.forEach(icon => {
      icon.addEventListener('click', () => {
        const title = icon.querySelector('.icon-title').textContent;
        const detail = this.getSolutionDetail(title);
        this.showModal(`${title} 상세 설명`, detail);
      });
    });
  }

  // 헬퍼 함수들
  getRequestTypeDescription(type) {
    const descriptions = {
      "정기 리포트": "매주/매월 정해진 형식의 정형 리포트 생성",
      "애드혹 분석": "비정기적 요청으로 다양한 분석 기법 적용",
      "대시보드 개발": "실시간 모니터링을 위한 시각화 대시보드 구축"
    };
    return descriptions[type] || "상세 정보 없음";
  }

  getProcessStepInfo(stepName) {
    const stepInfos = {
      "요청 접수": "분석 요청서 검토 및 우선순위 설정 과정",
      "분석가 배정": "전문성과 업무 부하를 고려한 담당자 배정",
      "데이터 전처리": "원시 데이터 정제, 변환, 통합 작업",
      "분석 수행": "통계 분석, 모델링, 인사이트 도출",
      "결과 보고": "분석 결과 정리 및 비즈니스 권고안 작성",
      "AI 자동 분류": "머신러닝을 통한 요청 유형 자동 분류",
      "자동 전처리": "사전 정의된 룰 기반 데이터 정제",
      "셀프서비스": "사용자가 직접 수행하는 간단한 분석",
      "고급 분석": "복잡한 분석만 전문가가 수행",
      "인사이트 도출": "AI 지원을 통한 빠른 인사이트 생성"
    };
    return stepInfos[stepName] || "상세 정보를 준비 중입니다.";
  }

  getSolutionDetail(solutionName) {
    const details = {
      "AI 자동화": `
        <h4>핵심 기능:</h4>
        <ul>
          <li>자동 데이터 수집 및 정제</li>
          <li>패턴 기반 이상치 탐지</li>
          <li>반복 작업 자동화</li>
        </ul>
        <p><strong>예상 효과:</strong> 전처리 시간 70% 단축</p>
      `,
      "셀프서비스": `
        <h4>주요 특징:</h4>
        <ul>
          <li>드래그 앤 드롭 차트 생성</li>
          <li>사전 정의된 분석 템플릿</li>
          <li>실시간 데이터 연동</li>
        </ul>
        <p><strong>예상 효과:</strong> 단순 분석 요청 60% 감소</p>
      `,
      "재사용성": `
        <h4>구성 요소:</h4>
        <ul>
          <li>분석 스크립트 라이브러리</li>
          <li>차트 템플릿 모음</li>
          <li>베스트 프랙티스 가이드</li>
        </ul>
        <p><strong>예상 효과:</strong> 유사 분석 재활용률 80% 달성</p>
      `
    };
    return details[solutionName] || "상세 정보를 준비 중입니다.";
  }
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
  window.slideshow = new DataAnalysisSlideshow();
});
