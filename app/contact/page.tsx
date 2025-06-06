import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Linkedin, Instagram, Facebook, Twitter, Youtube, Send, MessageSquare } from "lucide-react"
import { AnimationWrapper } from "@/components/animation-wrapper"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-darkOlive-dark">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section with Olive Background */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-darkOlive-dark text-cream relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 cream-dot-pattern opacity-20"></div>
          <div className="container-custom">
            <AnimationWrapper animation="fade-in-up" className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Get In Touch With Me</h1>
              <p className="text-xl text-cream/90">Let&apos;s connect and explore how we can work together</p>
            </AnimationWrapper>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-12 olive-wave"></div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 bg-darkOlive-dark relative">
          <div className="absolute top-20 left-0 w-32 h-32 olive-dot-pattern opacity-30"></div>
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12">
              <AnimationWrapper animation="fade-in-left" className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-olive-dark">Contact Information</h2>
                  <p className="text-lavender-muted mb-6">
                    Feel free to reach out through any of these channels. I look forward to connecting with you.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-olive/20 rounded-full p-3">
                      <Phone className="h-5 w-5 text-olive" />
                    </div>
                    <div>
                      <h3 className="font-medium text-olive-dark">Call</h3>
                      <p className="text-lavender-muted">+2349125314634</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-olive/20 rounded-full p-3">
                      <Mail className="h-5 w-5 text-olive" />
                    </div>
                    <div>
                      <h3 className="font-medium text-olive-dark">Email</h3>
                      <p className="text-lavender-muted">theopeyemiogundeji@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-4 text-olive-dark">Connect on Social Media</h3>
                  <div className="flex flex-wrap gap-4">
                    <Link href="#" className="bg-olive/20 hover:bg-olive/30 transition-colors rounded-full p-3">
                      <Linkedin className="h-5 w-5 text-olive" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="#" className="bg-olive/20 hover:bg-olive/30 transition-colors rounded-full p-3">
                      <Instagram className="h-5 w-5 text-olive" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="#" className="bg-olive/20 hover:bg-olive/30 transition-colors rounded-full p-3">
                      <Facebook className="h-5 w-5 text-olive" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link href="#" className="bg-olive/20 hover:bg-olive/30 transition-colors rounded-full p-3">
                      <Twitter className="h-5 w-5 text-olive" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="#" className="bg-olive/20 hover:bg-olive/30 transition-colors rounded-full p-3">
                      <Youtube className="h-5 w-5 text-olive" />
                      <span className="sr-only">YouTube</span>
                    </Link>
                  </div>
                </div>
              </AnimationWrapper>

              <AnimationWrapper animation="fade-in-right">
                <div className="feature-card">
                  <h2 className="text-2xl font-bold mb-6 text-olive-dark">Send Me a Message</h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-olive-dark">
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          placeholder="Your name"
                          className="flex h-10 w-full rounded-md border border-cream bg-white px-3 py-2 text-sm text-olive-dark ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-olive-dark/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-olive-dark">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          className="flex h-10 w-full rounded-md border border-cream bg-white px-3 py-2 text-sm text-olive-dark ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-olive-dark/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-olive-dark">
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        placeholder="What is this regarding?"
                        className="flex h-10 w-full rounded-md border border-cream bg-white px-3 py-2 text-sm text-olive-dark ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-olive-dark/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-olive-dark">
                        Message
                      </label>
                      <textarea
                        id="message"
                        placeholder="Your message"
                        rows={5}
                        className="flex w-full rounded-md border border-cream bg-white px-3 py-2 text-sm text-olive-dark ring-offset-background placeholder:text-olive-dark/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full bg-olive text-cream hover:bg-olive-dark">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </AnimationWrapper>
            </div>
          </div>
        </section>

        {/* Testimonial Submission Section with Olive Pattern */}
        <section className="py-16 md:py-24  relative">
          <div className="absolute bottom-10 right-0 w-40 h-40 olive-dot-pattern opacity-30"></div>
          <div className="container-custom">
            <AnimationWrapper animation="fade-in-up" className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-olive-dark">Share Your Experience</h2>
              <p className="text-lavender-muted max-w-[700px] mx-auto">
                If we&apos;ve worked together, I&apos;d love to hear about your experience
              </p>
            </AnimationWrapper>

            <div className="max-w-2xl mx-auto">
              <AnimationWrapper animation="scale-in" className="feature-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-olive/20 rounded-full p-3">
                    <MessageSquare className="h-5 w-5 text-olive" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-olive-dark">Submit a Testimonial</h3>
                    <p className="text-sm text-lavender-muted">Your feedback helps others understand my work</p>
                  </div>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="testimonial-name" className="text-sm font-medium text-olive-dark">
                        Full Name
                      </label>
                      <input
                        id="testimonial-name"
                        type="text"
                        placeholder="Your name"
                        className="flex h-10 w-full rounded-md border border-lavender bg-white px-3 py-2 text-sm text-olive-dark ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-olive-dark/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="testimonial-role" className="text-sm font-medium text-olive-dark">
                        Role & Organization
                      </label>
                      <input
                        id="testimonial-role"
                        type="text"
                        placeholder="e.g. Director, Climate Action Network"
                        className="flex h-10 w-full rounded-md border border-cream bg-white px-3 py-2 text-sm text-olive-dark ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-olive-dark/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="testimonial-message" className="text-sm font-medium text-olive-dark">
                      Your Testimonial
                    </label>
                    <textarea
                      id="testimonial-message"
                      placeholder="Share your experience working with me..."
                      rows={5}
                      className="flex w-full rounded-md border border-cream bg-white px-3 py-2 text-sm text-olive-dark ring-offset-background placeholder:text-olive-dark/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    ></textarea>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="testimonial-photo" className="text-sm font-medium text-olive-dark">
                      Profile Photo (Optional)
                    </label>
                    <input
                      id="testimonial-photo"
                      type="file"
                      accept="image/*"
                      className="flex w-full rounded-md border border-cream bg-white px-3 py-2 text-sm text-olive-dark ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-olive-dark/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                    <p className="text-xs text-lavender-muted">Max file size: 2MB. Recommended: square image.</p>
                  </div>
                  <Button type="submit" className="w-full">
                    Submit Testimonial
                  </Button>
                </form>
              </AnimationWrapper>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 relative">
          <div className="absolute top-20 right-0 w-40 h-40 olive-dot-pattern opacity-20"></div>
          <div className="container-custom">
            <AnimationWrapper animation="fade-in-up" className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-olive-dark">Frequently Asked Questions</h2>
              <p className="text-lavender-muted max-w-[700px] mx-auto">Common questions about working with me</p>
            </AnimationWrapper>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <AnimationWrapper animation="fade-in-left" delay={100} className="feature-card">
                <h3 className="text-xl font-bold mb-2 text-olive-dark">What services do you offer?</h3>
                <p className="text-lavender-muted">
                  I offer training and capacity-building, speaking engagements, project strategy and management, and
                  policy/advocacy consulting. Visit my Services page for more details.
                </p>
              </AnimationWrapper>
              <AnimationWrapper animation="fade-in-left" delay={200} className="feature-card">
                <h3 className="text-xl font-bold mb-2 text-olive-dark">How can we collaborate?</h3>
                <p className="text-lavender-muted">
                  Collaboration can take many forms - from speaking at your event to consulting on a project or
                  delivering a training program. Contact me to discuss your specific needs.
                </p>
              </AnimationWrapper>
              <AnimationWrapper animation="fade-in-left" delay={300} className="feature-card">
                <h3 className="text-xl font-bold mb-2 text-olive-dark">Do you work internationally?</h3>
                <p className="text-lavender-muted">
                  Yes, I work with organizations and communities globally, both remotely and in-person when possible.
                </p>
              </AnimationWrapper>
              <AnimationWrapper animation="fade-in-left" delay={400} className="feature-card">
                <h3 className="text-xl font-bold mb-2 text-olive-dark">How quickly do you respond to inquiries?</h3>
                <p className="text-lavender-muted">
                  I aim to respond to all inquiries within 48 hours. For urgent matters, please indicate this in your
                  message.
                </p>
              </AnimationWrapper>
            </div>
          </div>
        </section>

        {/* CTA Section with Olive Background */}
        <section className="py-16 md:py-24 text-cream relative">
          <div className="absolute top-0 left-0 w-full h-12 transform rotate-180 olive-wave"></div>
          <div className="container-custom text-center">
            <AnimationWrapper animation="scale-in" className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start a Conversation?</h2>
              <p className="text-xl mb-8 max-w-[700px] mx-auto opacity-90">
                I&apos;m excited to hear about your project and explore how we can work together.
              </p>
              <Button asChild size="lg">
                <Link href="#contact-form">Reach Out Today</Link>
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
