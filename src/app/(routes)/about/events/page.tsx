import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "Annual Formal Dinner",
      description: "Our flagship event bringing together current students and alumni for an elegant evening of networking and celebration.",
      category: "Social",
      timing: "Michaelmas Term",
      image: "/events/formal-dinner.jpg",
      highlights: ["Black-tie event", "Alumni networking", "Traditional dinner", "Guest speakers"]
    },
    {
      id: 2,
      title: "Freshers' Welcome",
      description: "A warm introduction to Cambridge life for new Malaysian and Singaporean students, featuring campus tours and meet-and-greets.",
      category: "Academic",
      timing: "Beginning of Michaelmas",
      image: "/events/freshers-welcome.jpg",
      highlights: ["Campus orientation", "Mentorship program", "Social mixer", "Resource sharing"]
    },
    {
      id: 3,
      title: "Career Networking Evening",
      description: "Professional networking sessions connecting students with alumni across various industries and career paths.",
      category: "Professional",
      timing: "Lent Term",
      image: "/events/career-networking.jpg",
      highlights: ["Industry panels", "CV workshops", "One-on-one mentoring", "Job opportunities"]
    },
    {
      id: 4,
      title: "Cultural Festival",
      description: "Celebrating Malaysian and Singaporean heritage through food, performances, and cultural showcases.",
      category: "Cultural",
      timing: "Easter Term",
      image: "/events/cultural-festival.jpg",
      highlights: ["Traditional performances", "Cultural food fair", "Art exhibitions", "Community celebration"]
    },
    {
      id: 5,
      title: "Study Skills Workshop",
      description: "Academic support sessions helping students excel in their Cambridge studies with peer-to-peer learning.",
      category: "Academic",
      timing: "Throughout the year",
      image: "/events/study-workshop.jpg",
      highlights: ["Peer tutoring", "Study groups", "Academic resources", "Exam preparation"]
    },
    {
      id: 6,
      title: "Sports Day",
      description: "Annual sporting competition fostering friendly rivalry and team spirit among CUMSA members.",
      category: "Sports",
      timing: "Easter Term",
      image: "/events/sports-day.jpg",
      highlights: ["Inter-college competition", "Team building", "Various sports", "Awards ceremony"]
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Social": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "Academic": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Professional": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "Cultural": return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
      case "Sports": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

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
                Follow our social media for updates
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                Join our mailing list
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
