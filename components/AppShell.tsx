"use client";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import SiteHeader from "./SiteHeader";

type AppShellProps = {
  children: ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const isFullScreenRoute =
    pathname?.startsWith("/workspace/") || pathname?.startsWith("/shared/");

  if (isFullScreenRoute) {
    return <div>{children}</div>;
  }

  return (
    <>
      <SiteHeader />
      <div className="flex flex-1 flex-col pt-16">{children}</div>
      {/* <SiteFooter /> */}
    </>
  );
}
