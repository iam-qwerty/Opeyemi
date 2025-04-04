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
}

export function TestimonialGrid({ testimonials, initialDisplayCount = 3 }: TestimonialGridProps) {
  const [displayCount, setDisplayCount] = useState(initialDisplayCount)
  const hasMore = displayCount < testimonials.length
  const displayedTestimonials = testimonials.slice(0, displayCount)

  const handleShowMore = () => {
    setDisplayCount((prev) => Math.min(prev + 3, testimonials.length))
  }

  const handleShowLess = () => {
    setDisplayCount(initialDisplayCount)
  }

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
          />
        ))}
      </div>

      {testimonials.length > initialDisplayCount && (
        <div className="flex justify-center mt-8">
          {hasMore ? (
            <Button variant="outline" onClick={handleShowMore} className="group">
              Show More
              <ChevronDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
            </Button>
          ) : (
            <Button variant="outline" onClick={handleShowLess} className="group">
              Show Less
              <ChevronUp className="ml-2 h-4 w-4 group-hover:animate-bounce" />
            </Button>
          )}
        </div>
      )}
    </div>
  )
}

