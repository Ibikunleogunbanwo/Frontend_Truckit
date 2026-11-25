import * as React from "react";
import { Button } from "./button";
export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="rounded-card border border-dashed border-border px-6 py-10 text-center">
      <h3 className="font-bold">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
        {description}
      </p>
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
export function ErrorState({
  title = "We couldn’t load this",
  description,
  onRetry,
}: {
  title?: string;
  description: string;
  onRetry?: () => void;
}) {
  return (
    <div
      role="alert"
      className="rounded-card border border-destructive/30 bg-danger-soft p-5"
    >
      <h3 className="font-bold text-destructive">{title}</h3>
      <p className="mt-1 text-sm">{description}</p>
      {onRetry && (
        <Button size="sm" variant="outline" className="mt-4" onClick={onRetry}>
          Try again
        </Button>
      )}
    </div>
  );
}
export function LoadingState({ label = "Loading" }: { label?: string }) {
  return (
    <div role="status" className="space-y-3">
      <span className="sr-only">{label}</span>
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="h-5 rounded-control bg-muted motion-safe:animate-pulse"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
