"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllPartners } from "@/data/partners";
import { colleges, getDistanceInKm } from "@/data/colleges";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PartnersPage() {
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [selectedCollege, setSelectedCollege] = useState("default");
  const college = colleges.find((college) => college.name === selectedCollege);
  const allPartners = getAllPartners();
  const cuisines = [
    ...new Set(allPartners.map((partner) => partner.cuisine)),
  ].sort();
  const partners = (
    selectedCuisine === "All"
      ? allPartners
      : allPartners.filter((partner) => partner.cuisine === selectedCuisine)
  )
    .map((partner) => ({
      ...partner,
      distanceKm: college ? getDistanceInKm(partner, college) : 0,
    }))
    .sort((a, b) => a.distanceKm - b.distanceKm);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-4">
              <h1 className="text-4xl font-bold">Partners</h1>
            </div>
            <p className="text-muted-foreground text-lg">
              Discounts with our partners for members. Present your membership
              card to enjoy these discounts!
            </p>
          </div>

          {/* Google Maps */}
          <div className="mb-12">
            <p className="text-muted-foreground mb-4 text-center">
              Subscribe to our{" "}
              <a
                href="https://www.google.com/maps/d/u/0/viewer?mid=1VITmrpaENcB6tL_43do1ZlXM7q2UhkI"
                className="color-link"
                target="_blank"
              >
                Google Maps
              </a>{" "}
              to view CUMSA discounts on your own device! FAQ/help{" "}
              <a
                href="https://drive.google.com/file/d/1IL1KYgPo8ZyPgvx9UU7tBOnoRzx5Ez_t/view"
                className="color-link"
                target="_blank"
              >
                here
              </a>
              .
            </p>
            <div
              className="fill-container rounded-3xl"
              style={{ height: "600px" }}
            >
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1VITmrpaENcB6tL_43do1ZlXM7q2UhkI&ehbc=2E312F&noprof=1"
                height="650px"
                className="fill-iframe"
                style={{ marginTop: "-50px" }}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
            <span className="text-muted-foreground text-sm">Filter:</span>
            {["All", ...cuisines].map((cuisine) => (
              <Badge
                key={cuisine}
                variant={selectedCuisine === cuisine ? "default" : "secondary"}
                className="cursor-pointer px-3 py-1.5 text-sm transition-opacity hover:opacity-80 sm:px-3"
                asChild
              >
                <button
                  type="button"
                  onClick={() => setSelectedCuisine(cuisine)}
                >
                  {cuisine}
                </button>
              </Badge>
            ))}
          </div>

          <div className="mb-10 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
            <label
              htmlFor="college-distance"
              className="text-muted-foreground text-sm font-medium"
            >
              Sort by distance from college:
            </label>
            <Select value={selectedCollege} onValueChange={setSelectedCollege}>
              <SelectTrigger
                id="college-distance"
                className="w-full max-w-xs cursor-pointer sm:w-72"
              >
                <SelectValue placeholder="Select a college" />
              </SelectTrigger>
              <SelectContent className="max-h-72">
                <SelectItem value="default">Default order</SelectItem>
                <SelectSeparator />
                {colleges.map((college) => (
                  <SelectItem key={college.name} value={college.name}>
                    {college.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Partners Grid */}
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((partner) => (
              <Link
                key={partner.id}
                href={partner.mapsUrl ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full max-w-xs sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] xl:w-[calc(25%-1.5rem)]"
              >
                <Card className="h-full min-h-[360px] cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <CardContent className="p-0">
                    <div className="flex h-full flex-col items-center justify-between p-6 text-center">
                      {/* Partner Image */}
                      <div className="border-border relative mb-4 h-32 w-32 shrink-0 overflow-hidden rounded-full border-4">
                        <Image
                          src={partner.picture}
                          alt={partner.name}
                          fill
                          sizes="128px"
                          className="object-cover"
                        />
                      </div>

                      {/* Partner Name */}
                      <h3 className="mb-2 text-xl font-bold tracking-wide">
                        {partner.name}
                      </h3>

                      <Badge variant="default" className="mx-auto mb-3">
                        {partner.cuisine}
                      </Badge>

                      {partner.location && (
                        <p className="text-muted-foreground mb-2 text-sm">
                          {partner.location}
                        </p>
                      )}

                      {college && (
                        <p className="text-muted-foreground mb-2 text-xs">
                          {partner.distanceKm < 1
                            ? `${Math.round(partner.distanceKm * 1000)} m`
                            : `${partner.distanceKm.toFixed(1)} km`}{" "}
                          away
                        </p>
                      )}

                      {/* Discount */}
                      <p className="text-primary text-2xl font-bold">
                        {partner.discount}
                      </p>

                      {partner.description && (
                        <p className="text-muted-foreground mt-2 text-sm">
                          {partner.description}
                        </p>
                      )}

                      {/* Href */}
                      {partner.href && (
                        <Button
                          className="my-2"
                          variant="outline"
                          size="sm"
                          asChild
                        >
                          <a
                            href={partner.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Website
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
