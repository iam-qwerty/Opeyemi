import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"
import { AnimationWrapper } from "@/components/animation-wrapper"
import { StaggeredContainer } from "@/components/staggered-container"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function GalleryPage() {
  const images = [
    {
      src: "/images/ope-portrait-1.png",
      alt: "Opeyemi Ogundeji professional portrait",
      category: "Portrait",
    },
    {
      src: "/images/ope-portrait-2.png",
      alt: "Opeyemi Ogundeji formal portrait",
      category: "Portrait",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Leading a workshop with youth leaders",
      category: "Training",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Community engagement session",
      category: "Community",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Panel discussion on climate policy",
      category: "Speaking",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Field visit to a sustainable community project",
      category: "Fieldwork",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Receiving an award for community service",
      category: "Recognition",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Meeting with government officials",
      category: "Advocacy",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Facilitating a strategic planning session",
      category: "Training",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-darkOlive-dark">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 text-cream relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 cream-dot-pattern opacity-20"></div>
          <div className="container px-4 md:px-6">
            <AnimationWrapper animation="fade-in-up" className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Gallery & Bio</h1>
              <p className="text-xl text-cream/90">Images from my journey and official biography</p>
            </AnimationWrapper>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-12 olive-wave"></div>
        </section>

        {/* Bio Section */}
        <section className="py-16 md:py-24 relative">
          <div className="absolute top-20 left-0 w-32 h-32 olive-dot-pattern opacity-30"></div>
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <AnimationWrapper animation="fade-in-left" className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/ope-portrait-2.png"
                  alt="Opeyemi Ogundeji Official Portrait"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-olive/10 mix-blend-multiply"></div>
                <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-cream/30 rounded-tr-[30px] z-10"></div>
              </AnimationWrapper>
              <AnimationWrapper animation="fade-in-right" className="space-y-6">
                <h2 className="text-3xl font-bold text-olive-dark">Official Biography</h2>
                <div className="prose max-w-none text-olive-dark/80">
                  <p>
                    Opeyemi Ogundeji (OOG) is a dedicated advocate for climate action, youth empowerment, and inclusive
                    community development with over five years of experience in the field.
                  </p>
                  <p>
                    As a Senior Climate Policy Advisor, Opeyemi works at the intersection of policy, advocacy, and
                    grassroots action to champion climate solutions that are inclusive, impactful, and community-driven.
                    Their expertise spans training and capacity-building, project management, leadership development,
                    policy advocacy, and research.
                  </p>
                  <p>
                    Opeyemi has successfully led numerous high-impact initiatives, including comprehensive climate
                    resilience programs across vulnerable communities, youth leadership academies, and policy advocacy
                    campaigns that have resulted in tangible policy changes.
                  </p>
                  <p>
                    With a commitment to creating lasting impact and inspiring the next generation to lead with purpose,
                    Opeyemi approaches every project with empathy, strategic thinking, and a focus on measurable
                    results.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-olive text-cream hover:bg-olive-dark">
                    <Link href="#">
                      <Download className="mr-2 h-4 w-4" />
                      Download Full Bio
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-olive text-olive hover:bg-olive hover:text-cream">
                    <Link href="#">
                      <FileText className="mr-2 h-4 w-4" />
                      Download Headshots
                    </Link>
                  </Button>
                </div>
              </AnimationWrapper>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 md:py-24 relative">
          <div className="absolute bottom-10 right-0 w-40 h-40 olive-dot-pattern opacity-30"></div>
          <div className="container px-4 md:px-6">
            <AnimationWrapper animation="fade-in-up" className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-olive-dark">Photo Gallery</h2>
              <p className="text-olive-dark/80 max-w-[700px] mx-auto">A visual journey through my work and impact</p>
            </AnimationWrapper>
            <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={150}>
              {images.map((image, index) => (
                <div key={index} className="stagger-item group relative rounded-lg overflow-hidden shadow-sm">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-olive/10 mix-blend-multiply"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-olive-dark/70 to-cream opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <span className="text-cream font-medium">{image.alt}</span>
                    <span className="text-cream/80 text-sm">{image.category}</span>
                  </div>
                </div>
              ))}
            </StaggeredContainer>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 text-cream relative">
          <div className="absolute top-0 left-0 w-full h-12 transform rotate-180 olive-wave"></div>
          <div className="container px-4 md:px-6 text-center">
            <AnimationWrapper animation="scale-in" className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Media Resources?</h2>
              <p className="text-xl mb-8 max-w-[700px] mx-auto opacity-90">
                If you need additional photos, biography information, or other media resources for an event or
                publication, please get in touch.
              </p>
              <Button asChild size="lg" className="">
                <Link href="/contact">Contact Me</Link>
              </Button>
            </AnimationWrapper>
          </div>
        </section>

        <ScrollToTop />
      </main>
      <Footer />
    </div>
  )
}
