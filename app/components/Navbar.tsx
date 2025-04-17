'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'AI Tools', href: '/tools' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'About', href: '/about' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A1B26]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/ALPlogo.png"
                alt="AI Local Pros Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <span className="text-2xl font-bold">
                <span className="text-[#BB9AF7]">Ai</span>
                <span className="text-white">Local Pros</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-[#BB9AF7]'
                      : 'text-[#C0CAF5] hover:text-[#BB9AF7]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href="/consultation"
                className="btn-primary ml-4"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 