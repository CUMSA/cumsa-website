import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-foreground mb-8 text-center text-4xl font-bold">
            About CUMSA
          </h1>

          {/* First Section with Image */}
          <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground mb-6 text-lg leading-relaxed">
                CUMSA was founded in the Michaelmas term of 1948. Then known as
                the Cambridge University Malayan Association, it brought
                together a small community, worlds away from home.
              </p>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Its founding committee included former Prime Minister Lee Kuan
                Yew (as President), and former Chief Justice Yong Pung How (as
                Secretary). Over 77 years since, many Malaysians and
                Singaporeans alike have contributed to the growth of the
                organisation. Famous alumni from Singapore include SM Lee Hsien
                Loong, three current cabinet ministers, and several Supreme
                Court justices.
              </p>
            </div>

            <div className="flex items-center">
              <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/about1.jpeg" // Replace with actual image
                  alt="CUMSA Historical Photo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Second Section with Image */}
          <div className="mb-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="order-2 flex items-center lg:order-1">
              <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/about2.jpg" // Replace with actual image
                  alt="CUMSA Community"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="prose prose-lg order-1 max-w-none lg:order-2">
              <p className="text-foreground mb-6 text-lg leading-relaxed">
                When Singapore gained independence from Malaysia in 1965, CUMSA
                did not similarly divide. The association persevered as a common
                meeting place for people of both nationalities.
              </p>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Though relationships between the communities were sometimes
                fraught, the years of precedence spoke volumes when it came time
                to make those difficult decisions about remaining under one
                organisation. Though a separate Malaysian association was
                founded in 1994, we still proudly count a number of Malaysian
                members among our ranks, along with people of many other
                nationalities.
              </p>
            </div>
          </div>

          <div className="mt-16 rounded-lg bg-slate-950/50 p-8 text-center backdrop-blur-xl">
            <h2 className="text-foreground mb-4 text-2xl font-bold">
              Join Our Community
            </h2>
            <p className="text-muted-foreground mx-auto mb-6 max-w-2xl">
              Whether you&apos;re a current student, recent graduate, or
              seasoned alumnus, CUMSA welcomes all members of the Malaysian and
              Singaporean community at Cambridge.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="px-4 py-2">
                <Link href="https://membership.cumsa.org/">
                  Sign up for membership
                </Link>
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
