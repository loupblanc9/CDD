import Image from "next/image"
import Link from "next/link"
import { Phone, MapPin, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"
import ContactForm from "@/components/contact-form"
import DevisCalculator from "@/components/devis-calculator"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920&text=Dépanneuse"
            alt="Service de dépannage et remorquage avec dépanneuse disponible 24/7"
            fill
            priority
            className="object-cover brightness-50"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Dépannage Auto & Remorquage <span className="text-yellow-400">24h/24</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Service professionnel de dépannage, remorquage et enlèvement d'épave gratuit dans toute la région.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold">
              <Phone className="mr-2 h-5 w-5" /> Appelez-nous maintenant
            </Button>
            <Link href="#calculateur-devis">
              <Button size="lg" variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-blue-900/20">
                Obtenez un devis gratuit <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CALCULATEUR DE DEVIS - MINIMALISTE */}
      <section id="calculateur-devis" className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-blue-900">Calculateur de Devis</h2>

          <DevisCalculator />
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
            Nos Services de Dépannage et Assistance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Dépannage Auto"
              description="Assistance panne 24h/24 par nos dépanneurs d'urgence qualifiés. Intervention rapide sur toutes pannes."
              icon="wrench"
              link="/services/depannage"
            />
            <ServiceCard
              title="Remorquage Voiture"
              description="Service de remorquage professionnel pour tous types de véhicules. Transport sécurisé de votre véhicule."
              icon="truck"
              link="/services/remorquage"
            />
            <ServiceCard
              title="Enlèvement d'Épave Gratuit"
              description="Enlèvement d'épave gratuit et légal avec certificat de destruction conforme à la législation."
              icon="trash"
              link="/services/enlevement-epave"
            />
          </div>
          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">
                Découvrir tous nos services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
            Pourquoi Choisir Notre Service de Dépannage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-900 text-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-900">Disponible 24h/24 et 7j/7</h3>
              <p className="text-gray-600">
                Notre équipe de dépanneurs d'urgence est disponible à toute heure pour vous assister.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-900 text-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-900">Intervention Rapide</h3>
              <p className="text-gray-600">
                Nous intervenons rapidement dans toute la région pour minimiser votre temps d'attente.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-900 text-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-900">Service Professionnel</h3>
              <p className="text-gray-600">
                Nos techniciens sont formés et certifiés pour assurer un service de qualité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-blue-900">Besoin d'un Dépannage ou Remorquage?</h2>
                <p className="text-lg mb-6 text-gray-600">
                  Notre équipe de dépanneurs professionnels est disponible 24h/24 pour vous assister en cas de panne ou
                  d'accident.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-yellow-400 mr-2" />
                    <span className="font-bold">04 XX XX XX XX</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-yellow-400 mr-2" />
                    <span>26 Rue du Château d'Eau, 95650 Boissy-l'Aillerie</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-yellow-400 mr-2" />
                    <span>Disponible 24h/24 et 7j/7</span>
                  </div>
                </div>
              </div>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-900">Zone d'Intervention</h2>
          <p className="text-center text-lg mb-8 max-w-3xl mx-auto">
            Notre service de dépannage et remorquage intervient dans le Val-d'Oise, l'Oise, l'Eure et toute
            l'Île-de-France.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-900 flex items-center">
                <span className="bg-blue-900 text-white text-sm font-bold py-1 px-2 rounded mr-2">95</span>
                Val-d'Oise
              </h3>
              <p className="mb-4 text-gray-700">
                Argenteuil, Cergy, Sarcelles, Garges-lès-Gonesse, Pontoise, Franconville, Goussainville...
              </p>
              <Link href="/zone-intervention#val-doise">
                <Button
                  variant="outline"
                  className="w-full border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
                >
                  Voir toutes les villes
                </Button>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-900 flex items-center">
                <span className="bg-blue-900 text-white text-sm font-bold py-1 px-2 rounded mr-2">60</span>
                Oise
              </h3>
              <p className="mb-4 text-gray-700">
                Beauvais, Compiègne, Creil, Senlis, Chantilly, Méru, Montataire, Clermont...
              </p>
              <Link href="/zone-intervention#oise">
                <Button
                  variant="outline"
                  className="w-full border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
                >
                  Voir toutes les villes
                </Button>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-900 flex items-center">
                <span className="bg-blue-900 text-white text-sm font-bold py-1 px-2 rounded mr-2">27</span>
                Eure
              </h3>
              <p className="mb-4 text-gray-700">
                Évreux, Vernon, Louviers, Gisors, Les Andelys, Pont-Audemer, Bernay...
              </p>
              <Link href="/zone-intervention#eure">
                <Button
                  variant="outline"
                  className="w-full border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
                >
                  Voir toutes les villes
                </Button>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-900 flex items-center">
                <span className="bg-blue-900 text-white text-sm font-bold py-1 px-2 rounded mr-2">IDF</span>
                Île-de-France
              </h3>
              <p className="mb-4 text-gray-700">
                Paris (75), Hauts-de-Seine (92), Seine-Saint-Denis (93), Seine-et-Marne (77), Yvelines (78), Essonne
                (91), Val-de-Marne (94).
              </p>
              <Link href="/zone-intervention#ile-de-france">
                <Button
                  variant="outline"
                  className="w-full border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
                >
                  Voir tous les départements
                </Button>
              </Link>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/zone-intervention">
              <Button className="bg-blue-900 hover:bg-blue-800 text-white">
                Consulter notre zone d'intervention complète
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
