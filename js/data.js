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
            "id": 9,
            "order": 20,
            "title": "电影级高中生超自然场景",
            "category": "人物剧情",
            "video_url": "https://cdn.jsdelivr.net/gh/420201953-dot/ai-videos@main/s000001.mp4",
            "tags": ["超自然", "高中生", "短片", "奇幻/魔法", "人物/角色", "人群/群体"],
            "prompt": "创建一个高端电影级真人实拍场景，地点位于现代美国高中走廊，背景包含成排的金属储物柜、大窗户、逼真的学生群体以及自然的室内日光。一名年轻的金发女学生，身穿宽松的米白色落肩毛衣、黑色短裙，背着黑色双肩包，佩戴精致的叠层项链，走在拥挤的走廊中。在整个视频中，请确保她的面部特征、发型、服装、身体比例和背包完全一致。视频开始时采用电影级中景镜头，展示女孩在储物柜附近被其他学生环绕。随着她低头，摄像机缓慢推向她，营造出紧张且富有感染力的氛围。突然，一种神秘的粉红色发光能量特效出现并迅速穿过走廊，制造出戏剧性的超自然瞬间。周围的学生自然地做出反应并惊慌散开。在动作过程中使用动态手持摄像机运动、逼真的运动模糊、细腻的镜头光晕、浅景深、自然的皮肤纹理、逼真的头发运动、电影级布光、细节丰富的高中环境、体积光、逼真的阴影以及好莱坞顶级视觉质量。在广角镜头、中景镜头、特写镜头和追踪镜头之间平滑过渡。结尾采用电影级特写镜头，拍摄女孩在走廊中径直走向镜头，表情震惊且情绪紧张。照片级真实感真人实拍，电影级调色，逼真的物理效果，高度细节的环境，自然的面部表情，流畅的角色动作，戏剧性的叙事，4K，高动态范围。无字幕，无标题，无文字，无 Logo，无水印，无背景音乐。"
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