import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import type { CommitteeMember } from "@/data/committee-fmt";

interface CommitteeCardProps {
  member: CommitteeMember;
  includeEmail: boolean;
}

export function CommitteeCard({ member, includeEmail }: CommitteeCardProps) {
  return (
    <Card className="h-full text-center transition-shadow duration-300 hover:shadow-lg">
      <CardHeader>
        <div className="relative mb-2 h-90 w-full rounded-lg p-2">
          <Image
            src={member.photo}
            alt={member.position}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1350px) 50vw, 33vw"
            className="rounded-lg object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardTitle className="text-xl">{member.name}</CardTitle>
        <Badge variant="secondary" className="mx-auto">
          {member.position}
        </Badge>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-2">
          Subject: {member.subject}
          <br />
          College: {member.college}
          <br />
          Year: {member.year}
        </p>
        {includeEmail && (
          <Button variant="outline" size="sm" asChild>
            <a href={`mailto:${member.email}`}>Contact</a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
