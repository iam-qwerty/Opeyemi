import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { BookOpen, BarChart, Megaphone, FileText } from "lucide-react"
import { AnimationWrapper } from "@/components/animation-wrapper"
import { StaggeredContainer } from "@/components/staggered-container"
import { ParallaxSection } from "@/components/parallax-section"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function ServicesPage() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Executive Director",
      organization: "Climate Action Network",
      quote:
        "Opeyemi's expertise in climate policy and community engagement transformed our approach to advocacy. Their ability to connect policy with real community needs is unmatched.",
    },
    {
      id: 2,
      name: "Michael Okonkwo",
      role: "Program Manager",
      organization: "Youth Development Initiative",
      quote:
        "The training program Opeyemi designed for our youth leaders was transformative. Their approach combines theory with practical application in a way that creates lasting impact.",
    },
    {
      id: 3,
      name: "Amina Diallo",
      role: "Community Leader",
      organization: "Sustainable Futures",
      quote:
        "Opeyemi doesn't just talk about community development - they live it. Their approach empowered our community to take ownership of our development process with remarkable results.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container-custom">
            <AnimationWrapper animation="fade-in-up" className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">How I Can Help You</h1>
              <p className="text-xl text-muted-foreground">
                Expert services to drive impact and create sustainable change
              </p>
            </AnimationWrapper>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <StaggeredContainer className="grid md:grid-cols-2 gap-12 items-start" staggerDelay={300}>
              <div className="stagger-item bg-background rounded-lg border shadow-sm overflow-hidden">
                <div className="aspect-video relative bg-primary/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="h-16 w-16 text-primary/50" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Training & Capacity-Building</h3>
                  <p className="text-muted-foreground mb-4">
                    Customised workshops, masterclasses, and training programs for organisations, youth groups, and
                    professionals on advocacy, leadership, and social impact.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Leadership development workshops</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Advocacy strategy training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Climate action capacity building</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link href="/contact">Book a Session</Link>
                  </Button>
                </div>
              </div>

              <div className="stagger-item bg-background rounded-lg border shadow-sm overflow-hidden">
                <div className="aspect-video relative bg-primary/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Megaphone className="h-16 w-16 text-primary/50" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Speaking Engagements</h3>
                  <p className="text-muted-foreground mb-4">
                    Delivering keynotes, panel discussions, and expert facilitation on climate action/environmental
                    sustainability, youth development, and inclusive community development.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Conference keynotes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Panel moderation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Workshop facilitation</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link href="/contact">Book Me for Your Next Event</Link>
                  </Button>
                </div>
              </div>

              <div className="stagger-item bg-background rounded-lg border shadow-sm overflow-hidden">
                <div className="aspect-video relative bg-primary/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BarChart className="h-16 w-16 text-primary/50" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project Strategy & Management</h3>
                  <p className="text-muted-foreground mb-4">
                    Providing expert guidance on designing, implementing, and scaling development projects for long-term
                    impact.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Project design and planning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Implementation oversight</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Impact measurement and evaluation</span>
                    </li>
                  </ul>
                  <div className="bg-muted p-4 rounded-lg mb-6">
                    <h4 className="font-medium mb-2">Recent Projects Timeline</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Climate Resilience Initiative</span>
                        <span className="text-muted-foreground">2024</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Youth Leadership Academy</span>
                        <span className="text-muted-foreground">2023</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Community Development Program</span>
                        <span className="text-muted-foreground">2022</span>
                      </div>
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/contact">Discuss Your Project</Link>
                  </Button>
                </div>
              </div>

              <div className="stagger-item bg-background rounded-lg border shadow-sm overflow-hidden">
                <div className="aspect-video relative bg-primary/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FileText className="h-16 w-16 text-primary/50" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Policy, Advocacy & Nonprofit Consulting</h3>
                  <p className="text-muted-foreground mb-4">
                    Empowering organisations and governments to design inclusive policies, foster meaningful stakeholder
                    engagement, and amplify community voices - turning advocacy into real, lasting impact.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Policy development and analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Advocacy campaign strategy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Organizational development</span>
                    </li>
                  </ul>
                  <div className="bg-muted p-4 rounded-lg mb-6">
                    <h4 className="font-medium mb-2">Case Study: Policy Impact</h4>
                    <p className="text-sm text-muted-foreground">
                      Successfully advocated for the inclusion of youth representatives in national climate policy
                      formulation, resulting in more inclusive and effective climate action plans.
                    </p>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/contact">Schedule a Consultation</Link>
                  </Button>
                </div>
              </div>
            </StaggeredContainer>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container-custom">
            <AnimationWrapper animation="fade-in-up" className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">What People Say</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">Feedback from those I've worked with</p>
            </AnimationWrapper>
            <div className="max-w-3xl mx-auto">
              <AnimationWrapper animation="scale-in">
                <TestimonialCarousel testimonials={testimonials} />
              </AnimationWrapper>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <ParallaxSection speed={0.05} className="py-16 md:py-24">
          <div className="container-custom">
            <AnimationWrapper animation="scale-in" className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Work Together?</h2>
              <p className="text-xl text-muted-foreground">
                Let's collaborate to create meaningful impact and sustainable change
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </AnimationWrapper>
          </div>
        </ParallaxSection>

        <ScrollToTop />
      </main>
      <Footer />
    </div>
  )
}

