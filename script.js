const achievementsData = [
  {
    title: "一、经济成就",
    actual: "",
    target: "",
    unit: "",
    detail: `
    我国是世界经济增长的主要贡献者，对世界经济增长的贡献率一直保持在30%左右。
    我国是全球第二大消费市场和进口市场，消费对经济增长的贡献率达到了60%左右，主引擎作用持续凸显。
    我国货物贸易稳居全球第一。服务贸易规模稳居全球第二，去年首次超过1万亿美元。
    `,
  },
  {
    title: "二、民生成就",
    actual: "",
    target: "",
    unit: "",
    detail: `
    我国建成了全球规模最大的教育体系、社会保障体系、医疗卫生体系。
    我国建成了全球最大的高速铁路网、高速公路网和邮政快递网。
    `,
  },
  {
    title: "三、创新成就",
    actual: "",
    target: "",
    unit: "",
    detail: `
    海上，第一艘国产电磁弹射航母——福建舰下水。第一艘大洋钻探船——“梦想”号探秘大洋。第一艘国产大型油轮——“爱达·魔都号”建成运营。
    陆上，全球第一座第四代核电站——石岛湾基地投入商业运行。秦岭站崛起冰原——南极建设的第五个科考站。CR450动车组发布。
    天上，“嫦娥六号”——第一次月球背面无人采样返回。国产大飞机——C919实现商业飞行。
    `,
  },
];

// TODO: 请把下面 gdp2024 中的数字替换为你表格里 2024 行的真实数据
// 该部分不再展示，可按需填写或保留为空
const gdp2024 = {
  year: "2024",
  totalGDP: 0,
  perCapitaGDP: 0,
  primary: 0,
  secondary: 0,
  tertiary: 0,
};

// 不展示里程碑，保持空数组
const milestoneData = [];

const flowNodes = [
  {
    title: "发展动能与开放",
    text:
      "① 建设现代化产业体系，巩固壮大实体经济根基<br>② 加快高水平科技自立自强，引领发展新质生产力<br>③ 建设强大国内市场，加快构建新发展格局<br>④ 扩大高水平对外开放，开创合作共赢新局面<br>⑤ 加快构建高水平社会主义市场经济体制，增强高质量发展动力",
  },
  {
    title: "区域与民生振兴",
    text:
      "⑥ 加快农业农村现代化，扎实推进乡村全面振兴<br>⑦ 优化区域经济布局，促进区域协调发展<br>⑧ 激发全民族文化创新创造活力，繁荣发展社会主义文化<br>⑨ 加大保障和改善民生力度，扎实推进全体人民共同富裕",
  },
  {
    title: "绿色与安全底座",
    text:
      "⑩ 加快经济社会发展全面绿色转型，建设美丽中国<br>⑪ 推进国家安全体系和能力现代化，建设更高水平平安中国<br>⑫ 如期实现建军一百年奋斗目标，高质量推进国防和军队现代化",
  },
];

// 思维导图图片查看（放大/缩小/重置）
(() => {
  const img = document.getElementById("mindmapImage");
  if (!img) return;
  let scale = 1;
  const step = 0.15;
  const max = 2.5;
  const min = 0.6;

  const apply = () => {
    img.style.transform = `scale(${scale})`;
  };

  document.getElementById("mindmapZoomIn")?.addEventListener("click", () => {
    scale = Math.min(max, scale + step);
    apply();
  });

  document.getElementById("mindmapZoomOut")?.addEventListener("click", () => {
    scale = Math.max(min, scale - step);
    apply();
  });

  document.getElementById("mindmapReset")?.addEventListener("click", () => {
    scale = 1;
    apply();
  });
})();

