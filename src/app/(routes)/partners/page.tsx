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

          {/* Google Maps */}
          <div className="mb-12">
            <p className="text-center text-muted-foreground mb-4">
              Subscribe to our <a
                href="https://www.google.com/maps/d/u/0/viewer?mid=1VITmrpaENcB6tL_43do1ZlXM7q2UhkI"
                className="color-link"
                target="_blank"
              >Google Maps</a> to view CUMSA discounts on your own device! FAQ/help <a
                href="https://drive.google.com/file/d/1IL1KYgPo8ZyPgvx9UU7tBOnoRzx5Ez_t/view"
                className="color-link"
                target="_blank"
              >here</a>.
            </p>
            <div className="fill-container" style={{ height: "600px" }}>
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1VITmrpaENcB6tL_43do1ZlXM7q2UhkI&ehbc=2E312F&noprof=1"
                height="650px"
                className="fill-iframe"
                style={{ marginTop: "-50px" }}
                loading="lazy"
              ></iframe>
            </div>
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
                  className="h-[360px] overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <CardContent className="p-0">
                    <div className="flex h-full flex-col items-center justify-between text-center p-6">
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

                      {partner.description && (
                        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                          {partner.description}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </div >
  );
}
