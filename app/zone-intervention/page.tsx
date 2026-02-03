import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title:
    "dépannsan | Dépannage Auto & Remorquage Val-d'Oise (95), Oise (60), Eure (27) et Île-de-France | Intervention 24h/24",
  description:
    "Service de dépannage auto et remorquage voiture en Val-d'Oise, Oise, Eure et Île-de-France. Intervention rapide 24h/24. Enlèvement d'épave gratuit. Dépanneur disponible immédiatement.",
  keywords:
    "dépannage auto 95, dépannage auto 60, dépannage auto 27, remorquage voiture Île-de-France, enlèvement épave gratuit, assistance panne rapide, dépanneur auto",
}

// Liste des villes du Val-d'Oise
const valDOiseVilles = [
  "Argenteuil",
  "Cergy",
  "Sarcelles",
  "Garges-lès-Gonesse",
  "Pontoise",
  "Franconville",
  "Goussainville",
  "Ermont",
  "Bezons",
  "Eaubonne",
  "Herblay",
  "Gonesse",
  "Villiers-le-Bel",
  "Taverny",
  "Saint-Ouen-l'Aumône",
  "Montmorency",
  "Cormeilles-en-Parisis",
  "Deuil-la-Barre",
  "Soisy-sous-Montmorency",
  "Montigny-lès-Cormeilles",
  "Domont",
  "Saint-Leu-la-Forêt",
  "Saint-Brice-sous-Forêt",
  "Enghien-les-Bains",
  "Éragny",
]

// Liste des villes de l'Oise
const oiseVilles = [
  "Beauvais",
  "Compiègne",
  "Creil",
  "Nogent-sur-Oise",
  "Senlis",
  "Chantilly",
  "Méru",
  "Montataire",
  "Clermont",
  "Noyon",
  "Pont-Sainte-Maxence",
  "Crépy-en-Valois",
  "Lamorlaye",
  "Gouvieux",
  "Liancourt",
  "Chambly",
  "Saint-Just-en-Chaussée",
  "Mouy",
  "Breteuil",
  "Estrées-Saint-Denis",
  "Grandvilliers",
  "Formerie",
  "Guiscard",
  "Saint-Leu-d'Esserent",
  "Le Meux",
  "Tillé",
]

// Liste des villes de l'Eure
const eureVilles = [
  "Évreux",
  "Vernon",
  "Louviers",
  "Val-de-Reuil",
  "Gisors",
  "Les Andelys",
  "Pont-Audemer",
  "Bernay",
  "Gaillon",
  "Pacy-sur-Eure",
  "Verneuil d'Avre et d'Iton",
  "Saint-André-de-l'Eure",
  "Bourg-Achard",
  "Aubevoye",
  "Le Neubourg",
  "Beuzeville",
  "Fleury-sur-Andelle",
  "Damville",
  "Thiberville",
  "Conches-en-Ouche",
  "Rugles",
]

