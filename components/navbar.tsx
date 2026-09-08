"use client";

import * as React from "react";
import Link from "next/link";
import {
  Menu,
  TestTube2,
  Dna,
  ShieldCheck,
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
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

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

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 font-bold text-xl tracking-tight text-slate-900 dark:text-slate-100"
        >
          <ShieldCheck className="h-6 w-6 text-blue-600" />
          <span>Veritas Lab</span>
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
                  <Link href="#about">About Us</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <Link
            href={"/contact"}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-md text-white font-medium transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Navigation (Sheet Component) */}
        <div className="flex lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Toggle Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-75 sm:w-100 overflow-y-auto"
            >
              <SheetHeader className="text-left border-b pb-4 mb-4">
                <SheetTitle className="flex items-center space-x-2">
                  <ShieldCheck className="h-5 w-5 text-blue-600" />
                  <span>Veritas Lab</span>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col space-y-6">
                {/* Mobile Services Section */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Testing Capabilities
                  </h4>
                  <div className="flex flex-col space-y-2">
                    {labServices.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.title}
                          href={service.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center space-x-3 rounded-md p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                          <Icon className="h-4 w-4 text-blue-600 shrink-0" />
                          <span className="font-medium text-slate-800 dark:text-slate-200">
                            {service.title}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Mobile Direct Links */}
                <div className="border-t pt-4 flex flex-col space-y-2">
                  <Link
                    href="#about"
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium py-1.5 hover:text-blue-600"
                  >
                    About Us
                  </Link>
                </div>

                {/* Mobile CTA */}
                <Link
                  href={"/contact"}
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-blue-600 hover:bg-blue-700 mt-2 px-4 py-3"
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
