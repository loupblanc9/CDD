"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function DevisPage() {
  const [address, setAddress] = useState("")
  const [isValidating, setIsValidating] = useState(false)
  const [error, setError] = useState("")
  const [devis, setDevis] = useState<{
    validatedAddress: string
    distance: number
    total: number
    period: string
  } | null>(null)
  const [history, setHistory] = useState<string[]>([])
  const [requestCount, setRequestCount] = useState(0)
  const [lastRequestTime, setLastRequestTime] = useState(0)

  const ORIGIN_ADDRESS = "26 Rue du Château d'Eau, 95650 Boissy-l'Aillerie"
  const BASE_PRICE = 49.99
  const PRICE_PER_KM = 1

  // Fonction pour valider le format de l'adresse
  const isValidAddressFormat = (address: string) => {
    // Vérification basique du format: numéro, rue, code postal, ville
    const regex = /^\d+\s+.+,\s+\d{5}\s+.+$/
    return regex.test(address)
  }

  // Fonction pour simuler la validation d'adresse via l'API Geocoding
  const validateAddress = async (address: string) => {
    // Vérification de la limite de requêtes
    const now = Date.now()
    if (now - lastRequestTime < 6000 && requestCount >= 10) {
      setError("Limite de requêtes atteinte. Veuillez réessayer dans une minute.")
      return null
    }

    setIsValidating(true)
    setRequestCount((prev) => prev + 1)
    setLastRequestTime(now)

    try {
      // Simulation d'appel à l'API Geocoding
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Vérification du format de l'adresse
      if (!isValidAddressFormat(address)) {
        setError("Adresse invalide. Format requis : N° Rue, CP Ville. Exemple : 10 Rue de Paris, 75001 Paris")
        setIsValidating(false)
        return null
      }

      // Simulation de validation d'adresse
      // Dans une implémentation réelle, vous utiliseriez l'API Google Maps Geocoding
      const addressParts = address.split(",")
      if (addressParts.length < 2) {
        setError("Adresse incomplète. Veuillez inclure le numéro, la rue, le code postal et la ville.")
        setIsValidating(false)
        return null
      }

      const streetPart = addressParts[0].trim()
      const cityPart = addressParts[1].trim()

      // Vérification du code postal français
      const postalCodeMatch = cityPart.match(/(\d{5})/)
      if (!postalCodeMatch) {
        setError("Code postal invalide. Veuillez utiliser un code postal français à 5 chiffres.")
        setIsValidating(false)
        return null
      }

      // Formatage de l'adresse validée
      const postalCode = postalCodeMatch[1]
      const city = cityPart.replace(postalCode, "").trim()
      const validatedAddress = `${streetPart}, ${postalCode} ${city}`

      // Simulation de calcul de distance
      // Dans une implémentation réelle, vous utiliseriez l'API Google Maps Distance Matrix
      const distance = Math.floor(Math.random() * 50) + 10 // Distance aléatoire entre 10 et 60 km

      setIsValidating(false)
      return { validatedAddress, distance }
    } catch (error) {
      setError("Erreur lors de la validation de l'adresse. Veuillez réessayer.")
      setIsValidating(false)
      return null
    }
  }

  // Fonction pour calculer le devis
  const calculateQuote = (distance: number) => {
    const total = BASE_PRICE + distance * PRICE_PER_KM

    // Détermination de la période (simulation)
    const today = new Date()
    const isWeekend = today.getDay() === 0 || today.getDay() === 6
    const period = isWeekend ? "Urgence offerte (weekend)" : "Normal"

    return { total: Number.parseFloat(total.toFixed(2)), period }
  }

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setDevis(null)

    // Vérification basique du format
    if (!address.includes(",")) {
      setError("Adresse invalide. Format requis : N° Rue, CP Ville. Exemple : 10 Rue de Paris, 75001 Paris")
      return
    }

    const result = await validateAddress(address)
    if (result) {
      const { validatedAddress, distance } = result
      const { total, period } = calculateQuote(distance)

      setDevis({ validatedAddress, distance, total, period })

      // Ajout à l'historique
      if (!history.includes(validatedAddress)) {
        setHistory((prev) => [...prev, validatedAddress])
      }
    }
  }

  // Fonction pour suggérer une correction d'adresse
  const suggestCorrection = () => {
    // Simulation de suggestion d'adresse
    // Dans une implémentation réelle, vous utiliseriez les suggestions de l'API Google Maps
    const addressParts = address.split(",")
    if (addressParts.length >= 1) {
      const streetPart = addressParts[0].trim()

      // Exemple de correction simple
      if (!streetPart.match(/^\d+/)) {
        return `10 ${streetPart}, 75001 Paris`
      }
    }

    return "15 Avenue des Ternes, 75017 Paris"
  }

  // Fonction pour utiliser une suggestion
  const useCorrection = () => {
    setAddress(suggestCorrection())
  }

  // Fonction pour générer un lien Google Maps
  const getGoogleMapsLink = () => {
    if (!devis) return ""

    const origin = encodeURIComponent(ORIGIN_ADDRESS)
    const destination = encodeURIComponent(devis.validatedAddress)

    return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=driving`
  }

  return (
    <main className="flex min-h-screen flex-col py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-blue-900">Calculateur de Devis Transport</h1>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-bold mb-4 text-blue-900">Estimation de prix</h2>

            <form onSubmit={handleSubmit} className="mb-6">
              <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium mb-1">
                  Veuillez saisir l'adresse complète :
                </label>
                <Input
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="N° Rue, Code Postal Ville"
                  className="w-full"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  Format requis : N° Rue, CP Ville. Exemple : 10 Rue de Paris, 75001 Paris
                </p>
              </div>

              <Button type="submit" className="bg-blue-900 hover:bg-blue-800" disabled={isValidating}>
                {isValidating ? "Validation en cours..." : "Calculer le devis"}
              </Button>
            </form>

            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                <p className="text-red-700">{error}</p>

                {error.includes("incorrecte") && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-700 mb-2">Cette adresse semble incorrecte. Veuillez vérifier :</p>
                    <ul className="list-disc pl-5 text-sm text-gray-700 mb-2">
                      <li>Le numéro et nom de rue</li>
                      <li>Le code postal et ville</li>
                    </ul>
                    <p className="text-sm text-gray-700">Exemple valide : 15 Avenue des Ternes, 75017 Paris</p>

                    <Button onClick={useCorrection} variant="outline" className="mt-2 text-sm">
                      Essayer cette suggestion : {suggestCorrection()}
                    </Button>
                  </div>
                )}
              </div>
            )}

            {devis && (
              <div className="bg-gray-50 p-4 border border-gray-200 rounded-md font-mono whitespace-pre-wrap">
                <p className="font-bold text-green-700">[DEVIS VALIDE]</p>
                <p>Adresse livraison : {devis.validatedAddress}</p>
                <p>Distance : {devis.distance} km (depuis Boissy)</p>
                <p>
                  Calcul : {BASE_PRICE}€ + ({devis.distance} × {PRICE_PER_KM}€) = {devis.total}€
                </p>
                <p>Période : {devis.period}</p>
                <p className="font-bold">→ TOTAL : {devis.total}€</p>

                <div className="mt-4 font-sans">
                  <a
                    href={getGoogleMapsLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Voir l'itinéraire sur Google Maps
                  </a>
                </div>
              </div>
            )}
          </div>

          {history.length > 0 && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4 text-blue-900">Adresses récentes</h2>
              <ul className="space-y-2">
                {history.map((addr, index) => (
                  <li key={index} className="text-sm">
                    <button onClick={() => setAddress(addr)} className="text-blue-600 hover:underline text-left">
                      {addr}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
