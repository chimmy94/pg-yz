import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import "./translate-styles.css"

export const metadata: Metadata = {
  title: "PayGateway - Payment Gateway for High-Risk Businesses",
  description:
    "Accept payments through local e-wallets and USDT across Asia, Africa, and Latin America. Perfect for forex, gaming, lending, and streaming businesses.",
  generator: "v0.dev",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/placeholder-logo.svg", sizes: "any", type: "image/svg+xml" },
    ],
    apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "PayGateway - Payment Gateway for High-Risk Businesses",
    description: "Accept payments through local e-wallets and USDT across Asia, Africa, and Latin America.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PayGateway - Payment Gateway for High-Risk Businesses",
    description: "Accept payments through local e-wallets and USDT across Asia, Africa, and Latin America.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
