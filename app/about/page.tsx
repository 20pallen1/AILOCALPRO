import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding pt-32 bg-[#1A1B26]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About AI Local Pros</h1>
          <div className="w-24 h-1 bg-[#BB9AF7] mx-auto mb-8"></div>
          <p className="text-xl text-[#A9B1D6] leading-relaxed">
            Empowering small and local businesses to confidently embrace AI by providing tailored strategies, clear roadmaps, and hands-on support — driving smarter operations, automation, and better customer experiences.
          </p>
        </div>
      </section>

      {/* Owner Section */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#24283B] rounded-2xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 p-6 bg-[#1A1B26] flex items-center justify-center">
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-[#BB9AF7]">
                  <Image
                    src="/PHS.png"
                    alt="Paidan Allen - CEO & Technical Lead"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <h2 className="text-2xl font-bold text-white mb-2">Meet the Founder</h2>
                <h3 className="text-xl text-[#BB9AF7] mb-4">Paidan Allen</h3>
                <p className="text-[#A9B1D6] mb-6">
                  Paidan Allen is the CEO, Technical Lead, and Principal Consultant at AiLocalPros, a forward-thinking AI consulting startup. With over five years of experience in the IT industry, Paidan blends leadership with deep technical expertise to design and deliver impactful AI-driven solutions for businesses. He is passionate about making advanced technology accessible and practical for real-world challenges.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-[#C0CAF5]">
                    <svg className="w-5 h-5 mr-3 text-[#BB9AF7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    CEO & Technical Lead at AiLocalPros
                  </div>
                  <div className="flex items-center text-[#C0CAF5]">
                    <svg className="w-5 h-5 mr-3 text-[#BB9AF7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    5+ Years in IT Industry
                  </div>
                  <div className="flex items-center text-[#C0CAF5]">
                    <svg className="w-5 h-5 mr-3 text-[#BB9AF7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Principal AI Consultant
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding bg-[#24283B]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Simplicity First",
                description: "We believe AI doesn't have to be complicated. We break down complex tech into simple, practical steps that business owners can understand and act on.",
                icon: "✨"
              },
              {
                title: "Local-Focused Impact",
                description: "We prioritize the success of local and small businesses — delivering solutions that are relevant, scalable, and built for real-world impact.",
                icon: "🎯"
              },
              {
                title: "Transparency & Trust",
                description: "No jargon, no hidden agendas. Just honest advice, clear timelines, and guidance our clients can trust.",
                icon: "🤝"
              },
              {
                title: "Empower Through Education",
                description: "We don't just install tools — we teach and guide, so clients gain confidence using AI in their business every day.",
                icon: "📚"
              },
              {
                title: "Future-Ready, Today",
                description: "We help businesses stay ahead of the curve — identifying opportunities to adopt AI now in ways that prepare them for tomorrow.",
                icon: "🚀"
              },
              {
                title: "Partnership Over Transactions",
                description: "We act as a true partner, working alongside our clients through every step of their AI journey.",
                icon: "💫"
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className="bg-[#1A1B26] p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-[#A9B1D6] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-[#1A1B26] p-12 rounded-2xl">
            <div className="flex items-center justify-center mb-6">
              <Image
                src="/logo.svg"
                alt="AI Local Pros Logo"
                width={64}
                height={64}
                className="mr-4"
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Virtual Office — Serving clients across the East Coast</h2>
            <p className="text-xl text-[#A9B1D6] mb-8">Meetings by appointment (Zoom, phone, or in-person locally)</p>
            <Link 
              href="/consultation"
              className="btn-primary inline-block"
            >
              Schedule a Meeting
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section-padding bg-[#24283B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1A1B26] p-8 rounded-xl text-center">
              <div className="text-[#BB9AF7] mb-4">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-[#A9B1D6]">info@ailocalpros.com</p>
            </div>

            <div className="bg-[#1A1B26] p-8 rounded-xl text-center">
              <div className="text-[#BB9AF7] mb-4">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-[#A9B1D6]">+1 (555) 123-4567</p>
            </div>

            <div className="bg-[#1A1B26] p-8 rounded-xl text-center">
              <div className="text-[#BB9AF7] mb-4">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Business Hours</h3>
              <p className="text-[#A9B1D6]">Mon-Fri: 9am - 5pm EST</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#1A1B26]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-[#A9B1D6] mb-8">
            Let's work together to bring the power of AI to your local business.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/consultation"
              className="btn-primary"
            >
              Get Started
            </Link>
            <Link 
              href="/services"
              className="btn-secondary"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 