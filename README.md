# 冯宇杰 / Yujie Feng — Resume

这是我的详细版简历。中英双语，点击右上角切换。

This is my detailed résumé. Bilingual (中文 / English); toggle in the top-right.

## 🌐 在线版 / Live Site

GitHub Pages 启用后访问： `https://fragile-0118.github.io/resume/`

(启用步骤：仓库 Settings → Pages → Source: `main` branch / root)

## 🛠 本地预览 / Local Preview

直接用浏览器打开 `index.html` 即可。
Open `index.html` directly in any browser.

## 📝 如何更新内容 / How to Update

- 个人信息：编辑 `index.html` 里对应的 `<span class="lang-zh">` / `<span class="lang-en">` 块
- 配色：编辑 `assets/css/style.css` 顶部的 `:root` 变量
- 头像：把自己的照片放到 `assets/img/avatar.jpg`（72×72 圆形会被自动裁剪）

## 🧱 文件结构 / File Structure

```
resume/
├── index.html              # 主体内容
├── assets/
│   ├── css/style.css       # 主题 + 布局 + 打印样式
│   ├── js/app.js           # 中英切换 + 平滑滚动
│   └── img/avatar.jpg      # 头像（可选）
├── .nojekyll               # 跳过 Jekyll 处理
└── README.md               # 本文件
```