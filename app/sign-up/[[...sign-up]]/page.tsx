import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import cryingClaudeImg from "@/public/brand/crying_claude.png";

export const metadata = {
  title: "Sign Up | Claudey AI",
  description: "Pehli baar Claudey lag rahe hain ? 😂 Join Claudey AI and let Claudey handle it!",
};

export default function SignUpPage() {
  return (
    <div className="relative flex min-h-[calc(100vh-4.5rem)] flex-col items-center justify-center px-4 pt-4 pb-8 sm:pt-6 sm:pb-10 overflow-hidden">
      {/* Background topography texture with subtle mask */}
      <div
        className="pointer-events-none absolute inset-0 bg-topo bg-[size:900px_auto] bg-repeat opacity-[0.08] dark:opacity-[0.04] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_50%,transparent_100%)]"
        aria-hidden="true"
      />

      {/* Ambient warm glow halo */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] sm:size-[800px] rounded-full bg-gradient-to-tr from-[#d93900]/15 via-[#f04e17]/10 to-transparent blur-[140px]"
        aria-hidden="true"
      />

      {/* Prominent humorous Crying Claude watermark backdrop */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none"
        aria-hidden="true"
      >
        {/* Massive watermark centered directly behind the auth card */}
        <div className="relative size-[500px] sm:size-[680px] md:size-[820px] lg:size-[920px] opacity-[0.16] dark:opacity-[0.22] mix-blend-multiply dark:mix-blend-screen">
          <Image
            src={cryingClaudeImg}
            alt=""
            fill
            sizes="(max-width: 640px) 500px, (max-width: 1024px) 820px, 920px"
            className="object-contain filter grayscale-[10%] contrast-110 drop-shadow-2xl"
            priority
          />
        </div>

        {/* Floating humorous corner peek on large screens */}
        <div className="hidden 2xl:block absolute -bottom-10 -right-10 size-72 opacity-[0.18] dark:opacity-[0.24] rotate-12">
          <Image
            src={cryingClaudeImg}
            alt=""
            fill
            sizes="288px"
            className="object-contain drop-shadow-lg"
          />
        </div>
      </div>

      {/* Branding & Playful Funny Tagline Header */}
      <div className="relative z-10 mb-3 sm:mb-4 flex flex-col items-center text-center max-w-xl sm:max-w-2xl px-2">
        <Link href="/" className="group mb-1.5 transition-transform hover:scale-105">
          <div className="relative">
            <Image
              src={cryingClaudeImg}
              alt="Crying Claudey"
              className="size-12 sm:size-14 object-contain drop-shadow-md transition-transform group-hover:scale-110"
              priority
            />
            <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-background border border-border shadow-sm text-[10px]">
              😭
            </span>
          </div>
        </Link>
        <h1 className="font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-foreground sm:whitespace-nowrap">
          Pehli baar Claudey lag rahe hain ? 😂
        </h1>
        <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
          No tension ! Create your free account and let Claudey Ai handle it.
        </p>
      </div>

      <div className="relative z-10 shadow-2xl rounded-2xl">
        <Suspense>
          <SignUp />
        </Suspense>
      </div>
    </div>
  );
}
