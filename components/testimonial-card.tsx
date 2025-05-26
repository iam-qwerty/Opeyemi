"use client"

import { useState } from "react"
import { Quote, Users } from "lucide-react"
import { AnimationWrapper } from "@/components/animation-wrapper"
import Image from "next/image"

interface TestimonialCardProps {
  name: string
  role: string
  organization: string
  quote: string
  avatar?: string
  delay?: number
  variant?: "light" | "olive" // Add variant prop to support different backgrounds
}

export function TestimonialCard({
  name,
  role,
  organization,
  quote,
  avatar,
  delay = 0,
  variant = "light", // Default to light variant
}: TestimonialCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const isLongQuote = quote.length > 150

  const displayQuote = isExpanded || !isLongQuote ? quote : `${quote.substring(0, 150)}...`

  // Define styles based on variant - updated for dark theme
  const cardClasses =
    variant === "olive"
      ? "bg-darkOlive-lighter relative overflow-hidden border border-darkOlive-light shadow-sm p-6"
      : "feature-card relative overflow-hidden"

  const quoteClasses = "italic text-lavender/90 mb-6 relative z-10"

  const nameClasses = "font-bold text-lavender"

  const roleClasses = "text-sm text-lavender/80"

  const iconBgClasses = "h-12 w-12 rounded-full bg-lavender/20 flex items-center justify-center"

  const iconClasses = "h-6 w-6 text-lavender"

  const quoteIconClasses = "h-8 w-8 text-lavender/30"

  const readMoreClasses = "ml-1 text-olive hover:underline font-normal not-italic"

  const decorationClasses = "absolute top-0 right-0 w-24 h-24 bg-olive/10 rounded-bl-[100px] -z-10"

  return (
    <AnimationWrapper animation="scale-in" delay={delay} className={cardClasses}>
      <div className={decorationClasses}></div>

      <div className="absolute top-4 right-4">
        <Quote className={quoteIconClasses} />
      </div>

      <p className={quoteClasses}>
        &quot;{displayQuote}&quot;
        {isLongQuote && (
          <button onClick={() => setIsExpanded(!isExpanded)} className={readMoreClasses}>
            {isExpanded ? "Read less" : "Read more"}
          </button>
        )}
      </p>

      <div className="flex items-center gap-4">
        <div className={iconBgClasses}>
          {avatar ? (
            <Image src={avatar || "/placeholder.svg"} alt={name} fill className="h-12 w-12 rounded-full object-cover" />
          ) : (
            <Users className={iconClasses} />
          )}
        </div>
        <div>
          <h4 className={nameClasses}>{name}</h4>
          <p className={roleClasses}>
            {role}, {organization}
          </p>
        </div>
      </div>
    </AnimationWrapper>
  )
}
