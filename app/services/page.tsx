import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Nos Services de Dépannage Auto et Remorquage | dépannsan",
  description:
    "Découvrez nos services professionnels de dépannage auto, remorquage voiture et enlèvement d'épave gratuit. Assistance panne 24h/24 par nos dépanneurs d'urgence.",
  keywords: "services dépannage, remorquage voiture, enlèvement épave gratuit, assistance panne, dépanneur urgence",
}

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Nos services de dépannage et remorquage"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Services de Dépannage et Remorquage</h1>
          <p className="text-xl max-w-2xl">
            Des solutions professionnelles pour tous vos besoins de dépannage, remorquage et enlèvement d'épave.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">
              Des Solutions Complètes pour Votre Véhicule
            </h2>
            <p className="text-lg text-center text-gray-600">
              Notre équipe de professionnels qualifiés est disponible 24h/24 pour vous offrir des services de dépannage
              et remorquage de qualité supérieure.
            </p>
          </div>

          {/* Service 1 */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Dépannage Auto</h3>
              <p className="text-gray-600 mb-4">
                Notre service de dépannage auto intervient rapidement pour résoudre les problèmes mécaniques et
                électriques de votre véhicule. Nos dépanneurs d'urgence sont équipés des outils nécessaires pour
                diagnostiquer et réparer de nombreuses pannes sur place.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Batterie à plat et problèmes de démarrage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Crevaisons et changements de roue</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Problèmes de carburant (panne sèche, erreur de carburant)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Diagnostic électronique et réparations mineures</span>
                </li>
              </ul>
              <Link href="/services/depannage">
                <Button className="bg-blue-900 hover:bg-blue-800">
                  En savoir plus sur le dépannage <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Service de dépannage auto professionnel"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Service 2 */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16 md:order-2">
            <div className="md:order-2">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Remorquage Voiture</h3>
              <p className="text-gray-600 mb-4">
                Notre service de remorquage voiture assure le transport sécurisé de votre véhicule en panne ou accidenté
                vers le garage de votre choix. Nous disposons d'une flotte de dépanneuses modernes adaptées à tous types
                de véhicules.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Remorquage de véhicules légers et utilitaires</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Transport sécurisé sur plateau</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Remorquage après accident</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Transport vers le garage de votre choix</span>
                </li>
              </ul>
              <Link href="/services/remorquage">
                <Button className="bg-blue-900 hover:bg-blue-800">
                  En savoir plus sur le remorquage <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg md:order-1">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Service de remorquage voiture professionnel"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Service 3 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Enlèvement d'Épave Gratuit</h3>
              <p className="text-gray-600 mb-4">
                Notre service d'enlèvement d'épave gratuit vous permet de vous débarrasser légalement de votre véhicule
                hors d'usage. Nous nous occupons de toutes les démarches administratives et vous fournissons un
                certificat de destruction conforme à la législation.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Enlèvement gratuit à votre domicile ou sur site</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Démarches administratives simplifiées</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Certificat de destruction pour la préfecture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Recyclage écologique des véhicules</span>
                </li>
              </ul>
              <Link href="/services/enlevement-epave">
                <Button className="bg-blue-900 hover:bg-blue-800">
                  En savoir plus sur l'enlèvement d'épave <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Service d'enlèvement d'épave gratuit"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Besoin d'un Dépannage ou Remorquage Urgent?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Notre équipe de dépanneurs professionnels est disponible 24h/24 pour vous assister en cas de panne ou
            d'accident.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold">
              Appelez-nous maintenant: 04 XX XX XX XX
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-blue-800/50">
                Demander un devis gratuit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
