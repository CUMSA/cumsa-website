import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image'
import { getSponsorBySlug } from '@/data/sponsors';
import type { FooterLink } from '@/data/sponsors';

export default async function SponsorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sponsor = getSponsorBySlug(slug);
  
  if (!sponsor) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-muted border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link href="/sponsors" className="hover:text-foreground">Sponsors</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{sponsor.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="inline-block">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                sponsor.tier === 'platinum' ? 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200' :
                sponsor.tier === 'gold' ? 'bg-yellow-200 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200' :
                'bg-muted text-muted-foreground'
              }`}>
                {sponsor.tier.charAt(0).toUpperCase() + sponsor.tier.slice(1)} Sponsors
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold mb-8">{sponsor.name}</h1>
              
              <div className="prose prose-lg max-w-none mb-8">
                  {sponsor.detailedDescription?.map((description, index) => (
                      <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                          {description}
                      </p>
                  ))}
              </div>

              {sponsor.footerLinks && sponsor.footerLinks.length > 0 && (
                <div className="bg-muted rounded-lg p-6">
                  <h4 className="font-semibold mb-3">Links</h4>
                  <div className="space-y-2">
                    {sponsor.footerLinks.map((link: FooterLink, index: number) => (
                      <Link 
                        key={index}
                        href={link.url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm"
                      >
                        → {link.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </div>

            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-6 sticky top-6">
                <div className="w-full h-32 rounded-lg mb-6 flex items-center bg-white justify-center">
                  <Image
                    src={sponsor.picture}
                    alt={`${sponsor.name} logo`}
                    width={120}
                    height={80}
                    className="object-contain max-h-full max-w-full"
                  />
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tier:</span>
                    <span className="font-medium">{sponsor.tier.charAt(0).toUpperCase() + sponsor.tier.slice(1)}</span>
                  </div>
                  {sponsor.partnershipSince && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Since:</span>
                      <span className="font-medium">{sponsor.partnershipSince}</span>
                    </div>
                  )}
                  {sponsor.industry && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground mr-1">Industry: </span>
                      <span className="font-medium text-right">{sponsor.industry}</span>
                    </div>
                  )}
                </div>

                <hr className="my-6 border-border" />

                <div>
                  <h4 className="font-semibold mb-3">Connect</h4>
                  {sponsor.website && (
                    <Button variant="outline" className="w-full mb-3" size="sm">
                      <Link href={sponsor.website}>
                        Visit Website 
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Video Section */}
          {sponsor.videoUrl && (
            <div className="my-8">
              <h3 className="text-xl font-semibold mb-4">Corporate Video</h3>
              <div className="relative w-full aspect-video bg-transparent rounded-lg overflow-hidden">
                <iframe 
                  src={sponsor.videoUrl}
                  title={`${sponsor.name} Corporate Video`}
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  className="absolute inset-0 w-full h-full border-0 bg-transparent"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
