import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] items-center justify-center bg-gradient-to-b from-blue-50 to-background dark:from-blue-950 dark:to-background">
        <div className="absolute inset-0">
          <Image
            src="/banner.jpg"
            alt="CUMSA Group Photo"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
            Cambridge University Singapore
            <br />
            <span className="text-blue-600">and Malaysia Association</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
            Welcome to the Cambridge University Singapore and Malaysia Association (CUMSA).
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">
              <Link href="https://membership.cumsa.org/">
                Join Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-foreground mb-6">
              Welcome to the Cambridge University Singapore and Malaysia Association (CUMSA).
            </p>
            <p className="text-muted-foreground mb-8">
              Founded in 1948, CUMSA aims to bring together members of the Malaysian and Singaporean communities in Cambridge, fostering
              friendships and connections with those from both Malaysia and Singapore alike. Over the years, CUMSA has built a strong
              network of current students and alumni in Singapore, the United Kingdom and globally.
            </p>
            <p className="text-muted-foreground mb-12">
              CUMSA holds a number of events throughout the year for its members and alumni with the intention of creating a social environment
              with a South-East Asian flair. We also hold career-focused events for our members in a wide variety of industries.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-foreground">Find out more</h2>
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/about">
              <Card className="cursor-pointer transition-transform hover:scale-105 hover:shadow-lg h-96 flex flex-col">
                <CardHeader className="flex-shrink-0">
                  <div className="w-full h-48 bg-orange-100 rounded-lg mb-4 relative overflow-hidden">
                    <Image
                      src="/about-image.jpg" // Replace with actual image
                      alt="About us"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardTitle>About us</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="mb-4">
                    Find out more about the society and the events we run.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link href="/resources">
              <Card className="cursor-pointer transition-transform hover:scale-105 hover:shadow-lg h-96 flex flex-col">
                <CardHeader className="flex-shrink-0">
                  <div className="w-full h-48 bg-amber-100 rounded-lg mb-4 relative overflow-hidden">
                    <Image
                      src="/prospective-students.jpg" // Replace with actual image
                      alt="Resources"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardTitle>Resources</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="mb-4">
                    Resources for both incoming freshers and prospective applicants.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link href="/sponsors">
              <Card className="cursor-pointer transition-transform hover:scale-105 hover:shadow-lg h-96 flex flex-col">
                <CardHeader className="flex-shrink-0">
                  <div className="w-full h-48 bg-yellow-100 rounded-lg mb-4 relative overflow-hidden">
                    <Image
                      src="/incoming-freshers.jpg" // Replace with actual image
                      alt="Sponsors"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardTitle>Sponsors</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="mb-4">
                    Find out about our sponsors which make our events possible.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
