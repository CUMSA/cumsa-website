import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export interface Publication {
  id: string;
  title: string;
  description: string;
  pdfUrl: string;
  cover: string;
  publishedDate: string;
}

interface PublicationCardProps {
  publication: Publication;
}

export function PublicationCard({ publication }: PublicationCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-100 overflow-hidden p-4">
        <div className="relative h-full w-full rounded-lg rounded-lg overflow-hidden shadow-md bg-white py-2">
          <Image
            src={publication.cover}
            alt={`${publication.title} cover`}
            fill
            className="object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{publication.title}</CardTitle>
        <CardDescription>
          {publication.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <Button className="w-full" size="sm" asChild>
          <a href={publication.pdfUrl} target="_blank" rel="noopener noreferrer">
            View Publication
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
