import { SponsorCard } from "@/components/sponsor-card";
import {
  getPlatinumSponsors,
  getGoldSponsors,
  getSilverSponsors,
} from "@/data/sponsors";

export default function SponsorsPage() {
  const platinumSponsors = getPlatinumSponsors();
  const goldSponsors = getGoldSponsors();
  const silverSponsors = getSilverSponsors();

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-8 text-center text-4xl font-bold">Our Sponsors</h1>

          {/* Platinum Sponsors */}
          {platinumSponsors.length > 0 && (
            <section id="platinum" className="mb-16">
              <div className="mb-8 flex items-center justify-center gap-3">
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
          )}

          {/* Gold Sponsors */}
          <section id="gold" className="mb-16">
            <div className="mb-8 flex items-center justify-center gap-3">
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
            <div className="mb-8 flex items-center justify-center gap-3">
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
