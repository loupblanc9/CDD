import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Calculateur de Devis Transport | dépannsan",
  description:
    "Obtenez un devis instantané pour votre transport. Calculez le prix de votre dépannage ou remorquage en fonction de la distance.",
  keywords: "devis transport, calculateur prix dépannage, estimation remorquage, tarif dépannage auto",
}

export default function DevisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
