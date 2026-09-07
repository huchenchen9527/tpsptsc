# 🚀 部署指南 - AI创作资源站

## 部署到 Vercel

### 方式一：Git 部署（推荐）

1. 代码推送到 GitHub：
```bash
cd f:\ai-home
git push -u origin main
```

2. 登录 https://vercel.com
3. 点击 "Add New Project" → "Import"
4. 选择你的 GitHub 仓库 `tpsptsc`
5. 点击 "Deploy"

### 方式二：命令行部署

```bash
npm i -g vercel
cd f:\ai-home
vercel
```

## 图片资源

- 图片：`https://cdn.jsdelivr.net/gh/420201953-dot/ai-pics@main/1.jpg`
- 视频封面：`https://cdn.jsdelivr.net/gh/420201953-dot/ai-videos@main/1.jpg`

## 添加新作品

1. 在 `ai-pics` / `ai-videos` 仓库添加新图片
2. 编辑 `data/image-prompts.json` 或 `data/video-prompts.json`
3. 推送到 GitHub，Vercel 会自动重新部署
