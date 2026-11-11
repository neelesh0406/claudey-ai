import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { Button } from "./ui/button";
import { Show, UserButton } from "@clerk/nextjs";

function SiteHeader() {
  const isLandingPage = true;

  return (
    <header className="fixed inset-x-0 top-0 z-20 flex h-18 items-center justify-between border-b border-white/5 bg-background/70 px-6 backdrop-blur-md md:px-10">
      <Link
        href="/"
        className="flex items-center"
      >
        <Image
          src="/brand/logo-navbar-light.png"
          alt="Orkestr"
          width={314}
          height={160}
          className="h-12 w-auto"
          priority
        />
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
