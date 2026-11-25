"use client";
import * as React from "react";
import Image from "next/image";
import { Brand } from "./brand";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
export type ShellRole = "customer" | "service_center";
export type NavigationItem = {
  label: string;
  href: string;
  icon: "dashboard" | "move" | "quotes" | "account";
};
function NavigationIcon({ kind }: { kind: NavigationItem["icon"] }) {
  if (kind === "dashboard")
    return (
      <span aria-hidden="true" className="relative block size-5">
        <Image
          src="/figma/67e44.svg"
          alt=""
          width={16.6667}
          height={16.6667}
          className="absolute left-[1.667px] top-[1.667px]"
          unoptimized
        />
        <Image
          src="/figma/48535.svg"
          alt=""
          width={7.05251}
          height={7.11207}
          className="absolute right-[1.667px] top-[1.667px]"
          unoptimized
        />
      </span>
    );
  if (kind === "account")
    return (
      <span aria-hidden="true" className="relative block size-5">
        <Image
          src="/figma/edf50.svg"
          alt=""
          width={13.3283}
          height={5.6875}
          className="absolute bottom-[1.667px] left-[3.33px]"
          unoptimized
        />
        <Image
          src="/figma/0afe6.svg"
          alt=""
          width={8.82}
          height={8.82}
          className="absolute left-[5.59px] top-[1.667px]"
          unoptimized
        />
      </span>
    );
  return (
    <span
      aria-hidden="true"
      className="flex size-5 items-center justify-center"
    >
      <Image
        src={kind === "move" ? "/figma/de645.svg" : "/figma/106ef.svg"}
        alt=""
        width={kind === "move" ? 16.6797 : 16.6584}
        height={kind === "move" ? 16.3324 : 16.4984}
        unoptimized
      />
    </span>
  );
}
export function AppShell({
  children,
  role = "customer",
  items,
  activeHref,
}: {
  children: React.ReactNode;
  role?: ShellRole;
  items: NavigationItem[];
  activeHref?: string;
}) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      <a
        href="#main-content"
        className="sr-only z-50 bg-background p-4 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <header className="flex min-h-(--header-height) flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-3 sm:px-10">
        <div className="flex items-center gap-5">
          <Brand />
          {role === "service_center" && (
            <span className="text-xs font-semibold text-accent-foreground">
              Service center
            </span>
          )}
        </div>
        <Button
          variant="outline"
          size="sm"
          className="md:hidden"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Menu
        </Button>
        <span className="hidden text-xs text-muted-foreground md:block">
          Component preview
        </span>
      </header>
      <div className="md:grid md:min-h-[calc(100dvh-var(--header-height))] md:grid-cols-[var(--sidebar-width)_minmax(0,1fr)]">
        <aside
          className={cn(
            "border-b border-border bg-background px-5 py-6 md:block md:border-b-0 md:border-r md:px-10 md:py-10",
            !menuOpen && "hidden",
          )}
        >
          <nav
            id="primary-navigation"
            aria-label={`${role === "customer" ? "Customer" : "Service center"} navigation`}
            className="space-y-5"
          >
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={activeHref === item.href ? "location" : undefined}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "flex min-h-9 items-center gap-2.5 text-[13px] font-semibold",
                  activeHref === item.href
                    ? "text-accent-foreground"
                    : "text-foreground hover:text-accent-foreground",
                )}
              >
                <NavigationIcon kind={item.icon} />
                {item.label}
              </a>
            ))}
          </nav>
        </aside>
        <main
          id="main-content"
          tabIndex={-1}
          className="min-w-0 px-5 py-8 outline-none md:px-[30px] md:py-10"
        >
          {children}
        </main>
      </div>
    </>
  );
}
