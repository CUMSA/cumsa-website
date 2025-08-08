import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image'

interface FooterLink {
  title: string;
  url: string;
}

interface Sponsor {
  name: string;
  tier: string;
  logo: string;
  description: string[];
  website: string;
  industry: string;
  partnershipSince: string;
  headquarters: string;
  footerLinks?: FooterLink[];
}

const sponsors: Record<string, Sponsor> = {
  'mitsui-bussan-commodities': {
    name: 'Mitsui Bussan Commodities',
    tier: 'Platinum',
    logo: '/sponsors/mitsui-bussan-logo.png', 
    description: ['Mitsui Bussan Commodities Ltd ("MBCL") is an energy derivative market maker based in London with offices in Singapore and New York. We are 100% owned by Mitsui & Co of Japan. We have over 25 years of experience to provide hedging solutions for our clients, with range from energy producers, refiners, utilities and trading houses. Our coverage spans Financial Services in Oil, Refined Products, Gas, Power, Coal and TTFs in addition to Emissions Allowances.'],
    website: 'https://www.mbcl.com/',
    industry: 'Energy Trading & Commodities',
    partnershipSince: '2020',
    headquarters: 'London, UK',
  },
  'mapletree': {
    name: 'Mapletree',
    tier: 'Gold',
    logo: '/sponsors/mapletree-logo.png',
    description: ['Headquartered in Singapore, Mapletree is a global real estate development, investment, capital and property management company committed to sustainability. Its strategic focus is to invest in markets and real estate sectors with good growth potential. By combining its key strengths, the Group has established a track record of award-winning projects, and delivers consistently attractive returns across real estate asset classes.',' The Group manages three Singapore-listed real estate investment trusts (“REITs”) and nine private equity real estate funds, which hold a diverse portfolio of assets in Asia Pacific, Europe, the United Kingdom (“UK”) and the United States (“US”). As at 31 March 2024, Mapletree owns and manages S$77.5 billion of office, retail, logistics, industrial, data centre, residential and student accommodation properties.', 'The Group’s assets are located across 13 markets globally, namely Singapore, Australia, Canada, China, Europe, Hong Kong SAR, India, Japan, Malaysia, South Korea, the UK, the US and Vietnam. To support its global operations, Mapletree has established an extensive network of offices in these countries. For more information, please visit the link below', 'Mapletree’s overall student housing portfolio comprises a total of 85 Purpose-Built Student Accommodation assets with close to 33,000 beds located across 46 cities in the UK, the US, Germany and Canada. These include Student Castle Cambridge, a premium 220-bed student accommodation located just a short distance to the University of Cambridge, with access to plenty of amenities. Find out more at the links below'],
    website: 'https://www.mapletree.com.sg',
    industry: 'Real Estate Investment & Development',
    partnershipSince: '2021',
    headquarters: 'Singapore',
    footerLinks: [
      { title: 'Sudent Castle Accommodation', url: 'https://studentcastle.co.uk/locations/cambridge-student-accommodation' },
    ]
  },
  'imda': {
    name: 'Infocomm Media Development Authority (IMDA)',
    tier: 'Gold',
    logo: '/sponsors/imda-logo.png',
    description: ['The SG Digital Scholarship by the Infocomm Media Development Authority (IMDA), is an industry scholarship that focuses on developing future leaders for Singapore’s technology and media ecosystem. The scholarship supports top talent at the undergraduate and postgraduate levels, giving recipients the flexibility to chart their own career with the industry and take on key roles in a tech or media-related field in an organisation of their choice in Singapore, spearheading Singapore’s digital future.', 'Scholarship recipients will get connected to the best leaders, and receive overseas exposure on top of funding support for tuition fees, courses and certifications beyond school curriculum.  They also join a growing community of Singaporean digital leaders for the tech and media ecosystem under IMDA’s SG Digital Leadership Accelerator (SGDLA) which aims to fast-track leadership development of local tech and media talent in various stages of their career.The Infocomm Media Development Authority (IMDA) leads Singapore\'s digital transformation by developing a vibrant digital economy and an inclusive digital society. IMDA supports the growth of Singapore\'s infocomm technology and media sectors through policy formulation, industry development, and capability building.'],
    website: 'https://www.imda.gov.sg',
    industry: 'Digital Technology & Media Development',
    partnershipSince: '2022',
    headquarters: 'Singapore',
    footerLinks: [
      { title: 'Scholarships', url: 'https://go.gov.sg/SGDScholarships' },
    ]
  },
  'setia': {
    name: 'Setia Law LLC',
    tier: 'Gold',
    logo: '/sponsors/setia-logo.png',
    description: ['Setia Law is a specialist high-stakes dispute resolution and crisis management team in Singapore, built on formidable experience, driven by ingenuity, and rooted in integrity', 'Setia draws on its experience and knowledge to deliver expert legal advice and representation to clients in high-stakes commercial dispute and crisis situations, whilst remaining rooted to its core values of respect, resilience and reliability.', 'Setia is helmed by deeply experienced lawyers who have been at the forefront of major global crises and are specialists in Dispute Resolution, Fraud and Financial Crimes, Restructuring & Insolvency, and International Enforcement.', 'Valuing talent, and passionate about nurturing potential, the firm is always on the lookout for like-minded talents to complement the team.'],
    website: 'https://www.setialaw.com',
    industry: 'Legal Services',
    partnershipSince: '2023',
    headquarters: 'Singapore',
  },
  'mha': {
    name: 'Ministry of Home Affairs (MHA)',
    tier: 'Silver',
    logo: '/sponsors/mha-logo.png',
    description: ['The Ministry of Home Affairs (MHA) consists of MHA Headquarters, 7 Home Team departments and 3 statutory boards, and is known collectively as the Home Team. We work as One Home Team, in close partnership with the community, to keep Singapore safe and secure.', 'MHA offers both uniformed and civilian careers, scholarships and internships.', 'The MHA Scholarships are awarded to outstanding individuals who are passionate about strengthening Singapore’s security and public safety. The MHA Civilian Scholarship offers six career tracks: a Generalist track and five Specialist tracks: Intelligence; Psychology; Commercial Affairs; Science and Technology (under HTX); and Internal Security. The MHA Uniformed Scholarship offers five career tracks: Singapore Police Force; Singapore Civil Defence Force; Immigration and Checkpoints Authority; Singapore Prison Service; and Central Narcotics Bureau.', 'You can apply for the MHA Scholarships as a university undergraduate – you should currently be pursuing full-time undergraduate studies, not in your final year of undergraduate studies at the point of application, and on track for graduation with at least 2nd Upper Honours or equivalent.The Ministry of Home Affairs (MHA) is responsible for maintaining law and order, safeguarding internal security, and managing immigration and citizenship matters in Singapore. MHA works to ensure Singapore remains a safe and secure nation for all residents and visitors.'],
    website: 'https://www.mha.gov.sg',
    industry: 'Government & Public Safety',
    partnershipSince: '2023',
    headquarters: 'Singapore',
    footerLinks: [
      { title: 'Scholarships', url: 'http://www.go.gov.sg/mhascholarships' },
      { title: 'Careers', url: 'http://www.mha.gov.sg/careers' },
      { title: 'Internships', url: 'https://www.mha.gov.sg/careers/internships' },
      { title: 'Linkedin', url: 'http://www.linkedin.com/company/mhasingapore'}
    ]
  }
};

