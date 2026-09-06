# 🚀 部署指南 - AI创作资源站（小白版）

> 跟着这份指南一步步操作，不需要懂编程也能把网站部署上线�?
---

## 📋 部署前需要准备什么？

| 需要准备的东西 | 费用 | 用来做什�?|
|--------------|------|-----------|
| 一�?GitHub 账号 | 免费 | 存放代码和图片资�?|
| 一�?Railway 账号 | 免费（有免费额度�?| 让你的网站运行在互联网上 |
| 你的项目代码 | 已拥�?| 就是 `f:\ai-home` 这个文件�?|

---

## 🔰 第一步：注册账号（约 10 分钟�?
### 1.1 注册 GitHub（存代码的地方）

> GitHub 就像是一个网盘，专门用来存放你的代码�?
**操作步骤�?*

1. 打开浏览器，访问 👉 https://github.com
2. 点击右上角的 **"Sign up"**（注册）
3. 输入你的邮箱，设置密码，取个用户名（比如 `yourname`�?4. 去邮箱查收验证邮件，点击验证链接
5. 注册完成后，登录 GitHub

**创建三个仓库�?*

1. **主仓库（放代码）**：创�?`tpsptsc` 仓库，选择 Public
2. **图片仓库**：创�?`ai-pics` 仓库，选择 Public
3. **视频封面仓库**：创�?`ai-videos` 仓库，选择 Public

---

### 1.2 注册 Railway（让网站跑在互联网上�?
> Railway 是一个部署平台，把你的代码变成真正的网站�?
**操作步骤�?*

1. 访问 👉 https://railway.app
2. 点击 **"Start a New Project"** 或右上角 **"Login"**
3. 选择 **"Continue with GitHub"**（用 GitHub 账号登录�?4. 点击 **"Authorize railwayapp"**（授权）
5. 登录成功后，你会看到 Railway 的控制台

---

## 🖥�?第二步：把代码推送到 GitHub（约 5 分钟�?
```bash
git init
git add .
git commit -m "初始提交"
git remote add origin https://github.com/你的用户�?tpsptsc.git
git push -u origin main
```

### 或者用网页上传

1. 打开 `tpsptsc` 仓库
2. 点击 **"Add file"** �?**"Upload files"**
3. 拖入所有文件，点击 **"Commit changes"**

---

## �️ 第三步：上传图片到仓库（�?10 分钟�?
> 图片通过 jsDelivr CDN 加速访问，在中国大陆有很好的访问速度�?
### 3.1 图片目录结构

**ai-pics 仓库（图片封面，直接放入根目录）�?*
```
ai-pics/
├── 1.jpg          (赛博朋克少女肖像)
├── 2.jpg          (国风山水水墨�?
├── 3.jpg          (产品摄影香水大片)
├── 4.jpg          (二次元动漫少�?
├── 5.jpg          (超写实森林风�?
├── 6.jpg          (复古港风人像)
├── 7.jpg          (人像摄影作品)
└── default-cover.jpg  (默认封面�?
```

**ai-videos 仓库（视频封面，直接放入根目录）�?*
```
ai-videos/
�── 1.jpg          (极近景人物情绪镜�?
├── 2.jpg          (全景城市夜色霓虹)
├── 3.jpg          (戏剧性侧光人�?
├── 4.jpg          (柔和晨曦氛围�?
├── 5.jpg          (黄金分割构图风景)
├── 6.jpg          (对角线动态运�?
├── 7.jpg          (电影级冷暖对比调�?
└── 8.jpg          (35mm胶片颗粒质感)
```

### 3.2 上传�?GitHub

**上传 ai-pics（图片封面）�?*
```bash
cd ai-pics
git init
git add .
git commit -m "添加图片封面"
git remote add origin https://github.com/你的用户�?ai-pics.git
git push -u origin main
```

**上传 ai-videos（视频封面）�?*
```bash
cd ai-videos
git init
git add .
git commit -m "添加视频封面"
git remote add origin https://github.com/你的用户�?ai-videos.git
git push -u origin main
```

### 3.3 图片链接格式

jsDelivr CDN 链接格式�?- 图片：`https://cdn.jsdelivr.net/gh/420201953-dot/ai-pics@main/1.jpg`
- 视频：`https://cdn.jsdelivr.net/gh/420201953-dot/ai-videos@main/1.jpg`