// 十四五时期（2020-2024）多个指标数据
// 请根据你的表格数据替换下面的数值
const chartMetrics = [
  {
    key: "gdpTotal",
    title: "国内生产总值",
    unit: "亿元",
    data: [
      { year: 2020, value: 1034867.6 },
      { year: 2021, value: 1173823.0 },
      { year: 2022, value: 1234029.4 },
      { year: 2023, value: 1294271.7 },
      { year: 2024, value: 1349083.5 },
    ],
  },
  {
    key: "gdpPerCapita",
    title: "人均国内生产总值",
    unit: "元",
    data: [
      { year: 2020, value: 73338 },
      { year: 2021, value: 83111 },
      { year: 2022, value: 87385 },
      { year: 2023, value: 91746 },
      { year: 2024, value: 95749 },
    ],
  },
  {
    key: "industryPrimary",
    title: "第一产业增加值",
    unit: "亿元",
    data: [
      { year: 2020, value: 78030.9 },
      { year: 2021, value: 83216.5 },
      { year: 2022, value: 88207.0 },
      { year: 2023, value: 89169.1 },
      { year: 2024, value: 91413.9 },
    ],
  },
  {
    key: "industrySecondary",
    title: "第二产业增加值",
    unit: "亿元",
    data: [
      { year: 2020, value: 381985.8 },
      { year: 2021, value: 447138.2 },
      { year: 2022, value: 467629.6 },
      { year: 2023, value: 475936.1 },
      { year: 2024, value: 492087.1 },
    ],
  },
  {
    key: "industryTertiary",
    title: "第三产业增加值",
    unit: "亿元",
    data: [
      { year: 2020, value: 574850.9 },
      { year: 2021, value: 643468.4 },
      { year: 2022, value: 678192.7 },
      { year: 2023, value: 729166.5 },
      { year: 2024, value: 765582.5 },
    ],
  },
  {
    key: "consumptionTotal",
    title: "居民消费水平",
    unit: "元",
    // 按年份 2020→2024 排列；若你有官方年份对应，请调整
    data: [
      { year: 2020, value: 27992 },
      { year: 2021, value: 31893 },
      { year: 2022, value: 33012 },
      { year: 2023, value: 36302 },
      { year: 2024, value: 38230 },
    ],
  },
  {
    key: "consumptionUrban",
    title: "城镇居民消费水平",
    unit: "元",
    data: [
      { year: 2020, value: 34823 },
      { year: 2021, value: 39205 },
      { year: 2022, value: 40066 },
      { year: 2023, value: 43797 },
      { year: 2024, value: 45717 },
    ],
  },
  {
    key: "consumptionRural",
    title: "农村居民消费水平",
    unit: "元",
    data: [
      { year: 2020, value: 16209 },
      { year: 2021, value: 18720 },
      { year: 2022, value: 19929 },
      { year: 2023, value: 21953 },
      { year: 2024, value: 23313 },
    ],
  },
  {
    key: "populationTotal",
    title: "年末总人口",
    unit: "万人",
    data: [
      { year: 2020, value: 141212 },
      { year: 2021, value: 141260 },
      { year: 2022, value: 141175 },
      { year: 2023, value: 140967 },
      { year: 2024, value: 140828 },
    ],
  },
  {
    key: "populationMale",
    title: "男性人口",
    unit: "万人",
    data: [
      { year: 2020, value: 72357 },
      { year: 2021, value: 72311 },
      { year: 2022, value: 72206 },
      { year: 2023, value: 72032 },
      { year: 2024, value: 71909 },
    ],
  },
  {
    key: "populationFemale",
    title: "女性人口",
    unit: "万人",
    data: [
      { year: 2020, value: 68855 },
      { year: 2021, value: 68949 },
      { year: 2022, value: 68969 },
      { year: 2023, value: 68935 },
      { year: 2024, value: 68919 },
    ],
  },
  {
    key: "populationUrban",
    title: "城镇人口",
    unit: "万人",
    data: [
      { year: 2020, value: 90220 },
      { year: 2021, value: 91425 },
      { year: 2022, value: 92071 },
      { year: 2023, value: 93267 },
      { year: 2024, value: 94350 },
    ],
  },
  {
    key: "populationRural",
    title: "乡村人口",
    unit: "万人",
    data: [
      { year: 2020, value: 50992 },
      { year: 2021, value: 49835 },
      { year: 2022, value: 49104 },
      { year: 2023, value: 47700 },
      { year: 2024, value: 46478 },
    ],
  },
];

