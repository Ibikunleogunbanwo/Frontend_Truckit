import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
export function Brand({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Truckit home"
      className={cn(
        "inline-flex shrink-0 items-center gap-2.5 font-display text-base font-black",
        inverted ? "text-white" : "text-accent-foreground",
      )}
    >
      <span
        className={cn(
          "flex size-[45px] items-center justify-center rounded-card",
          inverted ? "bg-white" : "bg-primary",
        )}
      >
        <Image
          src={
            inverted ? "/figma/truck-mark-public.svg" : "/figma/truck-mark.svg"
          }
          width={24}
          height={24}
          alt=""
          unoptimized
        />
      </span>
      <span>TruckIt</span>
    </Link>
  );
}