代码中的链接已配置好，只需确保图片上传到正确路径即可�?
> **提示�?* jsDelivr 有约 10 分钟缓存延迟�?
---

## 🌐 第四步：�?Railway 部署网站（约 5 分钟�?
> 这一步把 GitHub 上的代码部署�?Railway，变成一个真正的网站�?
### 4.1 创建项目并连�?GitHub

1. 登录 Railway 控制�?2. 点击 **"New Project"**（新建项目）
3. 选择 **"Deploy from GitHub repo"**（从 GitHub 仓库部署�?4. 首次使用会提示你安装 GitHub 应用，点�?**"Configure GitHub App"**
5. 点击 **"Install & Authorize"**
6. 在弹出的页面中，选择你的 GitHub 账号
7. �?**"Repository access"** 中选择 **"Only select repositories"**
8. 找到并勾�?`tpsptsc` 这个仓库
9. 点击 **"Save"** 保存
10. 回到 Railway，再次点�?**"New Project"** �?**"Deploy from GitHub repo"**
11. 选择 **"tpsptsc"** 仓库

### 4.2 设置环境变量（配�?API Key�?
> 环境变量就像网站�?钥匙"，用来连�?AI 服务�?
1. 项目创建后，点击顶部�?**"Variables"**（变量）选项�?2. 点击 **"New Variable"**（新增变量）
3. 添加以下两个变量�?
| 变量�?| �?| 说明 |
|-------|-----|------|
| `SILICONFLOW_API_KEY` | `sk-你的真实Key` | 硅基流动�?API Key |
| `PORT` | `3001` | 服务端口�?|

> 如果你还没有硅基流动�?API Key，可以访�?https://siliconflow.cn 注册获取�?
### 4.3 等待部署完成

1. 添加完变量后，Railway 会自动开始部�?2. 点击顶部�?**"Deployments"**（部署）选项�?3. 你会看到部署状态：**"Building"** �?**"Deploying"** �?**"Running"**
4. 当状态变成绿�?**"Running"**，说明部署成�?
### 4.4 获取网站地址

1. 部署成功后，点击顶部�?**"Settings"**（设置）
2. �?**"Domains"**（域名）部分，你会看到一个以 `.up.railway.app` 结尾的地址
3. 点击这个地址，你的网站就打开了！🎉

---

## �?检查你的网�?
1. 打开 Railway 分配的域�?2. 检查图片是否正常显�?3. 如果图片不显示：
   - 等待 10 分钟�?CDN 缓存生效
   - 检查图片路径是否正�?   - 在浏览器直接访问 CDN 链接测试

---

## 💰 费用总结

| 服务 | 免费额度 | 超出费用 |
|-----|---------|---------|
| GitHub | 无限代码仓库 + 1GB 存储 | 免费 |
| jsDelivr CDN | 无明确限额（合理用量免费�?| 免费 |
| Railway | 每月 $5 免费额度 | 按量计费，个人项目一般不会超 |

**你的项目每月费用：�? 元（完全免费�?*

---

## 😸 如何添加新作品？

1. �?`ai-pics` �?`ai-videos` 仓库添加新图�?2. 在主仓库 `tpsptsc` 编辑 `data/image-prompts.json` �?`data/video-prompts.json`
3. 推送更新，Railway 会自动部�?
---

## �?常见问题

### jsDelivr 图片加载不出来怎么办？

1. 检查图片是否已正确上传�?`ai-pics` �?`ai-videos` 仓库
2. 检查文件路径是否正确（大小写敏感）
3. �?10-15 分钟�?CDN 缓存生效
4. 可以在浏览器直接访问链接测试�?   `https://cdn.jsdelivr.net/gh/用户�?仓库名@main/文件�?jpg`

### 部署失败了怎么办？

1. �?Railway �?**Deployments** �?点击失败的部�?�?**Logs** 查看日志
2. 检查环境变量是否正确设�?3. 检�?`package.json` 文件是否存在

---

> **💡 小提示：** 部署过程中遇到任何问题，可以�?Railway �?**Logs** 看日志，或者把错误信息截图搜索�?9% 的问题都能找到答案�?
�?`ai-pics/ai-videos` 仓库中创建以下目录：