const scrollButtons = document.querySelectorAll("[data-scroll-target]");
scrollButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = document.querySelector(btn.dataset.scrollTarget);
    target?.scrollIntoView({ behavior: "smooth" });
  });
});

const achievementTitleEl = document.getElementById("achievementTitle");
const achievementValueEl = document.getElementById("achievementValue");
const achievementTargetEl = document.getElementById("achievementTarget");
const achievementDetailEl = document.getElementById("achievementDetail");
const achievementIndicatorEl = document.getElementById("achievementsIndicator");
const achievementPrevBtn = document.getElementById("achievementsPrev");
const achievementNextBtn = document.getElementById("achievementsNext");

let achievementIndex = 0;

const renderAchievement = () => {
  if (!achievementTitleEl) return;
  // 展示三方面成就，取消轮播
  // achievementTitleEl.textContent = "三大成就概览";
  achievementValueEl.style.display = "none";
  achievementTargetEl && (achievementTargetEl.style.display = "none");
  achievementIndicatorEl && (achievementIndicatorEl.style.display = "none");
  achievementPrevBtn && (achievementPrevBtn.style.display = "none");
  achievementNextBtn && (achievementNextBtn.style.display = "none");

  const blocks = achievementsData.map((item) => {
    const lines = (item.detail || "")
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean)
      .map((line) => `<div class="achievement-line">${line}</div>`)
      .join("");
    return `
      <div class="achievement-line">
        <strong>${item.title}</strong>
        <div class="achievement-lines">${lines}</div>
      </div>
    `;
  });

  achievementDetailEl.innerHTML = blocks.join("");
};

if (achievementTitleEl && achievementsData.length) {
  renderAchievement();
}

const achievementImages = [
  "image/IMG_3226.jpg",
  "image/IMG_3227.jpg",
  "image/IMG_3228.jpg",
  "image/IMG_3229.jpg",
  "image/IMG_3230.jpg",
  "image/IMG_3231.jpg",
  "image/IMG_3232.jpg",
  "image/IMG_3233.jpg",
  "image/IMG_3234.jpg",
];

const achievementImageEl = document.getElementById("achievementImage");
const achievementImgIndicatorEl = document.getElementById(
  "achievementImgIndicator"
);
const achievementImgPrevBtn = document.getElementById("achievementImgPrev");
const achievementImgNextBtn = document.getElementById("achievementImgNext");

let achievementImgIndex = 0;

const renderAchievementImg = () => {
  if (!achievementImageEl) return;
  achievementImageEl.src = achievementImages[achievementImgIndex];
  achievementImgIndicatorEl.textContent = `${achievementImgIndex + 1}/${
    achievementImages.length
  }`;
};

const changeAchievementImg = (delta = 1) => {
  achievementImgIndex =
    (achievementImgIndex + delta + achievementImages.length) %
    achievementImages.length;
  renderAchievementImg();
};

if (achievementImageEl && achievementImages.length) {
  renderAchievementImg();
  achievementImgPrevBtn?.addEventListener("click", () =>
    changeAchievementImg(-1)
  );
  achievementImgNextBtn?.addEventListener("click", () =>
    changeAchievementImg(1)
  );
  setInterval(() => changeAchievementImg(1), 5000);
}

