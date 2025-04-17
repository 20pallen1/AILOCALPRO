import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding pt-12 pb-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Transform Your Business with <span className="text-[#BB9AF7]">AI Innovation</span>
            </h1>
            <p className="text-xl text-[#A9B1D6] mb-8">
              Helping local businesses thrive in the digital age through cutting-edge AI solutions and strategic consulting.
            </p>
            <Link href="/contact" className="btn-primary inline-block">Get Started</Link>
          </div>
          <div className="relative h-[300px] flex items-center justify-center">
            <div className="w-[350px] h-[200px] relative bg-[#1A1B26] rounded-2xl p-6">
              <Image
                src="/ALPlogo.png"
                alt="AI Local Pros Logo"
                width={350}
                height={200}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-padding bg-[#24283B]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Strategy Consulting",
                description: "Develop comprehensive AI strategies tailored to your business needs and goals.",
                icon: "🎯",
                href: "/services#strategy"
              },
              {
                title: "Business Automation",
                description: "Streamline operations and boost efficiency with intelligent automation solutions.",
                icon: "⚡",
                href: "/services#automation"
              },
              {
                title: "AI Marketing for Local Reach",
                description: "Leverage AI to enhance your local marketing efforts and reach more customers.",
                icon: "📈",
                href: "/services#marketing"
              }
            ].map((service, index) => (
              <Link 
                href={service.href}
                key={index} 
                className="bg-[#1A1B26] p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-[#A9B1D6]">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Discovery", description: "We analyze your business needs and goals" },
              { step: "2", title: "Strategy", description: "Develop a customized AI implementation plan" },
              { step: "3", title: "Implementation", description: "Deploy AI solutions and train your team" },
              { step: "4", title: "Optimization", description: "Continuously improve and scale your AI systems" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#BB9AF7] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-[#A9B1D6]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-[#24283B]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "AI Local Pros transformed our business operations with their innovative solutions.",
                name: "Sarah Johnson",
                role: "CEO, Local Retail"
              },
              {
                quote: "The team's expertise in AI implementation was invaluable for our growth.",
                name: "Michael Chen",
                role: "Founder, Tech Startup"
              },
              {
                quote: "Their strategic approach helped us stay ahead of the competition.",
                name: "Emily Rodriguez",
                role: "Marketing Director"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-[#1A1B26] p-8 rounded-xl">
                <p className="text-[#A9B1D6] mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-[#A9B1D6]">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Stay Updated</h2>
          <p className="text-[#A9B1D6] mb-8">Subscribe to our newsletter for the latest AI insights and business tips.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-[#24283B] text-white border border-[#BB9AF7] focus:outline-none focus:ring-2 focus:ring-[#BB9AF7]"
            />
            <button className="btn-primary">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#24283B] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">AI Local Pros</h3>
              <p className="text-[#A9B1D6]">Helping local businesses thrive with AI innovation.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: 'Services', href: '/services' },
                  { name: 'AI Tools', href: '/tools' },
                  { name: 'Case Studies', href: '/case-studies' },
                  { name: 'About', href: '/about' },
                  { name: 'Contact', href: '/contact' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-[#A9B1D6] hover:text-[#BB9AF7]">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-[#A9B1D6]">
                <li>Email: info@ailocalpros.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Address: Virtual Office - East Coast</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { name: 'Twitter', href: 'https://twitter.com' },
                  { name: 'LinkedIn', href: 'https://linkedin.com' },
                  { name: 'Facebook', href: 'https://facebook.com' },
                  { name: 'Instagram', href: 'https://instagram.com' }
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#A9B1D6] hover:text-[#BB9AF7]"
                  >
                    {social.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-[#1A1B26] mt-12 pt-8 text-center text-[#A9B1D6]">
            <p>&copy; {new Date().getFullYear()} AI Local Pros. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
