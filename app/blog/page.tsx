import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Blog | Conseils Dépannage Auto et Remorquage",
  description:
    "Découvrez nos articles sur le dépannage auto, le remorquage et l'enlèvement d'épave. Conseils d'experts pour l'entretien de votre véhicule et informations sur la législation.",
  keywords: "blog dépannage auto, conseils remorquage, entretien véhicule, législation épave, conseils auto",
}

const blogPosts = [
  {
    id: 1,
    title: "Comment prévenir une panne de batterie en hiver",
    excerpt:
      "Découvrez nos conseils pour éviter les pannes de batterie pendant la saison froide et garder votre véhicule opérationnel.",
    date: "15 janvier 2023",
    category: "Entretien",
    slug: "prevenir-panne-batterie-hiver",
  },
  {
    id: 2,
    title: "Que faire en cas de panne sur l'autoroute",
    excerpt:
      "Les étapes essentielles à suivre pour assurer votre sécurité et obtenir de l'aide rapidement en cas de panne sur l'autoroute.",
    date: "28 février 2023",
    category: "Sécurité",
    slug: "panne-autoroute-que-faire",
  },
  {
    id: 3,
    title: "La législation sur l'enlèvement des véhicules hors d'usage (VHU)",
    excerpt:
      "Tout ce que vous devez savoir sur la réglementation concernant l'enlèvement et le traitement des épaves de véhicules.",
    date: "10 mars 2023",
    category: "Législation",
    slug: "legislation-enlevement-epave",
  },
  {
    id: 4,
    title: "5 signes que votre voiture a besoin d'un remorquage",
    excerpt:
      "Apprenez à reconnaître les signes indiquant qu'il est temps de faire appel à un service de remorquage professionnel.",
    date: "22 avril 2023",
    category: "Remorquage",
    slug: "signes-besoin-remorquage",
  },
  {
    id: 5,
    title: "Comment choisir le bon service de dépannage",
    excerpt:
      "Les critères essentiels pour sélectionner un service de dépannage fiable et professionnel pour votre véhicule.",
    date: "15 mai 2023",
    category: "Conseils",
    slug: "choisir-service-depannage",
  },
  {
    id: 6,
    title: "Entretien préventif : évitez les pannes courantes",
    excerpt: "Guide complet pour l'entretien préventif de votre véhicule afin d'éviter les pannes les plus fréquentes.",
    date: "8 juin 2023",
    category: "Entretien",
    slug: "entretien-preventif-eviter-pannes",
  },
]

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Blog Dépannage Auto et Conseils</h1>
          <p className="text-lg text-gray-600">
            Découvrez nos articles et conseils d'experts sur le dépannage auto, le remorquage et l'entretien de votre
            véhicule.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Article vedette sur le dépannage auto"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-4">
                  Article à la une
                </div>
                <h2 className="text-2xl font-bold mb-4 text-blue-900">
                  Guide complet : Comment réagir en cas de panne de voiture
                </h2>
                <p className="text-gray-600 mb-6">
                  Découvrez les étapes essentielles à suivre lorsque votre véhicule tombe en panne. De la sécurisation
                  de votre position à l'appel d'un service de dépannage professionnel, ce guide vous accompagne dans
                  toutes les situations.
                </p>
                <Link href="/blog/guide-complet-panne-voiture">
                  <Button className="bg-blue-900 hover:bg-blue-800">
                    Lire l'article complet <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={`/placeholder.svg?height=400&width=600&text=${post.id}`}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-900 font-medium hover:text-yellow-400 transition-colors"
                >
                  Lire la suite <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-blue-900 text-white p-8 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Restez informé</h2>
            <p className="mb-6">
              Inscrivez-vous à notre newsletter pour recevoir nos derniers articles et conseils sur l'entretien de votre
              véhicule.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="px-4 py-2 rounded-md flex-1 text-gray-900"
                required
              />
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold">S'inscrire</Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
