import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { DisclaimerBanner } from "@/components/disclaimer-banner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fitin Traders - Expert Share Market Trading Insights",
  description: "Get expert share market trading insights with Fitin Traders",
  generator: "Next.js",
  icons: {
    icon: "/favicon.svg", // SVG favicon
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollToTop />
        <Header />
        <DisclaimerBanner />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
