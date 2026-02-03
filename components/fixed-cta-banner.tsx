"use client"

export default function FixedCTABanner() {
  const phoneNumber = "04XXXXXXXX" // Remplacez par votre numéro réel

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-yellow-400 text-black py-2 md:py-3 px-2 md:px-4 shadow-lg z-40">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <a
            href={`tel:${phoneNumber.replace(/\s/g, "")}`}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 md:py-2 px-2 md:px-4 text-sm md:text-base rounded transition-colors animate-pulse"
          >
            📞 APPELEZ MAINTENANT
          </a>
        </div>
      </div>
    </div>
  )
}
