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
}

export function TestimonialCarousel({ testimonials, autoplaySpeed = 5000 }: TestimonialCarouselProps) {
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

  return (
    <div
      className="relative overflow-hidden rounded-xl bg-white border border-gray-100 shadow-sm"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute top-4 right-4 z-10">
        <Quote className="h-12 w-12 text-olive/30" />
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
          <p className="text-lg md:text-xl italic text-muted-foreground mb-8 relative z-10">
            "{currentTestimonial.quote}"
          </p>

          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-olive/20 flex items-center justify-center">
              {currentTestimonial.avatar ? (
                <img
                  src={currentTestimonial.avatar || "/placeholder.svg"}
                  alt={currentTestimonial.name}
                  className="h-14 w-14 rounded-full object-cover"
                />
              ) : (
                <Users className="h-7 w-7 text-olive" />
              )}
            </div>
            <div>
              <h4 className="font-bold text-lg">{currentTestimonial.name}</h4>
              <p className="text-sm text-muted-foreground">
                {currentTestimonial.role}, {currentTestimonial.organization}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center p-4 border-t bg-olive/5">
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index < activeIndex ? "left" : "right")
                setActiveIndex(index)
              }}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex ? "w-8 bg-olive" : "w-2 bg-olive/30"
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
            className="h-8 w-8 rounded-full border-olive/30 hover:bg-olive/10 hover:border-olive/50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="h-8 w-8 rounded-full border-olive/30 hover:bg-olive/10 hover:border-olive/50"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

