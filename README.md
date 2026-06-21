# AI Review Insight Tool

面向品牌运营、电商运营和内容运营的 **AI 消费者评论洞察工具**。

项目核心不是“炫技写算法”，而是展示 AI 产品运营能力：把用户评论、评分和文本反馈转化为运营人员能直接使用的消费者洞察、内容选题、详情页优化建议和复盘指标。

## 项目亮点

- **真实业务场景**：围绕品牌/电商运营中的评论分析、竞品监测、用户痛点提炼和内容选题展开。
- **AI 产品运营导向**：不仅输出情绪分类，还设计了“输入-分析-洞察-采纳-复盘”的完整运营工作流。
- **开箱即用**：支持无 API Key 的演示模式，HR 或面试官 clone 后可以直接跑通。
- **可扩展 AI 模式**：支持接入 Claude API，将本地规则替换为真实大模型语义分析。
- **简历友好**：项目结构包含 PRD、用户画像、指标体系、Prompt 模板和简历项目描述。

## 适合投递的岗位

- AI 产品运营实习生
- AIGC 产品运营
- 内容运营
- 用户增长运营
- 电商运营
- 品牌运营

## 核心功能

| 功能 | 说明 | 运营价值 |
| --- | --- | --- |
| 评论情绪识别 | 判断正面/中性/负面评论 | 快速判断用户整体态度 |
| 高频主题归类 | 识别成分、价格、效果、包装、物流、客服等主题 | 找到用户最关注的问题 |
| 代表性痛点提取 | 抽取负面评论中的核心问题 | 支持周报、复盘和产品优化 |
| AI 洞察总结 | 生成面向品牌经理/运营团队的业务总结 | 降低人工整理成本 |
| 内容选题建议 | 将评论转化为小红书、抖音、公众号选题方向 | 连接用户反馈和内容增长 |
| 指标框架设计 | 定义洞察采纳率、人工修正率、复用率等指标 | 评估 AI 工具是否有业务价值 |

## 项目结构

```text
ai-review-insight-tool/
├── README.md
├── analyze_reviews.py
├── requirements.txt
├── data/
│   └── sample_reviews.csv
├── output/
│   └── insight_report.md
├── docs/
│   ├── prd.md
│   ├── user-persona.md
│   ├── ai-workflow.md
│   ├── metrics-framework.md
│   ├── prompt-template.md
│   └── resume-summary.md
└── demo/
    ├── index.html
    ├── style.css
    └── app.js
```

## 快速开始

### 1. 演示模式，无需 API Key

```bash
python analyze_reviews.py --demo
```

运行后生成：

```text
output/insight_report.md
```

### 2. AI 模式，调用 Claude API

```bash
pip install -r requirements.txt
export ANTHROPIC_API_KEY="your_api_key"
python analyze_reviews.py
```

也可以指定模型：

```bash
export ANTHROPIC_MODEL="claude-3-5-sonnet-latest"
python analyze_reviews.py
```

### 3. 打开产品 Demo

直接打开：

```text
demo/index.html
```

Demo 展示评论输入、情绪统计、痛点归类、卖点提取和内容选题建议。

## 示例输出

```text
本次共分析25条评论，负面占比约28%，整体情感以正面为主。
用户提及最频繁的主题是「产品效果」，需要重点关注。
典型痛点包括泛红、客服回复慢、致敏成分说明不足、物流慢等。
建议品牌团队优先优化高频痛点对应的产品/服务环节，
并在内容物料中强化用户认可的成分透明度与温和安心卖点。
```

完整报告见：[`output/insight_report.md`](output/insight_report.md)

## 简历可用描述

**AI 产品运营项目｜AI Review Insight Tool 消费者评论洞察工具**

- 独立设计面向品牌与电商运营场景的 AI 消费者评论洞察工具，覆盖评论情绪识别、高频主题归类、用户痛点提取、业务洞察总结和内容选题建议。
- 结合品牌运营与电商运营场景，设计“评论导入-AI 分析-洞察输出-人工复核-运营采纳”的工作流，提升运营人员从用户反馈中提炼洞察的效率。
- 搭建产品运营指标体系，围绕洞察采纳率、内容选题转化率、人工修正率、7 日复用率等指标评估 AI 工具的业务价值。

## 数据说明

`data/sample_reviews.csv` 为虚构样例数据，用于公开演示，不包含任何真实公司、真实用户或商业机密数据。

## 作者

罗茂婷｜AI 产品运营 / 内容运营 / 用户增长方向
