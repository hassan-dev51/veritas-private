import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const testingServices = [
  {
    name: "Material Testing",
    href: "/testing/material-testing",
  },
  {
    name: "Cytotoxicity Testing",
    href: "/testing/cytotoxicity-testing",
  },
  {
    name: "Sterilization Testing",
    href: "/testing/sterilization-testing",
  },
  {
    name: "Reusability Testing",
    href: "/testing/reusability-testing",
  },
  {
    name: "Bioburden Testing",
    href: "/testing/bioburden-testing",
  },
  {
    name: "Biocompatibility Testing",
    href: "/testing/biocompatibility-testing",
  },
] as const;

const companyLinks = [
  { label: "About Us", href: "/about" },

  { label: "Contact Us", href: "/contact" },
] as const;

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr] lg:gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src="/images/new logo.jpeg"
                alt="Veritas Lab Testing Pvt Ltd"
                width={180}
                height={160}
                className="h-20 w-auto object-contain"
                priority
              />
            </Link>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Professional testing and laboratory services for medical devices,
              surgical instruments, and their materials.
            </p>

            <a
              href="/contact"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-sky-600"
            >
              Discuss Your Requirement
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Testing Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Testing Services
            </h3>

            <ul className="mt-5 space-y-3">
              {testingServices.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-5">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" />

                <p className="text-sm leading-6 text-slate-400">
                  Plaza 66, 3rd floor, sector A, Avenue 4, DHA Phase 6, Lahore,
                  Pakistan
                </p>
              </div>

              <div className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" />

                <Link
                  href="mailto:info@veritaslabpvt.com"
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  info@veritaslabpvt.com
                </Link>
              </div>

              <p className="text-sm">
                Mr. Luqman <span className="text-sky-600">Asst Technician</span>
              </p>
              <div className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" />
                <Link
                  href="tel:+920000000000"
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  +92 306 8260027
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Veritas Testing. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy-policy"
              className="text-xs text-slate-500 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-xs text-slate-500 transition-colors hover:text-white"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
