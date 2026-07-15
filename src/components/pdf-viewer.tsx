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
  if (Array.isArray(src)) {
    [srcOuter, srcFull] = src;
  } else {
    srcOuter = src;
    srcFull = src;
  }

  const openInNewTab = () => {
    window.open(srcFull, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="backdrop-blur-xl bg-slate-950/50 rounded-lg p-4 shadow-lg">
      <div className="flex justify-between items-start mb-4">
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
          {Array.isArray(src) ? "Full PDF" : "PDF"}
        </Button>
      </div>

      <iframe
        src={srcOuter}
        className="w-full rounded border border-border"
        style={{ height }}
        title={title ?? "PDF Document"}
      />
    </div>
  );
}
