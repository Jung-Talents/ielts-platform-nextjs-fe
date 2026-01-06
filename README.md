# IELTS Platform - Next.js Frontend

A modern IELTS learning platform built with Next.js and TypeScript.

## 🚀 Tech Stack

### Core

- **Next.js** `15.2.5` - React framework with server-side rendering
- **React** `19.0.0` - UI library
- **TypeScript** `5.x` - Type-safe JavaScript

### Styling

- **Tailwind CSS** `4.x` - Utility-first CSS framework
- **PostCSS** - CSS transformations

### Code Quality

- **ESLint** `9.x` - Linting and code standards
- **Husky** `9.1.7` - Git hooks for pre-commit validation

### Fonts

- **Geist Sans & Mono** - Next.js optimized fonts

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── constants/      # Application constants and config
├── data/          # Static and mock data
├── hooks/         # Custom React hooks
├── interfaces/    # TypeScript interfaces
├── libs/          # Third-party library configurations
├── pages/         # Next.js pages and API routes
├── schemas/       # Validation schemas (Zod, Yup, etc.)
├── styles/        # Global styles
├── types/         # Global TypeScript type definitions
└── utils/         # Utility functions and helpers
```

### Index Files

Each directory contains an `index.ts` file that serves as the main entry point:

- **`src/components/index.ts`** - Centralized component exports

  ```typescript
  export { default as Button } from "./Button";
  ```

- **`src/constants/index.ts`** - Application-wide constants

  ```typescript
  export const API_URL = process.env.NEXT_PUBLIC_API_URL;
  ```

- **`src/data/index.ts`** - Static and mock data

  ```typescript
  export const mockUsers = [...];
  ```

- **`src/hooks/index.ts`** - Custom React hooks

  ```typescript
  export { default as useAuth } from "./useAuth";
  ```

- **`src/interfaces/index.ts`** - TypeScript interfaces

  ```typescript
  export interface User {
    id: string;
    name: string;
  }
  ```

- **`src/libs/index.ts`** - Third-party library configurations

  ```typescript
  export { default as axiosInstance } from "./axios";
  ```

- **`src/schemas/index.ts`** - Validation schemas

  ```typescript
  export { loginSchema } from "./auth";
  ```

- **`src/types/index.d.ts`** - Global type definitions

  ```typescript
  export type ID = string | number;
  ```

- **`src/utils/index.ts`** - Utility functions
  ```typescript
  export { formatDate, debounce } from "./helpers";
  ```

## 🛠️ Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/pages/index.tsx`. The page auto-updates as you edit the file.

### API Routes

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello).

This endpoint can be edited in `src/pages/api/hello.ts`. The `pages/api` directory is mapped to `/api/*`.

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## 🔒 Git Hooks

This project uses **Husky** to enforce code quality before commits:

- **Pre-commit**: Automatically runs `npm run lint` and `npm run build`
- Prevents commits if there are linting errors or build failures

### Bypass Hook (Not Recommended)

```bash
git commit -m "message" --no-verify
```

## 📝 Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run start`   | Start production server  |
| `npm run lint`    | Run ESLint               |
| `npm run prepare` | Setup Husky hooks        |

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Ensure `npm run lint` and `npm run build` pass
4. Commit your changes (pre-commit hook will run automatically)
5. Push and create a pull request

## 📚 Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial
- [Next.js GitHub repository](https://github.com/vercel/next.js)

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

## 📄 License

Private - All rights reserved
