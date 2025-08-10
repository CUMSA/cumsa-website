import { CommitteeCard } from "@/components/committee-card";
import { getCommitteeMembers } from "@/data/committee";

export default function CommitteePage() {
  const members = getCommitteeMembers();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">CUMSA Committee 2024-2025</h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Meet the dedicated team working to serve the Malaysian and Singaporean community at Cambridge.
          </p>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">2025-2026 Committee</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {members.map((member) => (
                <div key={member.id} className="w-full max-w-xs">
                  <CommitteeCard member={member} />
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div> 
  );
}
