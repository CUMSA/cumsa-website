import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { slugMap } from "@/data/sponsors";
import { type Ref } from "@/components/links";
import { ZoomableImage } from "@/components/zoomable-image";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const sponsorVariants = cva("rounded-full px-3 py-1 text-sm font-medium", {
  variants: {
    tier: {
      Platinum:
        "bg-purple-300 text-purple-900 dark:bg-purple-700 dark:text-purple-200",
      Gold: "bg-yellow-200 text-black/95 dark:bg-yellow-400",
      Silver: "bg-muted",
    },
  },
});

export default async function SponsorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sponsor = slugMap[slug];

  if (!sponsor) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <div className="border-border border-b bg-slate-950/60 py-4 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <div className="text-muted-foreground flex items-center text-sm">
            <Link href="/sponsors" className="hover:text-foreground">
              Sponsors
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{sponsor.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6">
            <div className="inline-block">
              <span className={cn(sponsorVariants({ tier: sponsor.tier }))}>
                {sponsor.tier.charAt(0).toUpperCase() + sponsor.tier.slice(1)}{" "}
                Sponsors
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h1 className="mb-8 text-4xl font-bold">{sponsor.name}</h1>

              <div className="prose prose-lg mb-8 max-w-none">
                {sponsor.detailedDescription?.map((description, index) => (
                  <p
                    key={index}
                    className="text-muted-foreground mb-4 leading-relaxed"
                  >
                    {description}
                  </p>
                ))}
              </div>

              {sponsor.links && sponsor.links.length > 0 && (
                <div className="mt-16 rounded-lg bg-slate-950/50 p-6 backdrop-blur-xl">
                  <h4 className="mb-3 font-semibold">Links</h4>
                  <div className="space-y-2">
                    {sponsor.links.map((link: Ref, index: number) => (
                      <Link
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        → {link.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-6 rounded-lg bg-slate-950/50 p-6 backdrop-blur-xl">
                <div className="mb-6 flex h-32 w-full items-center justify-center rounded-lg bg-white">
                  <Image
                    src={sponsor.picture}
                    alt={`${sponsor.name} logo`}
                    width={120}
                    height={80}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tier:</span>
                    <span className="font-medium">
                      {sponsor.tier.charAt(0).toUpperCase() +
                        sponsor.tier.slice(1)}
                    </span>
                  </div>
                  {sponsor.partnershipSince && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Since:</span>
                      <span className="font-medium">
                        {sponsor.partnershipSince}
                      </span>
                    </div>
                  )}
                  {sponsor.industry && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground mr-1">
                        Industry:{" "}
                      </span>
                      <span className="text-right font-medium">
                        {sponsor.industry}
                      </span>
                    </div>
                  )}
                </div>

                <hr className="border-border my-6" />

                <div>
                  <h4 className="mb-3 font-semibold">Connect</h4>
                  {sponsor.website && (
                    <Badge
                      asChild
                      variant="outline"
                      className="mb-3 w-full py-1.5 text-sm"
                    >
                      <Link href={sponsor.website}>Visit Website</Link>
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Video Section */}
          {sponsor.videoUrl && (
            <div className="my-8 rounded-lg bg-slate-950/50 p-2 backdrop-blur-xl sm:p-8">
              <h3 className="mb-2 text-xl font-semibold sm:mb-4">
                <Link
                  href={sponsor.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Corporate Video
                </Link>
              </h3>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-transparent">
                <iframe
                  src={sponsor.videoUrl}
                  title={`${sponsor.name} Corporate Video`}
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  className="absolute inset-0 h-full w-full border-0 bg-transparent"
                />
              </div>
            </div>
          )}

          {sponsor.images && (
            <div className="my-8 rounded-lg bg-slate-950/50 p-2 backdrop-blur-xl sm:p-8">
              <h3 className="mb-2 text-xl font-semibold sm:mb-4">
                Corporate Brochure
              </h3>
              <ZoomableImage
                src={sponsor.images}
                alt={`${sponsor.name} Corporate Brochure`}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
