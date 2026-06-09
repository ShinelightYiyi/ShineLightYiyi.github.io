# ShineLightYiyi · Personal Blog v2.0

> *In my heart, I am a gamer.*

周衣衣的个人博客 — 中国传媒大学游戏专业 · 中传游戏研发社社长。

[![Built with Astro](https://img.shields.io/badge/Astro-4.x-FF5D01?logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

---

## ✨ 特性

- **现代技术栈**：Astro 4 + Tailwind CSS + TypeScript（严格模式）
- **蓝白工业风设计**：参考 Linear / Stripe / Apple 的极简工业语言
- **左侧深色 Sidebar**：分类折叠 / 文章索引 / 内置搜索 / 社交链接
- **鼠标动态背景**：粒子系统 + 聚光灯渐变 + 网格底纹（自动尊重 `prefers-reduced-motion`）
- **类型安全的内容**：Astro Content Collections + Zod 校验
- **Markdown / MDX 写作**：原生支持
- **动态文字效果**：抖动 / 波浪 / 发光 / 彩虹 / 打字机 / 字号 6 档
- **🚧 编辑模式**（Phase 5）：浏览器内 Markdown 编辑器
- **🚧 PDF 一键转换**（Phase 6）：含扫描版 OCR（Tesseract.js）

---

## 🚀 快速开始

### 前置要求

- **Node.js 18+**（如果还没装：[下载地址](https://nodejs.org/)）
- npm / pnpm / yarn 任一

### 安装与运行

```bash
# 1. 安装依赖
npm install

# 2. 本地开发（http://localhost:4321）
npm run dev

# 3. 构建生产版本到 dist/
npm run build

# 4. 本地预览构建产物
npm run preview
```

---

## 📁 项目结构

```
.
├── public/                  # 静态资源（img、favicon、pwa manifest）
│   ├── img/
│   └── pwa/
├── src/
│   ├── components/          # 可复用组件
│   │   ├── Icon.astro       # SVG 图标系统
│   │   ├── Sidebar.astro    # 左侧深色侧边栏
│   │   ├── CursorFx.astro   # 鼠标动态背景
│   │   ├── PageHeader.astro # 页面顶部标题卡
│   │   ├── PostCard.astro   # 文章预览卡
│   │   └── MobileTopBar.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro # 应用骨架（含 SEO + 字体）
│   │   └── PostLayout.astro # 文章页布局
│   ├── pages/               # 文件路由
│   │   ├── index.astro      # 主页（hero + 最新 + 分类）
│   │   ├── about.astro
│   │   ├── editor.astro     # 编辑模式（Phase 5）
│   │   ├── 404.astro
│   │   ├── posts/
│   │   │   ├── index.astro          # 归档列表（按年份分组）
│   │   │   └── [slug].astro         # 文章详情动态路由
│   │   ├── tags/
│   │   │   ├── index.astro          # 标签云
│   │   │   └── [tag].astro          # 单标签下文章
│   │   └── categories/
│   │       └── [id].astro           # 单分类下文章
│   ├── content/
│   │   ├── config.ts        # Collection schema（Zod）
│   │   └── posts/           # ✏️ 在此新增文章 (.md / .mdx)
│   ├── styles/
│   │   └── global.css       # 全局样式 + 设计 Token
│   ├── config.ts            # 站点配置（导航、社交、分类）
│   └── env.d.ts
├── legacy/                  # 旧 Jekyll 项目备份（可删除）
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## ✏️ 写一篇新文章

### 方式 A：手写 Markdown

在 [`src/content/posts/`](src/content/posts/) 下创建 `your-slug.md`：

```markdown
---
title: "文章标题"
subtitle: "副标题（可选）"
description: "用于 SEO / 列表预览的简介"
date: 2026-06-09
author: "周衣衣"
category: "gamedev"      # gamedev | gamedesign | note | review | thought
tags: ["标签1", "标签2"]
featured: false           # 是否置顶到首页
draft: false              # true 则不构建到产物
source: "manual"
---

正文用 Markdown 写...
```

### 方式 B：编辑模式（Phase 5 上线后）

打开 `/editor` 页面：
- 拖入一份 PDF → 自动提取文字 + OCR → 生成 Markdown
- 或在富文本编辑器中创作，使用工具栏添加动态效果
- 实时预览，导出 `.md` 文件后放到 `src/content/posts/` 即可

---

## 🎨 设计系统速查

### 颜色

```css
/* 主色 */
--cobalt-600: #1E5EFF;      /* 强调蓝 */
--cobalt-950: #0A2540;      /* 深海军蓝（侧边栏） */

/* 中性色 */
--ink-50:  #F7F8FA;
--ink-500: #6B7280;
--ink-900: #0E1320;

/* 分隔线 */
--line: #E5E7EB;
```

### 字体

- **Sans**: `Inter`（西文）+ 系统字体（中文）
- **Mono**: `JetBrains Mono`（代码、数字、eyebrow 标签）
- **Serif**: `Source Han Serif SC`（特殊场景）

### 动态文字 class

| Class | 效果 |
| --- | --- |
| `.kx-shake` | 持续抖动 |
| `.kx-wave` | 上下波浪 |
| `.kx-glow` | 蓝光晕 |
| `.kx-rainbow` | 彩虹流动 |
| `.kx-typewriter` | 打字机 |
| `.kx-emphasize` | 强调 |
| `.kx-big` / `.kx-huge` / `.kx-mini` | 字号档位 |

---

## 🛣️ 路线图

- [x] **Phase 1** — 项目初始化（Astro + Tailwind + TypeScript）
- [x] **Phase 2** — 核心布局与路由（Sidebar + 主区 + 6 个页面）
- [x] **Phase 3** — 蓝白工业视觉系统 + 鼠标动效
- [x] **Phase 4** — 文章系统（Content Collections + 3 篇示例）
- [ ] **Phase 5** — 编辑模式 SPA（富文本 + 动态文字 + 颜文字面板）
- [ ] **Phase 6** — PDF 上传 + OCR（PDF.js + Tesseract.js）
- [ ] **Phase 7** — GitHub Actions 自动部署

---

## 📜 License

MIT © [ShineLightYiyi](https://github.com/ShineLightYiyi)

历史版本（基于 Hux Blog / Jekyll）已归档至 [`legacy/`](legacy/) 目录。
