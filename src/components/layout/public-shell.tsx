import { Brand } from "./brand";
export function PublicShell({
  children,
  navigation,
}: {
  children: React.ReactNode;
  navigation: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-card border border-border">
      <header className="flex flex-wrap items-center justify-between gap-5 bg-black px-6 py-4 text-white">
        <Brand inverted />
        <nav
          aria-label="Public navigation"
          className="flex flex-wrap gap-5 text-xs"
        >
          {navigation}
        </nav>
      </header>
      <div className="p-6 sm:p-10">{children}</div>
      <footer className="bg-primary px-6 py-5 text-xs text-primary-foreground">
        TruckIt · Making every move seamless and stress-free.
      </footer>
    </div>
  );
}
