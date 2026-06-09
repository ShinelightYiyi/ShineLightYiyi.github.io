# 🚀 零命令行部署指南

> 本指南适用于 **完全没有安装 Git / Node.js** 的电脑。
> 你只需要一个浏览器，跟着 4 步操作即可让网站上线。

---

## 📋 部署原理

```
你的电脑 (project files)
    ↓ 拖拽上传
GitHub 仓库 (ShineLightYiyi.github.io)
    ↓ 触发 Actions
GitHub 服务器 (npm install + npm run build)
    ↓ 自动发布
GitHub Pages (https://shinelightyiyi.github.io)
```

GitHub 服务器免费替你完成所有 Node.js / npm / build 流程，你完全不用本地安装任何东西。

---

## ✅ 部署步骤（共 4 步）

### Step 1：打开 GitHub 仓库设置 Pages 部署源

1. 浏览器打开：https://github.com/ShinelightYiyi/ShineLightYiyi.github.io/settings/pages
2. 在 **Build and deployment** → **Source** 一栏，把下拉选择从 **"Deploy from a branch"** 改为 **"GitHub Actions"**
3. 不需要点保存，自动生效

> ⚠️ 这一步是关键。Astro 项目不能用旧的 "Deploy from branch" 模式。

---

### Step 2：上传所有项目文件到仓库

#### 方法 A —— 浏览器拖拽（推荐 ⭐）

1. 浏览器打开：https://github.com/ShinelightYiyi/ShineLightYiyi.github.io
2. 如果看到旧的 Jekyll 文件，先点 **"⋯"** → **"Delete files"**（或在每个旧文件页面点垃圾桶图标），把旧的 `_config.yml`、`_layouts/`、`css/` 等删掉
   - 也可以保留旧文件不管，Actions 会按新代码构建，旧文件不会影响输出
3. 在仓库主页点 **"Add file"** → **"Upload files"**
4. 把整个项目文件夹（**除了 `legacy/` 之外**）的内容拖入网页
   - 必须包含的文件夹：`.github/`（含 workflows）、`src/`、`public/`
   - 必须包含的文件：`package.json`、`astro.config.mjs`、`tailwind.config.mjs`、`tsconfig.json`、`.gitignore`、`README.md`
5. 在最下方填写提交信息：`feat: rebuild blog with Astro v2`
6. 点 **"Commit changes"**

> 💡 提示：`.github/` 文件夹是隐藏的，但它必须被上传——直接拖整个文件夹即可，Windows 默认会把它一起带上。

#### 方法 B —— 用 GitHub Desktop（不需要命令行）

1. 下载安装：https://desktop.github.com/
2. 登录你的 GitHub 账号
3. 在左上角 **File** → **Add local repository** → 选择 `D:\GithubProject\ShineLightYiyi.github.io`
4. 在底部填写提交信息 → 点 **Commit to master**
5. 点右上角 **Push origin**

---

### Step 3：等 GitHub Actions 自动构建（约 2~3 分钟）

1. 浏览器打开：https://github.com/ShinelightYiyi/ShineLightYiyi.github.io/actions
2. 你会看到一条名为 **"Deploy Astro site to GitHub Pages"** 的运行任务
3. 点进去观察构建进度，状态变成 **绿色 ✓** 就代表成功

> 如果看到红色 ✗，点进去复制错误日志发给我，我会帮你修。

---

### Step 4：访问你的网站

构建成功后访问：
**👉 https://shinelightyiyi.github.io**

第一次部署可能需要等待 1~2 分钟让 GitHub Pages 缓存生效。

---

## 🎯 后续如何更新网站

每次想发新文章 / 改样式：

1. 在本地编辑 `src/content/posts/your-article.md`
2. 用 GitHub Desktop / 浏览器拖拽 重新提交
3. Actions 自动构建并发布（约 2 分钟）
4. 网站自动更新

或者更省事——**直接在 GitHub 网页上编辑**：

1. 进入仓库 → 找到 `src/content/posts/`
2. 点 **"Add file"** → **"Create new file"**
3. 文件名填 `my-new-post.md`，按示例文章格式写 frontmatter + 正文
4. 点 **"Commit changes"** → 自动触发部署

---

## ❓ 常见问题

**Q：我点了 Actions 报错 `Get Pages site failed`？**
A：你忘了 Step 1 —— 没把 Pages 源设置为 "GitHub Actions"。先去 Settings → Pages 里改了，然后到 Actions 页面重新触发一次（点失败任务右上角的 "Re-run all jobs"）。

**Q：网站打开后样式错乱、图片 404？**
A：清浏览器缓存（Ctrl+Shift+R 硬刷新），或等 5 分钟让 CDN 缓存更新。

**Q：我想要个性化域名？**
A：把你的域名 CNAME 写到 `public/CNAME` 文件里，再去 Settings → Pages → Custom domain 配置即可。

---

## 🆘 求助

遇到任何问题，把以下信息告诉我：
1. Actions 失败日志（红色 ✗ 任务点进去 → 失败步骤的输出）
2. 浏览器访问网站时控制台的报错（按 F12 → Console 标签）

我会帮你定位修复。
