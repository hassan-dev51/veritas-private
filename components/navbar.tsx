"use client";

import * as React from "react";
import Link from "next/link";
import {
  Menu,
  TestTube2,
  Dna,
  RefreshCw,
  Bug,
  Flame,
  Microscope,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";
import TopBar from "./marketing/Topbar";

// Structured testing services based on your lab offerings
const labServices = [
  {
    title: "Reusability Test",
    href: "/testing/reusability-testing",
    icon: RefreshCw,
    description:
      "Evaluates multi-cycle durability, material fatigue, and cleaning process integrity.",
  },
  {
    title: "Biocompatibility Test",
    href: "/testing/biocompatibility-testing",
    icon: Dna,
    description:
      "Assesses tissue and biological response safety according to ISO 10993 standards.",
  },
  {
    title: "Cytotoxicity Test",
    href: "/testing/cytotoxicity-testing",
    icon: Microscope,
    description:
      "In vitro analysis screening cell reactivity, lysis, and toxicity parameters.",
  },
  {
    title: "Bioburden Test",
    href: "/testing/bioburden-testing",
    icon: Bug,
    description:
      "Determines total population of viable microorganisms prior to sterilization.",
  },
  {
    title: "Sterilization Test",
    href: "/testing/sterilization-testing",
    icon: Flame,
    description:
      "Validates process efficacy, biological indicators, and sterility assurance levels.",
  },
  {
    title: "Material Test",
    href: "/testing/material-testing",
    icon: TestTube2,
    description:
      "Mechanical, chemical, and structural analysis of raw materials and alloys.",
  },
  {
    title: "Microbiological Test",
    href: "/testing/microbiological-testing",
    icon: Microscope,
    description:
      "In vitro analysis of microbial contamination and biological activity.",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background">
      <TopBar />
      <div className="container flex h-20 items-center justify-between px-4 md:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/new logo.jpeg"
            alt="Veritas Lab Testing Pvt Ltd"
            width={180}
            height={60}
            className="h-20 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation (Mega Menu) */}
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Mega Menu Item: Testing Capabilities */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  Testing Capabilities
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-162.5 gap-3 p-6 md:grid-cols-2">
                    {labServices.map((service) => (
                      <ListItem
                        key={service.title}
                        title={service.title}
                        href={service.href}
                        icon={service.icon}
                      >
                        {service.description}
                      </ListItem>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/about">About Us</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/verify">Verification</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <Link
            href={"/contact"}
            className="bg-[#13314B] hover:bg-[#1a4a6e] px-4 py-3 rounded-md text-white font-medium transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Navigation (Sheet Component) */}
        {/* Mobile Navigation (Sheet Component) */}
        <div className="flex lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="flex w-[85%] max-w-sm flex-col gap-0 p-0"
            >
              {/* Header */}
              <SheetHeader className="border-b px-5 py-4 pr-14 text-left">
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Browse testing services and company pages
                </SheetDescription>
                <Link href="/" onClick={closeMenu} className="inline-flex">
                  <Image
                    src="/images/new logo.jpeg"
                    alt="Veritas Lab Testing Pvt Ltd"
                    width={180}
                    height={60}
                    className="h-12 w-auto object-contain"
                    priority
                  />
                </Link>
              </SheetHeader>

              {/* Scrollable content */}
              <nav className="flex-1 space-y-6 overflow-y-auto px-3 py-5">
                {/* Services */}
                <div className="space-y-2">
                  <h4 className="px-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                    Testing Capabilities
                  </h4>
                  <ul className="flex flex-col">
                    {labServices.map((service) => {
                      const Icon = service.icon;
                      return (
                        <li key={service.title}>
                          <Link
                            href={service.href}
                            onClick={closeMenu}
                            className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
                          >
                            <Icon className="h-4 w-4 shrink-0 text-blue-600" />
                            <span className="font-medium text-slate-800 dark:text-slate-200">
                              {service.title}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Direct links */}
                <ul className="flex flex-col border-t pt-4">
                  <li>
                    <Link
                      href="/about"
                      onClick={closeMenu}
                      className="block rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/verify"
                      onClick={closeMenu}
                      className="block rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      Verification
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Pinned CTA */}
              <div className="border-t p-4">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="flex w-full items-center justify-center rounded-md bg-[#13314B] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1a4a6e]"
                >
                  Contact Us
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

// Reusable Mega Menu Sub-item Component with Icons
interface ListItemProps extends React.ComponentProps<"a"> {
  title: string;
  icon?: React.ElementType;
}

function ListItem({
  className,
  title,
  children,
  icon: Icon,
  ...props
}: ListItemProps) {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={""}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
          className,
        )}
        {...props}
      >
        <div className="flex items-center space-x-2">
          {Icon && <Icon className="h-4 w-4 text-blue-600 shrink-0" />}
          <span className="text-sm font-semibold leading-none">{title}</span>
        </div>
        <p className="line-clamp-2 text-xs leading-snug text-slate-500 dark:text-slate-400 mt-1.5">
          {children}
        </p>
      </Link>
    </NavigationMenuLink>
  );
}
ListItem.displayName = "ListItem";