const milestonesEl = document.getElementById("milestones");
milestoneData.forEach(({ year, text }) => {
  const item = document.createElement("article");
  item.className = "timeline-item";
  item.innerHTML = `
      <div class="timeline-item__year">${year}</div>
      <div class="timeline-item__content">
        <p>${text}</p>
        ${
          year === String(gdp2024.year)
            ? `
          <div class="gdp-2024">
            <div class="gdp-2024__title">2024 年国内生产总值（示意）</div>
            <div class="gdp-2024__grid">
              <div>
                <span class="label">国内生产总值</span>
                <span class="value">${gdp2024.totalGDP.toLocaleString()} 亿元</span>
              </div>
              <div>
                <span class="label">人均 GDP</span>
                <span class="value">${gdp2024.perCapitaGDP.toLocaleString()} 元</span>
              </div>
              <div>
                <span class="label">第一产业</span>
                <span class="value">${gdp2024.primary.toLocaleString()} 亿元</span>
              </div>
              <div>
                <span class="label">第二产业</span>
                <span class="value">${gdp2024.secondary.toLocaleString()} 亿元</span>
              </div>
              <div>
                <span class="label">第三产业</span>
                <span class="value">${gdp2024.tertiary.toLocaleString()} 亿元</span>
              </div>
            </div>
          </div>
        `
            : ""
        }
      </div>
    `;
  milestonesEl.appendChild(item);
});

const flowchartEl = document.getElementById("flowchart");
flowNodes.forEach(({ title, text }) => {
  const node = document.createElement("article");
  node.className = "flow-node";
  node.innerHTML = `
      <div class="flow-node__title">${title}</div>
      <p>${text}</p>
    `;
  flowchartEl.appendChild(node);
});

if (flowNodes.length > 1) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "flow-connector");
  svg.setAttribute("viewBox", "0 0 1200 200");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M40 100 Q 200 20 360 100 T 680 100 T 1000 100"
  );
  svg.appendChild(path);
  flowchartEl.appendChild(svg);
}


document.getElementById("year").textContent = new Date().getFullYear();

const heroCtx = document.getElementById("heroChart");
if (heroCtx) {
  new Chart(heroCtx, {
    type: "radar",
    data: {
      labels: ["创新", "绿色", "数字化", "民生", "开放", "安全"],
      datasets: [
        {
          label: "十四五",
          data: [85, 78, 72, 80, 75, 82],
          borderColor: "rgba(248,113,113,0.9)",
          backgroundColor: "rgba(248,113,113,0.2)",
          borderWidth: 2,
          pointRadius: 0,
        },
        {
          label: "十五五展望",
          data: [92, 88, 90, 84, 82, 90],
          borderColor: "rgba(239,68,68,0.9)",
          backgroundColor: "rgba(239,68,68,0.18)",
          borderWidth: 2,
          pointRadius: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        r: {
          angleLines: { color: "rgba(255,255,255,0.1)" },
          grid: { color: "rgba(255,255,255,0.08)" },
          pointLabels: { color: "#e2e8f0", font: { size: 12 } },
          suggestedMin: 60,
          suggestedMax: 100,
          ticks: { display: false },
        },
      },
    },
  });
}

// 折线图：十四五时期（2020-2024）分组展示
let macroChart = null;
let industryChart = null;
let consumptionChart = null;
let populationChart = null;
let pieUrbanRural = null;
let pieGender = null;
let pieIndustry = null;

const macroCtx = document.getElementById("lineChartMacro");
const industryCtx = document.getElementById("lineChartIndustry");
const consumptionCtx = document.getElementById("lineChartConsumption");
const populationCtx = document.getElementById("lineChartPopulation");
const pieUrbanRuralCtx = document.getElementById("pieUrbanRural");
const pieGenderCtx = document.getElementById("pieGender");
const pieIndustryCtx = document.getElementById("pieIndustry");
const pieIndustryYearSelect = document.getElementById("pieIndustryYearSelect");
const pieYearSelect = document.getElementById("pieYearSelect");
const tabButtons = document.querySelectorAll(".chart-tab");
const tabContents = document.querySelectorAll("[data-tab-content]");

function filterFilled(data) {
  return data.filter((d) => d.value > 0);
}

function buildMacroChart() {
  if (!macroCtx) return;
  const gdp = chartMetrics.find((m) => m.key === "gdpTotal");
  const pc = chartMetrics.find((m) => m.key === "gdpPerCapita");
  if (!gdp || !pc) return;

  const gdpData = filterFilled(gdp.data);
  const pcData = filterFilled(pc.data);
  const labels = gdpData.map((d) => d.year);

  if (macroChart) macroChart.destroy();

  macroChart = new Chart(macroCtx, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: gdp.title,
          data: gdpData.map((d) => d.value),
          yAxisID: "y",
          borderColor: "rgba(14,165,233,0.95)",
          backgroundColor: "rgba(56,189,248,0.12)",
          borderWidth: 2.8,
          tension: 0.3,
          pointRadius: 4,
          pointBackgroundColor: "rgba(14,165,233,1)",
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
          fill: true,
        },
        {
          label: pc.title,
          data: pcData.map((d) => d.value),
          yAxisID: "y1",
          borderColor: "rgba(16,185,129,0.95)",
          backgroundColor: "rgba(52,211,153,0.12)",
          borderWidth: 2.4,
          tension: 0.3,
          pointRadius: 4,
          pointBackgroundColor: "rgba(16,185,129,1)",
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: "index", intersect: false },
      plugins: {
        legend: { display: true, labels: { boxWidth: 12 } },
        tooltip: {
          backgroundColor: "rgba(15, 23, 42, 0.95)",
          padding: 12,
          titleColor: "#e2e8f0",
          bodyColor: "#cbd5e1",
          borderColor: "rgba(148, 163, 184, 0.3)",
          borderWidth: 1,
          callbacks: {
            title: (items) => `${items[0].label} 年`,
            label: (ctx) => `${ctx.dataset.label}：${ctx.parsed.y.toLocaleString()} ${ctx.dataset.yAxisID === "y1" ? "元" : "亿元"}`,
          },
        },
      },
      scales: {
        x: {
          grid: { color: "rgba(148, 163, 184, 0.1)" },
          ticks: { color: "rgba(15, 23, 42, 0.6)", font: { size: 12 } },
        },
        y: {
          type: "linear",
          position: "left",
          grid: { color: "rgba(148, 163, 184, 0.12)" },
          ticks: {
            color: "rgba(15, 23, 42, 0.7)",
            callback: (v) => v.toLocaleString(),
          },
        },
        y1: {
          type: "linear",
          position: "right",
          grid: { drawOnChartArea: false },
          ticks: {
            color: "rgba(15, 23, 42, 0.7)",
            callback: (v) => v.toLocaleString(),
          },
        },
      },
    },
  });
}

