import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getSponsorBySlug } from "@/data/sponsors";
import type { FooterLink } from "@/data/sponsors";
import { ZoomableImage } from "@/components/zoomable-image";

export default async function SponsorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sponsor = getSponsorBySlug(slug);

  if (!sponsor) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <div className="bg-muted border-border border-b py-4">
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
              <span
                className={`rounded-full px-3 py-1 text-sm font-medium ${
                  sponsor.tier === "platinum"
                    ? "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                    : sponsor.tier === "gold"
                      ? "bg-yellow-200 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200"
                      : "bg-muted text-muted-foreground"
                }`}
              >
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

              {sponsor.footerLinks && sponsor.footerLinks.length > 0 && (
                <div className="bg-muted rounded-lg p-6">
                  <h4 className="mb-3 font-semibold">Links</h4>
                  <div className="space-y-2">
                    {sponsor.footerLinks.map(
                      (link: FooterLink, index: number) => (
                        <Link
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          → {link.title}
                        </Link>
                      ),
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-card border-border sticky top-6 rounded-lg border p-6">
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
                    <Button variant="outline" className="mb-3 w-full" size="sm">
                      <Link href={sponsor.website}>Visit Website</Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Video Section */}
          {sponsor.videoUrl && (
            <div className="my-8">
              <h3 className="mb-4 text-xl font-semibold">
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
            <div className="my-8">
              <h3 className="mb-4 text-xl font-semibold">Corporate Brochure</h3>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-transparent">
                <ZoomableImage
                  src={sponsor.images}
                  alt={`${sponsor.name} Corporate Brochure`}
                  width={400}
                  height={800}
                  className="h-full w-full"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
