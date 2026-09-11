/* =========================================================
 * 离线数据兜底（data.js）
 * 与 data/*.json 内容保持一致
 * file:// 双击打开时，或 fetch 无法访问 JSON 时，各页面回退到这里的全局数据
 * ========================================================= */
window.APP_DATA = {
    image: [
        {
            "id": 1,
            "order": 1,
            "title": "赛博朋克少女肖像",
            "category": "人像风格",
            "cover": "https://cdn.jsdelivr.net/gh/420201953-dot/ai-pics@main/r00001.jpg",
            "tags": ["赛博朋克", "人像", "霓虹"],
            "prompt": "赛博朋克风格少女肖像，霓虹灯光打在脸上，背景是雨夜城市街道，全息投影装饰，机械义肢细节，高对比度，冷色调，电影级光影，4k超清，细节丰富，Midjourney风格"
        },
        {
            "id": 2,
            "order": 2,
            "title": "国风山水水墨画",
            "category": "艺术风格",
            "cover": "https://cdn.jsdelivr.net/gh/420201953-dot/ai-pics@main/r00002.jpg",
            "tags": ["国风", "水墨", "山水"],
            "prompt": "中国传统水墨画风格，远山层叠，云雾缭绕，一叶扁舟行驶在江面，留白构图，笔墨晕染效果，意境悠远，淡雅配色，宣纸质感，大师级作品"
        },
        {
            "id": 3,
            "order": 3,
            "title": "产品摄影香水大片",
            "category": "商业摄影",
            "cover": "https://cdn.jsdelivr.net/gh/420201953-dot/ai-pics@main/r00003.jpg",
            "tags": ["产品摄影", "香水", "高级感"],
            "prompt": "高端香水商业摄影，黑色瓶身放置在大理石台面上，周围散落玫瑰花瓣，柔和侧逆光勾勒瓶身轮廓，暗调背景，光斑散景，高级质感，专业棚拍效果，4k高清"
        },
        {
            "id": 4,
            "order": 4,
            "title": "二次元动漫少女",
            "category": "动漫插画",
            "cover": "https://cdn.jsdelivr.net/gh/420201953-dot/ai-pics@main/r00004.jpg",
            "tags": ["二次元", "动漫", "少女"],
            "prompt": "日系动漫风格少女，金色长发，蓝色眼睛，穿着JK制服，站在樱花树下，花瓣飘落，阳光透过树叶，治愈系画风，色彩明亮，线条流畅，高精度插画"
        },
        {
            "id": 5,
            "order": 5,
            "title": "超写实森林风景",
            "category": "自然风光",
            "cover": "https://cdn.jsdelivr.net/gh/420201953-dot/ai-pics@main/r00005.jpg",
            "tags": ["写实", "森林", "自然"],
            "prompt": "超写实森林风景，阳光穿透茂密的树叶形成丁达尔效应，地面长满青苔与苔藓植物，露珠晶莹剔透，空气清新，细节拉满，真实摄影质感，广角镜头，8k分辨率"
        },
        {
            "id": 6,
            "order": 6,
            "title": "复古港风人像",
            "category": "人像风格",
            "cover": "https://cdn.jsdelivr.net/gh/420201953-dot/ai-pics@main/r00006.jpg",
            "tags": ["复古", "港风", "胶片"],
            "prompt": "90年代港风人像写真，年轻女性穿着红色连衣裙，站在老式霓虹灯牌下，胶片颗粒质感，暖黄调色，柔焦效果，复古氛围感，王家卫电影风格"
        },
        {
            "id": 7,
            "order": 15,
            "title": "人像摄影作品",
            "category": "人像风格",
            "cover": "https://cdn.jsdelivr.net/gh/420201953-dot/ai-pics@main/r00007.jpg",
            "tags": ["人像", "摄影"],
            "prompt": "888888888888888"
        },
        {
            "id": 8,
            "order": 8,
            "title": "待补充标题",
            "category": "人像风格",
            "cover": "https://cdn.jsdelivr.net/gh/420201953-dot/ai-pics@main/r00008.webp",
            "tags": ["待补充"],
            "prompt": "88888"
        },
        {
            "id": 9,
            "order": 9,
            "title": "待补充标题",
            "category": "人像风格",
            "cover": "https://cdn.jsdelivr.net/gh/420201953-dot/ai-pics@main/r00009.webp",
            "tags": ["待补充"],
            "prompt": "88888"
        },
        {
            "id": 10,
            "order": 10,
            "title": "待补充标题",
            "category": "人像风格",
            "cover": "https://cdn.jsdelivr.net/gh/420201953-dot/ai-pics@main/r00010.webp",
            "tags": ["待补充"],
            "prompt": "88888"
        },
        {
            "id": 11,
            "order": 11,
            "title": "待补充标题",
            "category": "人像风格",
            "cover": "https://cdn.jsdelivr.net/gh/420201953-dot/ai-pics@main/r00011.jpg",
            "tags": ["待补充"],
            "prompt": "88888"
        }
    ],
    video: [
        {
            "id": 1,
            "order": 7,
            "title": "极近景人物情绪镜头",
            "category": "景别设计",
            "cover": "https://cdn.jsdelivr.net/gh/420201953-dot/ai-videos@main/1.mp4",
            "video_url": "https://cdn.jsdelivr.net/gh/420201953-dot/ai-videos@main/1.mp4",
            "tags": ["极近景", "情绪", "人物"],
            "prompt": "使用极近景拍摄人物眼神与嘴角，强调微表情变化，营造压迫感与亲密感。浅景深虚化背景，侧逆光勾勒面部轮廓，画面色调偏冷，帧率24fps，运镜缓慢推进"
        },
        {
            "id": 2,
            "order": 8,
            "title": "全景城市夜色霓虹",
            "category": "景别设计",
            "cover": "https://cdn.jsdelivr.net/gh/420201953-dot/ai-videos@main/2.mp4",
            "video_url": "https://cdn.jsdelivr.net/gh/420201953-dot/ai-videos@main/2.mp4",
            "tags": ["全景", "夜景", "城市"],
            "prompt": "以全景视角呈现繁华城市夜色，远景中的霓虹与车流形成宏大叙事氛围。广角镜头，低机位拍摄，冷色调为主，点缀暖黄车灯，画面带轻微胶片颗粒感"
        },
        {
            "id": 3,
            "order": 9,
            "title": "戏剧性侧光人像",
            "category": "灯光技巧",
            "cover": "https://cdn.jsdelivr.net/gh/420201953-dot/ai-videos@main/3.mp4",
            "video_url": "https://cdn.jsdelivr.net/gh/420201953-dot/ai-videos@main/3.mp4",
            "tags": ["侧光", "电影感", "人像"],
            "prompt": "采用强烈侧光从人像45度角打出，硬边缘光影勾勒面部轮廓，暗部保留细节，营造情绪张力与电影质感。景深f2.8，焦距50mm，背景纯黑突出主体"
        },
        {
            "id": 4,
            "order": 10,
            "title": "柔和晨曦氛围感",
            "category": "灯光技巧",
            "cover": "https://cdn.jsdelivr.net/gh/420201953-dot/ai-videos@main/4.mp4",
            "video_url": "https://cdn.jsdelivr.net/gh/420201953-dot/ai-videos@main/4.mp4",
            "tags": ["晨曦", "柔光", "治愈"],
            "prompt": "使用低饱和暖色灯光模拟晨曦，营造温柔、安静、治愈的视觉节奏。丁达尔光效穿过窗户，空气中有轻微浮尘，画面整体偏暖黄，对比度偏低"
        },
        {
            "id": 5,
            "order": 11,
            "title": "黄金分割构图风景",
            "category": "构图艺术",
            "cover": "https://cdn.jsdelivr.net/gh/420201953-dot/ai-videos@main/5.mp4",
            "video_url": "https://cdn.jsdelivr.net/gh/420201953-dot/ai-videos@main/5.mp4",
            "tags": ["黄金分割", "风景", "留白"],
            "prompt": "将主体山峰放置在画面黄金分割点，利用大面积天空留白增强画面平衡感与视觉重点。前景草地引导视线，中景湖面倒影，远景山脉层次分明"
        },
        {
            "id": 6,
            "order": 12,
            "title": "对角线动态运镜",
            "category": "镜头运动",
            "cover": "https://cdn.jsdelivr.net/gh/420201953-dot/ai-videos@main/6.mp4",
            "video_url": "https://cdn.jsdelivr.net/gh/420201953-dot/ai-videos@main/6.mp4",
            "tags": ["对角线", "动态", "推进"],
            "prompt": "通过对角线线条引导观看者视线，形成动态推进感并强化叙事层次。镜头沿对角线方向缓慢移动，前景物体快速划过，增强空间纵深感"
        },
        {
            "id": 7,
            "order": 13,
            "title": "电影级冷暖对比调色",
            "category": "色彩美学",
            "cover": "https://cdn.jsdelivr.net/gh/420201953-dot/ai-videos@main/7.mp4",
            "video_url": "https://cdn.jsdelivr.net/gh/420201953-dot/ai-videos@main/7.mp4",
            "tags": ["冷暖对比", "电影感", "调色"],
            "prompt": "将冷蓝与暖橙色块进行强对比，建立情绪冲突并强化视觉记忆点。暗部偏蓝，高光偏橙，中间调自然过渡，整体饱和度适中，画面通透有质感"
        },
        {
            "id": 8,
            "order": 14,
            "title": "35mm胶片颗粒质感",
            "category": "质感胶片",
            "cover": "https://cdn.jsdelivr.net/gh/420201953-dot/ai-videos@main/8.mp4",
            "video_url": "https://cdn.jsdelivr.net/gh/420201953-dot/ai-videos@main/8.mp4",
            "tags": ["胶片", "复古", "颗粒"],
            "prompt": "模仿35mm胶片的柔和边缘和细腻颗粒，让画面带有经典电影气息。轻微暗角，色彩偏暖黄，对比度偏低，带轻微曝光波动，模拟老胶片放映效果"
        },
        {
            "id": 9,
            "order": 20,
            "title": "视频9",
            "category": "视频作品",
            "video_url": "https://cdn.jsdelivr.net/gh/420201953-dot/ai-videos@main/s000001.mp4",
            "tags": ["新上传"],
            "prompt": "8888888555"
        },
        {
            "id": 10,
            "order": 21,
            "title": "视频10",
            "category": "视频作品",
            "video_url": "https://cdn.jsdelivr.net/gh/420201953-dot/ai-videos@main/s000002.mp4",
            "tags": ["新上传"],
            "prompt": "8888888555"
        },
        {
            "id": 11,
            "order": 22,
            "title": "视频11",
            "category": "视频作品",
            "video_url": "https://cdn.jsdelivr.net/gh/420201953-dot/ai-videos@main/s000003.mp4",
            "tags": ["新上传"],
            "prompt": "8888888555"
        },
        {
            "id": 12,
            "order": 23,
            "title": "视频12",
            "category": "视频作品",
            "video_url": "https://cdn.jsdelivr.net/gh/420201953-dot/ai-videos@main/s000004.mp4",
            "tags": ["新上传"],
            "prompt": "8888888555"
        }
    ],
    tools: [
        {
            "id": 1,
            "name": "Midjourney",
            "logo": "M",
            "desc": "全球最热门的AI绘画工具，生成效果惊艳，适合创意插画、概念设计",
            "category": "图像生成",
            "link": "https://www.midjourney.com/"
        },
        {
            "id": 2,
            "name": "Stable Diffusion",
            "logo": "SD",
            "desc": "开源免费AI绘画模型，可本地部署，支持自定义模型和插件扩展",
            "category": "图像生成",
            "link": "https://stability.ai/"
        },
        {
            "id": 3,
            "name": "Sora",
            "logo": "S",
            "desc": "OpenAI推出的文生视频模型，可生成20秒高清电影级视频内容",
            "category": "视频生成",
            "link": "https://openai.com/sora"
        },
        {
            "id": 4,
            "name": "Runway",
            "logo": "R",
            "desc": "专业AI视频创作工具，支持文生视频、图生视频、视频编辑等功能",
            "category": "视频生成",
            "link": "https://runwayml.com/"
        },
        {
            "id": 5,
            "name": "ChatGPT",
            "logo": "G",
            "desc": "OpenAI旗舰大语言模型，支持文案写作、代码生成、逻辑推理",
            "category": "AI写作",
            "link": "https://chat.openai.com/"
        },
        {
            "id": 6,
            "name": "豆包",
            "logo": "豆",
            "desc": "字节跳动自研AI助手，中文能力优秀，支持聊天、写作、画图等",
            "category": "AI写作",
            "link": "https://www.doubao.com/"
        },
        {
            "id": 7,
            "name": "Figma",
            "logo": "F",
            "desc": "在线UI设计工具，内置AI设计功能，团队协作效率极高",
            "category": "设计工具",
            "link": "https://www.figma.com/"
        },
        {
            "id": 8,
            "name": "Remove.bg",
            "logo": "R",
            "desc": "一键AI抠图工具，自动去除背景，效果精准，免费可用",
            "category": "设计工具",
            "link": "https://www.remove.bg/"
        }
    ]
};