---
title: "Hello, ShineLightYiyi v2"
subtitle: "全新的工业风博客上线"
description: "博客已完全重构为 Astro 4 + Tailwind CSS，启用蓝白工业风视觉系统。这篇文章既是首篇内容，也是一份可视化的样式指南。"
date: 2026-06-09
author: "周衣衣"
category: "thought"
tags: ["公告", "重构", "Astro"]
featured: true
source: "manual"
---

经过一次完整的重构，博客从 Jekyll 时代正式进入 **Astro v2.0** 时代。

> "好的设计是尽可能少的设计。" — Dieter Rams

## 这次更新做了什么

- **技术栈切换**：Jekyll + Bootstrap 3 + jQuery → **Astro 4 + Tailwind CSS + TypeScript**
- **视觉重构**：从通用青蓝模板 → **蓝白工业高级感**（参考 Linear / Stripe / Apple）
- **结构重构**：左侧深色 Sidebar + 右侧主区，可折叠分类文章树
- **交互升级**：鼠标光标动态背景、粒子连接线、聚光灯渐变
- **编辑模式**：即将上线 PDF 一键转文章 + 富文本编辑器（含动态文字与颜文字面板）

## 写作语法演示

### 标题层级

普通段落，行高与字间距经过工业风格优化，长时间阅读不会疲劳。链接颜色为电光蓝 [Astro 官网](https://astro.build/)，下划线偏移 4px。

**强调文字** 与 *斜体* 区别明显，`inline code` 用钴蓝色块化处理。

### 列表

无序列表：

- 设计原则一：克制
- 设计原则二：清晰
- 设计原则三：忠实于功能

有序列表：

1. 重构基础架构
2. 改造视觉系统
3. 实现编辑模式
4. 集成 PDF 与 OCR

### 引用

> 工业设计的本质不是装饰，而是把功能以最克制的语言呈现出来。

### 代码块

```ts
// 示例：定义文章 schema
const post = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});
```

### 表格

| 模块 | 状态 | 备注 |
| --- | --- | --- |
| 视觉系统 | ✅ 完成 | 蓝白工业风 |
| 文章系统 | ✅ 完成 | Content Collections |
| 编辑器 | 🚧 进行中 | Phase 5 |
| PDF/OCR | 🚧 进行中 | Phase 6 |

## 下一步

下一阶段会上线 `/editor` 页面，到时你将能：

- 拖入一份 PDF，自动提取文字并生成 Markdown
- 在浏览器内编辑，预览实时更新
- 添加抖动 / 发光 / 彩虹 / 放大等动态文字效果
- 一键下载 `.md` 文件，再 push 到仓库

敬请期待。

— 周衣衣
