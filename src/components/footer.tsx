import Image from "next/image"
import { socials } from "@/data/socials";
import type { Social } from "@/data/socials";
import SponsorCarousel from "@/components/sponsor-carousel";

export default function Footer() {
  return (
    <>
      <SponsorCarousel />
      <footer className="backdrop-blur-xl bg-slate-950/70 text-white py-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start">

            <div className="flex">
              <div className="flex items-center justify-center space-x-2">
                <Image
                  src="/favicon.ico"
                  alt="CUMSA Logo"
                  width={40}
                  height={40}
                  className="rounded"
                />
              </div>

              <div className="mx-1">
                <p className="max-w-[230px]"><h6>Cambridge University Malaysia and Singapore Association</h6></p>
              </div>
            </div>

            <div className="flex items-center space-x-2 gap-4">
              {
                socials.map((s: Social) => (
                  <a key={s.name} href={s.href} title={s.name} target="_blank" rel="external" className="p-3 text-white hover:text-gray-300 transition-colors">
                    {s.icon}
                  </a>
                ))
              }
            </div>

            <div className="ml-36 text-center">
              <div className="text-sm text-gray-400">
                <p>© Copyright 2025 CUMSA.</p>
                <p>All rights reserved</p>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
