import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-darkOlive-lighter bg-darkOlive-dark">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="font-heading text-2xl font-bold">
              <span className="gradient-text">OOG</span>
            </Link>
            <p className="mt-4 text-lavender/80">
              Driving climate action, empowering the next generation, and building sustainable communities.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium mb-4 text-lavender">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-lavender/70 hover:text-lavender transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/experience" className="text-lavender/70 hover:text-lavender transition-colors">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-lavender/70 hover:text-lavender transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/impact" className="text-lavender/70 hover:text-lavender transition-colors">
                    Impact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4 text-lavender">More</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-lavender/70 hover:text-lavender transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-lavender/70 hover:text-lavender transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-lavender/70 hover:text-lavender transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-4 text-lavender">Connect</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-accent/80 hover:text-lavender transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-accent/80 hover:text-lavender transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-accent/80 hover:text-lavender transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-accent/80 hover:text-lavender transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-accent/80 hover:text-lavender transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
            <div className="mt-6">
              <p className="text-sm text-lavender/70">
                &copy; {new Date().getFullYear()} Opeyemi Ogundeji. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
