import { SponsorCard, type Sponsor } from "@/components/sponsor-card";

// Sponsors data
const sponsorsData: Sponsor[] = [
  {
    id: "mitsui-bussan-commodities",
    name: "Mitsui Bussan Commodities",
    description: "An energy derivative market maker based in London with over 25 years of experience providing hedging solutions for energy producers, refiners, and utilities.",
    tier: "platinum",
    picture: "/sponsors/mitsui-bussan-logo.png",
    slug: "mitsui-bussan-commodities"
  },
  {
    id: "mapletree",
    name: "Mapletree",
    description: "Global real estate development, investment, capital and property management company committed to sustainability",
    tier: "gold",
    picture: "/sponsors/mapletree-logo.png",
    slug: "mapletree"
  },
  {
    id: "imda",
    name: "Infocomm Media Development Authority",
    description: "Learn how we as the Infocomm Media Development Authority (IMDA) drive Singapore’s digital transformation by building a vibrant digital economy and an inclusive digital society.",
    tier: "gold",
    picture: "/sponsors/imda-logo.png",
    slug: "imda"
  },
  {
    id: "setia",
    name: "Setia Law LLC",
    description: "A specialist high-stakes dispute resolution and crisis management team, built on formidable experience, driven by ingenuity, and rooted in integrity.",
    tier: "gold",
    picture: "/sponsors/setia-logo.jpg",
    slug: "setia"
  },
  {
    id: "mha",
    name: "Ministry of Home Affairs (MHA)",
    description: "The Home Team keeps Singapore safe and secure.",
    tier: "silver",
    picture: "/sponsors/mha-logo.png",
    slug: "mha"
  },
  {
    id: "nomura",
    name: "Nomura",
    description: "Nomura is a financial services group with an integrated global network.",
    tier: "gold",
    picture: "/sponsors/nomura-logo.jpg",
    slug: "nomura"
  },
];

export default function SponsorsPage() {
  const platinumSponsors = sponsorsData.filter(sponsor => sponsor.tier === "platinum");
  const goldSponsors = sponsorsData.filter(sponsor => sponsor.tier === "gold");
  const silverSponsors = sponsorsData.filter(sponsor => sponsor.tier === "silver");
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
