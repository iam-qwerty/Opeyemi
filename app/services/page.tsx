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
        "Opeyemi doesn't just talk about community development - she lives it. Their approach empowered our community to take ownership of our development process with remarkable results.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-olive text-cream relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 cream-dot-pattern opacity-20"></div>
          <div className="container-custom">
            <AnimationWrapper animation="fade-in-up" className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">How I Can Help You</h1>
              <p className="text-xl text-cream/90">Expert services to drive impact and create sustainable change</p>
            </AnimationWrapper>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-12 olive-wave"></div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-cream-light relative">
          <div className="absolute top-20 left-0 w-32 h-32 olive-dot-pattern opacity-30"></div>
          <div className="container-custom">
            <StaggeredContainer className="grid md:grid-cols-2 gap-12 items-start" staggerDelay={300}>
              <div className="stagger-item feature-card overflow-hidden">
                <div className="aspect-video relative bg-olive/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="h-16 w-16 text-olive/50" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-cream/30 rounded-tl-[30px] z-10"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-olive-dark">Training & Capacity-Building</h3>
                  <p className="text-olive-dark/70 mb-4">
                    Customised workshops, masterclasses, and training programs for organisations, youth groups, and
                    professionals on advocacy, leadership, and social impact.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-olive/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-olive"></div>
                      </div>
                      <span className="text-olive-dark/80">Leadership development workshops</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-olive/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-olive"></div>
                      </div>
                      <span className="text-olive-dark/80">Advocacy strategy training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-olive/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-olive"></div>
                      </div>
                      <span className="text-olive-dark/80">Climate action capacity building</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full bg-olive text-cream hover:bg-olive-dark">
                    <Link href="/contact">Book a Session</Link>
                  </Button>
                </div>
              </div>

              <div className="stagger-item feature-card overflow-hidden">
                <div className="aspect-video relative bg-olive/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Megaphone className="h-16 w-16 text-olive/50" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-cream/30 rounded-tl-[30px] z-10"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-olive-dark">Speaking Engagements</h3>
                  <p className="text-olive-dark/70 mb-4">
                    Delivering keynotes, panel discussions, and expert facilitation on climate action/environmental
                    sustainability, youth development, and inclusive community development.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-olive/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-olive"></div>
                      </div>
                      <span className="text-olive-dark/80">Conference keynotes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-olive/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-olive"></div>
                      </div>
                      <span className="text-olive-dark/80">Panel moderation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-olive/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-olive"></div>
                      </div>
                      <span className="text-olive-dark/80">Workshop facilitation</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full bg-olive text-cream hover:bg-olive-dark">
                    <Link href="/contact">Book Me for Your Next Event</Link>
                  </Button>
                </div>
              </div>

              <div className="stagger-item feature-card overflow-hidden">
                <div className="aspect-video relative bg-olive/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BarChart className="h-16 w-16 text-olive/50" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-cream/30 rounded-tl-[30px] z-10"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-olive-dark">Project Strategy & Management</h3>
                  <p className="text-olive-dark/70 mb-4">
                    Providing expert guidance on designing, implementing, and scaling development projects for long-term
                    impact.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-olive/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-olive"></div>
                      </div>
                      <span className="text-olive-dark/80">Project design and planning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-olive/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-olive"></div>
                      </div>
                      <span className="text-olive-dark/80">Implementation oversight</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-olive/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-olive"></div>
                      </div>
                      <span className="text-olive-dark/80">Impact measurement and evaluation</span>
                    </li>
                  </ul>
                  <div className="bg-cream-light p-4 rounded-lg mb-6">
                    <h4 className="font-medium mb-2 text-olive-dark">Recent Projects Timeline</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-olive-dark">Climate Resilience Initiative</span>
                        <span className="text-olive-dark/70">2024</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-olive-dark">Youth Leadership Academy</span>
                        <span className="text-olive-dark/70">2023</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-olive-dark">Community Development Program</span>
                        <span className="text-olive-dark/70">2022</span>
                      </div>
                    </div>
                  </div>
                  <Button asChild className="w-full bg-olive text-cream hover:bg-olive-dark">
                    <Link href="/contact">Discuss Your Project</Link>
                  </Button>
                </div>
              </div>

              <div className="stagger-item feature-card overflow-hidden">
                <div className="aspect-video relative bg-olive/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FileText className="h-16 w-16 text-olive/50" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-cream/30 rounded-tl-[30px] z-10"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-olive-dark">Policy, Advocacy & Nonprofit Consulting</h3>
                  <p className="text-olive-dark/70 mb-4">
                    Empowering organisations and governments to design inclusive policies, foster meaningful stakeholder
                    engagement, and amplify community voices - turning advocacy into real, lasting impact.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-olive/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-olive"></div>
                      </div>
                      <span className="text-olive-dark/80">Policy development and analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-olive/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-olive"></div>
                      </div>
                      <span className="text-olive-dark/80">Advocacy campaign strategy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-olive/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-olive"></div>
                      </div>
                      <span className="text-olive-dark/80">Organizational development</span>
                    </li>
                  </ul>
                  <div className="bg-cream-light p-4 rounded-lg mb-6">
                    <h4 className="font-medium mb-2 text-olive-dark">Case Study: Policy Impact</h4>
                    <p className="text-sm text-olive-dark/70">
                      Successfully advocated for the inclusion of youth representatives in national climate policy
                      formulation, resulting in more inclusive and effective climate action plans.
                    </p>
                  </div>
                  <Button asChild className="w-full bg-olive text-cream hover:bg-olive-dark">
                    <Link href="/contact">Schedule a Consultation</Link>
                  </Button>
                </div>
              </div>
            </StaggeredContainer>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-olive text-cream relative">
          <div className="absolute top-0 left-0 w-full h-12 transform rotate-180 olive-wave"></div>
          <div className="absolute bottom-10 right-0 w-40 h-40 cream-dot-pattern opacity-20"></div>
          <div className="container-custom">
            <AnimationWrapper animation="fade-in-up" className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-cream">What People Say</h2>
              <p className="text-cream/90 max-w-[700px] mx-auto">Feedback from those I've worked with</p>
            </AnimationWrapper>
            <div className="max-w-3xl mx-auto">
              <AnimationWrapper animation="scale-in">
                <TestimonialCarousel testimonials={testimonials} variant="olive" />
              </AnimationWrapper>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <ParallaxSection speed={0.05} className="py-16 md:py-24 bg-olive text-cream relative">
          <div className="absolute top-0 left-0 w-full h-12 transform rotate-180 olive-wave" />
          <div className="container-custom">
            <AnimationWrapper animation="scale-in" className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Work Together?</h2>
              <p className="text-xl text-cream/90">
                Let's collaborate to create meaningful impact and sustainable change
              </p>
              <Button asChild size="lg" className="bg-cream text-olive-dark hover:bg-cream-dark">
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
