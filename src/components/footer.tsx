import Image from "next/image";
import { socials } from "@/data/socials";
import type { Social } from "@/data/socials";
import SponsorCarousel from "@/components/sponsor-carousel";

export default function Footer() {
  return (
    <>
      <SponsorCarousel />
      <footer className="text-foreground bg-slate-950/70 px-[5%] py-6 backdrop-blur-xl">
        <div className="bar">
          <span className="left flex items-center">
            <Image
              src="/logo-footer.svg"
              alt="Cambridge University Malaysia and Singapore Association"
              width={208}
              height={55}
              className="h-auto w-52 max-w-full dark:hidden"
            />
            <Image
              src="/logo-footer-dark.svg"
              alt="Cambridge University Malaysia and Singapore Association"
              width={208}
              height={55}
              className="hidden h-auto w-52 max-w-full dark:block"
            />
          </span>

          <div className="middle flex flex-wrap items-center justify-center gap-2">
            {socials.map((s: Social) => (
              <a
                key={s.name}
                href={s.href}
                title={s.name}
                target="_blank"
                rel="external"
                className="text-foreground hover:text-muted-foreground p-3 transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>

          <span className="right text-muted-foreground min-w-[13ch] text-right text-sm">
            © 2026 CUMSA <br />
            All rights reserved
          </span>
        </div>
      </footer>
    </>
  );
}
