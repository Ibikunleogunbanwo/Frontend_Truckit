import * as React from "react";
import { cn } from "@/lib/utils";
export function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      role="region"
      aria-label="Scrollable table"
      tabIndex={0}
      className="max-w-full overflow-x-auto rounded-card border border-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <table
        className={cn("w-full border-collapse text-left text-sm", className)}
        {...props}
      />
    </div>
  );
}
export function TableHeader(props: React.ComponentProps<"thead">) {
  return <thead className="bg-muted text-xs font-bold" {...props} />;
}
export function TableBody(props: React.ComponentProps<"tbody">) {
  return <tbody {...props} />;
}
export function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      className={cn("border-b border-border last:border-0", className)}
      {...props}
    />
  );
}
export function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      scope="col"
      className={cn("whitespace-nowrap px-5 py-4", className)}
      {...props}
    />
  );
}
export function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return <td className={cn("px-5 py-4", className)} {...props} />;
}
