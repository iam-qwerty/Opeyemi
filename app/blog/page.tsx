import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import { AnimationWrapper } from "@/components/animation-wrapper"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "CSO Tasks FG on Youth Engagement for Better Climate Policy Formulation",
      excerpt:
        "Civil Society Organizations are calling on the Federal Government to prioritize youth engagement in climate policy development...",
      date: "March 15, 2025",
      image: "/placeholder.svg?height=300&width=500",
      url: "https://www.vanguardngr.com/2025/03/cso-tasks-fg-on-youth-engagement-for-better-climate-policy-formulation/",
      source: "Vanguard Nigeria",
    },
    {
      id: 2,
      title: "Building Resilient Communities Through Inclusive Development",
      excerpt:
        "How community-led initiatives are transforming local development and creating sustainable solutions to climate challenges...",
      date: "February 28, 2025",
      image: "/placeholder.svg?height=300&width=500",
      url: "#",
      source: "Development Today",
    },
    {
      id: 3,
      title: "The Future of Youth Leadership in Governance",
      excerpt:
        "Exploring the growing role of young leaders in shaping policies and driving meaningful change across sectors...",
      date: "January 20, 2025",
      image: "/placeholder.svg?height=300&width=500",
      url: "#",
      source: "Leadership Insights",
    },
    {
      id: 4,
      title: "Climate Justice: Centering Marginalized Communities in Climate Action",
      excerpt:
        "Why effective climate policies must prioritize the needs and perspectives of those most vulnerable to climate impacts...",
      date: "December 10, 2024",
      image: "/placeholder.svg?height=300&width=500",
      url: "#",
      source: "Climate Forum",
    },
    {
      id: 5,
      title: "Strengthening Nonprofits: Strategies for Greater Impact",
      excerpt:
        "Key approaches for mission-driven organizations to scale their work and optimize their impact in challenging environments...",
      date: "November 5, 2024",
      image: "/placeholder.svg?height=300&width=500",
      url: "#",
      source: "Nonprofit Quarterly",
    },
    {
      id: 6,
      title: "Decentralizing Policy Development: A Case for Inclusive Governance",
      excerpt: "How participatory approaches to policy formulation lead to more effective and sustainable outcomes...",
      date: "October 18, 2024",
      image: "/placeholder.svg?height=300&width=500",
      url: "#",
      source: "Governance Review",
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
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">In The News</h1>
              <p className="text-xl text-cream/90">Articles, features, and insights from my work</p>
            </AnimationWrapper>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-12 olive-wave"></div>
        </section>

        {/* Featured Article */}
        <section className="py-8 md:py-12 bg-cream-light">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center feature-card">
              <AnimationWrapper
                animation="fade-in-left"
                className="relative h-[250px] md:h-[300px] rounded-lg overflow-hidden"
              >
                <Image
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-olive/20 mix-blend-multiply"></div>
                <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-cream/30 rounded-tr-[30px] z-10"></div>
              </AnimationWrapper>
              <AnimationWrapper animation="fade-in-right" className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-olive-dark/70">
                  <Calendar className="h-4 w-4 text-olive" />
                  <span>{blogPosts[0].date}</span>
                  <span className="px-2">•</span>
                  <span>{blogPosts[0].source}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-olive-dark">{blogPosts[0].title}</h2>
                <p className="text-olive-dark/70">{blogPosts[0].excerpt}</p>
                <Button asChild className="bg-olive text-cream hover:bg-olive-dark">
                  <Link href={blogPosts[0].url} target="_blank" rel="noopener noreferrer">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </AnimationWrapper>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 md:py-24 relative">
          <div className="absolute top-20 right-0 w-40 h-40 olive-dot-pattern opacity-20"></div>
          <div className="container px-4 md:px-6">
            <AnimationWrapper animation="fade-in-up" className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-olive-dark">Latest Articles</h2>
              <p className="text-olive-dark/80 max-w-[700px] mx-auto">
                Stay updated with my latest insights and features
              </p>
            </AnimationWrapper>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <AnimationWrapper
                  key={post.id}
                  animation="fade-in-up"
                  delay={post.id * 100}
                  className="group feature-card overflow-hidden"
                >
                  <div className="relative h-[200px] overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-olive/10 mix-blend-multiply"></div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2 text-sm text-olive-dark/70">
                      <Calendar className="h-4 w-4 text-olive" />
                      <span>{post.date}</span>
                      <span className="px-2">•</span>
                      <span>{post.source}</span>
                    </div>
                    <h3 className="text-xl font-bold text-olive-dark">{post.title}</h3>
                    <p className="text-olive-dark/70">{post.excerpt}</p>
                    <Link
                      href={post.url}
                      className="inline-flex items-center text-olive hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </AnimationWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-24 text-cream relative">
          <div className="absolute top-0 left-0 w-full h-12 transform rotate-180 olive-wave"></div>
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <AnimationWrapper animation="fade-in-up" className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Stay Updated</h2>
                <p className="text-xl text-cream/90">
                  Subscribe to receive updates on my latest work, articles, and speaking engagements
                </p>
                <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex h-10 w-full rounded-md border border-cream/30 bg-cream/10 px-3 py-2 text-sm text-cream ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-cream/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button type="submit" className="text-olive-dark hover:bg-olive-dark">
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-cream/70">I respect your privacy. Unsubscribe at any time.</p>
              </AnimationWrapper>
            </div>
          </div>
        </section>

        <ScrollToTop />
      </main>
      <Footer />
    </div>
  )
}
