"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-blue-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold flex items-center">
            <span className="text-yellow-400">dépann</span>san
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-yellow-400 transition-colors">
              Accueil
            </Link>
            <Link href="/services" className="hover:text-yellow-400 transition-colors">
              Nos Services
            </Link>
            <Link href="/zone-intervention" className="hover:text-yellow-400 transition-colors">
              Zone d'intervention
            </Link>
            <Link href="/aide" className="hover:text-yellow-400 transition-colors">
              Aide
            </Link>
            <Link href="/contact" className="hover:text-yellow-400 transition-colors">
              Contact
            </Link>
            <Link href="/devis" className="hover:text-yellow-400 transition-colors">
              Devis
            </Link>
          </nav>

          {/* Call Button */}
          <Button className="hidden md:flex bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold">
            <Phone className="mr-2 h-5 w-5" /> 04 XX XX XX XX
          </Button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-800 py-4">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="hover:text-yellow-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="/services"
                className="hover:text-yellow-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Nos Services
              </Link>
              <Link
                href="/zone-intervention"
                className="hover:text-yellow-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Zone d'intervention
              </Link>
              <Link
                href="/aide"
                className="hover:text-yellow-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Aide
              </Link>
              <Link
                href="/contact"
                className="hover:text-yellow-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/devis"
                className="hover:text-yellow-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Devis
              </Link>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold w-full">
                <Phone className="mr-2 h-5 w-5" /> 04 XX XX XX XX
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
