"use client";

import { CheckCircle2, Mail, Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="border-b border-slate-200 bg-[#13314B] text-slate-300">
      <div className="mx-auto max-w-7xl px-3 py-2 text-xs sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          {/* Email */}
          <a
            href="mailto:info@veritaslabpvt.com"
            className="flex min-w-0 items-center gap-1.5 transition-colors hover:text-white"
          >
            <Mail className="size-3.5 shrink-0" />
            <span className="truncate">info@veritaslabpvt.com</span>
          </a>

          {/* ISO */}
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="size-3.5 shrink-0 text-emerald-400" />
            <span className="whitespace-nowrap font-medium">
              Certified ISO 9001:2015
            </span>
          </div>

          {/* Phone */}
          <a
            href="tel:+923068260027"
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <Phone className="size-3.5 shrink-0" />
            <span className="whitespace-nowrap">+92 306 8260027</span>
          </a>

          {/* Login */}
          {/* <Link
            href="/login"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-slate-700 px-2.5 py-1 font-medium text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-800 hover:text-white sm:px-3"
          >
            <LogIn className="size-3.5" />
            <span>Login</span>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
