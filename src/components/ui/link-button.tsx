import type * as React from "react";

import { Button } from "@/components/ui/button";

type LinkButtonProps = {
  href?: string | null;
  variant?: React.ComponentProps<typeof Button>["variant"];
  size?: React.ComponentProps<typeof Button>["size"];
  className?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  children: React.ReactNode;
};

function LinkButton({
  href,
  variant,
  size,
  className,
  target,
  rel,
  children,
}: LinkButtonProps) {
  const url = href?.trim();

  if (!url) {
    return (
      <Button variant={variant} size={size} className={className} disabled>
        {children}
      </Button>
    );
  }

  return (
    <Button variant={variant} size={size} className={className} asChild>
      <a href={url} target={target} rel={rel}>
        {children}
      </a>
    </Button>
  );
}

export { LinkButton };
