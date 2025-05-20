import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Globe, Users, FileText, Building, Award, Heart, Shield, Smile, Check } from "lucide-react"
import { AnimationWrapper } from "@/components/animation-wrapper"
import { StaggeredContainer } from "@/components/staggered-container"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section with Olive Background */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-olive text-cream relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 cream-dot-pattern opacity-20"></div>
          <div className="container-custom">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <AnimationWrapper animation="fade-in-left" className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-cream">About Me</h1>
                <p className="text-xl text-cream/90 max-w-[600px]">
                  I'm Opeyemi Ogundeji - but feel free to call me OOG. For over five years, I've been at the forefront
                  of empowering marginalised groups, driving climate action, decentralising policies, and building
                  sustainable communities.
                </p>
                <p className="text-lg text-cream/80">
                  My work isn't just about making a difference - it's about creating lasting impact and inspiring the
                  next generation to lead with purpose. Execution, delivery, and impact? That's my zone. I don't just
                  get things done - I do them exceptionally well, with empathy and strategy.
                </p>
              </AnimationWrapper>
              <AnimationWrapper
                animation="fade-in-right"
                className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 border-2 border-cream/20 rounded-lg -z-10 transform rotate-3"></div>
                <Image
                  src="/images/ope-portrait-2.png"
                  alt="Opeyemi Ogundeji"
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-cream/10 rounded-tl-[50px] z-10"></div>
              </AnimationWrapper>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-12 olive-wave"></div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-cream-light relative">
          <div className="absolute top-20 left-0 w-32 h-32 olive-dot-pattern opacity-30"></div>
          <div className="container-custom">
            <AnimationWrapper animation="fade-in-up" className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-olive-dark">My Personal Values</h2>
              <p className="text-olive-dark/80 max-w-[700px] mx-auto">
                These core values guide my approach to work and life
              </p>
            </AnimationWrapper>
            <StaggeredContainer className="grid md:grid-cols-5 gap-8" staggerDelay={150}>
              <div className="stagger-item feature-card text-center">
                <div className="bg-olive/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-olive" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-olive-dark">Gratitude</h3>
                <p className="text-olive-dark/70">
                  Appreciating opportunities and acknowledging those who contribute to my journey.
                </p>
              </div>
              <div className="stagger-item feature-card text-center">
                <div className="bg-olive/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-olive" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-olive-dark">Resilience</h3>
                <p className="text-olive-dark/70">
                  Persevering through challenges and adapting to changing circumstances.
                </p>
              </div>
              <div className="stagger-item feature-card text-center">
                <div className="bg-olive/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-olive" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-olive-dark">Respect</h3>
                <p className="text-olive-dark/70">
                  Honoring the dignity, perspectives, and contributions of all individuals.
                </p>
              </div>
              <div className="stagger-item feature-card text-center">
                <div className="bg-olive/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-olive" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-olive-dark">Integrity</h3>
                <p className="text-olive-dark/70">
                  Maintaining strong moral principles and ethical standards in all actions.
                </p>
              </div>
              <div className="stagger-item feature-card text-center">
                <div className="bg-olive/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Smile className="h-8 w-8 text-olive" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-olive-dark">Kindness</h3>
                <p className="text-olive-dark/70">
                  Approaching every interaction with compassion, empathy, and genuine care.
                </p>
              </div>
            </StaggeredContainer>
          </div>
        </section>

        {/* Passions Section with Olive Pattern Background */}
        <section className="py-16 md:py-24 bg-cream-pattern relative">
          <div className="absolute bottom-10 right-0 w-40 h-40 olive-dot-pattern opacity-30"></div>
          <div className="container-custom">
            <AnimationWrapper animation="fade-in-up" className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-olive-dark">What I Am Passionate About</h2>
              <p className="text-olive-dark/80 max-w-[700px] mx-auto">Areas where I focus my energy and expertise</p>
            </AnimationWrapper>
            <div className="space-y-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <AnimationWrapper animation="fade-in-left" className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Climate Action"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-olive/20 mix-blend-multiply"></div>
                  <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-cream/30 rounded-tr-[30px] z-10"></div>
                </AnimationWrapper>
                <AnimationWrapper animation="fade-in-right" className="space-y-4">
                  <div className="inline-flex items-center gap-2 text-olive">
                    <Globe className="h-5 w-5" />
                    <span className="font-medium">Climate Action & Sustainability</span>
                  </div>
                  <h3 className="text-2xl font-bold text-olive-dark">Driving Climate Action & Sustainability</h3>
                  <p className="text-olive-dark/70">
                    I work at the intersection of policy, advocacy, and grassroots action to champion climate solutions
                    that are inclusive, impactful, and community-driven. From influencing national climate policies to
                    equipping young leaders with tools for local adaptation, I help turn ideas into measurable change.
                  </p>
                </AnimationWrapper>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <AnimationWrapper animation="fade-in-left" className="space-y-4 order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 text-olive">
                    <Users className="h-5 w-5" />
                    <span className="font-medium">Youth Empowerment</span>
                  </div>
                  <h3 className="text-2xl font-bold text-olive-dark">Empowering the Next Generation</h3>
                  <p className="text-olive-dark/70">
                    Young people are not just the future - they are the now! Through leadership development,
                    capacity-building, and hands-on mentorship, I support youth in taking bold steps in governance,
                    advocacy, and community transformation.
                  </p>
                </AnimationWrapper>
                <AnimationWrapper
                  animation="fade-in-right"
                  className="relative h-[300px] rounded-lg overflow-hidden order-1 lg:order-2"
                >
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Youth Empowerment"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-olive/20 mix-blend-multiply"></div>
                  <div className="absolute -top-2 -right-2 w-16 h-16 bg-cream/30 rounded-bl-[30px] z-10"></div>
                </AnimationWrapper>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <AnimationWrapper animation="fade-in-left" className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Policy Advocacy"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-olive/20 mix-blend-multiply"></div>
                  <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-cream/30 rounded-tr-[30px] z-10"></div>
                </AnimationWrapper>
                <AnimationWrapper animation="fade-in-right" className="space-y-4">
                  <div className="inline-flex items-center gap-2 text-olive">
                    <FileText className="h-5 w-5" />
                    <span className="font-medium">Policy & Advocacy</span>
                  </div>
                  <h3 className="text-2xl font-bold text-olive-dark">Shaping Policies that Work for Everyone</h3>
                  <p className="text-olive-dark/70">
                    Great policies should be more than just documents - they should work for people. I bridge the gap
                    between policies and the communities they serve, advocating for decentralised, inclusive governance
                    where every voice matters and real impact happens.
                  </p>
                </AnimationWrapper>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <AnimationWrapper animation="fade-in-left" className="space-y-4 order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 text-olive">
                    <Building className="h-5 w-5" />
                    <span className="font-medium">Community Development</span>
                  </div>
                  <h3 className="text-2xl font-bold text-olive-dark">Building Sustainable & Inclusive Communities</h3>
                  <p className="text-olive-dark/70">
                    I believe strong communities are built on collaboration, inclusion, and action. Whether it's
                    mobilising grassroots movements, or creating local development blueprints, I help communities take
                    ownership of their growth and resilience.
                  </p>
                </AnimationWrapper>
                <AnimationWrapper
                  animation="fade-in-right"
                  className="relative h-[300px] rounded-lg overflow-hidden order-1 lg:order-2"
                >
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Community Development"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-olive/20 mix-blend-multiply"></div>
                  <div className="absolute -top-2 -right-2 w-16 h-16 bg-cream/30 rounded-bl-[30px] z-10"></div>
                </AnimationWrapper>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <AnimationWrapper animation="fade-in-left" className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Nonprofit Strengthening"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-olive/20 mix-blend-multiply"></div>
                  <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-cream/30 rounded-tr-[30px] z-10"></div>
                </AnimationWrapper>
                <AnimationWrapper animation="fade-in-right" className="space-y-4">
                  <div className="inline-flex items-center gap-2 text-olive">
                    <Award className="h-5 w-5" />
                    <span className="font-medium">Nonprofit Excellence</span>
                  </div>
                  <h3 className="text-2xl font-bold text-olive-dark">Strengthening Nonprofits for Greater Impact</h3>
                  <p className="text-olive-dark/70">
                    I help mission-driven organisations scale their work, optimise their impact, and navigate
                    challenges. From strategy and stakeholder engagement to program execution and impact measurement, I
                    ensure nonprofits are equipped for long-term success.
                  </p>
                </AnimationWrapper>
              </div>
            </div>
            <AnimationWrapper animation="scale-in" className="mt-12 text-center">
              <Button asChild size="lg" className="bg-olive text-cream hover:bg-olive-dark">
                <Link href="/contact">Let's Collaborate</Link>
              </Button>
            </AnimationWrapper>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="absolute top-20 right-0 w-40 h-40 olive-dot-pattern opacity-20"></div>
          <div className="container-custom">
            <AnimationWrapper animation="fade-in-up" className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-olive-dark">My Core Expertise</h2>
              <p className="text-olive-dark/80 max-w-[700px] mx-auto">
                Areas where I've developed specialized knowledge and skills
              </p>
            </AnimationWrapper>
            <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={200}>
              <div className="stagger-item feature-card overflow-hidden">
                <div className="aspect-video relative bg-olive/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-olive font-medium">Video Placeholder</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-olive-dark">Training & Capacity-Building</h3>
                  <p className="text-olive-dark/70">
                    Designing transformative learning programs that equip individuals and organisations to lead and
                    advocate effectively for positive systemic change.
                  </p>
                </div>
              </div>
              <div className="stagger-item feature-card overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-olive-dark">Project Management</h3>
                  <p className="text-olive-dark/70 mb-4">
                    Executing high-impact development projects with strategic planning, stakeholder engagement, and
                    measurable results.
                  </p>
                  <div className="flex justify-between items-center p-4 bg-cream-light rounded-lg">
                    <div className="text-center">
                      <span className="block text-2xl font-bold text-olive">50+</span>
                      <span className="text-sm text-olive-dark/70">Projects Led</span>
                    </div>
                    <div className="text-center">
                      <span className="block text-2xl font-bold text-olive">10k+</span>
                      <span className="text-sm text-olive-dark/70">Beneficiaries</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stagger-item feature-card overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-olive-dark">Leadership & Community Building</h3>
                  <p className="text-olive-dark/70 mb-4">
                    Mobilising, inspiring, and fostering collaboration to strengthen communities and drive sustainable
                    change.
                  </p>
                  <div className="aspect-video relative bg-cream-light rounded-lg">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-olive font-medium">Map Visualization</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stagger-item feature-card overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-olive-dark">Policy Advocacy & Decentralisation</h3>
                  <p className="text-olive-dark/70 mb-4">
                    Engaging stakeholders, amplifying voices, and shaping inclusive policies that drive real change at
                    all levels.
                  </p>
                  <div className="p-4 border border-cream rounded-lg hover:bg-cream-light transition-colors cursor-pointer">
                    <p className="text-sm font-medium text-olive-dark">Hover to view case study</p>
                    <div className="hidden group-hover:block mt-2">
                      <p className="text-sm text-olive-dark/70">
                        Successfully advocated for youth inclusion in national climate policy formulation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stagger-item feature-card overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-olive-dark">Research & Policy Analysis</h3>
                  <p className="text-olive-dark/70 mb-4">
                    Generating data-driven insights to inform policies, advocacy strategies, and development
                    initiatives.
                  </p>
                  <Button variant="outline" className="w-full border-olive text-olive hover:bg-olive hover:text-cream">
                    View Research Reports
                  </Button>
                </div>
              </div>
            </StaggeredContainer>
          </div>
        </section>

        {/* CTA Section with Olive Background */}
        <section className="py-16 md:py-24 bg-olive text-cream relative">
          <div className="absolute top-0 left-0 w-full h-12 transform rotate-180 olive-wave"></div>
          <div className="container-custom text-center">
            <AnimationWrapper animation="scale-in" className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Impact Together?</h2>
              <p className="text-xl mb-8 max-w-[700px] mx-auto opacity-90">
                Let's collaborate on projects that drive meaningful change and create sustainable impact.
              </p>
              <Button asChild size="lg" variant="secondary" className="bg-cream text-olive-dark hover:bg-cream-dark">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </AnimationWrapper>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
