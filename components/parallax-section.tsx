"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  speed?: number
}

export function ParallaxSection({ children, className = "", speed = 0.1 }: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const scrollY = window.scrollY
      const sectionTop = sectionRef.current.offsetTop
      const sectionHeight = sectionRef.current.offsetHeight

      // Only apply parallax when the section is in view
      if (scrollY > sectionTop - window.innerHeight && scrollY < sectionTop + sectionHeight) {
        const yPos = (scrollY - sectionTop) * speed
        sectionRef.current.style.transform = `translateY(${yPos}px)`
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [speed])

  return (
    <div ref={sectionRef} className={`parallax ${className}`}>
      {children}
    </div>
  )
}

