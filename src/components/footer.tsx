import { Button } from "@/components/ui/button";
import Image from "next/image"
import Link from "next/link"
import { getPlatinumSponsors, getGoldSponsors } from "@/data/sponsors";

// Custom social media icons since Heroicons doesn't have specific social media icons
const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.017 0C8.396 0 7.916.016 6.684.078 5.454.14 4.64.367 3.936.675a5.918 5.918 0 00-2.134 1.39 5.918 5.918 0 00-1.391 2.134C.367 4.64.14 5.454.078 6.684.016 7.916 0 8.396 0 12.017c0 3.624.016 4.104.078 5.336.062 1.23.289 2.044.597 2.748.328.813.777 1.503 1.391 2.134a5.918 5.918 0 002.134 1.391c.704.308 1.518.535 2.748.597 1.232.062 1.712.078 5.336.078 3.624 0 4.104-.016 5.336-.078 1.23-.062 2.044-.289 2.748-.597a5.918 5.918 0 002.134-1.391 5.918 5.918 0 001.391-2.134c.308-.704.535-1.518.597-2.748.062-1.232.078-1.712.078-5.336 0-3.624-.016-4.104-.078-5.336-.062-1.23-.289-2.044-.597-2.748a5.918 5.918 0 00-1.391-2.134A5.918 5.918 0 0020.683.675c-.704-.308-1.518-.535-2.748-.597C16.704.016 16.224 0 12.017 0zM12.017 2.162c3.563 0 3.988.016 5.193.077 1.253.057 1.933.27 2.385.448.6.233 1.026.511 1.475.96.449.449.727.875.96 1.475.178.452.391 1.132.448 2.385.061 1.205.077 1.63.077 5.193s-.016 3.988-.077 5.193c-.057 1.253-.27 1.933-.448 2.385-.233.6-.511 1.026-.96 1.475-.449.449-.875.727-1.475.96-.452.178-1.132.391-2.385.448-1.205.061-1.63.077-5.193.077s-3.988-.016-5.193-.077c-1.253-.057-1.933-.27-2.385-.448-.6-.233-1.026-.511-1.475-.96-.449-.449-.727-.875-.96-1.475-.178-.452-.391-1.132-.448-2.385-.061-1.205-.077-1.63-.077-5.193s.016-3.988.077-5.193c.057-1.253.27-1.933.448-2.385.233-.6.511-1.026.96-1.475.449-.449.875-.727 1.475-.96.452-.178 1.132-.391 2.385-.448 1.205-.061 1.63-.077 5.193-.077zm0 3.678a6.177 6.177 0 100 12.354 6.177 6.177 0 000-12.354zM12.017 9a3.177 3.177 0 110 6.354A3.177 3.177 0 0112.017 9zm6.232-3.244a1.444 1.444 0 11-2.888 0 1.444 1.444 0 012.888 0z" clipRule="evenodd" />
  </svg>
);

const LinkTreeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 131 141" aria-hidden="true">
    <g transform="translate(0.000000,157.000000) scale(0.100000,-0.100000)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M647 1404 c-4 -4 -7 -73 -7 -153 l0 -146 -103 103 c-56 56 -107 102 -112 102 -6 0 -37 -27 -70 -60 l-59 -59 109 -103 108 -103 -154 -5 -154 -5 0 -85 0 -85 159 -5 159 -5 -111 -105 c-62 -57 -112 -107 -112 -111 0 -3 30 -32 66 -64 l66 -58 154 154 154 154 155 -155 154 -154 63 60 c34 32 61 63 60 67 -1 5 -51 56 -110 113 l-107 103 158 1 157 0 0 90 0 90 -156 0 -155 0 83 79 c46 43 97 90 113 104 l30 25 -64 61 c-34 34 -66 61 -70 61 -3 0 -51 -45 -106 -100 l-100 -100 -5 147 -5 148 -90 3 c-50 1 -94 0 -98 -4zM642 343 l3 -208 95 0 95 0 0 205 0 205 -98 3 -97 3 2 -208z"
      />
    </g>
  </svg>
);

const TelegramIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="256" viewBox="0 0 512 512" aria-hidden="true">
    <g transform="translate(0,512) scale(0.1,-0.1)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4620 4343 c-13 -3 -279 -103 -590 -223 -311 -120 -1256 -484 -2100 -810 -844 -325 -1561 -606 -1594 -623 -70 -37 -142 -105 -162 -152 -42 -101 9 -206 128 -263 24 -12 277 -94 563 -183 286 -89 523 -165 527 -168 4 -4 89 -274 189 -601 99 -327 187 -615 195 -640 35 -114 78 -144 204 -145 130 0 163 19 367 215 92 89 174 175 182 190 28 56 -31 123 -91 105 -13 -4 -96 -79 -184 -166 -89 -86 -176 -165 -193 -174 -20 -10 -50 -15 -79 -13 l-47 3 -187 615 c-103 338 -188 622 -188 631 0 10 194 138 538 354 295 186 549 351 565 367 15 15 27 40 27 54 0 34 -42 74 -77 74 -21 0 -193 -104 -591 -355 -309 -195 -567 -355 -574 -355 -23 0 -1042 321 -1079 341 -21 10 -40 23 -44 29 -10 17 13 47 62 78 55 35 -14 8 1963 770 828 320 1680 648 1895 731 426 165 458 173 508 127 26 -25 47 -81 47 -130 0 -30 -699 -3339 -727 -3439 -10 -37 -28 -72 -48 -93 -27 -29 -39 -34 -77 -34 -25 0 -59 5 -77 11 -18 6 -277 192 -576 413 -299 220 -669 493 -823 606 -155 113 -281 208 -281 212 -1 4 447 411 994 903 994 896 995 896 995 935 0 30 -6 43 -26 59 -34 27 -64 27 -100 -1 -105 -83 -2061 -1854 -2068 -1874 -21 -52 -4 -68 341 -324 182 -135 571 -423 865 -640 293 -217 558 -407 588 -422 196 -99 379 -23 443 183 9 30 179 819 378 1754 331 1558 360 1706 357 1775 -7 127 -69 229 -164 271 -43 20 -133 31 -174 22zM2843 2948 c-55 -27 -50 -114 8 -138 89 -37 151 99 63 139 -30 13 -42 13 -71 -1z"
      />
    </g>
  </svg>
);

export default function Footer() {
  const platinumSponsors = getPlatinumSponsors();
  const goldSponsors = getGoldSponsors();
  const allPremiumSponsors = [...platinumSponsors, ...goldSponsors];

  return (
    <>
      {/* Sponsor Carousel Section */}
      {allPremiumSponsors.length > 0 && (
        <div className="bg-muted border-t border-border py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Platinum Sponsors */}
              {platinumSponsors.length > 0 && (
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold text-foreground mb-6">Platinum Sponsors</h3>
                  <div className="relative overflow-hidden">
                    <div className="flex space-x-8">
                      {/* Duplicate sponsors for seamless loop */}
                      {[...platinumSponsors].map((sponsor, index) => (
                        <Link
                          key={`${sponsor.id}-${index}`}
                          href={`/sponsors/${sponsor.slug}`}
                          className="flex-shrink-0"
                          title={sponsor.name}
                        >
                          <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow w-32 h-20 flex items-center justify-center">
                            <Image
                              src={sponsor.picture}
                              alt={sponsor.name}
                              width={100}
                              height={60}
                              className="object-contain max-w-full max-h-full"
                            />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Gold Sponsors */}
              {goldSponsors.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-6">Gold Sponsors</h3>
                  <div className="relative overflow-hidden">
                    <div className="flex space-x-8 animate-scroll">
                      {/* Duplicate sponsors for seamless loop */}
                      {[...goldSponsors, ...goldSponsors].map((sponsor, index) => (
                        <Link
                          key={`${sponsor.id}-${index}`}
                          href={`/sponsors/${sponsor.slug}`}
                          className="flex-shrink-0"
                          title={sponsor.name}
                        >
                          <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow w-32 h-20 flex items-center justify-center">
                            <Image
                              src={sponsor.picture}
                              alt={sponsor.name}
                              width={100}
                              height={60}
                              className="object-contain max-w-full max-h-full"
                            />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

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
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 text-white hover:text-gray-300 transition-colors"
                  asChild
                  title="LinkTree"
                >
                  <a href="https://linktr.ee/cumsa_">
                    <span className="sr-only">LinkTree</span>
                    <LinkTreeIcon />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 text-white hover:text-gray-300 transition-colors"
                  asChild
                  title="Instagram"
                >
                  <a href="https://www.instagram.com/cumsa_">
                    <span className="sr-only">Instagram</span>
                    <InstagramIcon />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 text-white hover:text-gray-300 transition-colors"
                  asChild
                  title="Telegram Broadcast Channel"
                >
                  <a href="https://t.me/+OS3sabCChl1mMTU9">
                    <span className="sr-only">Telegram Broadcast Channel</span>
                    <TelegramIcon />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 text-white hover:text-gray-300 transition-colors"
                  asChild
                  title="Telegram Community"
                >
                  <a href="https://t.me/+bO_f4fB-adM4ZDQ1">
                    <span className="sr-only">Telegram Community</span>
                    <TelegramIcon />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 text-white hover:text-gray-300 transition-colors"
                  asChild
                  title="Facebook"
                >
                  <a href="https://www.facebook.com/cumsapage">
                    <span className="sr-only">Facebook</span>
                    <FacebookIcon />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 text-white hover:text-gray-300 transition-colors"
                  asChild
                  title="LinkedIn"
                >
                  <a href="https://www.linkedin.com/company/alumnicambridge/">
                    <span className="sr-only">Linkedin</span>
                    <LinkedInIcon />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 text-white hover:text-gray-300 transition-colors"
                  asChild
                  title="Email"
                >
                  <a href="mailto:secretary@cumsa.org">
                    <span className="sr-only">Email</span>
                    <EmailIcon />
                  </a>
                </Button>
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
