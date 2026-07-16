import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import type { CommitteeMember } from "@/data/committee";

interface CommitteeCardProps {
  member: CommitteeMember;
}

export function CommitteeCard({ member }: CommitteeCardProps) {
  return (
    <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="relative w-full h-90 rounded-lg p-2 mb-2">
          <Image
            src={member.photo}
            alt={member.position}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105 rounded-lg"
          />
        </div>
        <CardTitle className="text-xl">{member.name}</CardTitle>
        <Badge variant='secondary' className="mx-auto">
          {member.position}
        </Badge>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-2">
          Subject: {member.subject}<br />
          College: {member.college}<br />
          Year: {member.year}
        </p>
        <Button variant="outline" size="sm" asChild>
          <a href={`mailto:${member.email}`}>
            Contact
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
