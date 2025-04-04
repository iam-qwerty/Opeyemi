"use client"

import { useState } from "react"
import { Quote, Users } from "lucide-react"
import { AnimationWrapper } from "@/components/animation-wrapper"

interface TestimonialCardProps {
  name: string
  role: string
  organization: string
  quote: string
  avatar?: string
  delay?: number
}

export function TestimonialCard({ name, role, organization, quote, avatar, delay = 0 }: TestimonialCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const isLongQuote = quote.length > 150

  const displayQuote = isExpanded || !isLongQuote ? quote : `${quote.substring(0, 150)}...`

  return (
    <AnimationWrapper
      animation="scale-in"
      delay={delay}
      className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-olive/10 rounded-bl-[100px] -z-10"></div>

      <div className="absolute top-4 right-4">
        <Quote className="h-8 w-8 text-olive/30" />
      </div>

      <p className="italic text-muted-foreground mb-6 relative z-10">
        "{displayQuote}"
        {isLongQuote && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-1 text-olive hover:underline font-normal not-italic"
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
        )}
      </p>

      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-olive/20 flex items-center justify-center">
          {avatar ? (
            <img src={avatar || "/placeholder.svg"} alt={name} className="h-12 w-12 rounded-full object-cover" />
          ) : (
            <Users className="h-6 w-6 text-olive" />
          )}
        </div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-muted-foreground">
            {role}, {organization}
          </p>
        </div>
      </div>
    </AnimationWrapper>
  )
}

