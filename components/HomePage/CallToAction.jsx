// components/HomePage/CallToAction.jsx
// Final CTA section with gradient background
// Implements the CTA section from the fourth screenshot

import React from 'react';
import Link from 'next/link';
import { ShieldCheckIcon, UserGroupIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function CallToAction() {
  const benefits = [
    {
      icon: ShieldCheckIcon,
      text: 'Enterprise Security'
    },
    {
      icon: UserGroupIcon,
      text: '24/7 Support'
    },
    {
      icon: ClockIcon,
      text: 'Setup in Minutes'
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {/* Main Heading */}
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Tendering Success?
          </h2>
          
          {/* Subheading */}
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Join thousands of businesses already winning more tenders with AI. Start your free trial today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Start Free 14-Day Trial
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <button className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transform hover:scale-105 transition-all duration-200">
              Schedule Demo
            </button>
          </div>

          {/* Benefits */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-blue-100">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="flex items-center space-x-2">
                  <IconComponent className="h-5 w-5" />
                  <span className="font-medium">{benefit.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}