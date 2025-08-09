"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <Image
              src="/favicon.ico"
              alt="CUMSA Logo"
              width={40}
              height={40}
              className="rounded"
            />
          </div>
        </Link>

        {/* Navigation Menu */}
        <NavigationMenu className="hidden md:flex" viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[200px] gap-3 p-4 md:w-[300px] lg:w-[400px]">
                  <ListItem href="/about" title="About CUMSA">
                    Learn about our history, mission, and community
                  </ListItem>
                  <ListItem href="/about/events" title="Events">
                    Discover our social, academic, and cultural events
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[200px] gap-3 p-4 md:w-[300px] lg:w-[400px]">
                  <ListItem href="/resources/freshers" title="Freshers">
                    Resources and information for incoming students
                  </ListItem>
                  <ListItem href="/resources/prospective-students" title="Prospective Applicants">
                    Information for prospective applicants
                  </ListItem>
                  <ListItem href="/resources/publications" title="Past Publications">
                    Read our annual publications here
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/sponsors" className={navigationMenuTriggerStyle()}>
                  Sponsors
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/committee" className={navigationMenuTriggerStyle()}>
                  Committee
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="default" className="hidden sm:inline-flex">
            <Link href="https://membership.cumsa.org/">
              Membership 
            </Link>
          </Button>
          
          {/* Mobile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuLabel className="font-semibold">Navigation</DropdownMenuLabel>
              <DropdownMenuSeparator />
              
              {/* About submenu */}
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="cursor-pointer">
                  About
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem asChild>
                    <Link href="/about" className="cursor-pointer">
                      About CUMSA
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/about/events" className="cursor-pointer">
                      Events
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>

              {/* Resources submenu */}
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="cursor-pointer">
                  Resources
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem asChild>
                    <Link href="/resources/freshers" className="cursor-pointer">
                      Freshers
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/resources/prospective-students" className="cursor-pointer">
                      Prospective Applicants
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/resources/publications" className="cursor-pointer">
                      Past Publications
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>

              {/* Direct links */}
              <DropdownMenuItem asChild>
                <Link href="/sponsors" className="cursor-pointer">
                  Sponsors
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/committee" className="cursor-pointer">
                  Committee
                </Link>
              </DropdownMenuItem>
              
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="sm:hidden">
                <Link href="https://membership.cumsa.org/" className="cursor-pointer font-medium">
                  Membership
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}


function navigationMenuTriggerStyle() {
  return cn(
    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
  );
}
