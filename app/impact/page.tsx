import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Users, Globe, FileText, Award } from "lucide-react"
import { AnimationWrapper } from "@/components/animation-wrapper"
import { StaggeredContainer } from "@/components/staggered-container"
import { TestimonialCard } from "@/components/testimonial-card"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function ImpactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-olive text-cream overflow-hidden">
          <div className="container-custom">
            <AnimationWrapper animation="fade-in-up" className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Impact</h1>
              <p className="text-xl text-cream">Real stories of transformation and change</p>
            </AnimationWrapper>
          </div>
        </section>

        {/* Impact Stories Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom px-4 md:px-6">
            <div className="space-y-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <AnimationWrapper animation="fade-in-left" className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Climate Action Initiative"
                    fill
                    className="object-cover"
                  />
                </AnimationWrapper>
                <AnimationWrapper animation="fade-in-right" className="space-y-4">
                  <div className="inline-flex items-center gap-2 text-primary">
                    <Globe className="h-5 w-5" />
                    <span className="font-medium">Climate Action</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Empowering Communities for Climate Resilience</h2>
                  <p className="text-muted-foreground">
                    Led a comprehensive climate resilience program across 15 vulnerable communities, training local
                    leaders in adaptation strategies and sustainable practices.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <span className="block text-2xl font-bold text-primary">15</span>
                      <span className="text-sm text-muted-foreground">Communities</span>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <span className="block text-2xl font-bold text-primary">300+</span>
                      <span className="text-sm text-muted-foreground">Leaders Trained</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <h3 className="font-medium mb-2">Key Outcomes:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                        </div>
                        <span>Implemented sustainable water management systems in 10 communities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                        </div>
                        <span>Reduced climate vulnerability by 40% through targeted interventions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                        </div>
                        <span>Established community-led monitoring systems for early warning</span>
                      </li>
                    </ul>
                  </div>
                </AnimationWrapper>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <AnimationWrapper animation="fade-in-left" className="space-y-4 order-2 md:order-1">
                  <div className="inline-flex items-center gap-2 text-primary">
                    <Users className="h-5 w-5" />
                    <span className="font-medium">Youth Empowerment</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Youth Leadership Academy</h2>
                  <p className="text-muted-foreground">
                    Designed and implemented a comprehensive leadership program for young change-makers, focusing on
                    governance, advocacy, and community development skills.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <span className="block text-2xl font-bold text-primary">500+</span>
                      <span className="text-sm text-muted-foreground">Youth Trained</span>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <span className="block text-2xl font-bold text-primary">85%</span>
                      <span className="text-sm text-muted-foreground">Now Leading Initiatives</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <h3 className="font-medium mb-2">Key Outcomes:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                        </div>
                        <span>50 youth-led community projects implemented across the country</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                        </div>
                        <span>30% increase in youth representation in local governance structures</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                        </div>
                        <span>Created a national network of young leaders driving change</span>
                      </li>
                    </ul>
                  </div>
                </AnimationWrapper>
                <AnimationWrapper
                  animation="fade-in-right"
                  className="relative h-[300px] rounded-lg overflow-hidden order-1 md:order-2"
                >
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Youth Leadership Academy"
                    fill
                    className="object-cover"
                  />
                </AnimationWrapper>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <AnimationWrapper animation="fade-in-left" className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Policy Advocacy Initiative"
                    fill
                    className="object-cover"
                  />
                </AnimationWrapper>
                <AnimationWrapper animation="fade-in-right" className="space-y-4">
                  <div className="inline-flex items-center gap-2 text-primary">
                    <FileText className="h-5 w-5" />
                    <span className="font-medium">Policy Advocacy</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Inclusive Climate Policy Initiative</h2>
                  <p className="text-muted-foreground">
                    Led a coalition advocating for more inclusive and participatory approaches to national climate
                    policy development, centering marginalized communities in the process.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <span className="block text-2xl font-bold text-primary">20+</span>
                      <span className="text-sm text-muted-foreground">Organizations Mobilized</span>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <span className="block text-2xl font-bold text-primary">3</span>
                      <span className="text-sm text-muted-foreground">Policy Changes Achieved</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <h3 className="font-medium mb-2">Key Outcomes:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                        </div>
                        <span>
                          Secured mandatory inclusion of youth and community representatives in climate policy
                          formulation
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                        </div>
                        <span>Established a climate justice framework in national adaptation planning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                        </div>
                        <span>
                          Created a model for participatory policy development adopted by 3 government ministries
                        </span>
                      </li>
                    </ul>
                  </div>
                </AnimationWrapper>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Metrics Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container-custom">
            <AnimationWrapper animation="fade-in-up" className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Impact by the Numbers</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">Measuring the change we've created together</p>
            </AnimationWrapper>
            <StaggeredContainer className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={150}>
              <div className="stagger-item bg-white border border-gray-100 rounded-lg p-6 text-center shadow-sm">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <span className="block text-3xl font-bold text-primary">15,000+</span>
                <span className="text-muted-foreground">People Impacted</span>
              </div>
              <div className="stagger-item bg-white border border-gray-100 rounded-lg p-6 text-center shadow-sm">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <span className="block text-3xl font-bold text-primary">50+</span>
                <span className="text-muted-foreground">Communities Served</span>
              </div>
              <div className="stagger-item bg-white border border-gray-100 rounded-lg p-6 text-center shadow-sm">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <span className="block text-3xl font-bold text-primary">10+</span>
                <span className="text-muted-foreground">Policy Changes</span>
              </div>
              <div className="stagger-item bg-white border border-gray-100 rounded-lg p-6 text-center shadow-sm">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <span className="block text-3xl font-bold text-primary">25+</span>
                <span className="text-muted-foreground">Projects Led</span>
              </div>
            </StaggeredContainer>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-olive text-cream relative">
          <div className="absolute top-0 left-0 w-full h-12 transform rotate-180 olive-wave"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 cream-dot-pattern opacity-20 -z-10"></div>
          <div className="container-custom">
            <AnimationWrapper animation="fade-in-up" className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-cream">Voices of Impact</h2>
              <p className="text-cream/90 max-w-[700px] mx-auto">
                Stories from those whose lives have been transformed
              </p>
            </AnimationWrapper>
            <div className="grid md:grid-cols-3 gap-8">
              <TestimonialCard
                name="Fatima Ibrahim"
                role="Community Leader"
                organization="Coastal Village"
                quote="The climate resilience training completely transformed how our community approaches environmental challenges. We now have the tools and knowledge to protect our livelihoods against climate impacts."
                delay={100}
                variant="olive"
              />
              <TestimonialCard
                name="David Mensah"
                role="Youth Leader"
                organization="Urban Community"
                quote="Being part of the Youth Leadership Academy gave me the confidence and skills to start my own community development initiative. Today, we're addressing local challenges that were previously ignored."
                delay={200}
                variant="olive"
              />
              <TestimonialCard
                name="Grace Afolabi"
                role="Director"
                organization="Health Advocacy Network"
                quote="The policy advocacy training equipped our organization with strategies that helped us successfully advocate for inclusive healthcare policies. We now have a seat at the table where decisions are made."
                delay={300}
                variant="olive"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-cream">
          <div className="container-custom text-center">
            <AnimationWrapper animation="scale-in" className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Impact Together?</h2>
              <p className="text-xl mb-8 max-w-[700px] mx-auto opacity-90">
                Let's collaborate on projects that drive meaningful change and create sustainable impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-cream text-olive hover:text-cream border-white/70">
                  <Link href="/contact">Get In Touch</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white/70 hover:bg-white/10"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </AnimationWrapper>
          </div>
        </section>

        <ScrollToTop />
      </main>
      <Footer />
    </div>
  )
}
