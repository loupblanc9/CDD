import Link from "next/link"
import { ArrowRight, Wrench, Truck, Trash } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  link: string
}

export default function ServiceCard({ title, description, icon, link }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "wrench":
        return <Wrench className="h-10 w-10" />
      case "truck":
        return <Truck className="h-10 w-10" />
      case "trash":
        return <Trash className="h-10 w-10" />
      default:
        return <Wrench className="h-10 w-10" />
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="text-yellow-400 bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mb-4">
        {getIcon()}
      </div>
      <h3 className="text-xl font-bold mb-2 text-blue-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        href={link}
        className="inline-flex items-center text-blue-900 font-medium hover:text-yellow-400 transition-colors"
      >
        En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  )
}
