# Splash Animation - 开屏动画

一个简洁优雅的网页开屏动画效果：页面加载后，两侧黑色幕布向外滑开，中间白色竖线展开，适合作为网站或应用的入场动画。

## 效果预览

![Preview](preview.gif)

## 目录结构

```
├── Page/
│   ├── index.html    # 主页面（HTML + CSS）
│   └── open.js       # 动画逻辑
└── README.md
```

## 快速开始

1. 克隆仓库
```bash
git clone https://github.com/你的用户名/仓库名.git
```

2. 直接用浏览器打开 `Page/index.html` 即可查看效果

## 技术实现

- **HTML + CSS**：构建左右黑色遮罩层，通过 CSS transition 实现平滑过渡
- **JavaScript**：监听页面加载事件，延迟 500ms 后触发动画
- 左右遮罩层向外平移消失，中间 3px 白色竖线向两侧展开

## 动画参数

| 参数 | 值 |
|------|------|
| 延迟启动 | 500ms |
| 遮罩滑出过渡 | 1s ease-in-out |
| 中心线展开过渡 | 4s ease-in-out |

## 自定义

修改 `open.js` 中的 `setTimeout` 延迟时间可调整动画触发时机，修改 CSS 中的 `transition` 值可调整动画速度。

## License

MIT
