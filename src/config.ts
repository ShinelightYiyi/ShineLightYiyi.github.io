/**
 * Site-wide configuration.
 * Edit this file to customize site metadata, sidebar navigation, and social links.
 */

export const SITE = {
  name: 'ShineLightYiyi',
  fullName: '周衣衣 / Zhou Yiyi',
  title: '周衣衣的博客',
  seoTitle: '周衣衣的博客 | ShineLightYiyi',
  description: 'In my heart, I am a gamer. — 中国传媒大学游戏专业 · 中传游戏研发社社长',
  bio: '中国传媒大学游戏专业在读，中传游戏研发社社长。喜欢独立游戏、游戏设计与开发。',
  email: 'shinelightyiyi@outlook.com',
  url: 'https://shinelightyiyi.github.io',
  locale: 'zh-CN',
  postsPerPage: 10,
} as const;

export const AUTHOR = {
  name: '周衣衣',
  handle: 'ShineLightYiyi',
  avatar: '/img/about-oc-gentle.jpg',
  signature: 'In my heart, I am a gamer.',
} as const;

/**
 * Social platforms shown in sidebar / footer
 */
export const SOCIAL = [
  { id: 'github',   name: 'GitHub',   href: 'https://github.com/ShineLightYiyi',         icon: 'github'   },
  { id: 'zhihu',    name: '知乎',     href: 'https://www.zhihu.com/people/aaa-3-46-10',  icon: 'zhihu'    },
  { id: 'bilibili', name: 'Bilibili', href: 'https://space.bilibili.com/281061782',      icon: 'bilibili' },
  { id: 'gcores',   name: '机核',     href: 'https://www.gcores.com/users/712105/talks', icon: 'gcores'   },
] as const;

/**
 * Sidebar primary navigation
 */
export const NAV = [
  { id: 'home',    label: '主页',     href: '/',         icon: 'home'    },
  { id: 'posts',   label: '文章',     href: '/posts',    icon: 'doc'     },
  { id: 'tags',    label: '标签',     href: '/tags',     icon: 'tag'     },
  { id: 'about',   label: '关于',     href: '/about',    icon: 'user'    },
  { id: 'editor',  label: '编辑模式', href: '/editor',   icon: 'edit'    },
] as const;

/**
 * Article categories — used by sidebar grouping
 */
export const CATEGORIES = [
  { id: 'gamedev',   label: '游戏开发',   color: 'cobalt' },
  { id: 'gamedesign',label: '游戏设计',   color: 'ink'    },
  { id: 'note',      label: '学习笔记',   color: 'cobalt' },
  { id: 'review',    label: '游戏拆解',   color: 'ink'    },
  { id: 'thought',   label: '随笔',       color: 'cobalt' },
] as const;

export type CategoryId = typeof CATEGORIES[number]['id'];
