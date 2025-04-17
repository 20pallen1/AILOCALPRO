import Link from "next/link";

export default function Footer() {
  return (
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
                { name: 'Twitter', href: '#' },
                { name: 'LinkedIn', href: '#' },
                { name: 'Facebook', href: '#' },
                { name: 'Instagram', href: '#' }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-[#A9B1D6] hover:text-[#BB9AF7]"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-[#1A1B26] mt-12 pt-8 text-center text-[#A9B1D6]">
          <p>&copy; {new Date().getFullYear()} AI Local Pros. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 