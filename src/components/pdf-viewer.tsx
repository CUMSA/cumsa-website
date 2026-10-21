"use client";

import { ExternalLink } from "lucide-react";
import { LinkButton } from "@/components/ui/link-button";

interface PDFViewerProps {
  src: string | [string, string];
  title?: string;
  height?: string;
}

export function PDFViewer({ src, title, height = "600px" }: PDFViewerProps) {
  let srcOuter: string;
  let srcFull: string;
  const doubleLinks = Array.isArray(src);
  if (doubleLinks) {
    [srcOuter, srcFull] = src;
  } else {
    srcOuter = src;
    srcFull = src;
  }

  return (
    <div className="rounded-lg bg-slate-950/50 p-4 shadow-lg backdrop-blur-xl">
      <div className="mb-4 flex items-start justify-between">
        {title && (
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
        )}

        <LinkButton
          href={srcFull}
          target="_blank"
          rel="noopener noreferrer"
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
        >
          <ExternalLink className="h-4 w-4" />
          {doubleLinks ? "Open Full PDF" : "Open PDF"}
        </LinkButton>
      </div>

      <iframe
        src={srcOuter}
        className="border-border w-full rounded border"
        style={{ height }}
        title={title ?? "PDF Document"}
      />
    </div>
  );
}
