"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function DevisCalculator() {
  const [pickupAddress, setPickupAddress] = useState("")
  const [dropoffAddress, setDropoffAddress] = useState("")
  const [isValidating, setIsValidating] = useState(false)
  const [error, setError] = useState("")
  const [devis, setDevis] = useState<{
    pickupAddress: string
    dropoffAddress: string
    distance: number
    date: string
    total: number
    period: string
  } | null>(null)

  const ORIGIN_ADDRESS = "26 Rue du Château d'Eau, 95650 Boissy-l'Aillerie"
  const BASE_PRICE = 49.99
  const PRICE_PER_KM = 1

  // Fonction pour valider le format de l'adresse
  const isValidAddressFormat = (address: string) => {
    // Version plus souple qui vérifie simplement si l'adresse contient quelque chose
    return address.trim().length > 5
  }

  // Fonction pour calculer la distance entre deux adresses (simulation)
  const calculateDistance = (address1: string, address2: string): number => {
    // Dans une implémentation réelle, on utiliserait l'API Google Maps Distance Matrix
    // Ici, on simule un calcul de distance basé sur les codes postaux

    try {
      // Extraction des codes postaux
      const postalCode1 = address1.match(/\d{5}/)
      const postalCode2 = address2.match(/\d{5}/)

      if (!postalCode1 || !postalCode2) return 25 // Valeur par défaut

      // Conversion en nombres
      const code1 = Number.parseInt(postalCode1[0])
      const code2 = Number.parseInt(postalCode2[0])

      // Calcul d'une distance approximative basée sur la différence des codes postaux
      // C'est une simulation simpliste, pas un calcul réel de distance
      const baseDiff = Math.abs(code1 - code2)

      // Ajout d'un facteur aléatoire pour simuler des variations de distance
      const randomFactor = Math.random() * 10 - 5 // Entre -5 et +5

      // Calcul final avec un minimum de 5km et un maximum de 100km
      const distance = Math.max(5, Math.min(100, (baseDiff / 100) * 30 + randomFactor))

      return Math.round(distance * 10) / 10 // Arrondi à 1 décimale
    } catch (error) {
      return 25 // Valeur par défaut en cas d'erreur
    }
  }

  // Fonction pour déterminer si c'est une période d'urgence
  const isPeriodUrgent = () => {
    // Vérifier si c'est un weekend
    const dayOfWeek = new Date().getDay()
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      return { isUrgent: true, reason: "weekend" }
    }

    // Vérifier si c'est le soir (après 19h)
    const currentHour = new Date().getHours()
    if (currentHour >= 19 || currentHour < 8) {
      return { isUrgent: true, reason: "soir" }
    }

    return { isUrgent: false, reason: "normal" }
  }

  // Fonction pour calculer le devis
  const calculateQuote = (distance: number) => {
    // Prix de base
    const forfaitBase = BASE_PRICE

    // Arrondir la distance au km supérieur
    const distanceArrondie = Math.ceil(distance)

    // Majoration par km
    const majoration = distanceArrondie * PRICE_PER_KM

    // Déterminer si c'est une période d'urgence
    const { isUrgent, reason } = isPeriodUrgent()

    // Déterminer le texte de la période
    let periodeTexte = "Normal"
    if (isUrgent) {
      if (reason === "weekend") {
        periodeTexte = "Urgence offerte (weekend)"
      } else if (reason === "soir") {
        periodeTexte = "Urgence offerte (soir)"
      } else {
        periodeTexte = `Urgence offerte (${reason})`
      }
    }

    // Total
    const total = forfaitBase + majoration

    return {
      total: Number.parseFloat(total.toFixed(2)),
      period: periodeTexte,
    }
  }

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setDevis(null)

    // Validation des adresses de manière plus souple
    if (!pickupAddress.trim()) {
      setError("Veuillez saisir une adresse de prise en charge.")
      return
    }

    if (!dropoffAddress.trim()) {
      setError("Veuillez saisir une adresse de dépôt.")
      return
    }

    setIsValidating(true)

    try {
      // Simulation de validation d'adresse
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Calcul de la distance entre les deux adresses
      const distance = calculateDistance(pickupAddress, dropoffAddress)

      // Obtenir la date actuelle formatée
      const today = new Date()
      const formattedDate = `${String(today.getDate()).padStart(2, "0")}/${String(today.getMonth() + 1).padStart(2, "0")}/${today.getFullYear()}`

      // Calcul du devis
      const { total, period } = calculateQuote(distance)

      setDevis({
        pickupAddress,
        dropoffAddress,
        distance,
        date: formattedDate,
        total,
        period,
      })

      setIsValidating(false)
    } catch (error) {
      setError("Erreur lors du calcul du devis. Veuillez réessayer.")
      setIsValidating(false)
    }
  }

  return (
    <div className="max-w-md mx-auto">
      {!devis ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="pickup-address" className="block text-sm font-medium mb-1 text-gray-700">
              Adresse de prise en charge
            </label>
            <Input
              id="pickup-address"
              value={pickupAddress}
              onChange={(e) => setPickupAddress(e.target.value)}
              placeholder="Ex: 10 Rue de Paris, 75001 Paris"
              className="border-gray-300 focus:border-blue-900 focus:ring-0"
            />
          </div>

          <div>
            <label htmlFor="dropoff-address" className="block text-sm font-medium mb-1 text-gray-700">
              Adresse de dépôt
            </label>
            <Input
              id="dropoff-address"
              value={dropoffAddress}
              onChange={(e) => setDropoffAddress(e.target.value)}
              placeholder="Ex: 15 Avenue Victor Hugo, 75016 Paris"
              className="border-gray-300 focus:border-blue-900 focus:ring-0"
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800" disabled={isValidating}>
            {isValidating ? "..." : "Calculer"}
          </Button>
        </form>
      ) : (
        <div className="bg-white p-6 rounded-md border border-gray-200 shadow-sm">
          <div className="mb-6 text-center">
            <div className="text-sm text-gray-500 mb-1">Le prix est de</div>
            <div className="text-3xl font-bold text-blue-900">{devis.total.toFixed(2)} €</div>
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium mt-2">
              {devis.period}
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 p-3 rounded-md">
              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-1 text-gray-500 text-sm">Prise en charge:</div>
                <div className="col-span-2 text-gray-800 font-medium">{devis.pickupAddress}</div>
              </div>
            </div>

            <div className="bg-gray-50 p-3 rounded-md">
              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-1 text-gray-500 text-sm">Dépôt:</div>
                <div className="col-span-2 text-gray-800 font-medium">{devis.dropoffAddress}</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Date:</span>
                <span className="font-medium">{devis.date}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Distance:</span>
                <span className="font-medium">{devis.distance} km</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="text-sm font-medium mb-2">Détail du prix:</div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Forfait de base:</span>
                  <span>{BASE_PRICE.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Majoration distance:</span>
                  <span>{(devis.distance * PRICE_PER_KM).toFixed(2)} €</span>
                </div>
              </div>
            </div>
          </div>

          <Button
            onClick={() => setDevis(null)}
            variant="outline"
            className="w-full mt-6 border-gray-300 text-gray-600 hover:bg-gray-50"
          >
            Nouveau calcul
          </Button>
        </div>
      )}
    </div>
  )
}
