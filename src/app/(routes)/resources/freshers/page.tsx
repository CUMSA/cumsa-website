import Link from "next/link";
import { PDFViewer } from "@/components/pdf-viewer";
import { ChevronRight, Home } from "lucide-react";
import LinkDiv from "@/components/links";

export default function ResourcesPage() {
  return (
    <div className="text-foreground min-h-screen">
      <div className="border-border border-b bg-slate-950/60 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-8">
          <nav className="text-muted-foreground flex items-center space-x-2 text-sm">
            <Link
              href="/"
              className="hover:text-foreground flex items-center transition-colors"
            >
              <Home className="h-4 w-4" />
            </Link>
            <ChevronRight className="h-4 w-4" />
            Resources
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">Freshers</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl">
          {/* Incoming Freshers Section */}
          <section className="mb-16">
            <h2 className="mb-6 text-3xl font-bold">Incoming Freshers</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              These resources shed more light on life in Cambridge, including
              key information you should know before arriving, and everything
              there is to know about Cambridge as a city
            </p>

            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
              {/* PDF Document Viewer */}
              <div className="h-fit">
                <PDFViewer
                  src={[
                    "/resources/cumsa_freshers_guide_2026_trim.pdf",
                    "/resources/cumsa_freshers_guide_2026_full.pdf",
                  ]}
                  title="CUMSA Freshers' Guide 2026"
                  height="500px"
                />
              </div>

              {/* Freshers' Guide Text Content */}
              <div className="space-y-6">
                <div className="border-l-4 border-blue-300 pl-6">
                  <h3 className="mb-4 text-2xl font-bold">
                    Freshers&apos; Guide
                  </h3>
                  <div className="text-muted-foreground space-y-4">
                    <p>
                      <strong>Start your Cambridge journey!</strong> The
                      Freshers&apos; Guide provides essential information for
                      new students, including advice on what to purchase and
                      bring, how to travel from the airport to Cambridge, and
                      important steps to take upon arrival.
                    </p>
                    <p>
                      You&apos;ll find practical tips on settling in, navigating
                      university registration, and making the most of your first
                      weeks. The guide also covers recommended activities,
                      places to visit, and how to connect with the CUMSA
                      community for support and friendship.
                    </p>
                  </div>
                </div>

                <LinkDiv
                  title="Quick Access"
                  links={[
                    {
                      href: "/resources/cumsa_freshers_tea_2026.pdf",
                      title: "Freshers' Tea 2026 Slides",
                    },
                  ]}
                />

                <LinkDiv
                  title="Archives"
                  links={[
                    {
                      href: "/resources/cumsa_freshers_guide_2025.pdf",
                      title: "Freshers' Guide 2025",
                    },
                    {
                      href: "/resources/cumsa_freshers_tea_2025.pdf",
                      title: "Freshers' Tea 2025 Slides",
                    },
                  ]}
                />
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="border-l-4 border-blue-300 pl-6">
                  <h3 className="mb-4 text-2xl font-bold">Leisure Guide</h3>
                  <div className="text-muted-foreground space-y-4">
                    <p>
                      <strong>Explore Cambridge!</strong> The Leisure Guide
                      provides practical information about supermarkets,
                      shopping areas, and food locations around Cambridge.
                      Discover the best places to buy groceries, enjoy local
                      cuisine, and shop for essentials as a student.
                    </p>
                    <p>
                      This guide highlights top recommendations for incoming
                      students, including budget-friendly options, must-try
                      restaurants, and hidden gems loved by the CUMSA community.
                      Whether you&apos;re looking for Asian groceries,
                      late-night snacks, or a cozy café, you&apos;ll find useful
                      tips to make your Cambridge experience enjoyable and
                      convenient.
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-fit">
                <PDFViewer
                  src={[
                    "/resources/cumsa_leisure_guide_2024_full.pdf",
                    "/resources/cumsa_leisure_guide_2024.pdf",
                  ]}
                  title="CUMSA Leisure Guide 2024"
                  height="500px"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
