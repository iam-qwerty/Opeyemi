"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Quote, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Testimonial {
  id: number
  name: string
  role: string
  organization: string
  quote: string
  avatar?: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  autoplaySpeed?: number
  variant?: "light" | "olive" // Add variant prop to support different backgrounds
}

export function TestimonialCarousel({
  testimonials,
  autoplaySpeed = 5000,
  variant = "light", // Default to light variant
}: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<"left" | "right">("right")

  const nextTestimonial = useCallback(() => {
    if (isAnimating) return

    setIsAnimating(true)
    setDirection("right")
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }, [testimonials.length, isAnimating])

  const prevTestimonial = useCallback(() => {
    if (isAnimating) return

    setIsAnimating(true)
    setDirection("left")
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }, [testimonials.length, isAnimating])

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, autoplaySpeed)

    return () => clearInterval(interval)
  }, [nextTestimonial, isPaused, autoplaySpeed])

  if (testimonials.length === 0) {
    return null
  }

  const currentTestimonial = testimonials[activeIndex]

  // Define styles based on variant - updated for dark theme
  const containerClasses =
    "relative overflow-hidden rounded-xl bg-darkOlive-lighter border border-darkOlive-light shadow-sm"

  const quoteClasses = "text-lg md:text-xl italic text-lavender/90 mb-8 relative z-10"

  const nameClasses = "font-bold text-lg text-lavender"

  const roleClasses = "text-sm text-lavender/80"

  const iconBgClasses = "h-14 w-14 rounded-full bg-lavender/20 flex items-center justify-center"

  const iconClasses = "h-7 w-7 text-lavender"

  const quoteIconClasses = "h-12 w-12 text-lavender/30"

  const controlsClasses = "flex justify-between items-center p-4 border-t border-darkOlive-light bg-darkOlive/50"

  const indicatorActiveClasses = "w-8 bg-lavender"

  const indicatorInactiveClasses = "w-2 bg-lavender/30"

  const buttonClasses = "h-8 w-8 rounded-full border-lavender/30 hover:bg-lavender/10 hover:border-lavender/50"

  const buttonIconClasses = "h-4 w-4 text-lavender"

  return (
    <div className={containerClasses} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <div className="absolute top-4 right-4 z-10">
        <Quote className={quoteIconClasses} />
      </div>

      <div className="p-8 md:p-10 relative">
        <div
          className={`transition-all duration-500 ease-in-out ${
            isAnimating
              ? direction === "right"
                ? "translate-x-[-100px] opacity-0"
                : "translate-x-[100px] opacity-0"
              : "translate-x-0 opacity-100"
          }`}
        >
          <p className={quoteClasses}>"{currentTestimonial.quote}"</p>

          <div className="flex items-center gap-4">
            <div className={iconBgClasses}>
              {currentTestimonial.avatar ? (
                <img
                  src={currentTestimonial.avatar || "/placeholder.svg"}
                  alt={currentTestimonial.name}
                  className="h-14 w-14 rounded-full object-cover"
                />
              ) : (
                <Users className={iconClasses} />
              )}
            </div>
            <div>
              <h4 className={nameClasses}>{currentTestimonial.name}</h4>
              <p className={roleClasses}>
                {currentTestimonial.role}, {currentTestimonial.organization}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={controlsClasses}>
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index < activeIndex ? "left" : "right")
                setActiveIndex(index)
              }}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex ? indicatorActiveClasses : indicatorInactiveClasses
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className={buttonClasses}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className={buttonIconClasses} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className={buttonClasses}
            aria-label="Next testimonial"
          >
            <ChevronRight className={buttonIconClasses} />
          </Button>
        </div>
      </div>
    </div>
  )
}
