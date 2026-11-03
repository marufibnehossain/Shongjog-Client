import type * as React from "react";
import { cn } from "cn";

function Textarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "w-full resize-y rounded-lg border border-stroke bg-surface px-3 py-3 text-sm text-heading shadow-sm outline-none transition placeholder:text-muted focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