```
ai-pics/ai-videos/
├── img/
�?  ├── image/
�?  �?  ├── 1.jpg          (赛博朋克少女肖像)
�?  �?  ├── 2.jpg          (国风山水水墨�?
�?  �?  ├── 3.jpg          (产品摄影香水大片)
�?  �?  ├── 4.jpg          (二次元动漫少�?
�?  �?  ├── 5.jpg          (超写实森林风�?
�?  �?  ├── 6.jpg          (复古港风人像)
�?  �?  └── 7.jpg          (人像摄影作品)
�?  ├── video/
�?  �?  ├── 1.jpg          (极近景人物情绪镜�?
�?  �?  ├── 2.jpg          (全景城市夜色霓虹)
�?  �?  ├── 3.jpg          (戏剧性侧光人�?
�?  �?  ├── 4.jpg          (柔和晨曦氛围�?
�?  �?  ├── 5.jpg          (黄金分割构图风景)
�?  �?  ├── 6.jpg          (对角线动态运�?
�?  �?  ├── 7.jpg          (电影级冷暖对比调�?
�?  �?  └── 8.jpg          (35mm胶片颗粒质感)
�?  �── default-cover.jpg  (默认封面�?
└── README.md
```

### 3.2 上传�?GitHub

```bash
cd ai-pics/ai-videos
git init
git add .
git commit -m "添加图片资源"
git remote add origin https://github.com/你的用户�?ai-pics/ai-videos.git
git push -u origin main
```

### 3.3 图片链接格式

jsDelivr CDN 链接格式�?```
https://cdn.jsdelivr.net/gh/420201953-dot/ai-pics/ai-videos@main/img/image/1.jpg
```

代码中的链接已配置好，只需确保图片上传到正确路径即可�?
> **提示�?* jsDelivr 有约 10 分钟缓存延迟�?
---

## �?检查你的网�?
1. 打开 Railway 分配的域名地址
2. 你应该能看到网站的首�?3. 点击图片/视频内容，应该能正常加载
4. 如果一切正常，恭喜你，部署成功！�?
---

## 💰 费用总结

| 服务 | 免费额度 | 超出费用 |
|-----|---------|---------|
| GitHub | 无限代码仓库 + 1GB 存储 | 免费 |
| jsDelivr CDN | 无明确限额（合理用量免费�?| 免费 |
| Railway | 每月 $5 免费额度 | 按量计费，个人项目一般不会超 |

**你的项目每月费用：�? 元（完全免费�?*

---

## �?常见问题

### jsDelivr 图片加载不出来怎么办？

1. 检查图片是否已正确上传�?`ai-pics/ai-videos` 仓库
2. 检查文件路径是否正确（大小写敏感）
3. �?10-15 分钟�?CDN 缓存生效
4. 可以在浏览器直接访问链接测试�?   `https://cdn.jsdelivr.net/gh/用户�?仓库名@main/路径`

### 部署失败了怎么办？

1. �?Railway �?**Deployments** �?点击失败的部�?�?**Logs** 查看日志
2. 检查环境变量是否正确设�?3. 检�?`package.json` 文件是否存在

### 为什么网站打不开黑屏�?
可能是部署还没完成，等状态变�?**"Running"** 再试。如果一直是绿色但打不开，检查环境变量中 `PORT` 是否设置�?`3001`�?
### 修改了数据怎么更新网站�?
修改 `data/` 下的 JSON 文件 �?重新上传�?GitHub �?Railway 自动重新部署，等�?1-2 分钟即可�?
### 怎么查看网站运行日志�?
�?Railway 项目面板 �?**Deployments** �?选择部署实例 �?**Logs**，可以看到实时日志�?
### 网站访问慢怎么办？

1. 图片尽量压缩小一点（建议每张小于 200KB�?2. jsDelivr 在国内有良好节点，通常速度不错
3. 如果还是很慢，可以考虑切换到其�?CDN 镜像

### 添加新作品怎么操作�?
1. �?`ai-pics/ai-videos` 仓库添加新图�?2. 在主仓库 `tpsptsc` 编辑 `data/` 下的 JSON 文件
3. 推送到 GitHub，Railway 会自动部�?
### 需要自己买服务器吗�?
**完全不需要！** 本项目所有服务都在免费额度内�?
### 想换一个域名怎么弄？

1. 购买域名（如阿里云、腾讯云�?2. �?Railway �?**Settings �?Domains** 添加域名
3. 在域名管理后台配�?CNAME 解析

---

> **💡 小提示：** 部署过程中遇到任何问题，可以�?Railway �?**Logs** 看日志，或者把错误信息截图搜索�?9% 的问题都能找到答案�
