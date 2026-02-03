import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FixedCTABanner from "@/components/fixed-cta-banner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "dépannsan | Dépannage Auto & Remorquage 24h/24 | Enlèvement d'Épave Gratuit",
  description:
    "Service professionnel de dépannage auto, remorquage voiture et enlèvement d'épave gratuit. Assistance panne 24h/24 par nos dépanneurs d'urgence. Intervention rapide dans toute la région.",
  keywords: "dépannage auto, remorquage voiture, enlèvement épave gratuit, assistance panne, dépanneur urgence",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <FixedCTABanner />
      </body>
    </html>
  )
}