function buildIndustryChart() {
  if (!industryCtx) return;
  const p = chartMetrics.find((m) => m.key === "industryPrimary");
  const s = chartMetrics.find((m) => m.key === "industrySecondary");
  const t = chartMetrics.find((m) => m.key === "industryTertiary");
  if (!p || !s || !t) return;

  const primary = filterFilled(p.data);
  const secondary = filterFilled(s.data);
  const tertiary = filterFilled(t.data);
  const labels = primary.map((d) => d.year);

  if (industryChart) industryChart.destroy();

  industryChart = new Chart(industryCtx, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: p.title,
          data: primary.map((d) => d.value),
          borderColor: "rgba(34,197,235,0.95)",
          backgroundColor: "rgba(125,211,252,0.15)",
          borderWidth: 2.5,
          tension: 0.3,
          pointRadius: 4,
          pointBackgroundColor: "rgba(34,197,235,1)",
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
          fill: true,
        },
        {
          label: s.title,
          data: secondary.map((d) => d.value),
          borderColor: "rgba(99,102,241,0.95)",
          backgroundColor: "rgba(129,140,248,0.15)",
          borderWidth: 2.5,
          tension: 0.3,
          pointRadius: 4,
          pointBackgroundColor: "rgba(99,102,241,1)",
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
          fill: true,
        },
        {
          label: t.title,
          data: tertiary.map((d) => d.value),
          borderColor: "rgba(236,72,153,0.95)",
          backgroundColor: "rgba(244,114,182,0.15)",
          borderWidth: 2.5,
          tension: 0.3,
          pointRadius: 4,
          pointBackgroundColor: "rgba(236,72,153,1)",
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: "index", intersect: false },
      plugins: {
        legend: { display: true, labels: { boxWidth: 12 } },
        tooltip: {
          backgroundColor: "rgba(15, 23, 42, 0.95)",
          padding: 12,
          titleColor: "#e2e8f0",
          bodyColor: "#cbd5e1",
          borderColor: "rgba(148, 163, 184, 0.3)",
          borderWidth: 1,
          callbacks: {
            title: (items) => `${items[0].label} 年`,
            label: (ctx) => `${ctx.dataset.label}：${ctx.parsed.y.toLocaleString()} 亿元`,
          },
        },
      },
      scales: {
        x: {
          grid: { color: "rgba(148, 163, 184, 0.1)" },
          ticks: { color: "rgba(15, 23, 42, 0.6)", font: { size: 12 } },
        },
        y: {
          beginAtZero: false,
          grid: { color: "rgba(148, 163, 184, 0.12)" },
          ticks: {
            color: "rgba(15, 23, 42, 0.7)",
            callback: (v) => v.toLocaleString(),
          },
        },
      },
    },
  });

  const years = primary.map((d) => d.year);

  function renderIndustryPie(targetYear) {
    const idx = years.indexOf(targetYear);
    if (idx === -1) return;
    const yearLabel = `${targetYear}年`;
    if (pieIndustry) pieIndustry.destroy();
    pieIndustry = new Chart(pieIndustryCtx, {
      type: "pie",
      data: {
        labels: [p.title, s.title, t.title],
        datasets: [
          {
            data: [
              primary[idx].value,
              secondary[idx].value,
              tertiary[idx].value,
            ],
            backgroundColor: [
              "rgba(34,197,235,0.8)",
              "rgba(99,102,241,0.8)",
              "rgba(236,72,153,0.8)",
            ],
            borderColor: "#fff",
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          title: { display: true, text: `${yearLabel}产业结构占比` },
          legend: { position: "bottom" },
        },
      },
    });
  }

  if (pieIndustryYearSelect && pieIndustryYearSelect.options.length === 0) {
    years.forEach((y) => {
      const opt = document.createElement("option");
      opt.value = y;
      opt.textContent = y;
      pieIndustryYearSelect.appendChild(opt);
    });
    pieIndustryYearSelect.value = years[years.length - 1];
  }

  const selectedYear = pieIndustryYearSelect
    ? Number(pieIndustryYearSelect.value) || years[years.length - 1]
    : years[years.length - 1];
  renderIndustryPie(selectedYear);

  pieIndustryYearSelect?.addEventListener("change", (e) => {
    const y = Number(e.target.value);
    if (Number.isFinite(y)) {
      renderIndustryPie(y);
    }
  });
}

