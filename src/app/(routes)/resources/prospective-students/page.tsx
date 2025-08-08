import Link from "next/link";
import { PDFViewer } from "@/components/pdf-viewer";
import { ChevronRight, Home } from "lucide-react";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-muted border-b border-border">
        <div className="container mx-auto px-4 py-8">
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
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          
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
              <div className="h-fit">
                <PDFViewer
                  src="/resources/cumsa_admission_guide_2025.pdf"
                  title="Application Guide 2025"
                  height="500px"
                />
              </div>

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
              </div>
            </div>
          </section>

          {/* Additional Resources Grid */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Application Statistics</h2>
            <p> Grpah placeholder </p>
          </section>

        </div>
      </div>
    </div>
  );
}
