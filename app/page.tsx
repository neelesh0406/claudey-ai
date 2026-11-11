import Image from "next/image";
import Link from "next/link";
import mascotImg from "@/public/brand/mascot.png";
import logoNavbarLight from "@/public/brand/logo-navbar-light.png";
import { Button } from "@/components/ui/button";
import { HOW_IT_WORKS_STEPS } from "@/lib/data/how-it-works";
import {
  ArrowRight,
  CheckCircle2,
  Workflow,
  FileText,
  Columns3,
  Sparkles,
  Check,
  Plus,
  MapPin,
  Zap,
  Shield,
  Heart,
} from "lucide-react";

export default function Home() {
  return (
    <div className="relative flex min-h-[calc(100vh-4.5rem)] flex-col justify-between overflow-x-clip bg-background">
      {/* Background topography texture with subtle mask */}
      <div
        className="pointer-events-none absolute inset-0 bg-topo bg-[size:900px_auto] bg-repeat opacity-[0.09] dark:opacity-[0.05] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_25%,#000_50%,transparent_100%)]"
        aria-hidden="true"
      />

      {/* Ambient gradient glows - warm vermilion & burnt orange */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 size-[680px] rounded-full bg-gradient-to-tr from-[#d93900]/15 via-[#ae2c00]/10 to-transparent blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -left-40 size-[380px] rounded-full bg-[#ae2c00]/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -right-40 size-[380px] rounded-full bg-[#d93900]/10 blur-[120px]"
        aria-hidden="true"
      />

      {/* Hero Section */}
      <section className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 pt-6 pb-14 text-center md:pt-10 md:pb-20 lg:px-8">
        {/* Eyebrow Announcement Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs font-mono text-muted-foreground backdrop-blur-md">
          <span className="text-[#d93900] text-[10px]">◆</span>
          <span>Early access</span>
        </div>

        {/* Hero Title with Primary Tagline */}
        <h1 className="mt-5 max-w-4xl font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:leading-[1.15]">
          <span className="opacity-20">C</span>laudey lag gaye ?{" "}
          <span className="inline-block transition-transform hover:scale-110">
            😂
          </span>{" "}
          <span className="block mt-1 text-[#d93900] dark:text-[#f04e17] text-2xl sm:text-4xl md:text-5xl">
            Lagne hi the, let{" "}
            <span className="text-foreground">Claudey Ai</span> handle it !
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
          The playful, friendly modern AI workspace with conversational
          co-piloting, an infinite visual canvas, and collaborative docs. Chat,
          brainstorm, and get work done seamlessly.
        </p>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button
            size="lg"
            className="h-10 px-5 text-sm font-medium bg-[#d93900] hover:bg-[#ae2c00] text-white transition-all hover:scale-[1.02]"
            asChild
          >
            <Link href="/sign-up">
              Start building free
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-10 px-4 text-sm border-black/10 bg-black/[0.02] text-foreground backdrop-blur-sm hover:border-black/20 hover:bg-black/[0.05] dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20 dark:hover:bg-white/[0.08]"
            asChild
          >
            <Link href="#how-it-works">See how it works</Link>
          </Button>
        </div>

        {/* Trust & Stack Indicators */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-y-2 gap-x-5 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="size-3.5 text-[#d93900] dark:text-[#f04e17]" />
            <span>Real-time multiplayer via Yjs</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="size-3.5 text-[#d93900] dark:text-[#f04e17]" />
            <span>tldraw canvas & BlockNote docs</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Image
              src={mascotImg}
              alt="Claudey Mascot"
              className="size-4 object-contain"
            />
            <span>Integrated Claudey AI co-pilot</span>
          </div>
        </div>

        {/* Product Video Showcase in Rounded Card with survey-frame and scroll-tilt */}
        <div id="demo" className="relative mt-8 w-full max-w-4xl scroll-mt-20">
          {/* Ambient backlight glow */}
          <div
            className="pointer-events-none absolute -inset-2 rounded-[2rem] bg-gradient-to-b from-[#d93900]/25 via-[#ae2c00]/15 to-transparent opacity-70 blur-2xl"
            aria-hidden="true"
          />

          {/* Rounded card using survey-frame and scroll-tilt utilities */}
          <div className="survey-frame scroll-tilt relative rounded-2xl border border-black/10 bg-card/80 p-1.5 shadow-2xl backdrop-blur-xl ring-1 ring-black/5 dark:border-white/10 dark:bg-card/60 dark:ring-white/10 sm:p-2">
            <div className="relative overflow-hidden rounded-xl bg-black/40 aspect-[16/9]">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/videos/hero-poster.jpg"
                className="size-full object-cover rounded-xl"
              >
                <source src="/videos/hero.webm" type="video/webm" />
                <source src="/videos/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Target Audience Strip */}
        <div className="mt-12 w-full max-w-4xl px-2">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 rounded-xl border border-black/10 bg-black/[0.02] p-3 sm:px-4 font-mono text-xs text-muted-foreground backdrop-blur-md dark:border-white/10 dark:bg-card/60">
            <div className="flex items-center gap-2.5">
              <div className="flex gap-1.5">
                <span className="size-2 rounded-full bg-[#d93900]" />
                <span className="size-2 rounded-full bg-[#f7845f]" />
                <span className="size-2 rounded-full bg-[#ae2c00]" />
              </div>
              <span className="text-foreground font-medium">{"// for:"}</span>
            </div>
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-1.5 text-[11px] sm:text-xs">
              {[
                "product teams",
                "founders",
                "solo builders",
                "agencies",
                "consultants",
              ].map((item, index, arr) => (
                <span key={item} className="inline-flex items-center">
                  <span className="rounded-md border border-black/5 bg-background/80 px-2 py-0.5 text-foreground shadow-2xs dark:border-white/10 dark:bg-black/30">
                    <span className="text-[#d93900] dark:text-[#f04e17] mr-1">
                      $
                    </span>
                    {item}
                  </span>
                  {index < arr.length - 1 && (
                    <span className="mx-1 text-muted-foreground/40">•</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section: "one AI, one workspace, your whole team" */}
      <section
        id="product"
        className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16 lg:px-8 scroll-mt-20"
      >
        <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-3.5 py-1 text-xs font-mono text-muted-foreground backdrop-blur-md mb-4">
            <Sparkles className="size-3 text-[#d93900] dark:text-[#f04e17]" />
            <span>Unified Surfaces</span>
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            One AI, one workspace, your whole team
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            Stop switching between disjointed diagramming boards, doc tools, and
            ticket trackers. Every Claudey workspace seamlessly connects visual
            architecture, living specifications, and team delivery.
          </p>
        </div>

        {/* Alternating Surface Rows */}
        <div className="space-y-16 md:space-y-24">
          {/* Surface 1: Canvas (Text Left, Flowchart Mock Right) */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
            {/* Text Side */}
            <div className="space-y-5 text-left">
              <div className="inline-flex size-10 items-center justify-center rounded-xl bg-[#d93900]/10 text-[#d93900] dark:text-[#f04e17] border border-[#d93900]/20">
                <Workflow className="size-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#d93900] dark:text-[#f04e17] font-semibold">
                  Surface 01
                </span>
                <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  Canvas
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                An infinite whiteboard where the agent draws flowcharts, ERDs,
                architecture diagrams and org charts shape by shape and edits
                them in place when you ask.
              </p>
              <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <Check className="size-4 shrink-0 text-[#d93900] dark:text-[#f04e17] mt-0.5" />
                  <span>
                    <strong className="text-foreground font-medium">
                      Shape-by-shape generation:
                    </strong>{" "}
                    Prompt the AI to build complex architecture diagrams,
                    relational database schemas, and workflows with intelligent
                    auto-layout.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="size-4 shrink-0 text-[#d93900] dark:text-[#f04e17] mt-0.5" />
                  <span>
                    <strong className="text-foreground font-medium">
                      Conversational in-place edits:
                    </strong>{" "}
                    Ask the agent to modify node properties, insert routing
                    branches, or re-wire relationships directly on the canvas.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="size-4 shrink-0 text-[#d93900] dark:text-[#f04e17] mt-0.5" />
                  <span>
                    <strong className="text-foreground font-medium">
                      Multiplayer spatial presence:
                    </strong>{" "}
                    Collaborate with live multi-user cursors, synchronized zoom
                    states, and persistent Yjs geometric sync.
                  </span>
                </li>
              </ul>
            </div>

            {/* Mock Side: Small Flowchart */}
            <div className="relative">
              <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#d93900]/15 via-[#ae2c00]/10 to-transparent blur-xl" />
              <div className="relative rounded-2xl border border-black/10 bg-card/90 p-4 shadow-xl backdrop-blur-xl ring-1 ring-black/5 dark:border-white/10 dark:bg-card/60 dark:ring-white/10">
                {/* Mock Canvas Toolbar */}
                <div className="mb-3 flex items-center justify-between border-b border-black/5 pb-2.5 dark:border-white/5 text-xs text-muted-foreground font-mono">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-[#d93900]" />
                    <span className="text-[11px] font-medium text-foreground">
                      Canvas / Auth & API Architecture
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px]">
                    <span className="rounded bg-black/5 px-1.5 py-0.5 dark:bg-white/5">
                      100% Zoom
                    </span>
                    <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-emerald-600 dark:text-emerald-400 font-medium">
                      Live
                    </span>
                  </div>
                </div>

                {/* Flowchart Visual Content */}
                <div className="relative h-64 w-full rounded-xl border border-black/5 bg-background/50 p-4 overflow-hidden dark:border-white/5 dark:bg-black/20">
                  {/* Subtle Grid Dots */}
                  <div className="absolute inset-0 bg-[radial-gradient(#888_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />

                  {/* Flowchart Node 1: Client Gateway */}
                  <div className="absolute top-4 left-4 z-10 w-36 rounded-lg border border-black/10 bg-card p-2.5 shadow-sm dark:border-white/10">
                    <div className="text-[10px] font-mono text-muted-foreground">
                      HTTP / WS
                    </div>
                    <div className="text-xs font-semibold text-foreground">
                      Client App
                    </div>
                    <div className="mt-1 text-[9px] text-muted-foreground">
                      React 19 Frontend
                    </div>
                  </div>

                  {/* Flowchart Node 2: Claudey AI Engine */}
                  <div className="absolute top-12 right-6 z-10 w-44 rounded-lg border border-[#d93900]/30 bg-[#d93900]/[0.06] p-2.5 shadow-md backdrop-blur-sm dark:border-[#d93900]/40">
                    <div className="flex items-center gap-1 text-[10px] font-semibold text-[#d93900] dark:text-[#f04e17]">
                      <Sparkles className="size-2.5" />
                      <span>CLAUDEY AI ORCHESTRATOR</span>
                    </div>
                    <div className="text-xs font-semibold text-foreground">
                      Claudey Co-pilot Core
                    </div>
                    <div className="mt-1 text-[9px] text-muted-foreground">
                      Tool Calling & Shape Synthesizer
                    </div>
                  </div>

                  {/* Flowchart Node 3: Database & Sync */}
                  <div className="absolute bottom-5 left-10 z-10 w-40 rounded-lg border border-black/10 bg-card p-2.5 shadow-sm dark:border-white/10">
                    <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                      PostgreSQL + Yjs
                    </div>
                    <div className="text-xs font-semibold text-foreground">
                      Persistence Tier
                    </div>
                    <div className="mt-1 text-[9px] text-muted-foreground">
                      Prisma Driver Adapter
                    </div>
                  </div>

                  {/* SVG Connecting Arrows in Warm Vermilion */}
                  <svg
                    className="pointer-events-none absolute inset-0 size-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Node 1 to Node 2 */}
                    <path
                      d="M 152 35 C 195 35, 205 75, 248 75"
                      fill="none"
                      stroke="#d93900"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />
                    {/* Node 2 to Node 3 */}
                    <path
                      d="M 310 132 C 310 170, 260 180, 208 180"
                      fill="none"
                      stroke="#d93900"
                      strokeWidth="1.5"
                    />
                  </svg>

                  {/* In-place Agent Edit Pill */}
                  <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 rounded-full border border-[#d93900]/30 bg-card/90 px-2.5 py-1 text-[10px] text-foreground shadow-md backdrop-blur-md">
                    <Image
                      src={mascotImg}
                      alt="Claudey AI"
                      className="size-3.5 object-contain"
                    />
                    <span>Claudey: adding caching proxy...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Surface 2: Docs (Mock Left, Text Right — Alternating!) */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
            {/* Mock Side: Block Editor Mock */}
            <div className="order-2 lg:order-1 relative">
              <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-transparent blur-xl" />
              <div className="relative rounded-2xl border border-black/10 bg-card/90 p-4 shadow-xl backdrop-blur-xl ring-1 ring-black/5 dark:border-white/10 dark:bg-card/60 dark:ring-white/10">
                {/* Mock Doc Toolbar */}
                <div className="mb-3 flex items-center justify-between border-b border-black/5 pb-2.5 dark:border-white/5 text-xs text-muted-foreground font-mono">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-emerald-500" />
                    <span className="text-[11px] font-medium text-foreground">
                      Doc / specification.md
                    </span>
                  </div>
                  <span className="rounded bg-black/5 px-1.5 py-0.5 text-[10px] dark:bg-white/5">
                    Auto-saved
                  </span>
                </div>

                {/* Document Editor Mock Surface */}
                <div className="h-64 w-full rounded-xl border border-black/5 bg-background/50 p-4 space-y-3 overflow-hidden text-left dark:border-white/5 dark:bg-black/20">
                  <h4 className="text-base font-bold text-foreground">
                    # System Architecture Specification
                  </h4>

                  {/* Callout Block */}
                  <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/[0.05] p-2.5 text-xs text-foreground">
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                      💡 Synthesized from Canvas:
                    </span>
                    <p className="mt-0.5 text-[11px] text-muted-foreground">
                      This specification automatically links to the Flowchart
                      components in workspace view.
                    </p>
                  </div>

                  {/* Checklist & Code */}
                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center gap-2 text-foreground">
                      <span className="flex size-3.5 items-center justify-center rounded bg-emerald-500 text-[9px] text-white">
                        ✓
                      </span>
                      <span>
                        1. Real-time document conflict resolution (CRDT)
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span className="size-3.5 rounded border border-black/20 dark:border-white/20" />
                      <span>2. High-throughput edge synchronization</span>
                    </div>
                  </div>

                  {/* Inline AI Rewrite Banner with Brand Vermilion */}
                  <div className="rounded-md border border-[#d93900]/25 bg-[#d93900]/[0.06] px-2.5 py-1.5 text-[11px] flex items-center justify-between text-[#ae2c00] dark:text-[#f04e17]">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="size-3 text-[#d93900]" />
                      <span>
                        Agent rewriting section 2.1 into formal RFC spec...
                      </span>
                    </div>
                    <span className="font-mono text-[9px] bg-[#d93900]/10 px-1.5 py-0.5 rounded text-[#d93900] dark:text-[#f04e17]">
                      Tab to apply
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="order-1 lg:order-2 space-y-5 text-left">
              <div className="inline-flex size-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <FileText className="size-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">
                  Surface 02
                </span>
                <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  Docs
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                A block editor where the agent turns a diagram into a written
                spec and rewrites or summarizes sections on command.
              </p>
              <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <Check className="size-4 shrink-0 text-emerald-500 mt-0.5" />
                  <span>
                    <strong className="text-foreground font-medium">
                      Diagram-to-spec transformation:
                    </strong>{" "}
                    Turn visual whiteboard flows into structured PRDs, technical
                    RFCs, and API documentation with one click.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="size-4 shrink-0 text-emerald-500 mt-0.5" />
                  <span>
                    <strong className="text-foreground font-medium">
                      On-command block rewrites:
                    </strong>{" "}
                    Select any block or section to summarize meeting
                    transcripts, refine tone, or generate implementation steps.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="size-4 shrink-0 text-emerald-500 mt-0.5" />
                  <span>
                    <strong className="text-foreground font-medium">
                      Bi-directional alignment:
                    </strong>{" "}
                    Changes in your architectural diagrams propagate directly
                    into written documentation without manual copying.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Surface 3: Team board (Text Left, Kanban Mock Right) */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
            {/* Text Side */}
            <div className="space-y-5 text-left">
              <div className="inline-flex size-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                <Columns3 className="size-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-semibold">
                  Surface 03
                </span>
                <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  Team board
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                A collaborative space where the agent helps your team
                brainstorm, organize tasks, and track progress in real-time.
              </p>
              <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <Check className="size-4 shrink-0 text-amber-500 mt-0.5" />
                  <span>
                    <strong className="text-foreground font-medium">
                      AI-driven task breakdown:
                    </strong>{" "}
                    The co-pilot reads canvas nodes and doc checklists to
                    automatically generate actionable delivery cards.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="size-4 shrink-0 text-amber-500 mt-0.5" />
                  <span>
                    <strong className="text-foreground font-medium">
                      Dynamic status tracking:
                    </strong>{" "}
                    Organize delivery across Planning, In Progress, In Review,
                    and Done with seamless drag-and-drop.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="size-4 shrink-0 text-amber-500 mt-0.5" />
                  <span>
                    <strong className="text-foreground font-medium">
                      Real-time team brainstorming:
                    </strong>{" "}
                    Vote on feature priorities, assign teammates, and
                    synchronize roadmap progress effortlessly.
                  </span>
                </li>
              </ul>
            </div>

            {/* Mock Side: Kanban Board */}
            <div className="relative">
              <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-transparent blur-xl" />
              <div className="relative rounded-2xl border border-black/10 bg-card/90 p-4 shadow-xl backdrop-blur-xl ring-1 ring-black/5 dark:border-white/10 dark:bg-card/60 dark:ring-white/10">
                {/* Mock Board Header */}
                <div className="mb-3 flex items-center justify-between border-b border-black/5 pb-2.5 dark:border-white/5 text-xs text-muted-foreground font-mono">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-amber-500" />
                    <span className="text-[11px] font-medium text-foreground">
                      Kanban Board / Sprint Execution
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px]">
                    <span className="rounded bg-black/5 px-1.5 py-0.5 dark:bg-white/5">
                      4 Columns
                    </span>
                  </div>
                </div>

                {/* Kanban Columns Grid */}
                <div className="h-64 w-full rounded-xl border border-black/5 bg-background/50 p-2.5 overflow-hidden dark:border-white/5 dark:bg-black/20">
                  <div className="grid grid-cols-3 gap-2.5 h-full text-left">
                    {/* Column 1: PLANNING */}
                    <div className="rounded-lg bg-black/[0.02] p-2 flex flex-col gap-2 border border-black/5 dark:bg-white/[0.02] dark:border-white/5">
                      <div className="flex items-center justify-between text-[10px] font-mono font-semibold text-muted-foreground">
                        <span>PLANNING</span>
                        <span className="rounded bg-black/5 px-1 dark:bg-white/5">
                          2
                        </span>
                      </div>
                      <div className="rounded-md border border-black/10 bg-card p-2 shadow-2xs dark:border-white/10">
                        <span className="text-[9px] font-mono text-[#d93900] dark:text-[#f04e17] font-medium">
                          #schema
                        </span>
                        <p className="text-[11px] font-medium text-foreground leading-tight mt-0.5">
                          Database adapter
                        </p>
                      </div>
                      <div className="rounded-md border border-black/10 bg-card p-2 shadow-2xs dark:border-white/10">
                        <span className="text-[9px] font-mono text-amber-600 dark:text-amber-400 font-medium">
                          #ai
                        </span>
                        <p className="text-[11px] font-medium text-foreground leading-tight mt-0.5">
                          Canvas shape tools
                        </p>
                      </div>
                    </div>

                    {/* Column 2: IN PROGRESS */}
                    <div className="rounded-lg bg-black/[0.02] p-2 flex flex-col gap-2 border border-black/5 dark:bg-white/[0.02] dark:border-white/5">
                      <div className="flex items-center justify-between text-[10px] font-mono font-semibold text-[#d93900] dark:text-[#f04e17]">
                        <span>IN PROGRESS</span>
                        <span className="rounded bg-[#d93900]/10 px-1 text-[#d93900] dark:text-[#f04e17]">
                          2
                        </span>
                      </div>
                      <div className="rounded-md border border-[#d93900]/25 bg-card p-2 shadow-2xs dark:border-[#d93900]/35">
                        <span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                          #sync
                        </span>
                        <p className="text-[11px] font-medium text-foreground leading-tight mt-0.5">
                          Yjs real-time bus
                        </p>
                        <div className="mt-1.5 flex items-center justify-between text-[9px] text-muted-foreground">
                          <span>Alex</span>
                          <span className="text-[#d93900] dark:text-[#f04e17]">
                            80%
                          </span>
                        </div>
                      </div>
                      <div className="rounded-md border border-black/10 bg-card p-2 shadow-2xs dark:border-white/10">
                        <span className="text-[9px] font-mono text-blue-600 dark:text-blue-400 font-medium">
                          #auth
                        </span>
                        <p className="text-[11px] font-medium text-foreground leading-tight mt-0.5">
                          Clerk Org tenancy
                        </p>
                      </div>
                    </div>

                    {/* Column 3: DONE */}
                    <div className="rounded-lg bg-black/[0.02] p-2 flex flex-col gap-2 border border-black/5 dark:bg-white/[0.02] dark:border-white/5">
                      <div className="flex items-center justify-between text-[10px] font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                        <span>DONE</span>
                        <span className="rounded bg-emerald-500/10 px-1 text-emerald-600 dark:text-emerald-400">
                          1
                        </span>
                      </div>
                      <div className="rounded-md border border-black/10 bg-card p-2 shadow-2xs opacity-85 dark:border-white/10">
                        <span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                          ✓ complete
                        </span>
                        <p className="text-[11px] font-medium text-foreground leading-tight mt-0.5">
                          Video showcase card
                        </p>
                      </div>
                      <button className="flex items-center justify-center gap-1 rounded-md border border-dashed border-black/15 p-1.5 text-[10px] text-muted-foreground hover:border-black/30 hover:text-foreground transition-colors dark:border-white/15 dark:hover:border-white/30">
                        <Plus className="size-2.5" />
                        <span>Add Task</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bottom Agent Notification */}
                <div className="mt-2.5 flex items-center justify-between rounded-md border border-amber-500/20 bg-amber-500/[0.05] px-2.5 py-1 text-[10px] text-amber-700 dark:text-amber-300">
                  <div className="flex items-center gap-1.5">
                    <Image
                      src={mascotImg}
                      alt="Claudey AI"
                      className="size-3.5 object-contain"
                    />
                    <span>
                      Claudey AI extracted 5 delivery tasks from whiteboard &
                      spec
                    </span>
                  </div>
                  <span className="font-mono text-[9px] opacity-75">
                    Just now
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section: 3 Steps Connected like Waypoints on a Route */}
      <section
        id="how-it-works"
        className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20 lg:px-8 scroll-mt-20"
      >
        <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-3.5 py-1 text-xs font-mono text-muted-foreground backdrop-blur-md mb-4">
            <MapPin className="size-3 text-[#d93900]" />
            <span>The Workspace Trail</span>
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            How it works
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            Follow the direct route from initial concept to high-velocity
            execution. Three waypoints connected seamlessly in one shared
            session.
          </p>
        </div>

        {/* Waypoints Route Grid with Connecting Path */}
        <div className="relative">
          {/* Desktop Connecting Waypoint Trail Line in Brand Vermilion */}
          <div className="pointer-events-none absolute top-12 left-16 right-16 hidden h-0.5 -translate-y-1/2 border-t-2 border-dashed border-[#d93900]/30 lg:block dark:border-[#d93900]/20" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-8">
            {HOW_IT_WORKS_STEPS.map((item, index) => (
              <div
                key={item.step}
                className="group relative flex flex-col justify-between rounded-2xl border border-black/10 bg-card/90 p-6 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#d93900]/40 hover:shadow-xl dark:border-white/10 dark:bg-card/60"
              >
                {/* Step Header with Waypoint Pin */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="relative z-10 flex size-12 items-center justify-center rounded-2xl border border-[#d93900]/30 bg-background font-mono text-base font-bold text-foreground shadow-sm ring-4 ring-card transition-colors group-hover:border-[#d93900] group-hover:text-[#d93900] dark:group-hover:text-[#f04e17]">
                      {item.step}
                    </div>
                    <span className="rounded-full border border-black/5 bg-black/[0.03] px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground dark:border-white/5 dark:bg-white/[0.05]">
                      {item.coordinates}
                    </span>
                  </div>

                  <div className="space-y-1.5 text-left">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#d93900] dark:text-[#f04e17]">
                      {item.waypoint}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-foreground/80">
                      {item.tagline}
                    </p>
                    <p className="pt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Waypoint Bottom Tag */}
                <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-left">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground">
                    <span className="size-1.5 rounded-full bg-[#d93900] animate-pulse" />
                    {item.badge}
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground/60">
                    Step {index + 1} of 3
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section (Placeholder Tiers) */}
      {/* TODO: Implement pricing tiers later */}
      <section
        id="pricing"
        className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20 lg:px-8 scroll-mt-20"
      >
        <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-3.5 py-1 text-xs font-mono text-muted-foreground backdrop-blur-md mb-4">
            <Zap className="size-3 text-[#d93900]" />
            <span>Transparent Pricing</span>
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            Start free for personal workflows. Scale effortlessly when your team
            is ready to scale together with Claudey.
          </p>
        </div>

        {/* 3 Tier Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-8 items-stretch">
          {/* Tier 1: Free / Solo */}
          <div className="flex flex-col justify-between rounded-2xl border border-black/10 bg-card/80 p-6 sm:p-8 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-card/50 text-left">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Personal
                </span>
                <span className="rounded-full bg-black/5 px-2.5 py-0.5 text-[10px] font-mono text-muted-foreground dark:bg-white/5">
                  Free Forever
                </span>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-display text-4xl font-bold text-foreground">
                  $0
                </span>
                <span className="text-xs text-muted-foreground">/ month</span>
              </div>
              <p className="text-xs text-muted-foreground mb-6">
                For solo creators, indie hackers, and engineers exploring paired
                docs and canvas.
              </p>

              <div className="space-y-3 border-t border-black/5 pt-6 text-xs text-muted-foreground dark:border-white/5">
                <div className="flex items-center gap-2.5 text-foreground">
                  <Check className="size-4 shrink-0 text-emerald-500" />
                  <span>1 active paired workspace (Doc + Canvas)</span>
                </div>
                <div className="flex items-center gap-2.5 text-foreground">
                  <Check className="size-4 shrink-0 text-emerald-500" />
                  <span>Standard AI agent drawing & editing</span>
                </div>
                <div className="flex items-center gap-2.5 text-foreground">
                  <Check className="size-4 shrink-0 text-emerald-500" />
                  <span>Export to Markdown, PNG, and JSON</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="size-4 shrink-0 text-emerald-500" />
                  <span>Community Discord support</span>
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              className="mt-8 w-full border-black/10 dark:border-white/10"
              asChild
            >
              <Link href="/sign-up">Start for free</Link>
            </Button>
          </div>

          {/* Tier 2: Pro (Highlighted with Brand Vermilion) */}
          <div className="relative flex flex-col justify-between rounded-2xl border-2 border-[#d93900] bg-card/95 p-6 sm:p-8 shadow-2xl backdrop-blur-xl dark:bg-card/80 text-left ring-1 ring-[#d93900]/30">
            {/* Popular Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#d93900] to-[#ae2c00] px-3.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
              Most Popular
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#d93900] dark:text-[#f04e17]">
                  Pro Builder
                </span>
                <span className="rounded-full bg-[#d93900]/10 px-2.5 py-0.5 text-[10px] font-mono text-[#d93900] dark:text-[#f04e17] font-semibold">
                  14-Day Trial
                </span>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-display text-4xl font-bold text-foreground">
                  $20
                </span>
                <span className="text-xs text-muted-foreground">/ month</span>
              </div>
              <p className="text-xs text-muted-foreground mb-6">
                For high-velocity founders and engineering teams shipping with
                speed.
              </p>

              <div className="space-y-3 border-t border-black/5 pt-6 text-xs text-muted-foreground dark:border-white/5">
                <div className="flex items-center gap-2.5 text-foreground font-medium">
                  <Check className="size-4 shrink-0 text-[#d93900]" />
                  <span>Unlimited paired workspaces</span>
                </div>
                <div className="flex items-center gap-2.5 text-foreground font-medium">
                  <Check className="size-4 shrink-0 text-[#d93900]" />
                  <span>Multiplayer real-time Yjs collaboration</span>
                </div>
                <div className="flex items-center gap-2.5 text-foreground font-medium">
                  <Check className="size-4 shrink-0 text-[#d93900]" />
                  <span>Priority AI agent speed & reasoning</span>
                </div>
                <div className="flex items-center gap-2.5 text-foreground">
                  <Check className="size-4 shrink-0 text-[#d93900]" />
                  <span>Automated diagram-to-spec transformation</span>
                </div>
                <div className="flex items-center gap-2.5 text-foreground">
                  <Check className="size-4 shrink-0 text-[#d93900]" />
                  <span>Password-protected public share links</span>
                </div>
              </div>
            </div>

            <Button
              className="mt-8 w-full bg-[#d93900] hover:bg-[#ae2c00] text-white transition-all hover:scale-[1.01]"
              asChild
            >
              <Link href="/sign-up">Start 14-day trial</Link>
            </Button>
          </div>

          {/* Tier 3: Enterprise */}
          <div className="flex flex-col justify-between rounded-2xl border border-black/10 bg-card/80 p-6 sm:p-8 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-card/50 text-left">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Team & Enterprise
                </span>
                <Shield className="size-4 text-muted-foreground" />
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-display text-4xl font-bold text-foreground">
                  Custom
                </span>
              </div>
              <p className="text-xs text-muted-foreground mb-6">
                For agencies, consultancies, and organizations requiring
                governance and compliance.
              </p>

              <div className="space-y-3 border-t border-black/5 pt-6 text-xs text-muted-foreground dark:border-white/5">
                <div className="flex items-center gap-2.5 text-foreground">
                  <Check className="size-4 shrink-0 text-emerald-500" />
                  <span>Everything included in Pro Builder</span>
                </div>
                <div className="flex items-center gap-2.5 text-foreground">
                  <Check className="size-4 shrink-0 text-emerald-500" />
                  <span>Clerk Organization roles & tenant scoping</span>
                </div>
                <div className="flex items-center gap-2.5 text-foreground">
                  <Check className="size-4 shrink-0 text-emerald-500" />
                  <span>Dedicated agent inference bandwidth</span>
                </div>
                <div className="flex items-center gap-2.5 text-foreground">
                  <Check className="size-4 shrink-0 text-emerald-500" />
                  <span>SSO, SAML, and audit log exports</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="size-4 shrink-0 text-emerald-500" />
                  <span>Dedicated Slack support & 99.9% uptime SLA</span>
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              className="mt-8 w-full border-black/10 dark:border-white/10"
              asChild
            >
              <Link href="/sign-in">Contact sales</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Closing CTA on Topo Background with 3D Mascot */}
      <section className="relative z-10 mx-auto w-full max-w-5xl px-6 py-20 lg:px-8">
        <div className="survey-frame relative overflow-hidden rounded-3xl border border-black/10 bg-card/90 p-8 sm:p-14 text-center shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-card/70">
          {/* Topo Texture Background Layer */}
          <div
            className="pointer-events-none absolute inset-0 bg-topo bg-[size:700px_auto] bg-repeat opacity-[0.12] dark:opacity-[0.06] [mask-image:radial-gradient(ellipse_at_center,#000_60%,transparent_100%)]"
            aria-hidden="true"
          />

          {/* Ambient Lighting Glow in Vermilion */}
          <div
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 size-96 rounded-full bg-[#d93900]/15 blur-[100px]"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center">
            {/* Mascot (transparent PNG, no container background) */}
            <div className="relative mb-6 flex items-center justify-center">
              <Image
                src={mascotImg}
                alt="Claudey Mascot"
                className="h-28 w-auto object-contain transition-transform duration-300 hover:scale-105"
                priority
              />
            </div>

            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#d93900] dark:text-[#f04e17]">
              Start Your Journey
            </span>

            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:leading-[1.15]">
              Ready to let Claudey AI handle it ? 😂
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Join product teams, founders, and solo builders turning ideas into
              specs, architecture, and code in one playful, unified space.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <Button
                size="lg"
                className="h-11 px-6 font-medium bg-[#d93900] hover:bg-[#ae2c00] text-white transition-all hover:scale-[1.02]"
                asChild
              >
                <Link href="/sign-up">
                  Start building free
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-11 px-5 border-black/10 bg-background/60 text-foreground backdrop-blur-sm hover:border-black/20 hover:bg-black/[0.05] dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20 dark:hover:bg-white/[0.08]"
                asChild
              >
                <Link href="#demo">Explore live demo</Link>
              </Button>
            </div>

            <p className="mt-6 font-mono text-[11px] text-muted-foreground">
              No credit card required • Instant setup • Personal tier free
              forever
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-black/10 bg-background/80 py-12 px-6 backdrop-blur-md dark:border-white/10 lg:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link
              href="/"
              className="group flex items-center gap-2.5 transition-transform hover:scale-[1.02]"
              aria-label="Claudey AI"
            >
              <Image
                src={logoNavbarLight}
                alt="Claudey AI"
                className="h-8 sm:h-9 w-auto object-contain transition-all dark:invert"
              />
              <span className="sr-only">Claudey AI</span>
            </Link>
            <p className="text-xs text-muted-foreground text-center md:text-left">
              The playful, friendly modern AI workspace for conversational
              co-piloting, docs, and visual canvas.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
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
            <Link
              href="/dashboard"
              className="transition-colors hover:text-foreground"
            >
              Dashboard
            </Link>
            <Link
              href="/sign-in"
              className="transition-colors hover:text-foreground"
            >
              Sign in
            </Link>
          </nav>

          {/* Attribution Credit */}
          <div className="flex flex-col items-center md:items-end gap-1.5">
            <div className="group inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-black/[0.02] px-3.5 py-1 text-xs font-mono text-muted-foreground backdrop-blur-sm transition-colors hover:border-[#d93900]/30 hover:text-foreground dark:border-white/10 dark:bg-white/[0.03]">
              <span>Made with</span>
              <Heart className="size-3.5 fill-[#d93900] text-[#d93900] animate-pulse" />
              <span>by</span>
              <span className="font-semibold text-foreground">
                Neelesh Chandwani
              </span>
            </div>
            <span className="text-[10px] font-mono text-muted-foreground/60">
              © {2026} Claudey AI. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
