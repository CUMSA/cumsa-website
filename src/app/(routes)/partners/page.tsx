import Image from "next/image";
import Link from "next/link";
import { getAllPartners } from "@/data/partners";
import { Card, CardContent } from "@/components/ui/card";

export default function PartnersPage() {
  const partners = getAllPartners();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <h1 className="text-4xl font-bold">
                Partners
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Discounts with our partners for members. Present your membership card to enjoy these discounts!
            </p>
          </div>

          {/* Partners Grid */}
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((partner) => (
              <Link
                key={partner.id}
                href={partner.mapsUrl ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full max-w-xs sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] xl:w-[calc(25%-1.5rem)]"
              >
                <Card 
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col items-center text-center p-6">
                      {/* Partner Image */}
                      <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-border">
                        <Image
                          src={partner.picture}
                          alt={partner.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      {/* Partner Name */}
                      <h3 className="text-xl font-bold mb-2 tracking-wide">
                        {partner.name}
                      </h3>
                      
                      {/* Discount */}
                      <p className="text-2xl font-bold text-primary">
                        {partner.discount}
                      </p>
                      
                      {/* Optional Description
                      {partner.description && (
                        <p className="text-sm text-muted-foreground mt-2">
                          {partner.description}
                        </p>
                      )} */}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
