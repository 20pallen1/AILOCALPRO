import Link from "next/link";

const services = [
  {
    title: "AI Strategy & Readiness Assessment",
    description: "We evaluate your business's current operations and identify where AI can save time, reduce costs, or grow revenue.",
    details: "Includes a comprehensive audit and a customized roadmap tailored to your goals.",
    icon: "🎯",
    gradient: "from-[#BB9AF7] to-[#F7768E]"
  },
  {
    title: "Business Process Automation",
    description: "Streamline repetitive tasks using AI-powered workflows and tools.",
    details: "Examples include automated customer follow-ups, scheduling, and inventory tracking.",
    icon: "⚡",
    gradient: "from-[#F7768E] to-[#FF9E64]"
  },
  {
    title: "AI-Powered Marketing Campaigns",
    description: "Use AI to generate content, optimize ad performance, and personalize outreach.",
    details: "We implement tools that help you reach more customers with less effort.",
    icon: "📈",
    gradient: "from-[#FF9E64] to-[#BB9AF7]"
  },
  {
    title: "Custom AI Chatbots & Virtual Assistants",
    description: "Build intelligent chatbots that can answer FAQs, qualify leads, and support customers 24/7.",
    details: "Each solution is tailored to your business's services and tone of voice.",
    icon: "💬",
    gradient: "from-[#BB9AF7] to-[#FF9E64]"
  },
  {
    title: "AI-Driven Data Insights & Reporting",
    description: "Transform your raw business data into actionable insights using machine learning.",
    details: "Track customer trends, forecast sales, and make smarter decisions.",
    icon: "📊",
    gradient: "from-[#F7768E] to-[#BB9AF7]"
  },
  {
    title: "AI Training for Teams",
    description: "Empower your team with hands-on training on how to use AI tools effectively and responsibly.",
    details: "Covers platforms like ChatGPT, Notion AI, Canva AI, and more.",
    icon: "🎓",
    gradient: "from-[#FF9E64] to-[#F7768E]"
  },
  {
    title: "Local SEO & Content Creation with AI",
    description: "Use AI to create high-quality blog posts, service pages, and local content at scale.",
    details: "Ideal for boosting search rankings and attracting nearby customers.",
    icon: "📝",
    gradient: "from-[#BB9AF7] to-[#FF9E64]"
  },
  {
    title: "AI for Finance & Bookkeeping",
    description: "Automate tasks like invoicing, expense categorization, and forecasting.",
    details: "Designed for small businesses to save time and reduce human error in finance.",
    icon: "💰",
    gradient: "from-[#F7768E] to-[#BB9AF7]"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding pt-32 bg-[#1A1B26]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
          <div className="w-24 h-1 bg-[#BB9AF7] mx-auto mb-8"></div>
          <p className="text-xl text-[#A9B1D6] leading-relaxed">
            Comprehensive AI solutions tailored for local and small businesses. From strategy to implementation, we help you leverage AI to grow your business.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-[#24283B]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-[#1A1B26] rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                <div className="p-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-[#A9B1D6] mb-4">{service.description}</p>
                  <p className="text-[#C0CAF5] text-sm">{service.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">How We Work</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Assessment", description: "We analyze your needs" },
              { step: "2", title: "Strategy", description: "Create a tailored plan" },
              { step: "3", title: "Implementation", description: "Execute the solution" },
              { step: "4", title: "Support", description: "Ongoing optimization" }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="w-16 h-16 bg-[#BB9AF7] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-[#A9B1D6]">{step.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-[#BB9AF7] to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#1A1B26]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-[#A9B1D6] mb-8">
            Book a free consultation to discuss how we can help your business leverage AI effectively.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Schedule Consultation
            </Link>
            <Link href="/case-studies" className="btn-secondary">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 