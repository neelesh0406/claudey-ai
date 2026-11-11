# 🤖 Claudey AI

> **"Claudey lag gaye ? 😂 Lagne hi the, let Claudey Ai handle it !"**

**Claudey AI** is a playful, friendly, and modern AI workspace built for solo builders, product teams, founders, and creators. Similar to ChatGPT, but engineered for spatial thinking and delivery, Claudey seamlessly pairs conversational AI with an infinite whiteboard canvas, structured block-based documentation, and a multiplayer team board.

---

## ✨ Features

- **🤖 Conversational Co-pilot**: Chat naturally with Claudey to brainstorm features, debug system designs, or synthesize end-to-end architectures.
- **🎨 Infinite Whiteboard Canvas**: Powered by tldraw. Claudey autonomously renders flowcharts, entity-relationship diagrams (ERDs), cloud infrastructure maps, and org charts shape-by-shape and updates them in place when you ask.
- **📝 Block-Based Specs (Docs)**: Powered by BlockNote. Transform whiteboard nodes into living product requirement documents (PRDs), API specs, and technical documentation with bidirectional cohesion.
- **👥 Multiplayer Team Board**: Organize delivery with real-time Kanban boards. Claudey extracts actionable development tickets directly from specs and diagrams.
- **⚡ Real-Time Collaboration**: Sub-millisecond peer synchronization backed by Yjs CRDTs.
- **🔐 Multi-Tenant Authentication**: Complete user management, organization scoping, and session security powered by Clerk.
- **🎨 Warm Terracotta Design System**: Modern Tailwind CSS v4 styling anchored by vibrant burnt orange (`#d93900`) and deep vermilion (`#ae2c00`) with custom topographic depth and zero neutral purple undertones.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, React 19, Turbopack) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/), Radix UI, Lucide Icons |
| **Authentication** | [Clerk](https://clerk.com/) (`@clerk/nextjs`) |
| **Database & ORM**| [Prisma ORM 7](https://www.prisma.io/) with PostgreSQL adapter |
| **Multiplayer / Sync** | [Yjs](https://yjs.dev/) CRDTs |
| **Fonts** | Bricolage Grotesque (headings), Inter (sans), Geist Mono (mono) |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js 20+](https://nodejs.org/)
- `npm`, `pnpm`, or `bun`
- A PostgreSQL database (e.g. Supabase, Neon, or local)
- Clerk account for authentication keys

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/neeleshchandwani/claudey-ai.git
cd claudey-ai
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Database (PostgreSQL)
DATABASE_URL=postgresql://user:password@localhost:5432/claudey_db
DIRECT_URL=postgresql://user:password@localhost:5432/claudey_db
```

### 3. Initialize Prisma Database

```bash
npx prisma generate
npx prisma db push
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

---

## 📁 Project Structure

```
claudey-ai/
├── app/
│   ├── (main)/
│   │   └── dashboard/      # Authenticated user dashboard
│   ├── sign-in/            # Custom branded Sign In page
│   ├── sign-up/            # Custom branded Sign Up page
│   ├── workspace/          # Dual-surface collaborative workspace
│   ├── globals.css         # Tailwind v4 theme & brand tokens (#d93900)
│   ├── layout.tsx          # Root layout with Claudey AI metadata & fonts
│   └── page.tsx            # Claudey AI landing page
├── components/
│   ├── ui/                 # Reusable UI primitives (Button, Dialog, etc.)
│   ├── AppShell.tsx        # Responsive application frame
│   └── SiteHeader.tsx      # Main navigation with Claudey mascot & brand
├── lib/
│   ├── data/               # Static and structured data (how-it-works, etc.)
│   └── utils.ts            # Utility functions
├── prisma/
│   └── schema.prisma       # Database models and PostgreSQL configuration
└── public/
    ├── brand/              # Claudey mascot & brand assets
    └── textures/           # Topographic SVG textures
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

## 📄 License

This project is licensed under the MIT License.

Made with ❤️ by [Neelesh Chandwani](https://github.com/neeleshchandwani).
