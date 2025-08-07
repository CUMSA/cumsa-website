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
            <span className="text-foreground font-medium">Prospective Applicants</span>
          </nav>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Incoming Freshers Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Prospective Applicants</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              For pre-university students who are intending on applying to Cambridge for entry in 2026, CUMSA offers application workshops and assistance such as:
            </p>
            <ul className="text-muted-foreground mb-8 leading-relaxed list-disc list-inside space-y-2">
              <li>Personal statement and supercurriculars workshops</li>
              <li>Admissions tests workshops</li>
              <li>Mock interviews</li>
              <li>In-person school visits</li>
              <li>Mentorship programs</li>
            </ul>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* PDF Document Viewer */}
              <div className="h-fit">
                <PDFViewer
                  src="/cumsa_freshers_guide_2025.pdf"
                  title="Application Guide 2025"
                  height="500px"
                />
              </div>

              {/* Freshers' Guide Text Content */}
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-bold mb-4">Application Guide</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <strong>Navigate your Cambridge application!</strong> The Application Guide provides detailed information about the application process for Cambridge, including step-by-step advice for each subject and insights into the requirements and culture of different colleges.
                    </p>
                    <p>
                      Find tips on preparing your personal statement, choosing a college, understanding admissions tests, and what to expect in interviews. The guide also includes advice from current students and alumni to help you make informed decisions and present your best self in your application.
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

          {/* Additional Resources Grid */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">For Freshers</CardTitle>
                  <CardDescription>
                    Everything you need to know as a new student
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6 flex-1 text-sm">
                    Welcome to Cambridge! Find essential information about university life, 
                    academic resources, and how to get involved with CUMSA activities.
                  </p>
                  <Link href="/resources/freshers">
                    <Button className="w-full" size="sm">View Resources</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">Prospective Students</CardTitle>
                  <CardDescription>
                    Considering Cambridge? Start here
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6 flex-1 text-sm">
                    Get insights into the Cambridge application process, college life, 
                    and connect with current students and alumni.
                  </p>
                  <Link href="/resources/prospective-students">
                    <Button className="w-full" size="sm">View Resources</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">Academic Support</CardTitle>
                  <CardDescription>
                    Study tips and academic resources
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6 flex-1 text-sm">
                    Access study guides, supervision tips, and academic support 
                    resources from fellow Malaysian and Singaporean students.
                  </p>
                  <Button className="w-full" size="sm" variant="outline">Coming Soon</Button>
                </CardContent>
              </Card>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
