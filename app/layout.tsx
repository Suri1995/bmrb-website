import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Image from 'next/image';
import whatsapp from "@/public/whatsapp_icon.webp"


const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'Market Research Company in Hyderabad | BMRB india',
  description:
    'BMRB provides professional market research services with 25+ years of expertise. We deliver high-quality data reports, brand research, customer satisfaction studies, and strategic intelligence for government, corporate, and startup clients.',
  generator: 'v0.app',

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.webp", sizes: "32x32", type: "image/webp" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],

    apple: "/apple-icon.webp",
  }, 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${spaceGrotesk.className} font-sans antialiased`}>
        {children}
        <a
  href="https://wa.me/+91 9866180977"
  target="_blank"
  rel="noopener noreferrer"
>
  <Image
    src={whatsapp}
    alt="WhatsApp"
    width={70}
    height={70}
    className="fixed bottom-10 right-5 z-50
    shadow-lg transition-all duration-300
    ease-in-out hover:scale-110
    hover:shadow-2xl active:scale-95
    w-15 md:w-[70px]"
  />
</a>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}