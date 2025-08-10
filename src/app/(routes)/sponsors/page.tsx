import { SponsorCard } from "@/components/sponsor-card";
import { getPlatinumSponsors, getGoldSponsors, getSilverSponsors } from "@/data/sponsors";

export default function SponsorsPage() {
  const platinumSponsors = getPlatinumSponsors();
  const goldSponsors = getGoldSponsors();
  const silverSponsors = getSilverSponsors();
  
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Our Sponsors</h1>

          {/* Platinum Sponsors */}
          <section id="platinum" className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <h2 className="text-3xl font-bold">Platinum Sponsors</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {platinumSponsors.map((sponsor) => (
                <div key={sponsor.id} className="w-full max-w-xs">
                  <SponsorCard sponsor={sponsor} />
                </div>
              ))}
            </div>
          </section>

          {/* Gold Sponsors */}
          <section id="gold" className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <h2 className="text-3xl font-bold">Gold Sponsors</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {goldSponsors.map((sponsor) => (
                <div key={sponsor.id} className="w-full max-w-xs">
                  <SponsorCard sponsor={sponsor} />
                </div>
              ))}
            </div>
          </section>

          {/* Silver Sponsors */}
          <section id="silver" className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <h2 className="text-3xl font-bold">Silver Sponsors</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {silverSponsors.map((sponsor) => (
                <div key={sponsor.id} className="w-full max-w-xs">
                  <SponsorCard sponsor={sponsor} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
