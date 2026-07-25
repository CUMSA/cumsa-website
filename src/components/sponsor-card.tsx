import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import type { Sponsor } from "@/data/sponsors";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const logo_width = 120;
const logo_height = 80;

const sponsorVariants = cva(
  "border-2 h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg bg-gradient-to-br",
  {
    variants: {
      tier: {
        Platinum:
          "border-purple-400 dark:border-purple-600 from-purple-200/50 to-pink-200/50 dark:from-pink-900/50 dark:to-purple-900/50",
        Gold: "border-yellow-300 dark:border-yellow-600 from-yellow-100/50 to-amber-100/50 dark:from-yellow-950/50 dark:to-amber-950/50",
        Silver:
          "border-gray-400 dark:border-gray-450 from-gray-100/50 to-zinc-200/50 dark:from-gray-900/50 dark:to-zinc-900/50",
      },
    },
  },
);

export function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  return (
    <Card className={cn(sponsorVariants({ tier: sponsor.tier }))}>
      <CardHeader className="text-center">
        <div className="mb-4 flex h-32 w-full items-center justify-center overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
          <Image
            src={sponsor.picture}
            alt={`${sponsor.name} logo`}
            width={logo_width}
            height={logo_height}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <CardTitle className="text-xl">{sponsor.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex h-full flex-col">
        <p className="text-muted-foreground mb-4 flex-grow text-sm">
          {sponsor.description}
        </p>
        <Link href={`/sponsors/${sponsor.slug}`} className="mt-auto">
          <Button variant="outline" className="w-full">
            Learn More
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
