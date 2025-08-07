import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// This would typically come from a database or CMS
const sponsors = {
  'mitsui-bussan-commodities': {
    name: 'Mitsui Bussan Commodities',
    tier: 'Platinum',
    logo: '/sponsors/mitsui-bussan-logo.png', // You'll need to add actual logos
    description: 'Mitsui Bussan Commodities Ltd ("MBCL") is an energy derivative market maker based in London with offices in Singapore and New York. We are 100% owned by Mitsui & Co of Japan. We have over 25 years of experience to provide hedging solutions for our clients, with range from energy producers, refiners, utilities and trading houses. Our coverage spans Financial Services in Oil, Refined Products, Gas, Power, Coal and TTFs in addition to Emissions Allowances.',
    website: 'https://www.mitsui.com',
    industry: 'Energy Trading & Commodities',
    partnershipSince: '2020',
    headquarters: 'London, UK',
    footerLinks: [
      { title: 'Career Opportunities', url: '#' },
      { title: 'Graduate Programs', url: '#' },
      { title: 'Internships', url: '#' },
    ]
  },
  'mapletree': {
    name: 'Mapletree',
    tier: 'Gold',
    logo: '/sponsors/mapletree-logo.png',
    description: 'Mapletree is a leading real estate development, investment, capital and property management company headquartered in Singapore. The company builds and manages a diverse range of real estate investment trusts (REITs) and private equity real estate funds, which manage properties in Asia Pacific, Europe and North America.',
    website: 'https://www.mapletree.com.sg',
    industry: 'Real Estate Investment & Development',
    partnershipSince: '2021',
    headquarters: 'Singapore',
    footerLinks: [
      { title: 'Investment Opportunities', url: '#' },
      { title: 'Property Development', url: '#' },
      { title: 'REITs', url: '#' },
    ]
  },
  'imda': {
    name: 'Infocomm Media Development Authority (IMDA)',
    tier: 'Gold',
    logo: '/sponsors/imda-logo.png',
    description: 'The Infocomm Media Development Authority (IMDA) leads Singapore\'s digital transformation by developing a vibrant digital economy and an inclusive digital society. IMDA supports the growth of Singapore\'s infocomm technology and media sectors through policy formulation, industry development, and capability building.',
    website: 'https://www.imda.gov.sg',
    industry: 'Digital Technology & Media Development',
    partnershipSince: '2022',
    headquarters: 'Singapore',
    footerLinks: [
      { title: 'Digital Programs', url: '#' },
      { title: 'Tech Innovation', url: '#' },
      { title: 'Industry Development', url: '#' },
    ]
  },
  'setia': {
    name: 'Setia Law LLC',
    tier: 'Gold',
    logo: '/sponsors/setia-logo.png',
    description: 'Setia Law LLC is a boutique corporate and commercial law firm based in Singapore. The firm provides comprehensive legal services across various practice areas including corporate law, mergers and acquisitions, employment law, and commercial disputes, with a focus on serving both local and international clients.',
    website: 'https://www.setialaw.com.sg',
    industry: 'Legal Services',
    partnershipSince: '2023',
    headquarters: 'Singapore',
    footerLinks: [
      { title: 'Legal Services', url: '#' },
      { title: 'Corporate Law', url: '#' },
      { title: 'Career Opportunities', url: '#' },
    ]
  },
  'mha': {
    name: 'Ministry of Home Affairs (MHA)',
    tier: 'Silver',
    logo: '/sponsors/mha-logo.png',
    description: 'The Ministry of Home Affairs (MHA) is responsible for maintaining law and order, safeguarding internal security, and managing immigration and citizenship matters in Singapore. MHA works to ensure Singapore remains a safe and secure nation for all residents and visitors.',
    website: 'https://www.mha.gov.sg',
    industry: 'Government & Public Safety',
    partnershipSince: '2023',
    headquarters: 'Singapore',
    footerLinks: [
      { title: 'Public Safety', url: '#' },
      { title: 'Immigration Services', url: '#' },
      { title: 'Community Programs', url: '#' },
    ]
  }
};

export default async function SponsorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sponsor = sponsors[slug as keyof typeof sponsors];
  
  if (!sponsor) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header with breadcrumb */}
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
          {/* Sponsor Tier Badge */}
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

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Company Info */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold mb-8">{sponsor.name}</h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {sponsor.description}
                </p>
              </div>

              {/* Company Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Industry</h3>
                  <p className="text-muted-foreground">{sponsor.industry}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Partnership Since</h3>
                  <p className="text-muted-foreground">{sponsor.partnershipSince}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Headquarters</h3>
                  <p className="text-muted-foreground">{sponsor.headquarters}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Website</h3>
                  <a 
                    href={sponsor.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Visit Website →
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column - Logo and Quick Info */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-6 sticky top-6">
                {/* Company Logo */}
                <div className="w-full h-32 bg-muted rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🏢</div>
                    <div className="text-xs text-muted-foreground font-mono">
                      {sponsor.name.toUpperCase()}
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
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

                {/* Contact Info */}
                <div>
                  <h4 className="font-semibold mb-3">Connect</h4>
                  <Button variant="outline" className="w-full mb-3" size="sm">
                    Visit Website
                  </Button>
                  <Button variant="ghost" className="w-full" size="sm">
                    View All Sponsors
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
