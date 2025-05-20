"use client"

import { useState } from "react"
import { TestimonialCard } from "@/components/testimonial-card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  role: string
  organization: string
  quote: string
  avatar?: string
}

interface TestimonialGridProps {
  testimonials: Testimonial[]
  initialDisplayCount?: number
  variant?: "light" | "olive" // Add variant prop
}

export function TestimonialGrid({
  testimonials,
  initialDisplayCount = 3,
  variant = "light", // Default to light variant
}: TestimonialGridProps) {
  const [displayCount, setDisplayCount] = useState(initialDisplayCount)
  const hasMore = displayCount < testimonials.length
  const displayedTestimonials = testimonials.slice(0, displayCount)

  const handleShowMore = () => {
    setDisplayCount((prev) => Math.min(prev + 3, testimonials.length))
  }

  const handleShowLess = () => {
    setDisplayCount(initialDisplayCount)
  }

  // Define button styles based on variant
  const buttonClasses =
    variant === "olive"
      ? "bg-cream text-olive-dark hover:bg-cream-dark group"
      : "bg-background text-olive hover:bg-olive/10 group"

  const buttonIconClasses =
    variant === "olive"
      ? "ml-2 h-4 w-4 text-olive-dark group-hover:animate-bounce"
      : "ml-2 h-4 w-4 group-hover:animate-bounce"

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedTestimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            role={testimonial.role}
            organization={testimonial.organization}
            quote={testimonial.quote}
            avatar={testimonial.avatar}
            delay={index * 100}
            variant={variant}
          />
        ))}
      </div>

      {testimonials.length > initialDisplayCount && (
        <div className="flex justify-center mt-8">
          {hasMore ? (
            <Button
              variant={variant === "olive" ? "secondary" : "outline"}
              onClick={handleShowMore}
              className={buttonClasses}
            >
              Show More
              <ChevronDown className={buttonIconClasses} />
            </Button>
          ) : (
            <Button
              variant={variant === "olive" ? "secondary" : "outline"}
              onClick={handleShowLess}
              className={buttonClasses}
            >
              Show Less
              <ChevronUp className={buttonIconClasses} />
            </Button>
          )}
        </div>
      )}
    </div>
  )
}
