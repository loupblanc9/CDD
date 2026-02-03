import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  location: string
  quote: string
  rating: number
}

export default function TestimonialCard({ name, location, quote, rating }: TestimonialCardProps) {
  return (
    <div className="bg-blue-800 p-6 rounded-lg">
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`} />
        ))}
      </div>
      <p className="mb-4 italic">"{quote}"</p>
      <div>
        <p className="font-bold">{name}</p>
        <p className="text-blue-200 text-sm">{location}</p>
      </div>
    </div>
  )
}
