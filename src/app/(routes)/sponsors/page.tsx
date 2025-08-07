import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SponsorCard, type Sponsor } from "@/components/sponsor-card";

// Sponsors data
const sponsorsData: Sponsor[] = [
  {
    id: "mitsui-bussan-commodities",
    name: "Mitsui Bussan Commodities",
    description: "An energy derivative market maker based in London with over 25 years of experience providing hedging solutions for energy producers, refiners, and utilities.",
    tier: "platinum",
    picture: "/logo_header.png",
    slug: "mitsui-bussan-commodities"
  },
  {
    id: "mapletree",
    name: "Mapletree",
    description: "Supporting CUMSA events and providing valuable opportunities for our members.",
    tier: "gold",
    picture: "/logo_header.png",
    slug: "mapletree"
  },
  {
    id: "imda",
    name: "Infocomm Media Development Authority (IMDA)",
    description: "Supporting CUMSA events and providing valuable opportunities for our members.",
    tier: "gold",
    picture: "/logo_header.png",
    slug: "imda"
  },
  {
    id: "setia",
    name: "Setia Law LLC",
    description: "Supporting CUMSA events and providing valuable opportunities for our members.",
    tier: "gold",
    picture: "/logo_header.png",
    slug: "setia"
  },
  {
    id: "mha",
    name: "Ministry of Home Affairs (MHA)",
    description: "Valued partner supporting our community initiatives.",
    tier: "silver",
    picture: "/logo_header.png",
    slug: "mha"
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
