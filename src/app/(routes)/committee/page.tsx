import * as React from "react"
import Image from "next/image";
import { CommitteeCard } from "@/components/committee-card";
import { getCommitteeMembers } from "@/data/committee-fmt";

const currentYear = 26;
const startYear = 25;

async function Committee(year: number) {
  const members = await getCommitteeMembers(year);

  if (members.length === 0) return (
    <section className="mb-16" key={year}>
      <h2 className="text-3xl font-bold mb-8 text-center">{year}-{year + 1} Committee</h2>
      <p className="text-lg text-muted-foreground text-center mb-12">
        Committee data for the year {year}-{year + 1} is not available.
      </p>
    </section>
  );

  return (
    <section className="mb-16" key={year}>
      <h2 className="text-3xl font-bold mb-8 text-center">{year}-{year + 1} Committee</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {members.map((member) => (
          <div key={member.id} className="w-full max-w-xs">
            <CommitteeCard member={member} includeEmail={year === currentYear} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default async function CommitteePage() {
  const items: React.JSX.Element[] = [];

  for (let year = currentYear; year >= startYear; year--) {
    items.push(await Committee(year));
  }

  // return <div>{items}</div>;


  return <div className="min-h-screen">
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">CUMSA Committee</h1>
        <div className="w-full relative">
          <Image
            src={`/committee/${currentYear}-0.jpg`}
            alt={`CUMSA ${currentYear}-${currentYear + 1} Committee`}
            width={6969}
            height={3649}
            sizes="(max-width: 768px) 100vw, (max-width: 1350px) 70vw, 50vw"
            className="object-contain transition-transform duration-300 hover:scale-102 rounded-3xl my-4"
          />
        </div>
        <p className="text-lg text-muted-foreground text-center mb-20">
          Meet the dedicated team working to serve the Malaysian and Singaporean community at Cambridge.
        </p>
        {items}
      </div>
    </div>
  </div>
}
