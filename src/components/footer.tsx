import Image from "next/image"
import { socials } from "@/data/socials";
import type { Social } from "@/data/socials";
import SponsorCarousel from "@/components/sponsor-carousel";

export default function Footer() {
  return (
    <>
      <SponsorCarousel />
      <footer className="bg-slate-950 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start">

            <div className="mb-8 md:mb-0 flex">
              <div className="flex items-center justify-center space-x-2">
                <Image
                  src="/favicon.ico"
                  alt="CUMSA Logo"
                  width={40}
                  height={40}
                  className="rounded"
                />
              </div>

              <div className="items-center justify-center mx-4">
                <h3>
                  Cambridge University Malaysia
                </h3>
                <h3>
                  and Singapore Association
                </h3>
              </div>

              <div className="flex items-center justify-center space-x-2 gap-4 ml-5">
                {
                  socials.map((s: Social) => (
                    <a key={s.name} href={s.href} title={s.name} target="_blank" rel="external" className="p-2 text-white hover:text-gray-300 transition-colors">
                      {s.icon}
                    </a>
                  ))
                }
              </div>
            </div>

            <div className=" text-center">
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