function buildConsumptionChart() {
  if (!consumptionCtx) return;
  const total = chartMetrics.find((m) => m.key === "consumptionTotal");
  const urban = chartMetrics.find((m) => m.key === "consumptionUrban");
  const rural = chartMetrics.find((m) => m.key === "consumptionRural");
  if (!total || !urban || !rural) return;

  const tData = filterFilled(total.data);
  const uData = filterFilled(urban.data);
  const rData = filterFilled(rural.data);
  const labels = tData.map((d) => d.year);

  if (consumptionChart) consumptionChart.destroy();

  consumptionChart = new Chart(consumptionCtx, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: total.title,
          data: tData.map((d) => d.value),
          borderColor: "rgba(14,165,233,0.95)",
          backgroundColor: "rgba(56,189,248,0.12)",
          borderWidth: 2.5,
          tension: 0.3,
          pointRadius: 4,
          pointBackgroundColor: "rgba(14,165,233,1)",
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
          fill: true,
        },
        {
          label: urban.title,
          data: uData.map((d) => d.value),
          borderColor: "rgba(99,102,241,0.95)",
          backgroundColor: "rgba(129,140,248,0.15)",
          borderWidth: 2.5,
          tension: 0.3,
          pointRadius: 4,
          pointBackgroundColor: "rgba(99,102,241,1)",
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
          fill: true,
        },
        {
          label: rural.title,
          data: rData.map((d) => d.value),
          borderColor: "rgba(16,185,129,0.95)",
          backgroundColor: "rgba(52,211,153,0.15)",
          borderWidth: 2.5,
          tension: 0.3,
          pointRadius: 4,
          pointBackgroundColor: "rgba(16,185,129,1)",
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: "index", intersect: false },
      plugins: {
        legend: { display: true, labels: { boxWidth: 12 } },
        tooltip: {
          backgroundColor: "rgba(15, 23, 42, 0.95)",
          padding: 12,
          titleColor: "#e2e8f0",
          bodyColor: "#cbd5e1",
          borderColor: "rgba(148, 163, 184, 0.3)",
          borderWidth: 1,
          callbacks: {
            title: (items) => `${items[0].label} 年`,
            label: (ctx) => `${ctx.dataset.label}：${ctx.parsed.y.toLocaleString()} 元`,
          },
        },
      },
      scales: {
        x: {
          grid: { color: "rgba(148, 163, 184, 0.1)" },
          ticks: { color: "rgba(15, 23, 42, 0.6)", font: { size: 12 } },
        },
        y: {
          beginAtZero: false,
          grid: { color: "rgba(148, 163, 184, 0.12)" },
          ticks: {
            color: "rgba(15, 23, 42, 0.7)",
            callback: (v) => v.toLocaleString(),
          },
        },
      },
    },
  });
}

