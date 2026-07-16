import Image from "next/image"
import { socials } from "@/data/socials";
import type { Social } from "@/data/socials";
import SponsorCarousel from "@/components/sponsor-carousel";

export default function Footer() {
  return (
    <>
      <SponsorCarousel />
      <footer className="backdrop-blur-xl bg-slate-950/70 text-white py-6">
        <div className="container mx-auto px-6 grid grid-cols-[1fr_auto_1fr] items-center">

          <span className="flex items-center">
            <div>
              <Image
                src="/favicon.ico"
                alt="CUMSA Logo"
                width={40}
                height={40}
              />
            </div>

            <div className="text-foreground mx-1 max-w-[200px] text-sm">
              Cambridge University Malaysia and Singapore Association
            </div>
          </span>

          <div className="flex items-center space-x-2 gap-4">
            {
              socials.map((s: Social) => (
                <a key={s.name} href={s.href} title={s.name} target="_blank" rel="external" className="p-3 text-foreground hover:text-muted-foreground transition-colors">
                  {s.icon}
                </a>
              ))
            }
          </div>

          <span className="text-muted-foreground min-w-0 flex-1 text-sm text-gray-400 text-right">
            <p>© Copyright 2026 CUMSA.</p>
            <p>All rights reserved</p>
          </span>

        </div>
      </footer>
    </>
  );
}
