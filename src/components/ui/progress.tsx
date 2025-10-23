"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import * as ProgressPrimitive from "@radix-ui/react-progress";

interface Props extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  activeColor?: string;
  max?: number;
}

function Progress({
  activeColor = "bg-primary",
  className,
  max = 100,
  value,
  ...props
}: Props) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn(activeColor, "h-full w-full flex-1 transition-all")}
        style={{
          transform: `translateX(-${100 - ((value || 0) / max) * 100}%)`,
        }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
