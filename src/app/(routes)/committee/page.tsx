import { CommitteeCard, type CommitteeMember } from "@/components/committee-card";

// Committee members data
const committeeData: CommitteeMember[] = [
  {
    id: "president",
    name: "Albert Chieng",
    position: "President",
    subject: "Natural Sciences",
    college: "Sidney Sussex College",
    year: "3rd Year",
    photo: "/committee/1.PNG",
    email: "president@cumsa.org"
  },
  {
    id: "vice-president",
    name: "Alldon Garren Tan",
    position: "Vice President",
    subject: "Law",
    college: "Christ's College",
    year: "3rd Year",
    photo: "/committee/2.PNG",
    email: "vice-president@cumsa.org"
  },
  {
    id: "secretary",
    name: "Isabel Jade Huang",
    position: "Secretary",
    subject: "Human, Social, & Political Sciences",
    college: "Downing College",
    year: "2nd Year",
    photo: "/committee/3.PNG",
    email: "secretary@cumsa.org"
  },
  {
    id: "treasurer",
    name: "Daniel Choo",
    position: "Treasurer",
    subject: "Computer Science",
    college: "Christ's College",
    year: "2nd Year",
    photo: "/committee/4.PNG",
    email: "treasurer@cumsa.org"
  },
  {
    id: "sports",
    name: "Aneish Jose Sawney",
    position: "Sports Secretary",
    subject: "Economics",
    college: "St Edmund's College",
    year: "2nd Year",
    photo: "/committee/5.PNG",
    email: "sports@cumsa.org"
  },
  {
    id: "publicity",
    name: "Cedric Khua",
    position: "Publicity Secretary",
    subject: "Computer Science",
    college: "Wolfson College",
    year: "2nd Year",
    photo: "/committee/6.PNG",
    email: "publicity@cumsa.org"
  },
  {
    id: "access",
    name: "Abdul Mateen Kamal",
    position: "Access & Outreach Officer",
    subject: "History & Politics",
    college: "Wolfson College",
    year: "2nd Year",
    photo: "/committee/7.PNG",
    email: "access@cumsa.org"
  },
  {
    id: "sponsorships",
    name: "Chloe Young",
    position: "Sponsorships & Careers Officer",
    subject: "Natural Sciences",
    college: "Girton College",
    year: "2nd Year",
    photo: "/committee/8.PNG",
    email: "sponsorships@cumsa.org"
  },
  {
    id: "database",
    name: "Xavier Yeo",
    position: "Database Officer",
    subject: "Computer Science",
    college: "Hughes Hall",
    year: "2nd Year",
    photo: "/committee/9.PNG",
    email: "database@cumsa.org"
  },
  {
    id: "events1",
    name: "Liang Jing Hao",
    position: "Events Officer",
    subject: "Law",
    college: "Wolfson College",
    year: "2nd Year",
    photo: "/committee/10.PNG",
    email: "events@cumsa.org"
  },
  {
    id: "events2",
    name: "Whang Shih Ee",
    position: "Events Officer",
    subject: "Engineering",
    college: "Lucy Cavendish College",
    year: "2nd Year",
    photo: "/committee/11.PNG",
    email: "events@cumsa.org"
  },
  {
    id: "events3",
    name: "Zhang Chenxi",
    position: "Events Officer",
    subject: "Mathematics",
    college: "St Catherine's College",
    year: "2nd Year",
    photo: "/committee/12.PNG",
    email: "events@cumsa.org"
  },
  {
    id: "phd",
    name: "Hou Boyang",
    position: "Graduate Representative",
    subject: "Phd History",
    college: "Churchill College",
    year: "2nd Year",
    photo: "/committee/13.PNG",
    email: "gradreps@cumsa.org"
  },
];

export default function CommitteePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">CUMSA Committee 2024-2025</h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Meet the dedicated team working to serve the Malaysian and Singaporean community at Cambridge.
          </p>

          {/* Executive Committee */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Executive Committee</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {committeeData.map((member) => (
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
