# 🚀 部署指南 - AI创作资源站（小白版）

> 跟着这份指南一步步操作，不需要懂编程也能把网站部署上线。

---

## 📋 部署前需要准备什么？

| 需要准备的东西 | 费用 | 用来做什么 |
|--------------|------|-----------|
| 一个 GitHub 账号 | 免费 | 存放你的代码 |
| 一个 Cloudflare 账号 | 免费 | 存放图片和视频 |
| 一个 Railway 账号 | 免费（有免费额度） | 让你的网站运行在互联网上 |
| 你的项目代码 | 已拥有 | 就是 `f:\ai-home` 这个文件夹 |

---

## 🔰 第一步：注册账号（约 10 分钟）

### 1.1 注册 GitHub（存代码的地方）

> GitHub 就像是一个网盘，专门用来存放你的代码。

**操作步骤：**

1. 打开浏览器，访问 👉 https://github.com
2. 点击右上角的 **"Sign up"**（注册）
3. 输入你的邮箱，设置密码，取个用户名（比如 `yourname`）
4. 去邮箱查收验证邮件，点击验证链接
5. 注册完成后，登录 GitHub

**创建仓库（装代码的文件夹）：**

1. 登录后点击右上角 **+** 号 → **"New repository"**
2. **Repository name** 填：`ai-prompt-site`（跟项目名一致）
3. **Public / Private** 选 **Public**（公开，免费）
4. 其他的不用动，直接点击底部 **"Create repository"**
5. 创建成功后，你会看到一个页面，**先别关**，后面会用到

---

### 1.2 注册 Cloudflare（存图片和视频的地方）

> Cloudflare 提供免费的图片视频存储，叫 R2，有 10GB 免费空间。

**操作步骤：**

1. 访问 👉 https://dash.cloudflare.com
2. 点击 **"Sign up"** 注册
3. 输入邮箱和密码，完成注册
4. 登录后进入控制台

**创建存储桶（相当于一个文件夹）：**

1. 在左侧菜单找到 **"R2 对象存储"**，点击进入
2. 点击蓝色按钮 **"创建存储桶"**（Create bucket）
3. **Bucket name** 填：`ai-media`（随便起名，记住就行）
4. 存储位置保持默认，点击 **"创建存储桶"**
5. 创建成功后，点击刚创建的 **ai-media** 存储桶

**开启公开访问（让所有人都能看到图片）：**

1. 进入 ai-media 存储桶后，点击上方的 **"设置"**（Settings）
2. 往下翻，找到 **"公开访问"**（Public access）
3. 点击 **"允许公开访问"** 旁边的开关，打开它
4. 系统会弹出一个确认框，点击 **"允许"**
5. 页面上会显示一个 **"公开访问 URL"**，类似：
   ```
   https://pub-xxxxxxxxxxxxxxxxxxxx.r2.dev
   ```
   **复制保存这个地址！** 后面要用。

---

### 1.3 注册 Railway（让网站跑在互联网上）

> Railway 是一个部署平台，把你的代码变成真正的网站。

**操作步骤：**

1. 访问 👉 https://railway.app
2. 点击 **"Start a New Project"** 或右上角 **"Login"**
3. 选择 **"Continue with GitHub"**（用 GitHub 账号登录）
4. 点击 **"Authorize railwayapp"**（授权）
5. 登录成功后，你会看到 Railway 的控制台

---

## 🖥️ 第二步：把代码推送到 GitHub（约 5 分钟）

> 这一步是把你的项目代码上传到 GitHub 上。

### 方法一：在项目文件夹里操作（推荐）

**如果你电脑上安装了 Git：**

1. 打开项目文件夹 `f:\ai-home`
2. 在文件夹空白处右键 → 选择 **"Git Bash Here"** 或 **"终端"**
3. 在弹出的窗口中，**依次**输入以下命令（每输一行按一次回车）：

```bash
# 初始化 Git（让文件夹变成 Git 仓库）
git init

# 添加所有文件（准备上传）
git add .

# 提交文件（打个标记）
git commit -m "初始提交"
```

4. 接下来，回到刚才 GitHub 创建仓库后的页面，里面有一行类似这样的地址：
   ```
   https://github.com/你的用户名/ai-prompt-site.git
   ```
   复制这个地址。

5. 在终端中输入（把地址换成你刚复制的）：
```bash
git remote add origin https://github.com/你的用户名/ai-prompt-site.git
```

6. 最后输入：
```bash
git push -u origin main
```

7. 如果弹出窗口让你登录 GitHub，输入你的用户名和密码（或 Personal Access Token）
8. 上传成功后，刷新 GitHub 仓库页面，就能看到你的代码了

### 方法二：直接上传（不用安装任何东西）

> 如果你不会用 Git，也可以用 GitHub 网页直接上传。

1. 打开 GitHub 刚才创建的仓库 `ai-prompt-site`
2. 点击 **"Add file"** → **"Upload files"**
3. 把 `f:\ai-home` 文件夹里的所有文件**拖进去**
4. 往下翻，点击 **"Commit changes"** 按钮
5. 等待上传完成即可

