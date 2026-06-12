import { Spinner } from "@/components/ui/spinner";

export function PageLoader() {
  return (
    <div
      className="flex min-h-[50vh] flex-col items-center justify-center gap-4 py-24"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <Spinner className="size-8 text-primary" />
      <p className="text-sm font-medium text-muted-foreground">Loading...</p>
    </div>
  );
}
