# AI Review Insight Tool

面向品牌运营、电商运营和内容运营的 **AI 消费者评论洞察工具**。

项目核心不是“炫技写算法”，而是展示 AI 产品运营能力：把用户评论、评分和文本反馈转化为运营人员能直接使用的消费者洞察、内容选题、详情页优化建议和复盘指标。

## 项目亮点

- **真实业务场景**：围绕品牌/电商运营中的评论分析、竞品监测、用户痛点提炼和内容选题展开。
- **AI 产品运营导向**：不仅输出情绪分类，还设计了“输入-分析-洞察-采纳-复盘”的完整运营工作流。
- **开箱即用**：支持无 API Key 的演示模式，HR 或面试官 clone 后可以直接跑通。
- **可扩展 AI 模式**：支持接入 Claude API，将本地规则替换为真实大模型语义分析。
- **简历友好**：项目结构包含 PRD、用户画像、指标体系、Prompt 模板和简历项目描述。
- **产品化展示**：提供本地 Demo 看板、案例复盘、竞品分析和 30 天迭代路线图，展示从工具到产品的运营思考。
- **可导出交付物**：Demo 支持上传评论文件、复制周报总结、下载 Markdown 周报和 JSON 数据。

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
| 结构化 JSON 输出 | 输出可接入看板/后台的数据结果 | 展示产品化和工程化意识 |
| 指标框架设计 | 定义洞察采纳率、人工修正率、复用率等指标 | 评估 AI 工具是否有业务价值 |
| 运营复盘案例 | 输出从评论到动作的完整 case study | 让项目更像真实业务交付 |

## 项目结构

```text
ai-review-insight-tool/
├── README.md
├── analyze_reviews.py
├── requirements.txt
├── data/
│   └── sample_reviews.csv
├── output/
│   ├── insight_report.md
│   └── insight_data.json
├── docs/
│   ├── prd.md
│   ├── user-persona.md
│   ├── ai-workflow.md
│   ├── metrics-framework.md
│   ├── prompt-template.md
│   ├── competitor-analysis.md
│   ├── case-study.md
│   ├── product-roadmap.md
│   ├── experiment-plan.md
│   ├── review-rubric.md
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
output/insight_data.json
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

### 3. 自定义输入和输出

```bash
python analyze_reviews.py \
  --demo \
  --input data/sample_reviews.csv \
  --output output/insight_report.md \
  --json-output output/insight_data.json
```

### 4. 打开产品 Demo

直接打开：

```text
demo/index.html
```

Demo 展示评论输入、情绪统计、痛点归类、卖点提取、内容选题建议、周报复制和数据导出。

## 输出说明

| 文件 | 用途 |
| --- | --- |
| `output/insight_report.md` | 给运营/品牌经理看的 Markdown 洞察报告 |
| `output/insight_data.json` | 给后续看板、后台或产品原型使用的结构化数据 |
| `demo/index.html` | 给 HR 或面试官快速理解项目价值的本地 Demo，支持上传和导出 |

## 产品运营交付物

- [PRD](docs/prd.md)：产品定位、MVP 功能和成功标准
- [用户画像](docs/user-persona.md)：品牌运营、电商运营、内容运营三类用户
- [AI 工作流](docs/ai-workflow.md)：评论导入到人工复核的完整流程
- [指标体系](docs/metrics-framework.md)：北极星指标、漏斗指标和质量指标
- [CLI 使用说明](docs/cli-usage.md)：命令行参数、输入格式和 JSON 输出结构
- [竞品分析](docs/competitor-analysis.md)：对比 ChatGPT、飞书多维表格、蝉妈妈/灰豚等工具
- [案例复盘](docs/case-study.md)：从 25 条评论到运营动作的完整样例
- [产品路线图](docs/product-roadmap.md)：30 天迭代计划和版本规划
- [实验计划](docs/experiment-plan.md)：首次使用、内容选题、人工复核三类实验设计
- [AI 输出复核标准](docs/review-rubric.md)：判断 AI 洞察是否可采纳
- [GitHub Pages 展示说明](docs/github-pages.md)：将 Demo 发布成在线展示页

## 示例输出

```text
本次共分析25条评论，负面占比约28%，整体情感以正面为主。
用户提及最频繁的主题是「产品效果」，需要重点关注。
典型痛点包括泛红、客服回复慢、致敏成分说明不足、物流慢等。
建议品牌团队优先优化高频痛点对应的产品/服务环节，
并在内容物料中强化用户认可的成分透明度与温和安心卖点。
```

完整报告见：[`output/insight_report.md`](output/insight_report.md)

结构化数据见：[`output/insight_data.json`](output/insight_data.json)

## 简历可用描述

**AI 产品运营项目｜AI Review Insight Tool 消费者评论洞察工具**

- 独立设计面向品牌与电商运营场景的 AI 消费者评论洞察工具，覆盖评论情绪识别、高频主题归类、用户痛点提取、业务洞察总结和内容选题建议。
- 结合品牌运营与电商运营场景，设计“评论导入-AI 分析-洞察输出-人工复核-运营采纳”的工作流，并补充实验计划和 AI 输出复核标准。
- 搭建产品运营指标体系与本地 Demo，支持周报复制、Markdown 报告下载和 JSON 数据导出，围绕洞察采纳率、内容选题转化率、人工修正率、7 日复用率评估 AI 工具的业务价值。

## 面试讲法

这个项目不是算法训练，而是 AI 产品运营项目。我选择消费者评论分析这个场景，是因为品牌和电商运营每天都会接触大量用户反馈，但人工整理评论、归类痛点、写周报和产出内容选题非常耗时。我设计了一个 AI 工作流，让评论可以被自动转化为情绪分布、高频主题、代表性痛点、内容选题和运营建议，再通过人工复核和指标体系判断 AI 输出是否真的能被业务采纳。

## 数据说明

`data/sample_reviews.csv` 为虚构样例数据，用于公开演示，不包含任何真实公司、真实用户或商业机密数据。

## 作者

罗茂婷｜AI 产品运营 / 内容运营 / 用户增长方向