---

## 🌐 第三步：在 Railway 部署网站（约 5 分钟）

> 这一步把 GitHub 上的代码部署到 Railway，变成一个真正的网站。

### 3.1 创建项目并连接 GitHub

1. 登录 Railway 控制台
2. 点击 **"New Project"**（新建项目）
3. 选择 **"Deploy from GitHub repo"**（从 GitHub 仓库部署）
4. 首次使用会提示你安装 GitHub 应用，点击 **"Configure GitHub App"**
5. 点击 **"Install & Authorize"**
6. 在弹出的页面中，选择你的 GitHub 账号
7. 在 **"Repository access"** 中选择 **"Only select repositories"**
8. 找到并勾选 `ai-prompt-site` 这个仓库
9. 点击 **"Save"** 保存
10. 回到 Railway，再次点击 **"New Project"** → **"Deploy from GitHub repo"**
11. 选择 **"ai-prompt-site"** 仓库

### 3.2 设置环境变量（配置 API Key）

> 环境变量就像网站的"钥匙"，用来连接 AI 服务。

1. 项目创建后，点击顶部的 **"Variables"**（变量）选项卡
2. 点击 **"New Variable"**（新增变量）
3. 添加以下两个变量：

| 变量名 | 值 | 说明 |
|-------|-----|------|
| `SILICONFLOW_API_KEY` | `sk-你的真实Key` | 硅基流动的 API Key |
| `PORT` | `3001` | 服务端口号 |

> 如果你还没有硅基流动的 API Key，可以访问 https://siliconflow.cn 注册获取。

### 3.3 等待部署完成

1. 添加完变量后，Railway 会自动开始部署
2. 点击顶部的 **"Deployments"**（部署）选项卡
3. 你会看到部署状态：**"Building"** → **"Deploying"** → **"Running"**
4. 当状态变成绿色 **"Running"**，说明部署成功

### 3.4 获取网站地址

1. 部署成功后，点击顶部的 **"Settings"**（设置）
2. 在 **"Domains"**（域名）部分，你会看到一个以 `.up.railway.app` 结尾的地址
3. 点击这个地址，你的网站就打开了！🎉

**示例地址：**
```
https://ai-prompt-site.up.railway.app
```

### 3.5 设置自定义域名（可选，需要你有自己的域名）

> 想用自己的域名访问网站（比如 `www.mysite.com`）可以按下面操作。

1. 在 Railway 项目 → **Settings** → **Domains**
2. 输入你的域名，例如 `www.mysite.com`
3. 去你的域名管理后台（如阿里云、腾讯云、Namesilo）
4. 添加一条 **CNAME 记录**，指向 Railway 生成的域名
5. 等待 DNS 生效（通常几分钟到几小时）

---

## 🖼️ 第四步：上传图片、视频和静态资源到七牛云 Kodo（约 10 分钟）

> 网站的图片、视频、CSS、JS 等静态资源需要存放在七牛云 Kodo 上，这样打开速度快，且免费额度够用。

### 4.1 注册并创建空间

1. 访问 👉 https://www.qiniu.com
2. 点击右上角 **"免费注册"**（手机号注册即可）
3. 登录后进入控制台 👉 https://portal.qiniu.com
4. 左侧菜单点击 **"对象存储 Kodo"** → **"存储空间"**
5. 点击 **"创建空间"**：
   - **空间名称**：填写一个唯一名称，如 `aihome-static`
   - **存储区域**：选择 **"华东"**（或其他靠近你用户的区域）
   - **访问控制**：选择 **"公开空间"**（这样资源可以直接通过 URL 访问）
   - 点击 **"创建"**

### 4.2 配置域名

> 七牛云需要绑定域名才能访问资源。可以用七牛默认域名或自有域名。

**方法一：使用七牛默认域名（简单）**

1. 在存储空间列表中找到你刚创建的空间
2. 点击 **"域名管理"** → **"添加域名"**
3. 域名类型选择 **"CDN加速域名"**
4. 域名填写：`aihome.qiniucdn.com`（可以把 `aihome` 改成你喜欢的名字）
5. 七牛会自动分配一个 `*.qiniucdn.com` 的子域名给你
6. 等待 ICP 备案校验通过（默认域名通常免备案，很快生效）

**方法二：绑定自有域名（推荐，支持 HTTPS）**

1. 点击 **"域名管理"** → **"添加域名"**
2. 填写你的域名，如 `static.yourdomain.com`
3. 按提示在域名管理后台添加 **CNAME 记录**，指向七牛提供的加速域名
4. 等待 DNS 生效（通常几分钟）

### 4.3 上传文件

1. 进入存储空间 → 点击 **"文件管理"**
2. 点击 **"上传文件"** 按钮
3. 上传以下文件：

**图片文件（`img/image/` 目录）：**
- `cs.jpg` 等图片文件

