import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-foreground">About CUMSA</h1>
          
          {/* First Section with Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                CUMSA was founded in the Michaelmas term of 1948. Then known as the Cambridge University Malayan Association, it brought together a small community, worlds away from home.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Its founding committee included former Prime Minister Lee Kuan Yew (as President), and former Chief Justice Yong Pung How (as Secretary). Over 77 years since, many Malaysians and Singaporeans alike have contributed to the growth of the organisation. Famous alumni from Singapore include SM Lee Hsien Loong, three current cabinet ministers, and several Supreme Court justices. 
              </p>
            </div>
            
            <div className="flex items-center">
              <div className="w-full h-80 relative overflow-hidden rounded-lg shadow-lg">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="order-2 lg:order-1 flex items-center">
              <div className="w-full h-80 relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/about2.jpg" // Replace with actual image
                  alt="CUMSA Community"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2 prose prose-lg max-w-none">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                When Singapore gained independence from Malaysia in 1965, CUMSA did not similarly divide. The association persevered as a common meeting place for people of both nationalities.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Though relationships between the communities were sometimes fraught, the years of precedence spoke volumes when it came time to make those difficult decisions about remaining under one organisation. Though a separate Malaysian association was founded in 1994, we still proudly count a number of Malaysian members among our ranks, along with people of many other nationalities.
              </p>
            </div>
          </div>


          <div className="text-center mt-16 p-8 bg-muted/50 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Join Our Community</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you&apos;re a current student, recent graduate, or seasoned alumnus, 
              CUMSA welcomes all members of the Malaysian and Singaporean community at Cambridge.
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
