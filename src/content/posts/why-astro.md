---
title: "为什么选择 Astro 重写博客"
subtitle: "From Jekyll to Astro — and why it matters"
description: "对比 Jekyll、Next.js 和 Astro 的取舍，记录从 Ruby 工具链迁移到现代前端构建的全过程。"
date: 2026-06-09
author: "周衣衣"
category: "gamedev"
tags: ["Astro", "重构", "前端", "技术"]
source: "manual"
---

## 旧博客的痛点

旧博客基于 [Hux Blog](https://github.com/Huxpro/huxpro.github.io)（Jekyll 主题），用了好几年，但越用越憋屈：

- **构建工具链已死**：Grunt + LESS + jQuery + Bootstrap 3，全是 2016 年的组合
- **Ruby 环境烦人**：本地预览要装 Ruby + bundler，新机器配半天
- **样式难维护**：18KB 的单文件 LESS，Bootstrap 3 的栅格类满天飞
- **没有类型安全**：模板里的 `{{ site.foo }}` 错了构建时才发现
- **想加交互很难**：没有组件化，每次都是写一坨 jQuery

## 候选方案

| 方案 | 优点 | 劣势 |
| --- | --- | --- |
| **继续 Jekyll** | 0 迁移成本 | 问题不解决 |
| **Hugo** | 极快 | Go 模板对前端不友好 |
| **Next.js** | 生态最大 | 对静态博客太重 |
| **Astro** | 静态优先、零 JS by default、岛屿架构 | 生态相对小 |

## 为什么是 Astro

```ts
// Astro 的核心理念：默认零 JS，需要交互的地方才"开岛"
import EditorIsland from '../components/EditorIsland.tsx';

<BaseLayout>
  <Header />          {/* 纯 HTML 输出 */}
  <PostList />        {/* 纯 HTML 输出 */}
  <EditorIsland client:load />  {/* 这一块才是 SPA */}
</BaseLayout>
```

三点关键优势：

1. **首屏纯 HTML**：博客主体根本不需要 JS，性能直接拉满
2. **Content Collections 类型安全**：`getCollection('posts')` 返回的就是带类型的对象
3. **保留 React/Vue/Svelte 自由切换**：未来编辑模式想用 Solid 也行

## 迁移的代价

也不是没代价：

- GitHub Pages 不再原生支持，必须配 Actions 自动部署
- 本地必须装 Node.js
- 旧的 Disqus / Gitalk 评论得换成 Giscus

## 结论

> 当一个工具链让你不愿意写文章时，换工具就是最好的写文章。
