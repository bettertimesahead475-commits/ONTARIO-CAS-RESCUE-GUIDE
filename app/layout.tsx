import type { Metadata } from "next"
import { Inter, Source_Serif_4 } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
})

export const metadata: Metadata = {
  title: "Ontario CYFSA Guide | Parent Education Platform",
  description:
    "Educational platform for Ontario parents involved with the Child, Youth and Family Services Act (CYFSA) and Family Court processes. Not legal advice.",
}

export const viewport = {
  themeColor: "#1a365d",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
