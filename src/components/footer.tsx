import { Button } from "@/components/ui/button";
import Image from "next/image"

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

export default function Footer() {
  return (
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
                Cambridge University Singapore
              </h3>
              <h3>
                and Malaysia Association
              </h3>
            </div>
            <div className="flex items-center justify-center space-x-2 gap-4 ml-5">
              <Button variant="ghost" size="sm" className="p-2 text-white hover:text-gray-300 transition-colors">
                <a href="https://www.instagram.com/cumsa_">
                  <span className="sr-only">Instagram</span>
                  <InstagramIcon />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="p-2 text-white hover:text-gray-300 transition-colors">
                <a href="https://www.facebook.com/cumsapage">
                  <span className="sr-only">Facebook</span>
                  <FacebookIcon />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="p-2 text-white hover:text-gray-300 transition-colors">
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
              >
                <a href="mailto:contact@cumsa.org.uk">
                  <span className="sr-only">Email</span>
                  <EmailIcon />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <div className="text-sm text-gray-400">
              <p>© Copyright 2025 CUMSA.</p>
              <p>All rights reserved</p>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
