// components/HomePage/Hero.jsx
// Hero section with main value proposition and tender opportunities showcase
// Implements the hero layout from the first screenshot

import React from 'react';
import Link from 'next/link';
import { CheckIcon, BoltIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  const tenderOpportunities = [
    {
      title: 'Infrastructure Development Project',
      value: '$2.4M',
      match: '95% match',
      status: 'Live'
    },
    {
      title: 'IT Services Modernization',
      value: '$890K',
      match: '87% match',
      status: 'Live'
    },
    {
      title: 'Renewable Energy Installation',
      value: '$1.8M',
      match: '92% match',
      status: 'Live'
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <BoltIcon className="h-4 w-4" />
              <span>AI-Powered Tender Management</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Win More Tenders
                <br />
                with <span className="text-blue-600">AI Intelligence</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Transform your tendering process with AI that discovers opportunities, 
                analyzes requirements, ensures compliance, and helps you craft winning proposals.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Start Free Trial
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <button className="inline-flex items-center justify-center border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-200">
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span>No credit card required</span>
              </div>
            </div>
          </div>

          {/* Right Column - Tender Opportunities Dashboard */}
          <div className="relative animate-fade-in-delay">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 shadow-2xl">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white text-lg font-semibold">Tender Opportunities</h3>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Live
                </span>
              </div>

              {/* Tender Cards */}
              <div className="space-y-4">
                {tenderOpportunities.map((tender, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-200 transform hover:scale-105"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-medium text-sm">{tender.title}</h4>
                      <span className="text-blue-200 text-sm">{tender.match}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-100 text-sm">Value: {tender.value}</span>
                      <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-400 transition-colors">
                        Analyze
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Win Rate Badge */}
              <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="text-xs">Win Rate</div>
                    <div className="font-bold">+45%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}