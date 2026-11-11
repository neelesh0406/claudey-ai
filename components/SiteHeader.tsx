import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { Button } from "./ui/button";
import { Show, UserButton } from "@clerk/nextjs";
import logoNavbarLight from "@/public/brand/logo-navbar-light.png";

function SiteHeader() {
  const isLandingPage = true;

  return (
    <header className="fixed inset-x-0 top-0 z-20 flex h-18 items-center justify-between border-b border-black/5 bg-background/80 px-6 backdrop-blur-md dark:border-white/5 md:px-10">
      <Link
        href="/"
        className="group flex items-center gap-3 transition-transform hover:scale-[1.02]"
        aria-label="Claudey AI"
      >
        <Image
          src={logoNavbarLight}
          alt="Claudey AI"
          className="h-11 sm:h-12 w-auto object-contain transition-all dark:invert"
          priority
        />
        <span className="sr-only">Claudey AI</span>
      </Link>

      {isLandingPage && (
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <Link
            href="#product"
            className="transition-colors hover:text-foreground"
          >
            Product
          </Link>
          <Link
            href="#how-it-works"
            className="transition-colors hover:text-foreground"
          >
            How it works
          </Link>
          <Link
            href="#pricing"
            className="transition-colors hover:text-foreground"
          >
            Pricing
          </Link>
        </nav>
      )}

      <div className="flex items-center gap-3">
        <Suspense>
          <Show when="signed-out">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/sign-in">Sign in</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/sign-up">Sign up</Link>
            </Button>
          </Show>
          <Show when="signed-in">
            <Button variant="outline" size="sm" asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
            <UserButton />
          </Show>
        </Suspense>
      </div>
    </header>
  );
}

export default SiteHeader;