// Liste des départements d'Île-de-France avec quelques villes principales
const ileDeFranceDepartements = [
  {
    nom: "Paris",
    code: "75",
    villes: [
      "Paris 1er",
      "Paris 2e",
      "Paris 3e",
      "Paris 4e",
      "Paris 5e",
      "Paris 6e",
      "Paris 7e",
      "Paris 8e",
      "Paris 9e",
      "Paris 10e",
      "Paris 11e",
      "Paris 12e",
      "Paris 13e",
      "Paris 14e",
      "Paris 15e",
      "Paris 16e",
      "Paris 17e",
      "Paris 18e",
      "Paris 19e",
      "Paris 20e",
    ],
  },
  {
    nom: "Hauts-de-Seine",
    code: "92",
    villes: [
      "Nanterre",
      "Boulogne-Billancourt",
      "Colombes",
      "Asnières-sur-Seine",
      "Courbevoie",
      "Rueil-Malmaison",
      "Levallois-Perret",
      "Neuilly-sur-Seine",
    ],
  },
  {
    nom: "Seine-Saint-Denis",
    code: "93",
    villes: [
      "Saint-Denis",
      "Montreuil",
      "Aubervilliers",
      "Aulnay-sous-Bois",
      "Drancy",
      "Noisy-le-Grand",
      "Pantin",
      "Bondy",
    ],
  },
  {
    nom: "Val-de-Marne",
    code: "94",
    villes: [
      "Créteil",
      "Vitry-sur-Seine",
      "Champigny-sur-Marne",
      "Saint-Maur-des-Fossés",
      "Ivry-sur-Seine",
      "Villejuif",
      "Maisons-Alfort",
    ],
  },
  {
    nom: "Seine-et-Marne",
    code: "77",
    villes: ["Meaux", "Chelles", "Melun", "Pontault-Combault", "Bussy-Saint-Georges", "Savigny-le-Temple", "Torcy"],
  },
  {
    nom: "Yvelines",
    code: "78",
    villes: [
      "Versailles",
      "Saint-Germain-en-Laye",
      "Mantes-la-Jolie",
      "Sartrouville",
      "Poissy",
      "Conflans-Sainte-Honorine",
      "Montigny-le-Bretonneux",
    ],
  },
  {
    nom: "Essonne",
    code: "91",
    villes: ["Évry", "Corbeil-Essonnes", "Massy", "Savigny-sur-Orge", "Palaiseau", "Athis-Mons", "Viry-Châtillon"],
  },
]

export default function ZoneInterventionPage() {
  return (
    <main className="flex min-h-screen flex-col py-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Zone d'intervention dépannage auto et remorquage en Val-d'Oise, Oise, Eure et Île-de-France"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight tracking-tight text-shadow">
            <span className="block mb-2 text-yellow-400">Dépannage & Remorquage</span>
            <span className="block">Val-d'Oise (95), Oise (60), Eure (27) et Île-de-France</span>
            <span className="block mt-2 text-2xl md:text-4xl">Intervention Rapide 24/7</span>
          </h1>
          <p className="text-xl max-w-3xl">
            Notre service de dépannage auto et remorquage voiture intervient dans le Val-d'Oise, l'Oise, l'Eure et toute
            l'Île-de-France pour vous assister rapidement.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-blue-900">Notre Zone d'Intervention Étendue</h2>
            <p className="text-lg mb-6 text-gray-700">
              <span className="font-semibold">dépannsan</span> est votre partenaire de confiance pour tous vos besoins
              de dépannage auto, remorquage et enlèvement d'épave dans le Val-d'Oise (95), l'Oise (60), l'Eure (27) et
              toute l'Île-de-France. Notre équipe de dépanneurs professionnels intervient 24h/24 et 7j/7 pour vous
              offrir un service rapide et efficace.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              Stratégiquement positionnés, nous garantissons des délais d'intervention parmi les plus courts de la
              région. Notre flotte de véhicules de dépannage et de remorquage est constamment prête à intervenir pour
              vous assister en cas de panne, d'accident ou pour l'enlèvement gratuit de votre épave.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
              <p className="font-medium">
                <span className="text-yellow-800">Intervention rapide :</span> Notre équipe de dépanneurs se déplace
                rapidement dans tous nos départements couverts pour vous dépanner dans les meilleurs délais.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-900 text-white p-6 rounded-lg text-center">
                <div className="text-yellow-400 text-4xl font-bold mb-2">24/7</div>
                <p>Disponibilité permanente tous les jours de l'année</p>
              </div>
              <div className="bg-blue-900 text-white p-6 rounded-lg text-center">
                <div className="text-yellow-400 text-4xl font-bold mb-2">30 min</div>
                <p>Temps d'intervention moyen</p>
              </div>
              <div className="bg-blue-900 text-white p-6 rounded-lg text-center">
                <div className="text-yellow-400 text-4xl font-bold mb-2">100%</div>
                <p>Satisfaction client garantie</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reste du contenu... */}
    </main>
  )
}