export default async function SponsorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sponsor = sponsors[slug];
  
  if (!sponsor) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-muted border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link href="/sponsors" className="hover:text-foreground">Sponsors</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{sponsor.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="inline-block">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                sponsor.tier === 'Platinum' ? 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200' :
                sponsor.tier === 'Gold' ? 'bg-yellow-200 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200' :
                'bg-muted text-muted-foreground'
              }`}>
                {sponsor.tier} Sponsors
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold mb-8">{sponsor.name}</h1>
              
              <div className="prose prose-lg max-w-none mb-8">
                  {sponsor.description.map((description, index) => (
                      <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                          {description}
                      </p>
                  ))}
              </div>
              {sponsor.footerLinks && sponsor.footerLinks.length > 0 && (
                <div className="bg-muted rounded-lg p-6">
                  <h4 className="font-semibold mb-3">Links</h4>
                  <div className="space-y-2">
                    {sponsor.footerLinks.map((link: FooterLink, index: number) => (
                      <Link 
                        key={index}
                        href={link.url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm"
                      >
                        → {link.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </div>

            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-6 sticky top-6">
                <div className="w-full h-32 rounded-lg mb-6 flex items-center bg-white justify-center">
                  <Image
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    width={120}
                    height={80}
                    className="object-contain max-h-full max-w-full"
                  />
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tier:</span>
                    <span className="font-medium">{sponsor.tier}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Since:</span>
                    <span className="font-medium">{sponsor.partnershipSince}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Industry:</span>
                    <span className="font-medium text-right">{sponsor.industry}</span>
                  </div>
                </div>

                <hr className="my-6 border-border" />

                <div>
                  <h4 className="font-semibold mb-3">Connect</h4>
                  <Button variant="outline" className="w-full mb-3" size="sm">
                    <Link href={sponsor.website}>
                      Visit Website 
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
