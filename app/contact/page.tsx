import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import ContactForm from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact | dépannsan | Service de Dépannage et Remorquage 24h/24",
  description:
    "Contactez notre service de dépannage auto et remorquage disponible 24h/24. Intervention rapide pour dépannage, remorquage et enlèvement d'épave gratuit.",
  keywords: "contact dépannage, numéro remorquage, contact enlèvement épave, téléphone dépanneur, urgence dépannage",
}

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Contactez Notre Service de Dépannage</h1>
          <p className="text-lg text-gray-600">
            Notre équipe est disponible 24h/24 et 7j/7 pour répondre à vos besoins de dépannage, remorquage et
            enlèvement d'épave.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-blue-900 text-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Nos Coordonnées</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-yellow-400 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Téléphone</h3>
                    <p className="text-xl">04 XX XX XX XX</p>
                    <p className="text-sm text-blue-200">Disponible 24h/24 et 7j/7</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-yellow-400 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p>contact@depannsan.fr</p>
                    <p className="text-sm text-blue-200">Nous répondons sous 24h</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-yellow-400 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Adresse</h3>
                    <p>26 Rue du Château d'Eau</p>
                    <p>95650 Boissy-l'Aillerie, France</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-yellow-400 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Horaires</h3>
                    <p>Service de dépannage: 24h/24 et 7j/7</p>
                    <p>Bureau: Lundi au Vendredi, 9h-18h</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-blue-800">
                <h3 className="font-bold text-lg mb-2">Zone d'Intervention</h3>
                <p>
                  Nous intervenons dans toute la région lyonnaise et ses environs. Contactez-nous pour vérifier si votre
                  localisation est couverte.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-blue-900">Envoyez-nous un Message</h2>
              <p className="mb-6 text-gray-600">
                Remplissez le formulaire ci-dessous pour nous contacter. Nous vous répondrons dans les plus brefs
                délais.
              </p>
              <ContactForm />
            </div>

            <div className="mt-8 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="font-bold text-lg mb-2 text-blue-900">Besoin d'un Dépannage Urgent?</h3>
              <p className="text-gray-700 mb-4">
                Pour une assistance immédiate, appelez-nous directement au numéro ci-dessous:
              </p>
              <div className="bg-blue-900 text-white p-4 rounded-lg text-center">
                <p className="text-lg font-bold">04 XX XX XX XX</p>
                <p className="text-sm">Disponible 24h/24 et 7j/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
