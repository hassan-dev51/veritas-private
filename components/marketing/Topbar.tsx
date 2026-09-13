// src/components/layout/TopBar.tsx

import Link from "next/link";
import { CheckCircle2, Mail, Phone, LogIn } from "lucide-react";

export default function TopBar() {
  return (
    <div className="border-b border-slate-200 bg-[#13314B] text-slate-300">
      <div className="mx-auto flex min-h-9 max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs sm:px-6 lg:px-8">
        {/* Email */}
        <a
          href="mailto:info@veritaslabpvt.com"
          className="hidden items-center gap-2 transition-colors hover:text-white sm:flex"
        >
          <Mail className="size-3.5" />
          <span>info@veritaslabpvt.com</span>
        </a>

        {/* ISO */}
        <div className="flex items-center gap-2">
          <CheckCircle2 className="size-3.5 text-emerald-400" />
          <span className="font-medium">Certified ISO 9001:2015</span>
        </div>

        {/* Phone */}
        <a
          href="tel:+923068260027"
          className="hidden items-center gap-2 transition-colors hover:text-white md:flex"
        >
          <Phone className="size-3.5" />
          <span>+92 306 8260027</span>
        </a>

        {/* Login */}
        <Link
          href="/login"
          className="inline-flex items-center gap-1.5 rounded-md border border-slate-700 px-3 py-1 font-medium text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-800 hover:text-white"
        >
          <LogIn className="size-3.5" />
          <span>Login</span>
        </Link>
      </div>
    </div>
  );
}
