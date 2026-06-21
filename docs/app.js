const sampleReviews = [
  "成分表写得很清楚，烟酰胺和玻色因含量都标注了，会回购",
  "用了两周脸有点泛红，客服回复很慢，问了三次才有人理我",
  "质地很好吸收快，就是价格比上一代涨了快30%",
  "过敏了，脸上起了小红疹，希望品牌方重视",
  "物流太慢了，等了快一周，配送体验差",
  "客服态度冷淡，退换货流程走了快两周",
  "温和不刺激，敏感肌也能用，包装设计很高级",
  "效果确实有，但是价格对学生党不太友好，希望出小样装",
];

const templates = {
  launch: [
    "成分表写得很清楚，核心成分看起来很安心，会回购",
    "新品质地比旧版更好吸收，肤感轻薄不黏",
    "包装设计很高级，送朋友也拿得出手",
    "用了三天有点泛红，不确定敏感肌能不能继续用",
    "详情页没有写清楚适合什么肤质，希望说明更具体",
    "效果确实有，但价格比预期高，想等活动再买",
    "客服解释成分挺耐心，但回复速度有点慢",
    "如果有小样装会更愿意先试一下",
  ],
  campaign: [
    "大促价格比平时划算，但赠品规则看了半天没看懂",
    "满减之后确实便宜，会考虑囤货",
    "页面写的优惠和下单页不一致，有点影响信任",
    "物流太慢了，活动结束一周才收到",
    "客服排队很久，问赠品问题没人及时回复",
    "组合装很适合老用户，但新用户不知道该怎么选",
    "价格不错，希望能直接写清楚到手价",
    "活动说明太复杂，差点放弃下单",
  ],
  negative: [
    "用了两周脸有点泛红，想知道是不是不适合敏感肌",
    "客服回复很慢，退换货流程也不清楚",
    "价格偏贵，如果没有小样不敢直接买正装",
    "包装收到有压痕，送人会有点尴尬",
    "详情页没写清楚使用频率，新手不知道怎么用",
    "物流慢，等了快一周才到",
    "成分看起来不错，但担心和其他产品叠加会刺激",
    "希望直播间能直接讲清楚适用人群和避雷点",
  ],
};

const sentimentList = document.querySelector("#sentimentList");
const themeList = document.querySelector("#themeList");
const painList = document.querySelector("#painList");
const contentList = document.querySelector("#contentList");
const sellingList = document.querySelector("#sellingList");
const metricList = document.querySelector("#metricList");
const adviceText = document.querySelector("#adviceText");
const reviewInput = document.querySelector("#reviewInput");
const fileInput = document.querySelector("#fileInput");
let currentReport = {};

