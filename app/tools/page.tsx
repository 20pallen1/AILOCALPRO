'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ToolsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Tools' },
    { id: 'automation', name: 'Automation' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'content', name: 'Content Creation' },
    { id: 'customer', name: 'Customer Service' }
  ];

  const tools = [
    {
      id: 1,
      name: 'Smart Scheduler',
      category: 'automation',
      description: 'AI-powered scheduling system that optimizes appointments and resource allocation.',
      icon: '📅',
      features: ['Automated scheduling', 'Resource optimization', 'Calendar integration']
    },
    {
      id: 2,
      name: 'Data Insights Pro',
      category: 'analytics',
      description: 'Advanced analytics platform that transforms raw data into actionable business insights.',
      icon: '📊',
      features: ['Real-time analytics', 'Custom dashboards', 'Predictive modeling']
    },
    {
      id: 3,
      name: 'Content Generator',
      category: 'content',
      description: 'AI assistant that helps create engaging content for your business.',
      icon: '✍️',
      features: ['Content suggestions', 'SEO optimization', 'Brand voice consistency']
    },
    {
      id: 4,
      name: 'Customer Care AI',
      category: 'customer',
      description: 'Intelligent customer service solution that handles inquiries 24/7.',
      icon: '🤖',
      features: ['24/7 support', 'Natural language processing', 'Ticket management']
    },
    {
      id: 5,
      name: 'Inventory Optimizer',
      category: 'automation',
      description: 'Smart inventory management system that predicts demand and optimizes stock levels.',
      icon: '📦',
      features: ['Demand forecasting', 'Stock optimization', 'Reorder automation']
    },
    {
      id: 6,
      name: 'Social Media Manager',
      category: 'content',
      description: 'AI-powered social media management tool that helps grow your online presence.',
      icon: '📱',
      features: ['Post scheduling', 'Engagement analysis', 'Trend tracking']
    }
  ];

  const filteredTools = activeCategory === 'all' 
    ? tools 
    : tools.filter(tool => tool.category === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#BB9AF7]">AI Tools</span> for Your Business
          </h1>
          <p className="text-[#C0CAF5] text-lg max-w-2xl mx-auto">
            Discover our suite of AI-powered tools designed to streamline your operations, enhance productivity, and drive growth.
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

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map(tool => (
              <div 
                key={tool.id}
                className="bg-[#1A1B26] p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{tool.name}</h3>
                <p className="text-[#A9B1D6] mb-6">{tool.description}</p>
                <div className="space-y-2 mb-6">
                  {tool.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-[#C0CAF5]">
                      <svg className="w-4 h-4 mr-2 text-[#BB9AF7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
                <Link 
                  href="/consultation"
                  className="inline-block bg-[#BB9AF7] text-white py-2 px-6 rounded-md font-medium hover:bg-[#9D7CD8] transition-colors"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-[#24283B] p-12 rounded-2xl">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-[#A9B1D6] mb-8">
              Let&apos;s discuss how our AI tools can help streamline your operations and drive growth.
            </p>
            <Link 
              href="/consultation"
              className="btn-primary inline-block"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 