"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
const control =
  "w-full min-h-14 rounded-control border border-input bg-background px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive";
export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return <input className={cn(control, className)} {...props} />;
}
export function Textarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(control, "min-h-28 resize-y", className)}
      {...props}
    />
  );
}
export function Select({
  className,
  ...props
}: React.ComponentProps<"select">) {
  return <select className={cn(control, "pr-10", className)} {...props} />;
}
type FieldProps = { label: string; hint?: string; error?: string };
export function TextField({
  label,
  hint,
  error,
  id: suppliedId,
  ...props
}: React.ComponentProps<"input"> & FieldProps) {
  const generatedId = React.useId();
  const id = suppliedId ?? generatedId;
  const description =
    [
      props["aria-describedby"],
      hint ? `${id}-hint` : null,
      error ? `${id}-error` : null,
    ]
      .filter(Boolean)
      .join(" ") || undefined;
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm">
        {label}
      </label>
      <Input
        {...props}
        id={id}
        aria-invalid={error ? true : props["aria-invalid"]}
        aria-describedby={description}
      />
      {hint && (
        <p id={`${id}-hint`} className="text-xs text-muted-foreground">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
