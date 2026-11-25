"use client";
import * as React from "react";
import { Dialog as Primitive } from "radix-ui";
import { cn } from "@/lib/utils";
export const Dialog = Primitive.Root;
export const DialogTrigger = Primitive.Trigger;
export const DialogClose = Primitive.Close;
export function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof Primitive.Title>) {
  return (
    <Primitive.Title
      className={cn("text-lg font-bold", className)}
      {...props}
    />
  );
}
export function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof Primitive.Description>) {
  return (
    <Primitive.Description
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}
export function DialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Primitive.Content>) {
  return (
    <Primitive.Portal>
      <Primitive.Overlay className="fixed inset-0 z-40 bg-black/40" />
      <Primitive.Content
        className={cn(
          "fixed left-1/2 top-1/2 z-50 max-h-[85dvh] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 space-y-5 overflow-y-auto rounded-card border border-border bg-background p-6 shadow-xl focus:outline-none sm:p-8",
          className,
        )}
        {...props}
      >
        {children}
        <Primitive.Close
          aria-label="Close dialog"
          className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-control text-lg hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring"
        >
          ×
        </Primitive.Close>
      </Primitive.Content>
    </Primitive.Portal>
  );
}
