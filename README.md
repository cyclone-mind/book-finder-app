# 📚 Book Finder App

一个使用 Vue 3、TypeScript 和 Tailwind CSS 构建的图书搜索应用，基于 Google Books API。用户可以搜索图书并查看详细信息，包括标题、作者、出版日期和封面图片。

## ✨ 功能特性

- 📝 通过关键词搜索图书
- 📊 以响应式网格布局展示搜索结果
- 🌄 显示图书封面图片
- ⏳ 搜索过程中显示加载动画
- 🔗 包含指向 Google Books 详情页的外部链接

## 🛠️ 技术栈

- [Vue 3](https://vuejs.org/) - 渐进式 JavaScript 框架
- [TypeScript](https://www.typescriptlang.org/) - JavaScript 的超集
- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的 CSS 框架
- [Vite](https://vitejs.dev/) - 前端构建工具
- [Pinia](https://pinia.vuejs.org/) - Vue 状态管理
- [Axios](https://axios-http.com/) - 基于 Promise 的 HTTP 客户端
- [Google Books API](https://developers.google.com/books) - 提供图书数据

## 🚀 快速开始

### 前提条件

- Node.js 16.x 或更高版本
- npm 8.x 或更高版本

### 安装

1. 克隆仓库：

```sh
git clone https://github.com/your-username/book-finder-app.git
cd book-finder-app
```

2. 安装依赖：

```sh
npm install
```

3. 配置环境变量：

   - 复制 `.env.example` 文件并重命名为 `.env`：
   ```sh
   cp .env.example .env
   ```
   
   - 打开 `.env` 文件并添加您的 Google Books API 密钥：
   ```
   VITE_GOOGLE_BOOKS_API_KEY=your_api_key_here
   ```
   
   > 注意：您需要在 [Google Cloud Console](https://console.cloud.google.com/) 创建一个项目并获取 API 密钥。请参阅下面的"API 密钥获取说明"部分了解详情。

4. 启动开发服务器：

```sh
npm run dev
```

### 构建生产版本

```sh
npm run build
```

### 代码检查

```sh
npm run lint
```

## 🔑 API 密钥获取说明

为了使用 Google Books API，您需要获取一个 API 密钥：

1. 访问 [Google Cloud Console](https://console.cloud.google.com/)
2. 创建一个新项目（或选择现有项目）
3. 在侧边栏中，点击"API 和服务" > "库"
4. 搜索 "Google Books API" 并启用它
5. 点击"凭据"，然后点击"创建凭据" > "API 密钥"
6. 复制生成的 API 密钥并添加到您的 `.env` 文件中


## 📝 项目结构

```
book-finder-app/
├── src/
│   ├── api/              # API 服务
│   ├── assets/           # 静态资源
│   ├── components/       # 可复用组件
│   ├── http/             # HTTP 客户端配置
│   ├── router/           # 路由配置
│   ├── stores/           # Pinia 状态管理
│   ├── views/            # 页面组件
│   ├── App.vue           # 根组件
│   └── main.ts           # 应用入口
└── ...配置文件
```

## 🤝 贡献指南

欢迎贡献！如果您有改进建议，请按照以下步骤操作：

1. Fork 仓库
2. 创建您的功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开一个 Pull Request

## 📄 许可证

根据 MIT 许可证分发。查看 `LICENSE` 文件获取更多信息。

## 📸 截图

![搜索界面](https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/image-20250422131333247.png)

![搜索结果](https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/image-20250422131359401.png)