function buildPopulationChart() {
  if (!populationCtx) return;
  const total = chartMetrics.find((m) => m.key === "populationTotal");
  const male = chartMetrics.find((m) => m.key === "populationMale");
  const female = chartMetrics.find((m) => m.key === "populationFemale");
  const urban = chartMetrics.find((m) => m.key === "populationUrban");
  const rural = chartMetrics.find((m) => m.key === "populationRural");
  if (!total || !male || !female || !urban || !rural) return;

  const tData = filterFilled(total.data);
  const mData = filterFilled(male.data);
  const fData = filterFilled(female.data);
  const uData = filterFilled(urban.data);
  const rData = filterFilled(rural.data);
  const labels = tData.map((d) => d.year);

  if (populationChart) populationChart.destroy();

  populationChart = new Chart(populationCtx, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: total.title,
          data: tData.map((d) => d.value),
          borderColor: "rgba(14,165,233,0.95)",
          backgroundColor: "rgba(56,189,248,0.12)",
          borderWidth: 2.6,
          tension: 0.3,
          pointRadius: 4,
          pointBackgroundColor: "rgba(14,165,233,1)",
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
          fill: true,
        },
        {
          label: male.title,
          data: mData.map((d) => d.value),
          borderColor: "rgba(59,130,246,0.95)",
          backgroundColor: "rgba(96,165,250,0.15)",
          borderWidth: 2.4,
          tension: 0.3,
          pointRadius: 4,
          pointBackgroundColor: "rgba(59,130,246,1)",
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
          fill: true,
        },
        {
          label: female.title,
          data: fData.map((d) => d.value),
          borderColor: "rgba(236,72,153,0.95)",
          backgroundColor: "rgba(244,114,182,0.15)",
          borderWidth: 2.4,
          tension: 0.3,
          pointRadius: 4,
          pointBackgroundColor: "rgba(236,72,153,1)",
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
          fill: true,
        },
        {
          label: urban.title,
          data: uData.map((d) => d.value),
          borderColor: "rgba(16,185,129,0.95)",
          backgroundColor: "rgba(52,211,153,0.15)",
          borderWidth: 2.4,
          tension: 0.3,
          pointRadius: 4,
          pointBackgroundColor: "rgba(16,185,129,1)",
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
          fill: true,
        },
        {
          label: rural.title,
          data: rData.map((d) => d.value),
          borderColor: "rgba(251,146,60,0.95)",
          backgroundColor: "rgba(251,191,36,0.18)",
          borderWidth: 2.4,
          tension: 0.3,
          pointRadius: 4,
          pointBackgroundColor: "rgba(251,146,60,1)",
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: "index", intersect: false },
      plugins: {
        legend: { display: true, labels: { boxWidth: 12 } },
        tooltip: {
          backgroundColor: "rgba(15, 23, 42, 0.95)",
          padding: 12,
          titleColor: "#e2e8f0",
          bodyColor: "#cbd5e1",
          borderColor: "rgba(148, 163, 184, 0.3)",
          borderWidth: 1,
          callbacks: {
            title: (items) => `${items[0].label} 年`,
            label: (ctx) => `${ctx.dataset.label}：${ctx.parsed.y.toLocaleString()} ${ctx.dataset.label.includes("人") ? "万人" : ""}`,
          },
        },
      },
      scales: {
        x: {
          grid: { color: "rgba(148, 163, 184, 0.1)" },
          ticks: { color: "rgba(15, 23, 42, 0.6)", font: { size: 12 } },
        },
        y: {
          beginAtZero: false,
          grid: { color: "rgba(148, 163, 184, 0.12)" },
          ticks: {
            color: "rgba(15, 23, 42, 0.7)",
            callback: (v) => v.toLocaleString(),
          },
        },
      },
    },
  });

  const years = tData.map((d) => d.year);

  function renderPopulationPies(targetYear) {
    const idx = years.indexOf(targetYear);
    if (idx === -1) return;

    const yearLabel = `${targetYear}年`;
    if (pieUrbanRuralCtx && uData[idx] && rData[idx]) {
      if (pieUrbanRural) pieUrbanRural.destroy();
      pieUrbanRural = new Chart(pieUrbanRuralCtx, {
        type: "pie",
        data: {
          labels: ["城镇", "乡村"],
          datasets: [
            {
              data: [uData[idx].value, rData[idx].value],
              backgroundColor: ["rgba(14,165,233,0.8)", "rgba(251,146,60,0.8)"],
              borderColor: "#fff",
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            title: { display: true, text: `${yearLabel}城镇/乡村人口` },
            legend: { position: "bottom" },
          },
        },
      });
    }

    if (pieGenderCtx && mData[idx] && fData[idx]) {
      if (pieGender) pieGender.destroy();
      pieGender = new Chart(pieGenderCtx, {
        type: "pie",
        data: {
          labels: ["男性", "女性"],
          datasets: [
            {
              data: [mData[idx].value, fData[idx].value],
              backgroundColor: ["rgba(59,130,246,0.8)", "rgba(236,72,153,0.8)"],
              borderColor: "#fff",
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            title: { display: true, text: `${yearLabel}性别结构` },
            legend: { position: "bottom" },
          },
        },
      });
    }
  }

  // 初始化年份选择
  if (pieYearSelect && pieYearSelect.options.length === 0) {
    years.forEach((y) => {
      const opt = document.createElement("option");
      opt.value = y;
      opt.textContent = y;
      pieYearSelect.appendChild(opt);
    });
    pieYearSelect.value = years[years.length - 1];
  }

  const selectedYear = pieYearSelect
    ? Number(pieYearSelect.value) || years[years.length - 1]
    : years[years.length - 1];
  renderPopulationPies(selectedYear);

  pieYearSelect?.addEventListener("change", (e) => {
    const y = Number(e.target.value);
    if (Number.isFinite(y)) {
      renderPopulationPies(y);
    }
  });
}

function switchTab(target) {
  tabButtons.forEach((btn) => {
    btn.classList.toggle("chart-tab--active", btn.dataset.tab === target);
  });
  tabContents.forEach((content) => {
    content.hidden = content.dataset.tabContent !== target;
  });
}

if (macroCtx && industryCtx && consumptionCtx && populationCtx && chartMetrics.length > 0) {
  buildMacroChart();
  buildIndustryChart();
  buildConsumptionChart();
  buildPopulationChart();

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.tab;
      switchTab(target);
    });
  });
}

// 已移除“查看差异对比”按钮，保留逻辑为空
