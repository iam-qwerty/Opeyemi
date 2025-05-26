"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet" // Components for mobile sidebar.
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils" // Utility for conditional class names.

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false) // track if the page has scrolled past 20 pixels.
  const [isOpen, setIsOpen] = useState(false) // mobile sidebar; open/close.

  // Effect to add/remove scroll event listener.
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20) // Set true if scrolled more than 20px.
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll) // Cleanup listener on unmount.
  }, []) // Runs once on mount and unmount.

  // Navigation links.
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/experience", label: "Experience" },
    { href: "/impact", label: "Impact" },
    { href: "/blog", label: "Blog" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      // 'cn' utility is used to conditionally apply classes based on 'isScrolled' state:
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-darkOlive-light/10 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container px-4 md:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-heading text-2xl font-bold">
          <span className="gradient-text">OOG</span>
        </Link>

        {/* Desktop navigation links (hidden on mobile). */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              // Text color transition based on 'isScrolled'.
              className={cn(
                "text-sm font-medium transition-colors",
                isScrolled ? "text-lavender/80 hover:text-lavender" : "text-lavender/90 hover:text-lavender",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu (hidden on desktop). */}
        <div className="flex md:hidden items-center gap-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              {/* <Button variant="ghost" size="icon" className={cn("h-9 w-9 text-lavender")}> */}
              <Button size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-darkOlive-light">
              <div className="flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-lavender/80 hover:text-lavender transition-colors"
                    onClick={() => setIsOpen(false)} // Close sheet on link click.
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}