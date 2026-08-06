import { getPlatinumSponsors, getGoldSponsors } from "@/data/sponsors";
import Link from "next/link";
import Image from "next/image";

const platinumSponsors = getPlatinumSponsors();
const goldSponsors = getGoldSponsors();
const n =
  (platinumSponsors.length > 0 ? 1 : 0) + (goldSponsors.length > 0 ? 1 : 0);

export default function SponsorCarousel() {
  return (
    <>
      {n > 0 && (
        <div className="border-border border-t bg-slate-950/50 px-[5%] py-6 backdrop-blur-xl">
          <div className={`mx-auto grid grid-cols-${n} gap-8`}>
            {/* Platinum Sponsors */}
            {platinumSponsors.length > 0 && (
              <div>
                <h3 className="text-foreground mb-6 text-lg font-semibold">
                  Platinum Sponsors
                </h3>
                <div className="relative overflow-hidden">
                  <div className="animate-scroll flex space-x-8">
                    {/* Duplicate sponsors for seamless loop */}
                    {[
                      ...platinumSponsors,
                      ...platinumSponsors,
                      ...platinumSponsors,
                    ].map((sponsor, index) => (
                      <Link
                        key={`${sponsor.id}-${index}`}
                        href={`/sponsors/${sponsor.slug}`}
                        className="flex-shrink-0"
                        title={sponsor.name}
                      >
                        <div className="flex h-20 w-32 items-center justify-center rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                          <Image
                            src={sponsor.picture}
                            alt={sponsor.name}
                            width={100}
                            height={60}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Gold Sponsors */}
            {goldSponsors.length > 0 && (
              <div>
                <h3 className="text-foreground mb-6 text-lg font-semibold">
                  Gold Sponsors
                </h3>
                <div className="relative overflow-hidden">
                  <div className="animate-scroll flex space-x-8">
                    {/* Duplicate sponsors for seamless loop */}
                    {[...goldSponsors, ...goldSponsors, ...goldSponsors].map(
                      (sponsor, index) => (
                        <Link
                          key={`${sponsor.id}-${index}`}
                          href={`/sponsors/${sponsor.slug}`}
                          className="flex-shrink-0"
                          title={sponsor.name}
                        >
                          <div className="flex h-20 w-32 items-center justify-center rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                            <Image
                              src={sponsor.picture}
                              alt={sponsor.name}
                              width={100}
                              height={60}
                              className="max-h-full max-w-full object-contain"
                            />
                          </div>
                        </Link>
                      ),
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
