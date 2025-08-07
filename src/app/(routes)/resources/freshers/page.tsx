import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PDFViewer } from "@/components/pdf-viewer";
import { ChevronRight, Home } from "lucide-react";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Section */}
      <div className="bg-muted border-b border-border">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="flex items-center hover:text-foreground transition-colors">
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
        <div className="max-w-6xl mx-auto">
          
          {/* Incoming Freshers Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Incoming Freshers</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              These resources shed more light on life in Cambridge, including key information you should know before 
              arriving, and everything there is to know about Cambridge as a city
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* PDF Document Viewer */}
              <div className="h-fit">
                <PDFViewer
                  src="/cumsa_freshers_guide_2025.pdf"
                  title="CUMSA Freshers' Guide 2025"
                  height="500px"
                />
              </div>

              {/* Freshers' Guide Text Content */}
              <div className="space-y-6">
                <div className="border-l-4 border-blue-300 pl-6">
                  <h3 className="text-2xl font-bold mb-4">Freshers' Guide</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <strong>Start your Cambridge journey!</strong> The Freshers' Guide provides essential information for new students, including advice on what to purchase and bring, how to travel from the airport to Cambridge, and important steps to take upon arrival.
                    </p>
                    <p>
                      You'll find practical tips on settling in, navigating university registration, and making the most of your first weeks. The guide also covers recommended activities, places to visit, and how to connect with the CUMSA community for support and friendship.
                    </p>
                  </div>
                </div>
                
                <div className="bg-muted rounded-lg p-6">
                  <h4 className="font-semibold mb-3">Quick Access</h4>
                  <div className="space-y-2">
                    <Link href="/resources/freshers" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                      → Complete Freshers' Guide
                    </Link>
                    <Link href="/resources/freshers#accommodation" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                      → Accommodation Information
                    </Link>
                    <Link href="/resources/freshers#events" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                      → Freshers' Week Events
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <div className="border-l-4 border-blue-300 pl-6">
                  <h3 className="text-2xl font-bold mb-4">Leisure Guide</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <strong>Explore Cambridge!</strong> The Leisure Guide provides practical information about supermarkets, shopping areas, and food locations around Cambridge. Discover the best places to buy groceries, enjoy local cuisine, and shop for essentials as a student.
                    </p>
                    <p>
                      This guide highlights top recommendations for incoming students, including budget-friendly options, must-try restaurants, and hidden gems loved by the CUMSA community. Whether you're looking for Asian groceries, late-night snacks, or a cozy café, you'll find useful tips to make your Cambridge experience enjoyable and convenient.
                    </p>
                  </div>
                </div>
                
                <div className="bg-muted rounded-lg p-6">
                  <h4 className="font-semibold mb-3">Quick Access</h4>
                  <div className="space-y-2">
                    <Link href="/resources/freshers" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                      → Complete Freshers' Guide
                    </Link>
                    <Link href="/resources/freshers#accommodation" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                      → Accommodation Information
                    </Link>
                    <Link href="/resources/freshers#events" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                      → Freshers' Week Events
                    </Link>
                  </div>
                </div>
              </div>

              <div className="h-fit">
                <PDFViewer
                  src="/cumsa_freshers_guide_2025.pdf"
                  title="CUMSA Freshers' Guide 2025"
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
