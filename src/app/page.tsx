import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="to-background dark:to-background relative flex min-h-[60vh] items-center justify-center bg-gradient-to-b from-blue-50 dark:from-blue-950">
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
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-blue-500 sm:text-6xl">
            Cambridge University Malaysia
            <br />
            <span className="text-red-600">and Singapore Association</span>
          </h1>
          <p className="text-foreground mx-auto mb-8 max-w-2xl text-lg">
            Welcome to the Cambridge University Malaysia and Singapore
            Association (CUMSA).
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">
              <Link href="https://membership.cumsa.org/">Join Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <p className="mb-6 text-lg">
          Welcome to the Cambridge University Malaysia and Singapore Association
          (CUMSA).
        </p>
        <p className="text-muted-foreground mb-8">
          Founded in 1948, CUMSA aims to bring together members of the Malaysian
          and Singaporean communities in Cambridge, fostering friendships and
          connections with those from both Malaysia and Singapore alike. Over
          the years, CUMSA has built a strong network of current students and
          alumni in Singapore, the United Kingdom and globally.
        </p>
        <p className="text-muted-foreground mb-12">
          CUMSA holds a number of events throughout the year for its members and
          alumni with the intention of creating a social environment with a
          South-East Asian flair. We also hold career-focused events for our
          members in a wide variety of industries.
        </p>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-foreground mb-6 text-center text-3xl font-bold">
            Find out more
          </h2>
          {/* Feature Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Link href="/about">
              <Card className="flex h-[26rem] cursor-pointer flex-col transition-transform hover:scale-105 hover:shadow-lg">
                <CardHeader className="flex-shrink-0">
                  <div className="relative mb-4 h-64 w-full overflow-hidden rounded-lg bg-orange-100">
                    <Image
                      src="/dinner.jpg" // Replace with actual image
                      alt="About us"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardTitle>About us</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-grow flex-col">
                  <CardDescription className="mb-4">
                    Find out more about the society and the events we run.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link href="/resources/freshers">
              <Card className="flex h-[26rem] cursor-pointer flex-col transition-transform hover:scale-105 hover:shadow-lg">
                <CardHeader className="flex-shrink-0">
                  <div className="relative mb-4 h-64 w-full overflow-hidden rounded-lg bg-amber-100">
                    <Image
                      src="/resources.png" // Replace with actual image
                      alt="Resources"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardTitle>Resources</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-grow flex-col">
                  <CardDescription className="mb-4">
                    Resources for both incoming freshers and prospective
                    applicants.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link href="/sponsors">
              <Card className="flex h-[26rem] cursor-pointer flex-col transition-transform hover:scale-105 hover:shadow-lg">
                <CardHeader className="flex-shrink-0">
                  <div className="relative mb-4 h-64 w-full overflow-hidden rounded-lg bg-yellow-100">
                    <Image
                      src="/sponsors.jpg" // Replace with actual image
                      alt="Sponsors"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardTitle>Sponsors</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-grow flex-col">
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
