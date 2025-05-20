import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, ChevronRight } from "lucide-react"
import { AnimationWrapper } from "@/components/animation-wrapper"
import { StaggeredContainer } from "@/components/staggered-container"
import { ParallaxSection } from "@/components/parallax-section"

export default function ExperiencePage() {
  const organizations = [
    "/placeholder-logo.svg",
    "/placeholder-logo.svg",
    "/placeholder-logo.svg",
    "/placeholder-logo.svg",
    "/placeholder-logo.svg",
    "/placeholder-logo.svg",
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-olive text-cream overflow-hidden">
          <div className="container-custom">
            <AnimationWrapper animation="fade-in-up" className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">My Experience</h1>
              <p className="text-xl text-cream">A journey of impact, leadership, and community transformation</p>
            </AnimationWrapper>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <AnimationWrapper animation="fade-in-up" className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">My Journey</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">
                Key milestones in my professional development
              </p>
            </AnimationWrapper>
            <div className="max-w-3xl mx-auto">
              <StaggeredContainer className="space-y-12" staggerDelay={300}>
                <div className="stagger-item relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="mb-1 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">2025 - Present</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Senior Climate Policy Advisor</h3>
                  <p className="text-muted-foreground mb-4">
                    Leading national and international climate policy initiatives, focusing on inclusive approaches that
                    center marginalized communities in climate action planning.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Advised on the development of national climate adaptation strategies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Led capacity building for 200+ community leaders on climate resilience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Represented stakeholders at COP30 climate negotiations</span>
                    </li>
                  </ul>
                </div>

                <div className="stagger-item relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="mb-1 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">2020 - 2024</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Program Director, Youth Empowerment Initiative</h3>
                  <p className="text-muted-foreground mb-4">
                    Designed and implemented comprehensive youth leadership programs focused on governance, advocacy,
                    and community development across multiple regions.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Developed curriculum reaching 5,000+ young leaders annually</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Secured and managed $2M in program funding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Established partnerships with 30+ government and civil society organizations</span>
                    </li>
                  </ul>
                </div>

                <div className="stagger-item relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="mb-1 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">2016 - 2019</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Community Development Specialist</h3>
                  <p className="text-muted-foreground mb-4">
                    Facilitated grassroots community development initiatives, focusing on sustainable practices and
                    inclusive decision-making processes.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Implemented community-based projects benefiting 15+ communities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Trained 300+ community leaders in project management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Conducted participatory research on local development needs</span>
                    </li>
                  </ul>
                </div>
              </StaggeredContainer>
            </div>
          </div>
        </section>

        {/* Organizations Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container-custom">
            <AnimationWrapper animation="fade-in-up" className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Organizations I've Collaborated With</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">
                Proud to have worked alongside these impactful organizations
              </p>
            </AnimationWrapper>
            <StaggeredContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8" staggerDelay={100}>
              {organizations.map((logo, index) => (
                <div
                  key={index}
                  className="stagger-item bg-background rounded-lg p-6 flex items-center justify-center shadow-sm hover:shadow-md transition-all"
                >
                  <Image
                    src={logo || "/placeholder.svg"}
                    alt={`Organization logo ${index + 1}`}
                    width={120}
                    height={60}
                    className="object-contain h-12"
                  />
                </div>
              ))}
            </StaggeredContainer>
          </div>
        </section>

        {/* CTA Section */}
        <ParallaxSection speed={0.05} className="py-16 md:py-24">
          <div className="container-custom">
            <AnimationWrapper animation="scale-in" className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Interested in Working Together?</h2>
              <p className="text-xl text-muted-foreground">Let's combine our expertise to create meaningful impact</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Get In Touch</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">View My Services</Link>
                </Button>
              </div>
            </AnimationWrapper>
          </div>
        </ParallaxSection>
      </main>
      <Footer />
    </div>
  )
}
