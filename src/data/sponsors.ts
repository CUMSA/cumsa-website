export interface FooterLink {
  title: string;
  url: string;
}

export interface Sponsor {
  id: string;
  name: string;
  description: string;
  tier: "platinum" | "gold" | "silver";
  picture: string;
  slug: string;
  // Extended properties for detailed sponsor pages
  detailedDescription?: string[];
  website?: string;
  industry?: string;
  partnershipSince?: string;
  headquarters?: string;
  footerLinks?: FooterLink[];
  videoUrl?: string;
}

export const sponsorsData: Sponsor[] = [
  {
    id: "mitsui-bussan-commodities",
    name: "Mitsui Bussan Commodities",
    description: "An energy derivative market maker based in London with over 25 years of experience providing hedging solutions for energy producers, refiners, and utilities.",
    tier: "platinum",
    picture: "/sponsors/mitsui-bussan-logo.png",
    slug: "mitsui-bussan-commodities",
    detailedDescription: [
      'Mitsui Bussan Commodities Ltd ("MBCL") is an energy derivative market maker based in London with offices in Singapore and New York. We are 100% owned by Mitsui & Co of Japan. We have over 25 years of experience to provide hedging solutions for our clients, with range from energy producers, refiners, utilities and trading houses. Our coverage spans Financial Services in Oil, Refined Products, Gas, Power, Coal and TTFs in addition to Emissions Allowances.'
    ],
    website: 'https://www.mbcl.com/',
    industry: 'Energy Trading & Commodities',
    partnershipSince: '2024',
    headquarters: 'London, UK',
  },
  {
    id: "mapletree",
    name: "Mapletree",
    description: "Global real estate development, investment, capital and property management company committed to sustainability",
    tier: "gold",
    picture: "/sponsors/mapletree-logo.png",
    slug: "mapletree",
    detailedDescription: [
      'Headquartered in Singapore, Mapletree is a global real estate development, investment, capital and property management company committed to sustainability. Its strategic focus is to invest in markets and real estate sectors with good growth potential. By combining its key strengths, the Group has established a track record of award-winning projects, and delivers consistently attractive returns across real estate asset classes.',
      'The Group manages three Singapore-listed real estate investment trusts ("REITs") and nine private equity real estate funds, which hold a diverse portfolio of assets in Asia Pacific, Europe, the United Kingdom ("UK") and the United States ("US"). As at 31 March 2024, Mapletree owns and manages S$77.5 billion of office, retail, logistics, industrial, data centre, residential and student accommodation properties.',
      'The Group\'s assets are located across 13 markets globally, namely Singapore, Australia, Canada, China, Europe, Hong Kong SAR, India, Japan, Malaysia, South Korea, the UK, the US and Vietnam. To support its global operations, Mapletree has established an extensive network of offices in these countries. For more information, please visit the link below',
      'Mapletree\'s overall student housing portfolio comprises a total of 85 Purpose-Built Student Accommodation assets with close to 33,000 beds located across 46 cities in the UK, the US, Germany and Canada. These include Student Castle Cambridge, a premium 220-bed student accommodation located just a short distance to the University of Cambridge, with access to plenty of amenities. Find out more at the links below'
    ],
    website: 'https://www.mapletree.com.sg',
    industry: 'Real Estate Investment & Development',
    partnershipSince: '2025',
    headquarters: 'Singapore',
    videoUrl: 'https://player.vimeo.com/video/1058191364?h=70997f302f&badge=0&autopause=0&player_id=0&app_id=58479',
    footerLinks: [
      { title: 'Student Castle Accommodation', url: 'https://studentcastle.co.uk/locations/cambridge-student-accommodation' },
    ]
  },
  {
    id: "imda",
    name: "Infocomm Media Development Authority",
    description: "Learn how we as the Infocomm Media Development Authority (IMDA) drive Singapore's digital transformation by building a vibrant digital economy and an inclusive digital society.",
    tier: "gold",
    picture: "/sponsors/imda-logo.png",
    slug: "imda",
    detailedDescription: [
      'The SG Digital Scholarship by the Infocomm Media Development Authority (IMDA), is an industry scholarship that focuses on developing future leaders for Singapore\'s technology and media ecosystem. The scholarship supports top talent at the undergraduate and postgraduate levels, giving recipients the flexibility to chart their own career with the industry and take on key roles in a tech or media-related field in an organisation of their choice in Singapore, spearheading Singapore\'s digital future.',
      'Scholarship recipients will get connected to the best leaders, and receive overseas exposure on top of funding support for tuition fees, courses and certifications beyond school curriculum. They also join a growing community of Singaporean digital leaders for the tech and media ecosystem under IMDA\'s SG Digital Leadership Accelerator (SGDLA) which aims to fast-track leadership development of local tech and media talent in various stages of their career.',
      'The Infocomm Media Development Authority (IMDA) leads Singapore\'s digital transformation by developing a vibrant digital economy and an inclusive digital society. IMDA supports the growth of Singapore\'s infocomm technology and media sectors through policy formulation, industry development, and capability building.'
    ],
    website: 'https://www.imda.gov.sg',
    industry: 'Digital Technology & Media Development',
    partnershipSince: '2024',
    headquarters: 'Singapore',
    footerLinks: [
      { title: 'Scholarships', url: 'https://go.gov.sg/SGDScholarships' },
    ]
  },
  {
    id: "setia",
    name: "Setia Law LLC",
    description: "A specialist high-stakes dispute resolution and crisis management team, built on formidable experience, driven by ingenuity, and rooted in integrity.",
    tier: "gold",
    picture: "/sponsors/setia-logo.png",
    slug: "setia",
    detailedDescription: [
      'Setia Law is a specialist high-stakes dispute resolution and crisis management team in Singapore, built on formidable experience, driven by ingenuity, and rooted in integrity',
      'Setia draws on its experience and knowledge to deliver expert legal advice and representation to clients in high-stakes commercial dispute and crisis situations, whilst remaining rooted to its core values of respect, resilience and reliability.',
      'Setia is helmed by deeply experienced lawyers who have been at the forefront of major global crises and are specialists in Dispute Resolution, Fraud and Financial Crimes, Restructuring & Insolvency, and International Enforcement.',
      'Valuing talent, and passionate about nurturing potential, the firm is always on the lookout for like-minded talents to complement the team.'
    ],
    website: 'https://www.setialaw.com',
    industry: 'Legal Services',
    partnershipSince: '2024',
    headquarters: 'Singapore',
  },
  {
    id: "mha",
    name: "Ministry of Home Affairs (MHA)",
    description: "The Home Team keeps Singapore safe and secure.",
    tier: "silver",
    picture: "/sponsors/mha-logo.png",
    slug: "mha",
    detailedDescription: [
      'The Ministry of Home Affairs (MHA) consists of MHA Headquarters, 7 Home Team departments and 3 statutory boards, and is known collectively as the Home Team. We work as One Home Team, in close partnership with the community, to keep Singapore safe and secure.',
      'MHA offers both uniformed and civilian careers, scholarships and internships.',
      'The MHA Scholarships are awarded to outstanding individuals who are passionate about strengthening Singapore\'s security and public safety. The MHA Civilian Scholarship offers six career tracks: a Generalist track and five Specialist tracks: Intelligence; Psychology; Commercial Affairs; Science and Technology (under HTX); and Internal Security. The MHA Uniformed Scholarship offers five career tracks: Singapore Police Force; Singapore Civil Defence Force; Immigration and Checkpoints Authority; Singapore Prison Service; and Central Narcotics Bureau.',
      'You can apply for the MHA Scholarships as a university undergraduate – you should currently be pursuing full-time undergraduate studies, not in your final year of undergraduate studies at the point of application, and on track for graduation with at least 2nd Upper Honours or equivalent.',
      'The Ministry of Home Affairs (MHA) is responsible for maintaining law and order, safeguarding internal security, and managing immigration and citizenship matters in Singapore. MHA works to ensure Singapore remains a safe and secure nation for all residents and visitors.'
    ],
    website: 'https://www.mha.gov.sg',
    industry: 'Government & Public Safety',
    partnershipSince: '2024',
    headquarters: 'Singapore',
    footerLinks: [
      { title: 'Scholarships', url: 'http://www.go.gov.sg/mhascholarships' },
      { title: 'Careers', url: 'http://www.mha.gov.sg/careers' },
      { title: 'Internships', url: 'https://www.mha.gov.sg/careers/internships' },
      { title: 'LinkedIn', url: 'http://www.linkedin.com/company/mhasingapore'}
    ]
  },
  {
    id: "nomura",
    name: "Nomura",
    description: "Nomura is a financial services group with an integrated global network.",
    tier: "gold",
    picture: "/sponsors/nomura-logo.png",
    slug: "nomura",
    detailedDescription: [
      'Nomura is a global financial services group with an integrated network spanning approximately 30 countries and regions. By connecting markets East & West, we service the needs of individuals, institutions, corporates and governments through our three business divisions: Wealth Management, Investment Management and Wholesale (Global Markets and Investment Banking).',
      'Driven by the insights of some 26,000 people worldwide, we put our clients at the center of everything we do, delivering unparalleled access to, from and within Asia.'
    ],
    website: 'https://www.nomura.com/',
    industry: 'Banking',
    partnershipSince: '2025',
    headquarters: 'Japan',
  }
];

// Helper functions for filtering sponsors by tier
export const getPlatinumSponsors = () => sponsorsData.filter(sponsor => sponsor.tier === "platinum");
export const getGoldSponsors = () => sponsorsData.filter(sponsor => sponsor.tier === "gold");
export const getSilverSponsors = () => sponsorsData.filter(sponsor => sponsor.tier === "silver");

// Helper function to find sponsor by slug
export const getSponsorBySlug = (slug: string) => sponsorsData.find(sponsor => sponsor.slug === slug);
