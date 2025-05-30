# Festive E-commerce Shop

A modern European e-commerce website with festive red and green design, Euro pricing, and full shopping cart functionality.

## Features

- Festive Christmas-themed design with red and green colors
- Product catalog with categories and search
- Shopping cart with session persistence
- Euro pricing throughout
- Dutch language interface
- Responsive design for all devices
- Real-time product filtering and sorting

## Tech Stack

- **Frontend**: React 18, TypeScript, Wouter routing, TanStack Query
- **Backend**: Express.js, TypeScript, in-memory storage
- **Styling**: Tailwind CSS, Shadcn/ui components
- **Build**: Vite, ESBuild

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/prinsgras/festive-ecommerce-shop.git
cd festive-ecommerce-shop
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open http://localhost:5000

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This project is configured for easy deployment on platforms like Vercel, Netlify, or Railway. The build process creates optimized production files.

## Project Structure

```
├── client/src/          # React frontend
├── server/              # Express backend
├── shared/              # Shared types and schemas
└── dist/                # Built files (after build)
```

Built with React, Express, and lots of festive spirit! 🎄