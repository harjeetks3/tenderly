// components/HomePage/Features.jsx
// Features section showcasing AI capabilities
// Implements the features grid from the second screenshot

import React from 'react';
import { 
  MagnifyingGlassIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ChartBarIcon,
  TargetIcon
} from '@heroicons/react/24/outline';

export default function Features() {
  const features = [
    {
      icon: MagnifyingGlassIcon,
      title: 'Intelligent Opportunity Discovery',
      description: 'AI scans thousands of tender databases and alerts you to relevant opportunities matching your business profile.',
      color: 'text-blue-600'
    },
    {
      icon: DocumentTextIcon,
      title: 'Automated Document Analysis',
      description: 'Advanced NLP processes tender documents to extract key requirements, deadlines, and evaluation criteria.',
      color: 'text-teal-600'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Compliance Verification',
      description: 'AI ensures your submissions meet all requirements and regulatory standards before submission.',
      color: 'text-green-600'
    },
    {
      icon: SparklesIcon,
      title: 'Smart Proposal Generation',
      description: 'Generate compelling, tailored proposals using AI-powered writing assistance and best practice templates.',
      color: 'text-purple-600'
    },
    {
      icon: ChartBarIcon,
      title: 'Competitive Intelligence',
      description: 'Analyze competitor strategies and market trends to optimize your bidding approach.',
      color: 'text-orange-600'
    },
    {
      icon: TargetIcon,
      title: 'Win Probability Scoring',
      description: 'AI calculates your chances of success for each tender based on historical data and match quality.',
      color: 'text-red-600'
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powerful AI Features for Every Stage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From discovery to submission, our AI platform handles every aspect of the tendering 
            process with precision and intelligence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transform hover:scale-105 transition-all duration-200 bg-white"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors`}>
                    <IconComponent className={`h-6 w-6 ${feature.color}`} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}