"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface StaggeredContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  threshold?: number
  rootMargin?: string
  childrenClassName?: string
}

export function StaggeredContainer({
  children,
  className = "",
  staggerDelay = 100,
  threshold = 0.1,
  rootMargin = "0px 0px -100px 0px",
  childrenClassName = "stagger-item",
}: StaggeredContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const container = entry.target
            const items = Array.from(container.querySelectorAll(`.${childrenClassName}`))

            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("animate")
              }, index * staggerDelay)
            })

            observer.unobserve(container)
          }
        })
      },
      {
        threshold,
        rootMargin,
      },
    )

    const currentRef = containerRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [staggerDelay, threshold, rootMargin, childrenClassName])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}

