"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
export function Checkbox({
  label,
  id: suppliedId,
  className,
  ...props
}: Omit<React.ComponentProps<"input">, "type"> & { label: React.ReactNode }) {
  const generatedId = React.useId();
  const id = suppliedId ?? generatedId;
  return (
    <div className={cn("flex items-start gap-3", className)}>
      <input
        {...props}
        id={id}
        type="checkbox"
        className="mt-1 size-4 shrink-0 accent-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      />
      <label htmlFor={id} className="text-sm leading-6">
        {label}
      </label>
    </div>
  );
}
