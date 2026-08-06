import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import {
  PublicationCard,
  type Publication,
} from "@/components/publication-card";

// Publications data
const publicationsData: Publication[] = [
  {
    id: "cumsa-causeway-2020",
    title: "CUMSA Causeway 2020",
    description: "Read our 2020 publication",
    pdfUrl: "/resources/cumsa_causeway_2020.pdf",
    cover: "/resources/cumsa_causeway_2020.png",
    publishedDate: "2020",
  },
  {
    id: "cumsa-causeway-2021",
    title: "CUMSA Causeway 2021",
    description: "Read our 2021 publication",
    pdfUrl: "/resources/cumsa_causeway_2021.pdf",
    cover: "/resources/cumsa_causeway_2021.png",
    publishedDate: "2021",
  },
  {
    id: "cumsa-causeway-2022",
    title: "CUMSA Causeway 2022",
    description: "Read our 2022 publication",
    pdfUrl: "/resources/cumsa_causeway_2022.pdf",
    cover: "/resources/cumsa_causeway_2022.png",
    publishedDate: "2022",
  },
  {
    id: "cumsa-causeway-2024",
    title: "CUMSA Causeway 2024",
    description: "Read our 2024 publication",
    pdfUrl: "/resources/cumsa_causeway_2024.pdf",
    cover: "/resources/cumsa_causeway_2024.png",
    publishedDate: "2024",
  },
];

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
            <span className="text-foreground font-medium">
              Past Publications
            </span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <section className="mb-12">
            <h2 className="mb-8 text-center text-3xl font-bold">
              Past Publications
            </h2>
            <div className="flex flex-wrap justify-center gap-5">
              {publicationsData.map((publication) => (
                <div key={publication.id} className="w-full max-w-xs">
                  <PublicationCard publication={publication} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
