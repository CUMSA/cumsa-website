import { SponsorCard } from "@/components/sponsor-card";
import sponsors from "@/data/sponsors";

export default function SponsorsPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-8 text-center text-4xl font-bold">Our Sponsors</h1>

          {Object.entries(sponsors).map(
            ([tier, tierSponsors]) =>
              tierSponsors.length > 0 && (
                <section key={tier} className="mb-16">
                  <div className="mb-8 flex items-center justify-center gap-3">
                    <h2 className="text-3xl font-bold">{tier} Sponsors</h2>
                  </div>
                  <div className="flex flex-wrap justify-center gap-6">
                    {tierSponsors.map((sponsor) => (
                      <div key={sponsor.id} className="w-full max-w-xs">
                        <SponsorCard sponsor={sponsor} />
                      </div>
                    ))}
                  </div>
                </section>
              ),
          )}
        </div>
      </div>
    </div>
  );
}