function renderList(node, items) {
  node.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function parseUploadedText(text) {
  const lines = text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  if (!lines.length) return [];
  const hasCsvHeader = lines[0].includes("review_text") || lines[0].includes("评论");
  if (!hasCsvHeader) return lines;

  const header = lines[0].split(",").map((item) => item.trim());
  const reviewIndex = Math.max(header.indexOf("review_text"), header.indexOf("评论"));
  if (reviewIndex === -1) return lines.slice(1);

  return lines.slice(1).map((line) => line.split(",")[reviewIndex]?.trim()).filter(Boolean);
}

function analyze() {
  const reviews = reviewInput.value.split("\n").map((item) => item.trim()).filter(Boolean);
  const negative = reviews.filter((text) => /慢|冷淡|过敏|泛红|贵|不友好|差|涨/.test(text));
  const positive = reviews.filter((text) => /清楚|回购|温和|高级|效果|吸收快/.test(text));
  const neutral = Math.max(reviews.length - negative.length - positive.length, 0);
  const adoptionScore = Math.min(92, 70 + positive.length * 2);
  const contentTopics = [
    "小红书：护肤品成分表怎么看？用真实评论讲清楚安全感",
    "抖音：大促怎么买才不亏？用价格反馈做决策指南",
    "公众号：从用户评论看功效表达机会",
    "直播间：把高频痛点整理成 FAQ，降低购买顾虑",
  ];
  const sellingPoints = [
    "成分透明：适合放在详情页首屏和种草标题",
    "温和安心：适合承接敏感肌用户顾虑",
    "包装高级：适合礼赠场景和视觉内容",
    "真实效果：适合用用户原话做信任背书",
  ];
  const metrics = [
    "洞察采纳率：目标 30%+",
    "内容选题转化率：目标 20%+",
    "详情页优化采纳率：目标 20%+",
    "客服 FAQ 覆盖率：目标 30%+",
    "人工修正率：目标低于 40%",
  ];
  const advice =
    "建议把成分透明、温和安心和真实效果反馈作为主要购买理由放大；同时补齐价格机制、敏感肌适用和客服响应说明，把用户疑虑转化为详情页模块、种草选题和客服 FAQ，降低下单前的决策阻碍。";

  document.querySelector("#reviewCount").textContent = reviews.length;
  document.querySelector("#painCount").textContent = "6";
  document.querySelector("#topicCount").textContent = "4";
  document.querySelector("#adoptionScore").textContent = adoptionScore;

  renderList(sentimentList, [
    `正面：${positive.length} 条，集中在成分透明、肤感和包装`,
    `负面：${negative.length} 条，集中在价格、客服、物流和过敏风险`,
    `中性：${neutral} 条，可作为人工复核样本`,
  ]);
  renderList(themeList, [
    "产品效果：用户最关心是否真的改善肤况",
    "价格/性价比：涨价、组合装和小样会影响转化",
    "成分透明度：清楚标注成分能增强信任",
    "客服体验：回复慢会放大负面情绪",
  ]);
  renderList(painList, negative.slice(0, 4));
  renderList(contentList, contentTopics);
  renderList(sellingList, sellingPoints);
  renderList(metricList, metrics);
  adviceText.textContent = advice;

  currentReport = {
    sample_size: reviews.length,
    sentiment: { positive: positive.length, neutral, negative: negative.length },
    purchase_motivations: ["成分透明", "温和安心", "真实效果", "包装高级"],
    conversion_barriers: ["价格上涨", "敏感肌风险", "客服响应慢", "物流体验差"],
    representative_pain_points: negative.slice(0, 4),
    content_topics: contentTopics,
    selling_points: sellingPoints,
    metrics,
    adoption_score: adoptionScore,
    operation_advice: advice,
  };
}

document.querySelector("#loadSample").addEventListener("click", () => {
  reviewInput.value = sampleReviews.join("\n");
  analyze();
});

document.querySelector("#startDemo").addEventListener("click", () => {
  reviewInput.value = templates.launch.join("\n");
  analyze();
  document.querySelector("#demoWorkspace").scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll(".template-card").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".template-card").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    reviewInput.value = templates[button.dataset.template].join("\n");
    analyze();
    document.querySelector("#demoWorkspace").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelector("#analyzeButton").addEventListener("click", analyze);
fileInput.addEventListener("change", async (event) => {
  const file = event.target.files[0];
  if (!file) return;
  const text = await file.text();
  const reviews = parseUploadedText(text);
  reviewInput.value = reviews.join("\n");
  analyze();
});
document.querySelector("#copySummary").addEventListener("click", async () => {
  const summary = `评论洞察总结：${adviceText.textContent}`;
  await navigator.clipboard.writeText(summary);
  document.querySelector("#copySummary").textContent = "已复制";
  setTimeout(() => {
    document.querySelector("#copySummary").textContent = "复制周报总结";
  }, 1200);
});
document.querySelector("#downloadReport").addEventListener("click", () => {
  const report = [
    "# AI 消费者评论洞察周报",
    "",
    `- 样本量：${currentReport.sample_size || 0} 条`,
    `- 洞察可采纳分：${currentReport.adoption_score || 0}`,
    "",
    "## 代表性痛点",
    ...(currentReport.representative_pain_points || []).map((item) => `- ${item}`),
    "",
    "## 内容选题",
    ...(currentReport.content_topics || []).map((item) => `- ${item}`),
    "",
    "## 运营建议",
    currentReport.operation_advice || "",
    "",
  ].join("\n");
  downloadFile("ai-review-insight-report.md", report, "text/markdown;charset=utf-8");
});
document.querySelector("#downloadJson").addEventListener("click", () => {
  downloadFile("ai-review-insight-data.json", JSON.stringify(currentReport, null, 2), "application/json;charset=utf-8");
});

reviewInput.value = sampleReviews.join("\n");
analyze();
