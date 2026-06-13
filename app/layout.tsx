import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Image from "next/image";

import "./globals.css";
import whatsapp from "@/public/whatsapp_icon.webp";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bmrb.in"),

  title: {
    default: "Market Research Company in Hyderabad | BMRB India",
    template: "%s | BMRB India",
  },

  description:
    "BMRB provides professional market research services with 25+ years of expertise. We deliver high-quality data reports, brand research, customer satisfaction studies, election surveys, government project evaluations, and strategic intelligence for government, corporate, and startup clients.",

  keywords: [
    "market research company",
    "market research company hyderabad",
    "market research india",
    "consumer research",
    "brand research",
    "product research",
    "customer satisfaction research",
    "business intelligence",
    "market assessment studies",
    "government project evaluation",
    "election surveys",
    "opinion polls",
    "BMRB India",
  ],

  alternates: {
    canonical: "https://bmrb.in",
  },

  openGraph: {
    title: "Market Research Company in Hyderabad | BMRB India",
    description:
      "Professional market research services with 25+ years of expertise across brand research, customer satisfaction studies, election surveys, and strategic intelligence.",
    url: "https://bmrb.in",
    siteName: "BMRB India",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Market Research Company in Hyderabad | BMRB India",
    description:
      "Professional market research services with 25+ years of expertise across brand research, customer satisfaction studies, election surveys, and strategic intelligence.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      {
        url: "/favicon-32x32.webp",
        sizes: "32x32",
        type: "image/webp",
      },
    ],
    apple: "/apple-icon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className="bg-background"
      data-scroll-behavior="smooth"
    >
      <body className={`${spaceGrotesk.className} font-sans antialiased`}>
        {children}

        <a
          href="https://wa.me/+919866180977"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={whatsapp}
            alt="WhatsApp"
            width={70}
            height={70}
            className="fixed bottom-10 right-5 z-50 shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl active:scale-95 w-15 md:w-[70px] h-auto"
          />
        </a>

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}