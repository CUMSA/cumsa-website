import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link"

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "Annual Formal Dinner",
      description: "Our signature event bringing together members of the vibrant CUMSA community. Held at one of Cambridge's historic college halls, the dinner strengthens bonds between CUMSA families—a longstanding tradition that pairs freshers with seniors to help them navigate Cambridge life.",
      category: "Social",
      timing: "October",
      image: "/events/formal.JPG",
    },
    {
      id: 2,
      title: "Orientation",
      description: "CUMSA's annual 3D2N orientation welcoming new undergraduates to the CUMSA family. This year's 'Alice in Wonderland' themed orientation at Civil Service Club @ Changi included icebreakers, telematch, Amazing Race, and seniors' sharing sessions.",
      category: "Academic",
      timing: "September",
      image: "/events/ori.jpg",
    },
    {
      id: 3,
      title: "KopiTalks",
      description: "Our trademark speakers' event jointly organised with Oxford (OUMSSA), featuring productive dialogue on critical issues. This year's focus on social cohesion included Minister Chan Chun Sing and expert panelists discussing Singapore's social compact.",
      category: "Professional",
      timing: "September",
      image: "/events/kopitalk.jpg",
    },
    {
      id: 4,
      title: "Bridgemas Carnival",
      description: "Our end-of-year festive celebration featuring carnival games, food stalls, Christmas carol performances, and a charity fundraiser. This year raised £1,889.26 for Beyond Social Services, with 140 attendees enjoying tiramisu, mulled wine, and festive activities.",
      category: "Cultural",
      timing: "November",
      image: "/events/bridgemas.JPG",
    },
    {
      id: 5,
      title: "Ski Trip",
      description: "Our largest ski trip to date with 100 participants taking a week-long adventure to La Plagne, France. Offering slopes for all skill levels, stunning Alpine views, and après-ski experiences including poker and werewolf games.",
      category: "Sports",
      timing: "Winter Break",
      image: "/events/ski.png",
    },
    {
      id: 6,
      title: "Garden Party",
      description: "Annual farewell celebration for our graduating class held at Churchill College. This year's event featured light food, desserts, milk tea, card games, polaroid photobooth, and special enamel pin graduation gifts for the Class of 2024.",
      category: "Social",
      timing: "June",
      image: "/events/garden-party.jpg",
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-center text-4xl font-bold mb-4 text-foreground">CUMSA Events</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The organisation continues to bring together members of the Malaysian and Singaporean communities, albeit on a slightly larger scale. From 12 students at our founding, the organisation has grown to over 400. With this, we have adapted, and our service to the Malaysian and Singaporean community is now multi-faceted.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                We hold a number of events throughout the year with the intention of creating a social environment with a familiar Southeast Asian air. Events include the annual Freshers’ Orientation, Singapore Festival and Ski Trip, amongst many others.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                We also aim to serve the community as a platform for discussion, with access to – and the opportunity to share – informed opinions. Studying overseas so often changes perspectives regarding our place in the world and it is only prudent that we provide support for this through speakers’ events and forums for discussion.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                We not only aid incoming students in adjusting to their new environment, but also ensure there is a community to which one can turn throughout their time here – never always needed, but always there.
              </p>
            </div>
          </div>

          {/* Events Grid */}
          <h3 className="text-center text-4xl font-bold mb-4 text-foreground">Featured Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <span className="font-medium">{event.timing}</span>
                  </div>
                  <CardDescription className="text-sm">
                    {event.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 p-8 bg-muted/50 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Join Us at Our Next Event</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Stay connected with CUMSA to receive updates about upcoming events, registration details, and exclusive member benefits.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
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
