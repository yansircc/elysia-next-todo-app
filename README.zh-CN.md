# 🚀 Next.js + Elysia 待办事项应用模板

[English](README.md)

[Demo](https://elysia-next-todo-app.vercel.app/)

一个现代化的、类型安全的待办事项应用程序，展示了 Next.js 与 Elysia API 服务器的集成。在性能和开发者体验方面进行了优化。

## ✨ 特性

- **🔥 Next.js 15** 使用 App Router
- **⚡ 集成到 Next.js 中的 Elysia API 服务器**
- **🛡️ 使用 Eden 实现完全类型安全** 用于 API 路由
- **🎨 使用 Tailwind v4 + Shadcn UI 的现代 UI**
- **🔧 使用 Husky 和 GitHub Actions 的强大工具设置**
- **📝 Prettier 和 ESLint 强制执行代码质量**
- **💻 使用优化设置的 VSCode 集成**

## 🛠️ 技术栈

- **前端**: Next.js 15, React, TypeScript
- **API 服务器**: Elysia (Bun)
- **样式**: Tailwind CSS v4, Shadcn UI
- **类型安全**: Eden, TypeScript
- **开发工具**:
  - Husky 用于 git hooks
  - GitHub Actions 用于 CI
  - Prettier + ESLint 用于代码格式化
  - VSCode 优化设置

## 🚀 开始使用

### 前提条件

- [Bun](https://bun.sh/) (推荐)
- Node.js 18+ (替代方案)

### 安装

```bash
# 克隆仓库
git clone https://github.com/yansircc/elysia-next-todo-app.git

# 导航到项目目录
cd elysia-next-todo-app

# 复制环境变量
cp .env.example .env.local

# 安装依赖 (使用 Bun - 推荐)
bun install

# 或使用 npm (替代方案)
npm install
```

### 环境设置

1. 复制 `.env.example` 到 `.env.local`:

```bash
cp .env.example .env.local
```

2. 在 `.env.local` 中配置你的环境变量:

```env
# Frontend URL for API calls
NEXT_PUBLIC_FRONT_URL="http://localhost:3000"
```

### 开发

```bash
# 运行开发服务器
bun dev

# 构建应用程序
bun run build

# 启动生产服务器
bun start
```

> **注意**: 虽然支持 npm，但我们强烈建议使用 Bun，因为 Elysia 与 Bun 的生态系统深度集成。

## 🎯 为什么选择这个模板？

1. **完美的学习资源**: 查看 Next.js 和 Elysia 如何在实际应用中协同工作
2. **类型安全**: 体验 Eden 集成带来的端到端类型安全
3. **现代化开发**: 使用最新的工具和最佳实践进行配置
4. **生产就绪**: 包括 CI/CD、代码质量工具和 VSCode 优化
5. **开发者体验**: 为最佳开发工作流程预先配置了所有内容

## 📚 学习资源

- [Next.js 文档](https://nextjs.org/docs)
- [Elysia 文档](https://elysiajs.com/)
- [Eden 文档](https://github.com/elysiajs/eden)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [Shadcn UI 文档](https://ui.shadcn.com/)

## 🤝 贡献

欢迎贡献！请随时提交拉取请求。

## 📝 许可证

此项目在 MIT 许可证下授权 - 请参阅 [LICENSE](LICENSE) 文件了解详情。

---

⭐ 如果你觉得此模板有用，请考虑为其加星！

注意：因为是演示性质的项目，所有的todo都存储在内存中，不会持久化存储，所以每次重启服务后，所有的todo都会被清空，本项目并不适合生产环境。
