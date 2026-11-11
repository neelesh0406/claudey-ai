import { ClerkProvider } from "@clerk/nextjs";
import { shadcn } from "@clerk/ui/themes";
import { Suspense } from "react";
import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Inter,
  Bricolage_Grotesque,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "radix-ui/tooltip";
import { Toaster } from "sonner";
import AppShell from "@/components/AppShell";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// headings only. The optical size axis gives large headings a tighter, more characterful cut.
const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: {
    default: "Claudey AI — The Playful, Modern AI Workspace",
    template: "%s | Claudey AI",
  },
  description:
    "Claudey lag gaye ? 😂 Lagne hi the, let Claudey Ai handle it ! The friendly AI workspace featuring conversational AI co-piloting, infinite canvas, collaborative docs, and team delivery.",
  keywords: [
    "Claudey",
    "Claudey AI",
    "AI workspace",
    "conversational AI",
    "infinite canvas",
    "collaborative docs",
    "ChatGPT alternative",
    "team productivity",
  ],
  authors: [{ name: "Neelesh Chandwani" }],
  creator: "Neelesh Chandwani",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://claudey.ai",
    title: "Claudey AI — The Playful, Modern AI Workspace",
    description:
      "Claudey lag gaye ? 😂 Lagne hi the, let Claudey Ai handle it ! The friendly AI workspace for docs, canvas, and delivery.",
    siteName: "Claudey AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claudey AI — The Playful, Modern AI Workspace",
    description:
      "Claudey lag gaye ? 😂 Lagne hi the, let Claudey Ai handle it !",
  },
  icons: {
    icon: "/brand/mascot.png",
    shortcut: "/brand/mascot.png",
    apple: "/brand/mascot.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        // "dark",
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        bricolage.variable,
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <ClerkProvider appearance={{ theme: shadcn }}>
          <TooltipProvider>
            <Suspense>
              <AppShell>{children}</AppShell>
            </Suspense>
            <Toaster richColors />
          </TooltipProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
