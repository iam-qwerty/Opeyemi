"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface AnimationWrapperProps {
  children: ReactNode
  className?: string
  animation: "fade-in-up" | "fade-in-left" | "fade-in-right" | "scale-in" | "stagger-item"
  delay?: number
  threshold?: number
  rootMargin?: string
}

export function AnimationWrapper({
  children,
  className = "",
  animation,
  delay = 0,
  threshold = 0.2,
  rootMargin = "0px 0px -100px 0px",
}: AnimationWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate")
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [delay, threshold, rootMargin])

  return (
    <div ref={ref} className={`${animation} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

