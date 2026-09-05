# 图片提示词封面图

把**图片提示词的封面图**放在这个目录里（直接复制/拖入）。

然后在 `js/data.js` 和 `data/image-prompts.json` 中，把对应提示词条目的 `cover` 字段改为：

```
"cover": "img/image/你的文件名.jpg"
```

示例：
```json
"cover": "img/image/hongkong.jpg"
```

> 图片文件名尽量用英文/拼音，避免中文和空格。