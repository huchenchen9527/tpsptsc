const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

// 加载 .env 环境变量（如果存在）
try { require('dotenv').config(); } catch (_) {}

const app = express();
const PORT = process.env.PORT || 3001;

// 从环境变量读取 API Key（部署时设置）
// 注册获取免费 API Key：https://cloud.siliconflow.cn
const SILICONFLOW_API_KEY = process.env.SILICONFLOW_API_KEY || '';

// 项目根目录（server 目录的上一级）
const ROOT_DIR = path.resolve(__dirname, '..');

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// 静态文件服务：将项目根目录作为静态资源根目录
app.use(express.static(ROOT_DIR));

// 健康检查
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', apiKeyConfigured: !!SILICONFLOW_API_KEY });
});

// ===== 数据中转 API =====
// 将 data/ 目录下的 JSON 文件通过 API 透传，前端无需直接请求 .json 文件

// 获取图片提示词数据
app.get('/api/data/image-prompts', (req, res) => {
  const filePath = path.join(ROOT_DIR, 'data', 'image-prompts.json');
  readJsonFile(filePath, res);
});

// 获取视频提示词数据
app.get('/api/data/video-prompts', (req, res) => {
  const filePath = path.join(ROOT_DIR, 'data', 'video-prompts.json');
  readJsonFile(filePath, res);
});

// 获取工具数据
app.get('/api/data/tools', (req, res) => {
  const filePath = path.join(ROOT_DIR, 'data', 'tools.json');
  readJsonFile(filePath, res);
});

// 通用 JSON 文件读取函数
function readJsonFile(filePath, res) {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error('读取文件失败:', filePath, err.message);
      return res.status(500).json({ error: '数据加载失败' });
    }
    try {
      res.json(JSON.parse(data));
    } catch (parseErr) {
      console.error('JSON 解析失败:', filePath, parseErr.message);
      res.status(500).json({ error: '数据解析失败' });
    }
  });
}

// 分析图片接口
app.post('/api/analyze-image', async (req, res) => {
  try {
    const { image } = req.body; // base64 图片数据（不含 data:image/ 前缀）
    if (!image) {
      return res.status(400).json({ error: '缺少图片数据' });
    }

    if (!SILICONFLOW_API_KEY) {
      return res.status(503).json({ error: '服务端未配置 API Key，请联系管理员' });
    }

    // 构造 base64 完整数据 URI
    const imageUrl = image.startsWith('data:') ? image : `data:image/jpeg;base64,${image}`;

    // 调用硅基流动视觉大模型
    const response = await fetch('https://api.siliconflow.cn/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SILICONFLOW_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'Qwen/Qwen2-VL-72B-Instruct',
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'image_url',
                image_url: { url: imageUrl }
              },
              {
                type: 'text',
                text: `You are an AI prompt engineer. Analyze this image and output a complete, ready-to-use English prompt for AI image generation (Midjourney / Stable Diffusion). 

Follow this structure:
[Subject] - detailed description of the main subject (person/object/scene), including appearance, features, pose, expression
[Environment] - background, setting, weather, time of day
[Lighting] - light type and direction
[Color] - dominant colors, color palette
[Composition] - camera angle, framing, composition technique
[Style] - artistic style, visual aesthetic
[Quality] - quality tags (masterpiece, 8k, ultra detailed, etc.)

Rules:
- Output ONLY the final prompt, no explanations, no labels.
- The prompt must be in English, concise, comma-separated keywords/phrases.
- Minimum 80 words, covering all aspects above.
- End with "--ar 16:9 --v 6" for Midjourney compatibility.
- Do NOT include the structure labels in the output.`
              }
            ]
          }
        ],
        max_tokens: 512,
        temperature: 0.7,
      })
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('API 调用失败:', err);
      return res.status(502).json({ error: '视觉分析服务调用失败' });
    }

    const data = await response.json();
    const analysis = data.choices?.[0]?.message?.content || '';

    res.json({ analysis });

  } catch (error) {
    console.error('分析失败:', error);
    res.status(500).json({ error: '分析失败，请稍后重试' });
  }
});

app.listen(PORT, () => {
  console.log(`AI 提示词反推服务已启动: http://localhost:${PORT}`);
  if (!SILICONFLOW_API_KEY) {
    console.warn('⚠️ 未配置 SILICONFLOW_API_KEY，请设置环境变量或创建 .env 文件');
    console.log('   注册免费获取: https://cloud.siliconflow.cn');
  }
});