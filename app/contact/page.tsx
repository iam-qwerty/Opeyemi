import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Linkedin, Instagram, Facebook, Twitter, Youtube, Send, MessageSquare } from "lucide-react"
import { AnimationWrapper } from "@/components/animation-wrapper"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container-custom">
            <AnimationWrapper animation="fade-in-up" className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Get In Touch With Me</h1>
              <p className="text-xl text-muted-foreground">Let's connect and explore how we can work together</p>
            </AnimationWrapper>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12">
              <AnimationWrapper animation="fade-in-left" className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                  <p className="text-muted-foreground mb-6">
                    Feel free to reach out through any of these channels. I look forward to connecting with you.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-olive/20 rounded-full p-3">
                      <Phone className="h-5 w-5 text-olive" />
                    </div>
                    <div>
                      <h3 className="font-medium">Call</h3>
                      <p className="text-muted-foreground">+234 123 456 7890</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-olive/20 rounded-full p-3">
                      <Mail className="h-5 w-5 text-olive" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">contact@opeyemiogundeji.com</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-4">Connect on Social Media</h3>
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
                <div className="bg-white rounded-lg border border-gray-100 p-6 md:p-8 shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          placeholder="Your name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        placeholder="What is this regarding?"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        placeholder="Your message"
                        rows={5}
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </AnimationWrapper>
            </div>
          </div>
        </section>

        {/* Testimonial Submission Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container-custom">
            <AnimationWrapper animation="fade-in-up" className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Share Your Experience</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">
                If we've worked together, I'd love to hear about your experience
              </p>
            </AnimationWrapper>

            <div className="max-w-2xl mx-auto">
              <AnimationWrapper
                animation="scale-in"
                className="bg-white rounded-lg border border-gray-100 p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-olive/20 rounded-full p-3">
                    <MessageSquare className="h-5 w-5 text-olive" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Submit a Testimonial</h3>
                    <p className="text-sm text-muted-foreground">Your feedback helps others understand my work</p>
                  </div>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="testimonial-name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <input
                        id="testimonial-name"
                        type="text"
                        placeholder="Your name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="testimonial-role" className="text-sm font-medium">
                        Role & Organization
                      </label>
                      <input
                        id="testimonial-role"
                        type="text"
                        placeholder="e.g. Director, Climate Action Network"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="testimonial-message" className="text-sm font-medium">
                      Your Testimonial
                    </label>
                    <textarea
                      id="testimonial-message"
                      placeholder="Share your experience working with me..."
                      rows={5}
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    ></textarea>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="testimonial-photo" className="text-sm font-medium">
                      Profile Photo (Optional)
                    </label>
                    <input
                      id="testimonial-photo"
                      type="file"
                      accept="image/*"
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                    <p className="text-xs text-muted-foreground">Max file size: 2MB. Recommended: square image.</p>
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
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <AnimationWrapper animation="fade-in-up" className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">Common questions about working with me</p>
            </AnimationWrapper>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <AnimationWrapper
                animation="fade-in-left"
                delay={100}
                className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold mb-2">What services do you offer?</h3>
                <p className="text-muted-foreground">
                  I offer training and capacity-building, speaking engagements, project strategy and management, and
                  policy/advocacy consulting. Visit my Services page for more details.
                </p>
              </AnimationWrapper>
              <AnimationWrapper
                animation="fade-in-left"
                delay={200}
                className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold mb-2">How can we collaborate?</h3>
                <p className="text-muted-foreground">
                  Collaboration can take many forms - from speaking at your event to consulting on a project or
                  delivering a training program. Contact me to discuss your specific needs.
                </p>
              </AnimationWrapper>
              <AnimationWrapper
                animation="fade-in-left"
                delay={300}
                className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold mb-2">Do you work internationally?</h3>
                <p className="text-muted-foreground">
                  Yes, I work with organizations and communities globally, both remotely and in-person when possible.
                </p>
              </AnimationWrapper>
              <AnimationWrapper
                animation="fade-in-left"
                delay={400}
                className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold mb-2">How quickly do you respond to inquiries?</h3>
                <p className="text-muted-foreground">
                  I aim to respond to all inquiries within 48 hours. For urgent matters, please indicate this in your
                  message.
                </p>
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

