"use client";

import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PDFViewerProps {
  src: string;
  title?: string;
  height?: string;
}

export function PDFViewer({ src, title, height = "600px" }: PDFViewerProps) {
  const openInNewTab = () => {
    window.open(src, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-muted rounded-lg p-4 shadow-lg">
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
          Open PDF
        </Button>
      </div>
      
      <iframe
        src={src}
        className="w-full rounded border border-border"
        style={{ height }}
        title={title || "PDF Document"}
      />
    </div>
  );
}
