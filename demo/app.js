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

const sentimentList = document.querySelector("#sentimentList");
const themeList = document.querySelector("#themeList");
const painList = document.querySelector("#painList");
const contentList = document.querySelector("#contentList");
const adviceText = document.querySelector("#adviceText");
const reviewInput = document.querySelector("#reviewInput");

function renderList(node, items) {
  node.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function analyze() {
  const reviews = reviewInput.value.split("\n").map((item) => item.trim()).filter(Boolean);
  const negative = reviews.filter((text) => /慢|冷淡|过敏|泛红|贵|不友好|差|涨/.test(text));
  const positive = reviews.filter((text) => /清楚|回购|温和|高级|效果|吸收快/.test(text));
  const neutral = Math.max(reviews.length - negative.length - positive.length, 0);

  document.querySelector("#reviewCount").textContent = reviews.length;
  document.querySelector("#painCount").textContent = "6";
  document.querySelector("#topicCount").textContent = "4";

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
  renderList(contentList, [
    "小红书：护肤品成分表怎么看？用真实评论讲清楚安全感",
    "抖音：大促怎么买才不亏？用价格反馈做决策指南",
    "公众号：从用户评论看功效表达机会",
    "直播间：把高频痛点整理成 FAQ，降低购买顾虑",
  ]);
  adviceText.textContent =
    "建议优先优化客服响应、价格机制说明和敏感肌适用信息；内容侧强化成分透明、温和安心和真实效果反馈，把用户评论转化为详情页卖点和种草选题。";
}

document.querySelector("#loadSample").addEventListener("click", () => {
  reviewInput.value = sampleReviews.join("\n");
  analyze();
});

document.querySelector("#analyzeButton").addEventListener("click", analyze);

reviewInput.value = sampleReviews.join("\n");
analyze();
