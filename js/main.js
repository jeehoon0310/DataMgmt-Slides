// 데이터분석 팀 관리 슬라이드 메인 스크립트

class DataAnalysisSlideshow {
  constructor() {
    this.currentSlide = 0;
    this.totalSlides = 6; // 6개 슬라이드로 업데이트
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
      case 2:
        this.initSlide3();
        break;
      case 3:
        this.initSlide4();
        break;
      case 4:
        this.initSlide5();
        break;
      case 5:
        this.initSlide6();
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

  // 슬라이드 3 초기화
  initSlide3() {
    setTimeout(() => this.createHeatmap(), 200);
    setTimeout(() => this.createAutomationChart(), 400);
    setTimeout(() => this.addSlide3Interactions(), 600);
  }

  // 슬라이드 4 초기화
  initSlide4() {
    setTimeout(() => this.createGanttChart(), 200);
    setTimeout(() => this.createRACIMatrix(), 400);
    setTimeout(() => this.createMilestones(), 600);
    setTimeout(() => this.addSlide4Interactions(), 800);
  }

  // 슬라이드 5 초기화
  initSlide5() {
    setTimeout(() => this.setupROICalculator(), 200);
    setTimeout(() => this.createCumulativeChart(), 400);
    setTimeout(() => this.animateKPICards(), 600);
    setTimeout(() => this.addSlide5Interactions(), 800);
  }

  // 슬라이드 6 초기화
  initSlide6() {
    setTimeout(() => this.createActionItems(), 200);
    setTimeout(() => this.createInvestmentTimeline(), 400);
    setTimeout(() => this.addSlide6Interactions(), 600);
  }

  // 히트맵 생성
  createHeatmap() {
    const container = document.getElementById('heatmap-grid');
    if (!container) return;

    const data = slideData.slide3.heatmapData.departments;
    const maxDemand = slideData.slide3.heatmapData.maxDemand;

    data.forEach(dept => {
      const cell = document.createElement('div');
      cell.className = 'heatmap-cell';
      
      // 강도 계산 (1-5 단계)
      const intensity = Math.ceil((dept.demand / maxDemand) * 5);
      cell.classList.add(`intensity-${intensity}`);
      
      cell.innerHTML = `
        <div class="cell-name">${dept.name}</div>
        <div class="cell-demand">${dept.demand}건/월</div>
      `;
      
      cell.setAttribute('data-tooltip', `${dept.name}: ${dept.demand}건/월 - ${dept.description}`);
      
      cell.addEventListener('click', () => {
        this.showModal(`${dept.name} 상세 분석`, `
          <p><strong>월 평균 요청:</strong> ${dept.demand}건</p>
          <p><strong>주요 분석 영역:</strong> ${dept.description}</p>
          <p><strong>자동화 우선순위:</strong> ${dept.demand > 20 ? '높음' : dept.demand > 10 ? '중간' : '낮음'}</p>
          <p><strong>예상 효과:</strong> ${Math.round(dept.demand * 0.6)}건 자동화 가능</p>
        `);
      });

      container.appendChild(cell);
    });
  }

  // 자동화 가능성 차트 생성
  createAutomationChart() {
    const container = document.getElementById('automation-bars');
    if (!container) return;

    const data = slideData.slide3.automationPotential;

    data.forEach((item, index) => {
      const barWrapper = document.createElement('div');
      barWrapper.className = 'automation-bar';

      barWrapper.innerHTML = `
        <div class="bar-label">${item.type}</div>
        <div class="bar-container">
          <div class="bar-fill" style="width: 0%;" data-width="${item.automated}">
            <div class="bar-percentage">${item.automated}%</div>
          </div>
        </div>
      `;

      container.appendChild(barWrapper);

      // 애니메이션
      setTimeout(() => {
        const fill = barWrapper.querySelector('.bar-fill');
        fill.style.width = item.automated + '%';
      }, index * 200);
    });
  }

  // 간트 차트 생성
  createGanttChart() {
    const container = document.getElementById('gantt-timeline');
    if (!container) return;

    const phases = slideData.slide4.phases;

    phases.forEach((phase, phaseIndex) => {
      const phaseElement = document.createElement('div');
      phaseElement.className = 'gantt-phase';
      
      phaseElement.innerHTML = `
        <div class="phase-header">
          <div class="phase-color" style="background-color: ${phase.color}"></div>
          <div class="phase-title">${phase.name}</div>
          <div class="phase-duration">${phase.duration}</div>
        </div>
        <div class="gantt-tasks" id="phase-${phaseIndex}-tasks"></div>
      `;

      container.appendChild(phaseElement);

      const tasksContainer = document.getElementById(`phase-${phaseIndex}-tasks`);
      
      phase.tasks.forEach((task, taskIndex) => {
        const taskElement = document.createElement('div');
        taskElement.className = 'gantt-task';
        
        const startPercent = (task.start / 24) * 100;
        const widthPercent = (task.weeks / 24) * 100;
        
        taskElement.innerHTML = `
          <div class="task-name">${task.name}</div>
          <div class="task-bar-container">
            <div class="task-bar" style="
              background-color: ${phase.color}; 
              left: ${startPercent}%; 
              width: 0%;
              transition: width 0.8s ease-out;
              transition-delay: ${(phaseIndex * 4 + taskIndex) * 200}ms;
            " data-width="${widthPercent}">
              <div class="task-weeks">${task.weeks}주</div>
            </div>
          </div>
        `;

        tasksContainer.appendChild(taskElement);

        // 애니메이션
        setTimeout(() => {
          const bar = taskElement.querySelector('.task-bar');
          bar.style.width = widthPercent + '%';
        }, (phaseIndex * 4 + taskIndex) * 200 + 500);
      });
    });
  }

  // RACI 매트릭스 생성
  createRACIMatrix() {
    const tbody = document.getElementById('raci-tbody');
    if (!tbody) return;

    const raci = slideData.slide4.raci;

    raci.activities.forEach(activity => {
      const row = document.createElement('tr');
      
      let rowHTML = `<td style="text-align: left; font-weight: 600;">${activity.activity}</td>`;
      
      activity.raci.forEach(role => {
        rowHTML += `<td class="raci-${role.toLowerCase()}">${role}</td>`;
      });
      
      row.innerHTML = rowHTML;
      tbody.appendChild(row);
    });
  }

  // 마일스톤 생성
  createMilestones() {
    const container = document.getElementById('milestones-list');
    if (!container) return;

    const milestones = slideData.slide4.timeline.milestones;

    milestones.forEach((milestone, index) => {
      const milestoneElement = document.createElement('div');
      milestoneElement.className = 'milestone';
      
      milestoneElement.innerHTML = `
        <div class="milestone-week">W${milestone.week}</div>
        <div class="milestone-title">${milestone.title}</div>
      `;

      milestoneElement.addEventListener('click', () => {
        this.showModal(`${milestone.title} 상세`, `
          <p><strong>완료 시점:</strong> ${milestone.week}주차</p>
          <p><strong>주요 산출물:</strong> ${milestone.deliverable}</p>
          <p><strong>중요도:</strong> 높음</p>
        `);
      });

      container.appendChild(milestoneElement);

      // 순차 애니메이션
      setTimeout(() => {
        milestoneElement.style.opacity = '0';
        milestoneElement.style.transform = 'translateX(-10px)';
        milestoneElement.style.transition = 'all 0.3s ease';
        
        setTimeout(() => {
          milestoneElement.style.opacity = '1';
          milestoneElement.style.transform = 'translateX(0)';
        }, 50);
      }, index * 150);
    });
  }

  // ROI 계산기 설정
  setupROICalculator() {
    const investmentSlider = document.getElementById('investment-slider');
    const hoursSlider = document.getElementById('hours-slider');
    const rateSlider = document.getElementById('rate-slider');
    
    const investmentValue = document.getElementById('investment-value');
    const hoursValue = document.getElementById('hours-value');
    const rateValue = document.getElementById('rate-value');
    
    const resultsContainer = document.getElementById('roi-results');

    if (!investmentSlider || !resultsContainer) return;

    const updateROI = () => {
      const investment = parseInt(investmentSlider.value);
      const hours = parseInt(hoursSlider.value);
      const rate = parseInt(rateSlider.value);

      // 값 업데이트
      investmentValue.textContent = `${investment}백만원`;
      hoursValue.textContent = `${hours.toLocaleString()}시간`;
      rateValue.textContent = `${rate.toLocaleString()}원`;

      // ROI 계산
      const annualSavings = (hours * rate) / 1000000; // 백만원 단위
      const paybackPeriod = investment / annualSavings;
      const fiveYearSavings = annualSavings * 5;
      const netBenefit = fiveYearSavings - investment;
      const roi = (netBenefit / investment) * 100;

      resultsContainer.innerHTML = `
        <div class="roi-result-item">
          <span class="result-label">연간 절감액</span>
          <span class="result-value">${annualSavings.toFixed(1)}억원</span>
        </div>
        <div class="roi-result-item">
          <span class="result-label">투자 회수 기간</span>
          <span class="result-value">${paybackPeriod.toFixed(1)}년</span>
        </div>
        <div class="roi-result-item">
          <span class="result-label">5년 ROI</span>
          <span class="result-value">${roi.toFixed(0)}%</span>
        </div>
        <div class="roi-result-item">
          <span class="result-label">순 효익</span>
          <span class="result-value">${netBenefit.toFixed(1)}억원</span>
        </div>
      `;
    };

    // 이벤트 리스너
    investmentSlider.addEventListener('input', updateROI);
    hoursSlider.addEventListener('input', updateROI);
    rateSlider.addEventListener('input', updateROI);

    // 초기 계산
    updateROI();
  }

  // 누적 효과 차트 생성
  createCumulativeChart() {
    const svg = document.getElementById('cumulative-svg');
    if (!svg) return;

    const data = slideData.slide5.cumulativeEffect;
    const width = 400;
    const height = 200;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };

    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

    // 축 생성
    const xScale = (index) => margin.left + (index / (data.years.length - 1)) * (width - margin.left - margin.right);
    const yScale = (value) => height - margin.bottom - ((value + 1000) / 3000) * (height - margin.top - margin.bottom);

    // 선 생성 함수
    const createLine = (values, className) => {
      let pathData = `M ${xScale(0)} ${yScale(values[0])}`;
      for (let i = 1; i < values.length; i++) {
        pathData += ` L ${xScale(i)} ${yScale(values[i])}`;
      }
      
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', pathData);
      path.setAttribute('class', className);
      
      return path;
    };

    // 선들 추가
    svg.appendChild(createLine(data.investment, 'line-investment'));
    svg.appendChild(createLine(data.savings, 'line-savings'));
    svg.appendChild(createLine(data.netBenefit, 'line-benefit'));

    // 점들 추가
    data.years.forEach((year, index) => {
      [data.investment, data.savings, data.netBenefit].forEach((values, lineIndex) => {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', xScale(index));
        circle.setAttribute('cy', yScale(values[index]));
        circle.setAttribute('r', 4);
        circle.setAttribute('fill', ['#ea580c', '#10b981', '#3b82f6'][lineIndex]);
        svg.appendChild(circle);
      });
    });
  }

