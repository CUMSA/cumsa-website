import Image from "next/image"
import { socials } from "@/data/socials";
import type { Social } from "@/data/socials";
import SponsorCarousel from "@/components/sponsor-carousel";

export default function Footer() {
  return (
    <>
      <SponsorCarousel />
      <footer className="backdrop-blur-xl bg-slate-950/70 text-white pb-6 px-[5%]">
        <div className="bar">

          <span className="left flex items-center">
            <div className="min-w-[20px]">
              <Image
                src="/favicon.ico"
                alt="CUMSA Logo"
                width={40}
                height={40}
              />
            </div>

            <div className="text-foreground mx-1 min-w-[17ch] max-w-[22ch] text-sm">
              Cambridge University Malaysia and Singapore Association
            </div>
          </span>

          <div className="middle flex flex-wrap items-center justify-center gap-2">
            {
              socials.map((s: Social) => (
                <a key={s.name} href={s.href} title={s.name} target="_blank" rel="external" className="p-3 text-foreground hover:text-muted-foreground transition-colors">
                  {s.icon}
                </a>
              ))
            }
          </div>

          <span className="right min-w-[13ch] text-muted-foreground text-sm text-gray-400 text-right">
            © 2026 CUMSA <br />All rights reserved
          </span>

        </div>
      </footer>
    </>
  );
}
