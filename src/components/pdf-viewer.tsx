"use client";

import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  const openInNewTab = () => {
    window.open(srcFull, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="rounded-lg bg-slate-950/50 p-4 shadow-lg backdrop-blur-xl">
      <div className="mb-4 flex items-start justify-between">
        {title && (
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
        )}

        <Button
          onClick={openInNewTab}
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
        >
          <ExternalLink className="h-4 w-4" />
          {doubleLinks ? "Open Full PDF" : "Open PDF"}
        </Button>
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