**视频缩略图（`img/video/` 目录）：**
- 视频封面图等

**前端静态资源（可选，进一步提速）：**
- `css/style.css`
- `js/common.js`
- `js/data.js`

4. 上传完成后，右键点击文件 → **"复制 URL"**

**地址格式示例：**
```
https://aihome.qiniucdn.com/cs.jpg
https://aihome.qiniucdn.com/css/style.css
```

### 4.4 配置 CORS（跨域访问）

> 如果你的网站域名和七牛云域名不同，需要配置 CORS 才能跨域加载资源。

1. 进入存储空间 → 点击 **"权限设置"**
2. 找到 **"CORS 设置"** → 点击 **"添加规则"**
3. 配置如下：
   - **Allowed Origin**：`*`（或填写你的网站域名，如 `https://your-site.up.railway.app`）
   - **Allowed Method**：勾选 `GET`
   - **Allowed Header**：`*`
   - **Expose Header**：留空
   - **Cache Vary**：勾选
4. 点击 **"保存"**

### 4.5 更新数据文件中的图片链接

> 把项目中数据文件里的图片地址，替换成七牛云上的地址。

**需要修改的文件（在 `data/` 文件夹下）：**

- `data/image-prompts.json` — 图片数据
- `data/video-prompts.json` — 视频数据

**修改方法：**

1. 用记事本打开 `data/image-prompts.json`
2. 找到 `"cover"` 字段，把原来的地址换成七牛云上的地址：

```json
{
  "id": 7,
  "title": "人像摄影作品",
  "cover": "https://aihome.qiniucdn.com/cs.jpg",
  "prompt": "..."
}
```

3. 所有图片和视频都替换完后，保存文件

### 4.6 更新 HTML 中的静态资源链接（可选）

> 如果将 CSS/JS 也上传到了七牛云，需要更新 HTML 文件中的引用路径。

1. 打开 `index.html`、`image.html`、`video.html` 等文件
2. 将 `<link href="css/style.css">` 替换为 `<link href="https://aihome.qiniucdn.com/css/style.css">`
3. 将 `<script src="js/common.js"></script>` 替换为 `<script src="https://aihome.qiniucdn.com/js/common.js"></script>`

### 4.7 更新到 GitHub 触发重新部署

> 修改完文件后，需要重新上传到 GitHub，Railway 会自动更新。

**在终端中执行：**
```bash
git add .
git commit -m "更新资源链接为七牛云 Kodo 地址"
git push
```

**或者用网页上传：**
1. 打开 GitHub 仓库
2. 找到需要修改的文件
3. 点击编辑按钮（铅笔图标）
4. 把修改后的内容粘贴进去
5. 点击 **"Commit changes"** 保存

---

## ✅ 检查你的网站

1. 打开 Railway 分配的域名地址
2. 你应该能看到网站的首页
3. 点击图片/视频内容，应该能正常加载
4. 如果一切正常，恭喜你，部署成功！🎉

---

## 💰 费用总结

| 服务 | 免费额度 | 超出费用 |
|-----|---------|---------|
| GitHub | 无限代码仓库 | 免费 |
| Railway | 每月 $5 免费额度 | 按量计费，个人项目一般不会超 |
| 七牛云 Kodo | 10GB 标准存储 + 10GB 低频存储 + 10GB/月下行流量 | 存储 ¥0.12/GB/月，流量 ¥0.15/GB |

**你的项目每月费用：约 ¥0 元（在免费额度内）**

---

## ❓ 常见问题

### 部署失败了怎么办？

1. 去 Railway → **Deployments** → 点击失败的部署 → **Logs** 查看日志
2. 检查环境变量是否正确设置
3. 检查 `package.json` 文件是否存在

### 为什么网站打不开黑屏？

可能是部署还没完成，等状态变成 **"Running"** 再试。如果一直是绿色但打不开，检查环境变量中 `PORT` 是否设置为 `3001`。

### 修改了数据怎么更新网站？

修改 `data/` 下的 JSON 文件 → 重新上传到 GitHub → Railway 自动重新部署，等待 1-2 分钟即可。

### 怎么查看网站运行日志？

在 Railway 项目面板 → **Deployments** → 选择部署实例 → **Logs**，可以看到实时日志。

### 网站访问慢怎么办？

1. 图片和视频尽量压缩小一点
2. 确保图片、视频和静态资源上传到了七牛云 Kodo（而不是放在项目里）
3. 检查七牛云域名是否正确配置，CORS 设置是否允许跨域

### 需要自己买服务器吗？

**完全不需要！** 本项目所有服务都在免费额度内。

### 想换一个域名怎么弄？

1. 购买域名（如阿里云、腾讯云）
2. 在 Railway 的 **Settings → Domains** 添加域名
3. 在域名管理后台配置 CNAME 解析

---

> **💡 小提示：** 部署过程中遇到任何问题，可以去 Railway 的 **Logs** 看日志，或者把错误信息截图搜索，99% 的问题都能找到答案。