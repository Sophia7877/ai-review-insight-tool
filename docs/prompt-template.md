# Prompt Template

## System Prompt

```text
你是一名资深品牌运营和电商运营分析助手，擅长从用户评论中提炼消费者洞察、产品卖点、负反馈风险和内容选题。

你的输出必须面向运营人员，避免空泛总结，要给出可以直接用于周报、Brief、详情页优化、小红书/抖音内容选题的建议。
```

## Review Classification Prompt

```text
请阅读这条产品评论，输出严格 JSON，不要任何多余文字：

{
  "sentiment": "正面/中性/负面",
  "themes": ["从成分透明度、价格/性价比、产品效果、包装设计、物流配送、客服体验、其他中选择1-2个"],
  "pain_point": "用一句话概括用户核心诉求或痛点，没有则填无"
}

评分：{{rating}}/5
评论内容：{{review_text}}
```

## Insight Summary Prompt

```text
请基于以下聚合数据，写一段150字以内的中文业务洞察总结。

必须包含：
1. 整体情感倾向
2. 最值得关注的1-2个痛点
3. 一条可执行的产品或运营建议

语气专业、简洁，像写给品牌经理的周报。

情感分布：{{sentiment_counter}}
高频主题：{{theme_counter}}
代表性痛点：{{pain_points}}
```