  // KPI 카드 애니메이션
  animateKPICards() {
    const progressBars = document.querySelectorAll('.kpi-progress-bar');
    
    progressBars.forEach((bar, index) => {
      setTimeout(() => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
      }, index * 200);
    });
  }

  // 액션 아이템 생성
  createActionItems() {
    const container = document.getElementById('action-items');
    if (!container) return;

    const actions = slideData.slide6.actionItems;

    actions.forEach((action, index) => {
      const actionElement = document.createElement('div');
      actionElement.className = 'action-item';
      
      actionElement.innerHTML = `
        <div class="action-checkbox" data-action-id="${action.id}"></div>
        <div class="action-content">
          <div class="action-title">${action.title}</div>
          <div class="action-description">${action.description}</div>
          <div class="action-meta">
            <span class="action-owner">${action.owner}</span>
            <span class="action-deadline">${action.deadline}</span>
          </div>
        </div>
      `;

      container.appendChild(actionElement);

      // 클릭 이벤트
      actionElement.addEventListener('click', () => {
        const checkbox = actionElement.querySelector('.action-checkbox');
        checkbox.classList.toggle('checked');
        
        if (checkbox.classList.contains('checked')) {
          this.showModal(`${action.title} 상세 계획`, `
            <p><strong>담당자:</strong> ${action.owner}</p>
            <p><strong>완료 목표:</strong> ${action.deadline}</p>
            <p><strong>우선순위:</strong> ${action.priority}</p>
            <p><strong>상세 내용:</strong> ${action.description}</p>
            <h4 style="margin: 1rem 0 0.5rem;">다음 단계:</h4>
            <ul style="margin: 0; padding-left: 1rem;">
              <li>관련 이해관계자 식별 및 협의</li>
              <li>상세 실행 계획 수립</li>
              <li>주간 진행상황 보고</li>
            </ul>
          `);
        }
      });

      // 순차 애니메이션
      setTimeout(() => {
        actionElement.style.opacity = '0';
        actionElement.style.transform = 'translateY(20px)';
        actionElement.style.transition = 'all 0.4s ease';
        
        setTimeout(() => {
          actionElement.style.opacity = '1';
          actionElement.style.transform = 'translateY(0)';
        }, 50);
      }, index * 150);
    });
  }

  // 투자 타임라인 생성
  createInvestmentTimeline() {
    const container = document.getElementById('investment-timeline-chart');
    if (!container) return;

    const data = slideData.slide6.investmentTimeline;
    const maxValue = Math.max(...data.investment, ...data.returns);

    const barsContainer = document.createElement('div');
    barsContainer.className = 'timeline-bars-container';

    data.quarters.forEach((quarter, index) => {
      const barGroup = document.createElement('div');
      barGroup.className = 'timeline-bar-group';

      const investmentHeight = (data.investment[index] / maxValue) * 80;
      const returnsHeight = (data.returns[index] / maxValue) * 80;

      barGroup.innerHTML = `
        <div class="timeline-bar-investment" 
             style="height: 0%; transition: height 0.8s ease-out; transition-delay: ${index * 200}ms;" 
             data-height="${investmentHeight}%"></div>
        <div class="timeline-bar-returns" 
             style="height: 0%; transition: height 0.8s ease-out; transition-delay: ${index * 200 + 100}ms;" 
             data-height="${returnsHeight}%"></div>
        <div class="timeline-label">${quarter}</div>
      `;

      barsContainer.appendChild(barGroup);
    });

    container.appendChild(barsContainer);

    // BEP 표시
    const breakevenIndicator = document.createElement('div');
    breakevenIndicator.className = 'breakeven-indicator';
    breakevenIndicator.textContent = `BEP: ${data.breakeven}`;
    container.appendChild(breakevenIndicator);

    // 애니메이션 시작
    setTimeout(() => {
      const investmentBars = container.querySelectorAll('.timeline-bar-investment');
      const returnsBars = container.querySelectorAll('.timeline-bar-returns');

      investmentBars.forEach(bar => {
        bar.style.height = bar.getAttribute('data-height');
      });

      returnsBars.forEach(bar => {
        bar.style.height = bar.getAttribute('data-height');
      });
    }, 500);
  }

  // 슬라이드 3 인터랙션
  addSlide3Interactions() {
    console.log('슬라이드 3 인터랙션 설정 완료');
  }

  // 슬라이드 4 인터랙션
  addSlide4Interactions() {
    const taskBars = document.querySelectorAll('.task-bar');
    taskBars.forEach(bar => {
      bar.addEventListener('mouseenter', () => {
        bar.style.opacity = '0.8';
        bar.style.transform = 'scaleY(1.1)';
      });

      bar.addEventListener('mouseleave', () => {
        bar.style.opacity = '1';
        bar.style.transform = 'scaleY(1)';
      });
    });
  }

  // 슬라이드 5 인터랙션
  addSlide5Interactions() {
    const kpiCards = document.querySelectorAll('.kpi-card');
    kpiCards.forEach(card => {
      card.addEventListener('click', () => {
        const name = card.querySelector('.kpi-name').textContent;
        const current = card.querySelector('.kpi-current').textContent;
        const target = card.querySelector('.kpi-target').textContent;
        const improvement = card.querySelector('.kpi-improvement').textContent;

        this.showModal(`${name} 상세 분석`, `
          <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
            <div>
              <strong>현재:</strong> ${current}<br>
              <strong>목표:</strong> ${target}<br>
              <strong>개선율:</strong> ${improvement}
            </div>
          </div>
          <h4>달성 방법:</h4>
          <ul>
            <li>단계적 자동화 시스템 도입</li>
            <li>사용자 교육 및 변화 관리</li>
            <li>지속적 성과 모니터링</li>
            <li>피드백 기반 개선</li>
          </ul>
          <p><strong>예상 달성 시기:</strong> 프로젝트 완료 후 3개월 내</p>
        `);
      });
    });
  }

  // 슬라이드 6 인터랙션
  addSlide6Interactions() {
    console.log('슬라이드 6 인터랙션 설정 완료');
  }

  // 연락처 모달 표시
  showContactModal() {
    const contactInfo = slideData.slide6.ctaDetails;
    this.showModal('프로젝트 시작하기', `
      <div style="text-align: center; margin-bottom: 2rem;">
        <h3 style="color: var(--accent-purple); margin-bottom: 1rem;">🚀 데이터 혁신 여정을 시작하세요!</h3>
        <p>전문 컨설팅 팀이 귀하의 성공을 위해 준비되어 있습니다.</p>
      </div>
      
      <div style="background: var(--glass-bg); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
        <h4 style="margin-bottom: 1rem;">📞 연락처 정보</h4>
        <p><strong>담당자:</strong> ${contactInfo.contact.name}</p>
        <p><strong>이메일:</strong> ${contactInfo.contact.email}</p>
        <p><strong>전화:</strong> ${contactInfo.contact.phone}</p>
        <p><strong>부서:</strong> ${contactInfo.contact.department}</p>
      </div>

      <div style="background: linear-gradient(135deg, var(--accent-purple), var(--accent-violet)); padding: 1.5rem; border-radius: 12px; color: white;">
        <h4 style="margin-bottom: 1rem;">⚡ 다음 단계</h4>
        <ul style="margin: 0; padding-left: 1rem;">
          ${contactInfo.nextSteps.map(step => `<li>${step}</li>`).join('')}
        </ul>
      </div>

      <div style="text-align: center; margin-top: 1.5rem; font-size: 0.875rem; color: var(--text-muted);">
        <p><em>${contactInfo.urgency}</em></p>
      </div>
    `);
  }
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
  window.slideshow = new DataAnalysisSlideshow();
});
