# AI 提示词反推服务 - 后端

## 功能

1. **图片分析**：为 `prompt-reverse.html` 提供基于视觉大模型的图片分析能力。用户上传图片，后端调用硅基流动的 Qwen2-VL-72B 模型分析图片内容，生成详细描述并填入前端。
2. **静态文件服务**：将项目根目录作为静态资源根目录，访问 `http://localhost:3001` 即可浏览整个站点。
3. **数据中转 API**：将 `data/` 目录下的 JSON 数据文件通过 API 透传，前端优先请求后端 API，失败时自动降级到直接请求 JSON 文件或离线兜底数据。

## 快速部署

### 1. 安装依赖

```bash
cd server
npm install
```

### 2. 配置 API Key

注册免费获取 API Key：https://cloud.siliconflow.cn （注册即送 2000 万 Tokens，无需绑卡）

将 `.env.example` 复制为 `.env` 并填入 Key：

```bash
# Windows
copy .env.example .env

# 编辑 .env 文件，将 sk-your-api-key-here 替换为你的真实 Key
```

或者直接设置环境变量：

```bash
# Windows CMD
set SILICONFLOW_API_KEY=sk-your-real-key

# Windows PowerShell
$env:SILICONFLOW_API_KEY="sk-your-real-key"
```

### 3. 启动服务

```bash
npm start
```

服务启动在 `http://localhost:3001`

### 4. 验证

- 访问 `http://localhost:3001` 即可浏览整个站点
- 访问 `http://localhost:3001/api/health`，返回 `{"status":"ok","apiKeyConfigured":true}` 即配置成功
- 访问 `http://localhost:3001/api/data/image-prompts` 可查看图片提示词数据

## 后端中转说明

所有页面在启动后端服务后，数据请求会自动走 `/api/data/` 中转路径：
- `/api/data/image-prompts` → 图片提示词数据
- `/api/data/video-prompts` → 视频提示词数据
- `/api/data/tools` → AI 工具数据

**降级策略**：API 失败 → 回退到直接请求 `.json` 文件 → 再失败则使用离线兜底数据 `window.APP_DATA`。

## 部署到生产环境

### 方式一：直接部署（服务器/VPS）

```bash
# 设置环境变量
export SILICONFLOW_API_KEY=sk-your-real-key
# 或直接写入启动命令
SILICONFLOW_API_KEY=sk-your-real-key node server.js
```

使用 PM2 管理进程：

```bash
npm install -g pm2
SILICONFLOW_API_KEY=sk-your-real-key pm2 start server.js --name ai-prompt-server
```

### 方式二：使用 Nginx 反向代理

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://127.0.0.1:3001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### 方式三：Railway / Render 等云平台

1. 将整个项目上传（或只上传 `server/` 目录）
2. 设置环境变量 `SILICONFLOW_API_KEY`
3. 启动命令：`node server/server.js`