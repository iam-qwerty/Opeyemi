import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight, Globe, Users, FileText, Building, Award, Star } from "lucide-react"
import { AnimationWrapper } from "@/components/animation-wrapper"
import { StaggeredContainer } from "@/components/staggered-container"
import { ParallaxSection } from "@/components/parallax-section"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
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
    {
      id: 4,
      name: "David Mensah",
      role: "Youth Leader",
      organization: "Urban Community",
      quote:
        "Being part of the Youth Leadership Academy gave me the confidence and skills to start my own community development initiative. Today, we're addressing local challenges that were previously ignored.",
    },
    {
      id: 5,
      name: "Grace Afolabi",
      role: "Director",
      organization: "Health Advocacy Network",
      quote:
        "The policy advocacy training equipped our organization with strategies that helped us successfully advocate for inclusive healthcare policies. We now have a seat at the table where decisions are made.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
          <div className="container-custom relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <AnimationWrapper animation="fade-in-left" className="space-y-6">
                <div className="inline-block rounded-lg bg-olive/10 px-3 py-1 text-sm text-olive">
                  For Global Impact and Meaningful Action
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                  <span className="olive-highlight">Welcome</span> to My World
                </h1>
                <p className="text-xl text-muted-foreground max-w-[600px]">
                  Hey there, It's great to have you here! I'm Opeyemi Ogundeji.
                </p>
                <p className="text-lg text-muted-foreground max-w-[600px]">
                  For over five years, I've been at the forefront of empowering marginalised groups, driving climate
                  action, decentralising policies, and building sustainable communities through inclusive development.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link href="/about">
                      Read More About Me
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="border-olive hover:bg-olive/10">
                    <Link href="/contact">Get In Touch</Link>
                  </Button>
                </div>
              </AnimationWrapper>
              <AnimationWrapper
                animation="fade-in-right"
                className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 border-2 border-olive/20 rounded-lg -z-10 transform rotate-3"></div>
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Opeyemi Ogundeji"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </AnimationWrapper>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-background to-background/50 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-12 olive-wave"></div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <AnimationWrapper animation="fade-in-up" className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">My Personal Values</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">
                These core values guide my approach to work and life
              </p>
            </AnimationWrapper>
            <StaggeredContainer className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center" staggerDelay={150}>
              {["Gratitude", "Resilience", "Respect", "Integrity", "Kindness"].map((value) => (
                <div
                  key={value}
                  className="stagger-item bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-medium">{value}</h3>
                </div>
              ))}
            </StaggeredContainer>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <AnimationWrapper animation="fade-in-up" className="text-center space-y-4 mb-12">
              <div className="inline-flex items-center gap-2 text-olive">
                <Star className="h-5 w-5 fill-olive" />
                <span className="font-medium">Testimonials</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">What People Say About My Work</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">
                Hear from the individuals and organizations I've had the privilege to work with
              </p>
            </AnimationWrapper>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <AnimationWrapper animation="fade-in-left" className="md:mt-8">
                <TestimonialCarousel testimonials={testimonials} />
              </AnimationWrapper>

              <AnimationWrapper animation="fade-in-right" className="space-y-6">
                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex -space-x-4">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="h-12 w-12 rounded-full bg-olive/20 flex items-center justify-center border-2 border-white"
                        >
                          <Users className="h-6 w-6 text-olive" />
                        </div>
                      ))}
                    </div>
                    <div>
                      <h4 className="font-bold">Impact Statistics</h4>
                      <p className="text-sm text-muted-foreground">From those I've worked with</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <span className="block text-2xl font-bold text-olive">50+</span>
                      <span className="text-sm text-muted-foreground">Projects Completed</span>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <span className="block text-2xl font-bold text-olive">95%</span>
                      <span className="text-sm text-muted-foreground">Client Satisfaction</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Leadership Training</span>
                        <span className="text-olive font-medium">98%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-olive rounded-full" style={{ width: "98%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Policy Development</span>
                        <span className="text-olive font-medium">92%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-olive rounded-full" style={{ width: "92%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Community Engagement</span>
                        <span className="text-olive font-medium">96%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-olive rounded-full" style={{ width: "96%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-bold mb-4">Want to share your experience?</h3>
                  <Button asChild>
                    <Link href="/contact">
                      Leave a Testimonial
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </AnimationWrapper>
            </div>
          </div>
        </section>

        {/* Passions Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container-custom">
            <AnimationWrapper animation="fade-in-up" className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">What I Am Passionate About</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">Areas where I focus my energy and expertise</p>
            </AnimationWrapper>
            <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={200}>
              <div className="stagger-item group bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-olive/10 rounded-bl-[100px] -z-10"></div>
                <Globe className="h-10 w-10 text-olive mb-4" />
                <h3 className="text-xl font-bold mb-2">Driving Climate Action & Sustainability</h3>
                <p className="text-muted-foreground mb-4">
                  I work at the intersection of policy, advocacy, and grassroots action to champion climate solutions
                  that are inclusive, impactful, and community-driven.
                </p>
                <Link href="/about" className="inline-flex items-center text-olive hover:underline">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="stagger-item group bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Empowering the Next Generation</h3>
                <p className="text-muted-foreground mb-4">
                  Young people are not just the future - they are the now! Through leadership development,
                  capacity-building, and hands-on mentorship, I support youth in taking bold steps.
                </p>
                <Link href="/about" className="inline-flex items-center text-primary hover:underline">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="stagger-item group bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <FileText className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Shaping Policies that Work for Everyone</h3>
                <p className="text-muted-foreground mb-4">
                  Great policies should be more than just documents - they should work for people. I bridge the gap
                  between policies and the communities they serve.
                </p>
                <Link href="/about" className="inline-flex items-center text-primary hover:underline">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="stagger-item group bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <Building className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Building Sustainable & Inclusive Communities</h3>
                <p className="text-muted-foreground mb-4">
                  I believe strong communities are built on collaboration, inclusion, and action. Whether it's
                  mobilising grassroots movements, or creating local development blueprints.
                </p>
                <Link href="/about" className="inline-flex items-center text-primary hover:underline">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="stagger-item group bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <Award className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Strengthening Nonprofits for Greater Impact</h3>
                <p className="text-muted-foreground mb-4">
                  I help mission-driven organisations scale their work, optimise their impact, and navigate challenges.
                  From strategy to impact measurement.
                </p>
                <Link href="/about" className="inline-flex items-center text-primary hover:underline">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="stagger-item flex items-center justify-center bg-olive/20 rounded-lg p-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-4 text-olive-dark">Want to collaborate?</h3>
                  <Button asChild className="bg-olive hover:bg-olive-dark">
                    <Link href="/contact">Let's Talk</Link>
                  </Button>
                </div>
              </div>
            </StaggeredContainer>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <AnimationWrapper animation="fade-in-up" className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">My Core Expertise</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">
                Areas where I've developed specialized knowledge and skills
              </p>
            </AnimationWrapper>
            <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={200}>
              <div className="stagger-item bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="aspect-video relative bg-olive/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-primary font-medium">Video Placeholder</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Training & Capacity-Building</h3>
                  <p className="text-muted-foreground">
                    Designing transformative learning programs that equip individuals and organisations to lead and
                    advocate effectively for positive systemic change.
                  </p>
                </div>
              </div>
              <div className="stagger-item bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project Management</h3>
                  <p className="text-muted-foreground mb-4">
                    Executing high-impact development projects with strategic planning, stakeholder engagement, and
                    measurable results.
                  </p>
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <div className="text-center">
                      <span className="block text-2xl font-bold text-primary">50+</span>
                      <span className="text-sm text-muted-foreground">Projects Led</span>
                    </div>
                    <div className="text-center">
                      <span className="block text-2xl font-bold text-primary">10k+</span>
                      <span className="text-sm text-muted-foreground">Beneficiaries</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stagger-item bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Leadership & Community Building</h3>
                  <p className="text-muted-foreground mb-4">
                    Mobilising, inspiring, and fostering collaboration to strengthen communities and drive sustainable
                    change.
                  </p>
                  <div className="aspect-video relative bg-muted rounded-lg">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-primary font-medium">Map Visualization</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stagger-item bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Policy Advocacy & Decentralisation</h3>
                  <p className="text-muted-foreground mb-4">
                    Engaging stakeholders, amplifying voices, and shaping inclusive policies that drive real change at
                    all levels.
                  </p>
                  <div className="p-4 border rounded-lg hover:bg-muted transition-colors cursor-pointer">
                    <p className="text-sm font-medium">Hover to view case study</p>
                    <div className="hidden group-hover:block mt-2">
                      <p className="text-sm">
                        Successfully advocated for youth inclusion in national climate policy formulation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stagger-item bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Research & Policy Analysis</h3>
                  <p className="text-muted-foreground mb-4">
                    Generating data-driven insights to inform policies, advocacy strategies, and development
                    initiatives.
                  </p>
                  <Button variant="outline" className="w-full">
                    View Research Reports
                  </Button>
                </div>
              </div>
            </StaggeredContainer>
          </div>
        </section>

        {/* CTA Section */}
        <ParallaxSection speed={0.05} className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <AnimationWrapper animation="scale-in" className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make an Impact Together?</h2>
              <p className="text-xl mb-8 max-w-[700px] mx-auto opacity-90">
                Let's collaborate on projects that drive meaningful change and create sustainable impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
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
        </ParallaxSection>

        <ScrollToTop />
      </main>
      <Footer />
    </div>
  )
}

