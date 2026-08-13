import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import type { Sponsor } from "@/data/sponsors";

interface SponsorCardProps {
  sponsor: Sponsor;
}

export function SponsorCard({ sponsor }: SponsorCardProps) {
  const getTierStyles = (tier: string) => {
    switch (tier) {
      case "platinum":
        return {
          border: "border-gray-300 dark:border-gray-600",
          cardBackground:
            "bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800",
          textColor: "text-muted-foreground",
          label: "PLATINUM",
        };
      case "gold":
        return {
          border: "border-yellow-300 dark:border-yellow-600",
          cardBackground:
            "bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30",
          textColor: "text-yellow-600 dark:text-yellow-400",
          label: "GOLD",
        };
      case "silver":
        return {
          border: "border-gray-200 dark:border-gray-700",
          cardBackground:
            "bg-gradient-to-br from-gray-50 to-zinc-50 dark:from-gray-900 dark:to-zinc-900",
          textColor: "text-muted-foreground",
          label: "SILVER",
        };
      default:
        return {
          border: "border-gray-200 dark:border-gray-700",
          cardBackground:
            "bg-gradient-to-br from-gray-50 to-zinc-50 dark:from-gray-900 dark:to-zinc-900",
          textColor: "text-muted-foreground",
          label: "SPONSOR",
        };
    }
  };

  const styles = getTierStyles(sponsor.tier);

  return (
    <Card
      className={`border-2 ${styles.border} ${styles.cardBackground} h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
    >
      <CardHeader className="text-center">
        <div
          className={`mb-4 flex h-32 w-full items-center justify-center overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm`}
        >
          <Image
            src={sponsor.picture}
            alt={`${sponsor.name} logo`}
            width={120}
            height={80}
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
