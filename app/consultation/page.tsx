'use client';

import { useState } from 'react';

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    preferredDate: '',
    preferredTime: '',
    timezone: '',
    projectType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#BB9AF7]">Free</span> Consultation
          </h1>
          <p className="text-[#C0CAF5] text-lg max-w-2xl mx-auto">
            Let&apos;s discuss how AI can transform your business. Schedule a free 30-minute consultation with our experts.
          </p>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-[#24283B] p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Schedule Your Consultation</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#C0CAF5] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#1A1B26] border border-[#414868] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#BB9AF7]"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#C0CAF5] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#1A1B26] border border-[#414868] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#BB9AF7]"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#C0CAF5] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#1A1B26] border border-[#414868] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#BB9AF7]"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-[#C0CAF5] mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#1A1B26] border border-[#414868] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#BB9AF7]"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-[#C0CAF5] mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#1A1B26] border border-[#414868] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#BB9AF7]"
                  required
                >
                  <option value="">Select a project type</option>
                  <option value="ai-strategy">AI Strategy Development</option>
                  <option value="custom-solution">Custom AI Solution</option>
                  <option value="process-automation">Process Automation</option>
                  <option value="data-analysis">Data Analysis & Insights</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-[#C0CAF5] mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#1A1B26] border border-[#414868] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#BB9AF7]"
                  required
                />
              </div>

              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-[#C0CAF5] mb-2">
                  Preferred Time
                </label>
                <input
                  type="time"
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#1A1B26] border border-[#414868] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#BB9AF7]"
                  required
                />
              </div>

              <div>
                <label htmlFor="timezone" className="block text-sm font-medium text-[#C0CAF5] mb-2">
                  Timezone
                </label>
                <select
                  id="timezone"
                  name="timezone"
                  value={formData.timezone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#1A1B26] border border-[#414868] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#BB9AF7]"
                  required
                >
                  <option value="">Select your timezone</option>
                  <option value="et">Eastern Time (ET)</option>
                  <option value="ct">Central Time (CT)</option>
                  <option value="mt">Mountain Time (MT)</option>
                  <option value="pt">Pacific Time (PT)</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#C0CAF5] mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-[#1A1B26] border border-[#414868] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#BB9AF7]"
                  placeholder="Tell us about your project and any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#BB9AF7] text-white py-3 px-6 rounded-md font-medium hover:bg-[#9D7CD8] transition-colors"
              >
                Schedule Consultation
              </button>
            </form>
          </div>

          {/* Consultation Info */}
          <div className="space-y-8">
            <div className="bg-[#24283B] p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">What to Expect</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-[#BB9AF7] mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">30-Minute Session</h3>
                    <p className="text-[#C0CAF5]">A focused discussion about your AI needs and how we can help</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-[#BB9AF7] mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Expert Guidance</h3>
                    <p className="text-[#C0CAF5]">Get insights from our AI specialists on your specific challenges</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-[#BB9AF7] mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Customized Solutions</h3>
                    <p className="text-[#C0CAF5]">Receive tailored recommendations for your business</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#24283B] p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Preparation Tips</h2>
              <ul className="space-y-4 text-[#C0CAF5]">
                <li className="flex items-start">
                  <span className="text-[#BB9AF7] mr-2">•</span>
                  <span>Have your business goals and challenges ready to discuss</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#BB9AF7] mr-2">•</span>
                  <span>Prepare any specific questions about AI implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#BB9AF7] mr-2">•</span>
                  <span>Think about your current technology stack and data availability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#BB9AF7] mr-2">•</span>
                  <span>Consider your budget and timeline expectations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 