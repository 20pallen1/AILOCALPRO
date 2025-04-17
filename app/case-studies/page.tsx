'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Industries' },
    { id: 'retail', name: 'Retail' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'manufacturing', name: 'Manufacturing' },
    { id: 'services', name: 'Professional Services' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'Retail Revolution: AI-Powered Inventory Management',
      category: 'retail',
      client: 'Local Boutique Chain',
      challenge: 'Inefficient inventory management leading to stockouts and overstocking',
      solution: 'Implemented AI-driven inventory optimization system',
      results: [
        '30% reduction in stockouts',
        '25% decrease in excess inventory',
        '15% increase in sales through better product availability'
      ],
      image: '/case-studies/retail.jpg',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Healthcare Efficiency: Automated Patient Scheduling',
      category: 'healthcare',
      client: 'Regional Medical Practice',
      challenge: 'Manual scheduling system causing appointment no-shows and inefficiencies',
      solution: 'AI-powered scheduling and reminder system',
      results: [
        '40% reduction in no-shows',
        '20% increase in daily patient capacity',
        'Improved patient satisfaction scores'
      ],
      image: '/case-studies/healthcare.jpg',
      readTime: '4 min read'
    },
    {
      id: 3,
      title: 'Manufacturing Excellence: Predictive Maintenance',
      category: 'manufacturing',
      client: 'Local Manufacturing Plant',
      challenge: 'Unexpected equipment downtime affecting production',
      solution: 'AI-based predictive maintenance system',
      results: [
        '50% reduction in unplanned downtime',
        '30% decrease in maintenance costs',
        '15% increase in overall equipment effectiveness'
      ],
      image: '/case-studies/manufacturing.jpg',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Service Optimization: AI-Powered Customer Support',
      category: 'services',
      client: 'Professional Services Firm',
      challenge: 'Overwhelmed customer support team and slow response times',
      solution: 'AI chatbot and ticket routing system',
      results: [
        '60% faster response times',
        '40% reduction in support costs',
        '90% customer satisfaction rate'
      ],
      image: '/case-studies/services.jpg',
      readTime: '5 min read'
    }
  ];

  const filteredCaseStudies = activeCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#BB9AF7]">Success</span> Stories
          </h1>
          <p className="text-[#C0CAF5] text-lg max-w-2xl mx-auto">
            Discover how businesses like yours are transforming their operations with AI. Real results, real impact.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-[#24283B]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-[#BB9AF7] text-white'
                    : 'bg-[#1A1B26] text-[#C0CAF5] hover:bg-[#2A2B36]'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredCaseStudies.map(study => (
              <div 
                key={study.id}
                className="bg-[#1A1B26] rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A1B26]"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-[#BB9AF7] text-white text-sm px-3 py-1 rounded-full">
                      {study.readTime}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                  <div className="mb-6">
                    <h4 className="text-[#BB9AF7] font-medium mb-2">Client</h4>
                    <p className="text-[#C0CAF5]">{study.client}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-[#BB9AF7] font-medium mb-2">Challenge</h4>
                    <p className="text-[#C0CAF5]">{study.challenge}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-[#BB9AF7] font-medium mb-2">Solution</h4>
                    <p className="text-[#C0CAF5]">{study.solution}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-[#BB9AF7] font-medium mb-2">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-[#C0CAF5]">
                          <svg className="w-4 h-4 mr-2 text-[#BB9AF7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    href="/consultation"
                    className="inline-block bg-[#BB9AF7] text-white py-2 px-6 rounded-md font-medium hover:bg-[#9D7CD8] transition-colors"
                  >
                    Start Your Success Story
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The AI implementation has transformed our operations. We're seeing results we never thought possible.",
                author: "Sarah Johnson",
                position: "CEO, Local Boutique Chain"
              },
              {
                quote: "Our patient satisfaction scores have never been higher. The AI scheduling system has been a game-changer.",
                author: "Dr. Michael Chen",
                position: "Medical Director, Regional Practice"
              },
              {
                quote: "The predictive maintenance system has saved us thousands in unexpected downtime. Worth every penny.",
                author: "Robert Williams",
                position: "Operations Manager, Manufacturing Plant"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-[#24283B] p-8 rounded-xl"
              >
                <div className="text-[#BB9AF7] text-4xl mb-4">"</div>
                <p className="text-[#C0CAF5] mb-6">{testimonial.quote}</p>
                <div>
                  <p className="text-white font-medium">{testimonial.author}</p>
                  <p className="text-[#A9B1D6] text-sm">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#24283B]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-[#A9B1D6] mb-8">
            Let's discuss how AI can transform your business operations and drive growth.
          </p>
          <Link 
            href="/consultation"
            className="btn-primary inline-block"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
} 