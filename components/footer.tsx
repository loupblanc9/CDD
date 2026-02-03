import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">À Propos</h3>
            <p className="mb-4">
              Service professionnel de dépannage auto, remorquage et enlèvement d'épave disponible 24h/24 et 7j/7 dans
              toute la région.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/depannage" className="hover:text-yellow-400 transition-colors">
                  Dépannage Auto
                </Link>
              </li>
              <li>
                <Link href="/services/remorquage" className="hover:text-yellow-400 transition-colors">
                  Remorquage Voiture
                </Link>
              </li>
              <li>
                <Link href="/services/enlevement-epave" className="hover:text-yellow-400 transition-colors">
                  Enlèvement d'Épave Gratuit
                </Link>
              </li>
              <li>
                <Link href="/services/assistance-panne" className="hover:text-yellow-400 transition-colors">
                  Assistance Panne
                </Link>
              </li>
              <li>
                <Link href="/services/depannage-urgence" className="hover:text-yellow-400 transition-colors">
                  Dépannage d'Urgence
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-yellow-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/zone-intervention" className="hover:text-yellow-400 transition-colors">
                  Zone d'Intervention
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-yellow-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-yellow-400 transition-colors">
                  Mentions Légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" />
                <span>04 XX XX XX XX</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" />
                <span>contact@depannsan.fr</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-7 w-7 text-yellow-400 mr-2 mt-0.5" />
                <span>26 Rue du Chateau d'Eau, 95650 Boissy-l'Aillerie</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" />
                <span>Disponible 24h/24 et 7j/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} dépannsan. Tous droits réservés.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/mentions-legales" className="text-sm hover:text-yellow-400 transition-colors">
                Mentions Légales
              </Link>
              <Link href="/politique-confidentialite" className="text-sm hover:text-yellow-400 transition-colors">
                Politique de Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
