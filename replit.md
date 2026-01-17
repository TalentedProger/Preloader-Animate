# Replit.md

## Overview

This is a luxury travel website built as a full-stack TypeScript application. The project features a cinematic dark theme with animated preloader sequences, newsletter subscription functionality, and destination showcase pages. It's designed as a high-end travel/lifestyle brand landing page with modern animations and premium aesthetics.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library (New York style) with Radix UI primitives
- **Animations**: Framer Motion for complex sequenced animations and transitions
- **State Management**: TanStack Query (React Query) for server state
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript (ESM modules)
- **Build Tool**: esbuild for server bundling, Vite for client bundling
- **Development**: tsx for TypeScript execution in development

### Data Layer
- **ORM**: Drizzle ORM
- **Database**: PostgreSQL
- **Schema Location**: `shared/schema.ts` (shared between client and server)
- **Migrations**: Drizzle Kit (`drizzle-kit push`)

### API Design
- **Pattern**: RESTful API with typed routes
- **Route Definitions**: `shared/routes.ts` contains API contract with Zod schemas
- **Validation**: Zod schemas for input/output validation on both client and server

### Project Structure
```
├── client/           # React frontend
│   └── src/
│       ├── components/  # UI components (shadcn/ui)
│       ├── hooks/       # Custom React hooks
│       ├── lib/         # Utilities and query client
│       └── pages/       # Route components
├── server/           # Express backend
│   ├── db.ts         # Database connection
│   ├── routes.ts     # API route handlers
│   ├── storage.ts    # Data access layer
│   └── index.ts      # Server entry point
├── shared/           # Shared code (client & server)
│   ├── schema.ts     # Drizzle database schema
│   └── routes.ts     # API route type definitions
└── attached_assets/  # Static image assets
```

### Build System
- **Development**: `npm run dev` - runs tsx with Vite middleware for HMR
- **Production Build**: `npm run build` - builds client with Vite, server with esbuild
- **Database Sync**: `npm run db:push` - pushes schema changes to database

### Design Decisions
- **Monorepo Structure**: Single repository with client/server/shared directories enables type sharing
- **Typed API Contract**: Routes defined once in shared folder, consumed by both client and server
- **Storage Abstraction**: `IStorage` interface in storage.ts allows for easy testing and implementation swapping
- **CSS Variables**: Theme colors defined as CSS variables for easy dark/light mode support

## External Dependencies

### Database
- **PostgreSQL**: Primary database (connection via `DATABASE_URL` environment variable)
- **pg**: Node.js PostgreSQL client
- **connect-pg-simple**: Session storage for Express sessions (if authentication is added)

### UI/Animation Libraries
- **Radix UI**: Headless UI primitives (dialog, dropdown, accordion, etc.)
- **Framer Motion**: Animation library for React
- **Lucide React**: Icon library
- **react-icons**: Additional icons (used for payment card brands)

### Development Tools
- **Vite**: Frontend build tool with HMR
- **esbuild**: Fast TypeScript/JavaScript bundler for server
- **Drizzle Kit**: Database migration and schema management tool

### Fonts (External)
- Google Fonts: Outfit, Space Grotesk, DM Sans, Fira Code, Geist Mono, Architects Daughter