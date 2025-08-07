import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CommitteePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">CUMSA Committee 2024-2025</h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Meet the dedicated team working to serve the Malaysian and Singaporean community at Cambridge.
          </p>

          {/* Executive Committee */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Executive Committee</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarFallback className="text-lg">P</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">President Name</CardTitle>
                  <Badge variant="default" className="mx-auto">President</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Subject: Natural Sciences<br/>
                    College: Trinity College<br/>
                    Year: 3rd Year
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Leading CUMSA's vision and coordinating all society activities.
                  </p>
                  <Button variant="outline" size="sm">Contact</Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarFallback className="text-lg">VP</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">Vice President Name</CardTitle>
                  <Badge variant="secondary" className="mx-auto">Vice President</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Subject: Engineering<br/>
                    College: St. John's College<br/>
                    Year: 2nd Year
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Supporting the President and managing special projects.
                  </p>
                  <Button variant="outline" size="sm">Contact</Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarFallback className="text-lg">S</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">Secretary Name</CardTitle>
                  <Badge variant="secondary" className="mx-auto">Secretary</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Subject: Economics<br/>
                    College: King's College<br/>
                    Year: 2nd Year
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Managing communications and maintaining society records.
                  </p>
                  <Button variant="outline" size="sm">Contact</Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarFallback className="text-lg">T</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">Treasurer Name</CardTitle>
                  <Badge variant="secondary" className="mx-auto">Treasurer</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Subject: Mathematics<br/>
                    College: Emmanuel College<br/>
                    Year: 3rd Year
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Managing society finances and budgeting for events.
                  </p>
                  <Button variant="outline" size="sm">Contact</Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarFallback className="text-lg">E</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">Events Director Name</CardTitle>
                  <Badge variant="secondary" className="mx-auto">Events Director</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Subject: Law<br/>
                    College: Magdalene College<br/>
                    Year: 2nd Year
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Planning and organizing all CUMSA social events.
                  </p>
                  <Button variant="outline" size="sm">Contact</Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarFallback className="text-lg">WD</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">Welfare Director Name</CardTitle>
                  <Badge variant="secondary" className="mx-auto">Welfare Director</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Subject: Medicine<br/>
                    College: Peterhouse<br/>
                    Year: 4th Year
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Supporting member wellbeing and pastoral care.
                  </p>
                  <Button variant="outline" size="sm">Contact</Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* General Committee */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">General Committee</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Publicity Officer", subject: "Computer Science", college: "Churchill College" },
                { name: "Sponsorship Director", subject: "Management Studies", college: "Jesus College" },
                { name: "Alumni Relations", subject: "History", college: "Clare College" },
                { name: "Freshers' Rep", subject: "Natural Sciences", college: "Fitzwilliam College" },
                { name: "Sports & Recreation", subject: "Engineering", college: "Robinson College" },
                { name: "Cultural Events", subject: "Modern Languages", college: "Selwyn College" },
                { name: "Academic Support", subject: "Psychology", college: "Homerton College" },
                { name: "Web & Tech", subject: "Computer Science", college: "St. Catharine's" },
              ].map((member, index) => (
                <Card key={index} className="text-center">
                  <CardHeader className="pb-3">
                    <Avatar className="w-16 h-16 mx-auto mb-3">
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-base">{member.name}</CardTitle>
                    <Badge variant="outline" className="text-xs mx-auto">Committee</Badge>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs text-muted-foreground mb-2">
                      {member.subject}<br/>
                      {member.college}
                    </p>
                    <Button variant="outline" size="sm" className="text-xs">Contact</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* What We Do */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">What Our Committee Does</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="text-3xl mb-3 text-center">📅</div>
                  <CardTitle className="text-center">Event Planning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Organizing formal dinners, cultural celebrations, networking events, 
                    and social gatherings throughout the academic year.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="text-3xl mb-3 text-center">🤝</div>
                  <CardTitle className="text-center">Community Building</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Fostering connections between current students, alumni, and prospective 
                    students from Malaysia and Singapore.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="text-3xl mb-3 text-center">💼</div>
                  <CardTitle className="text-center">Professional Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Organizing career talks, industry networking sessions, and mentorship 
                    programs to support members' professional growth.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Join Committee CTA */}
          <div className="text-center bg-blue-50 dark:bg-blue-950/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-bold mb-4">Interested in Joining the Committee?</h2>
            <p className="text-muted-foreground mb-6">
              Committee elections are held annually in Lent Term. Get involved and help shape the future of CUMSA!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">Learn About Elections</Button>
              <Button variant="outline" size="lg">Contact Current Committee</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
