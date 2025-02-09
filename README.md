# 🚀 Next.js + Elysia Todo App Template

[中文](README.zh-CN.md)

[Demo](https://elysia-next-todo-app.vercel.app/)

A modern, type-safe Todo application showcasing the integration of Next.js with Elysia API server. Built with performance and developer experience in mind.

## ✨ Features

- **🔥 Next.js 15** with App Router
- **⚡ Elysia API Server** integrated into Next.js
- **🛡️ Full Type Safety** with Eden for API routes
- **🎨 Modern UI** with Tailwind v4 + Shadcn UI
- **🔧 Robust Tooling** setup with Husky and GitHub Actions
- **📝 Code Quality** enforced by Prettier and ESLint
- **💻 VSCode Integration** with optimized settings

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React, TypeScript
- **API Server**: Elysia (Bun)
- **Styling**: Tailwind CSS v4, Shadcn UI
- **Type Safety**: Eden, TypeScript
- **Development Tools**:
  - Husky for git hooks
  - GitHub Actions for CI
  - Prettier + ESLint for code formatting
  - VSCode optimized settings

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (Recommended)
- Node.js 18+ (Alternative)

### Installation

```bash
# Clone the repository
git clone https://github.com/yansircc/elysia-next-todo-app.git

# Navigate to the project directory
cd elysia-next-todo-app

# Copy environment variables
cp .env.example .env.local

# Install dependencies (with Bun - recommended)
bun install

# Or with npm (alternative)
npm install
```

### Environment Setup

1. Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

2. Configure your environment variables in `.env.local`:

```env
# Frontend URL for API calls
NEXT_PUBLIC_FRONT_URL="http://localhost:3000"
```

### Development

```bash
# Run the development server
bun dev

# Build the application
bun run build

# Start the production server
bun start
```

> **Important**: Make sure to set up your environment variables before starting the development server.

## �� Why This Template?

1. **Perfect Learning Resource**: See how Next.js and Elysia work together in a real-world application
2. **Type Safety**: Experience end-to-end type safety with Eden integration
3. **Modern Development**: Configured with the latest tools and best practices
4. **Production Ready**: Includes CI/CD, code quality tools, and VSCode optimization
5. **Developer Experience**: Everything is pre-configured for an optimal development workflow

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Elysia Documentation](https://elysiajs.com/)
- [Eden Documentation](https://github.com/elysiajs/eden)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

⭐ If you found this template helpful, please consider giving it a star!

Note: Because this is a demo project, all todos are stored in memory and will be cleared on each restart, so it is not suitable for production environments.
