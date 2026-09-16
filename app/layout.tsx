import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/marketing/Footer";
import NextTopLoader from "nextjs-toploader";
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["cyrillic-ext"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Veritas Lab | Medical Device Testing Laboratory",
    template: "%s | Veritas Lab",
  },

  description:
    "Veritas Lab provides material testing and laboratory testing services for medical devices and surgical instruments, supporting manufacturers and exporters from Sialkot, Pakistan for international markets.",

  keywords: [
    "medical device testing",
    "material testing",
    "medical laboratory testing",
    "surgical instrument testing",
    "stainless steel testing",
    "chemical composition testing",
    "hardness testing",
    "medical device laboratory",
    "surgical instrument laboratory",
    "material verification",
    "medical device testing Pakistan",
    "Sialkot medical device testing",
    "surgical instrument testing Pakistan",
  ],

  authors: [
    {
      name: "Veritas Lab Testing Pvt Ltd",
    },
  ],

  creator: "Veritas Lab Testing Pvt Ltd",
  publisher: "Veritas Lab Testing Pvt Ltd",

  metadataBase: new URL("https://labs.veritascert.com"),

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Veritas Testing",
    title: "Veritas Testing | Medical Device Testing Laboratory",
    description:
      "Professional material and laboratory testing services for medical devices and surgical instruments, supporting manufacturers and exporters from Pakistan for international markets.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${roboto.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-roboto bg-background">
        <NextTopLoader color="white" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
