// pages/index.js
// New homepage with modern AI Tenders design
// Replaces existing homepage with comprehensive landing page

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuth } from '../contexts/AuthContext';
import { 
  MagnifyingGlassIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  TrendingUpIcon,
  UsersIcon,
  ArrowRightIcon,
  StarIcon,
  ClockIcon,
  TargetIcon,
  ShieldCheckIcon,
  BoltIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import {
  SparklesIcon,
  ChartBarIcon
} from '@heroicons/react/24/solid';

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // If user is logged in, redirect to tenders page
  useEffect(() => {
    if (!loading && user) {
      router.push('/tenders');
    }
  }, [user, loading, router]);

  // Show loading spinner while checking auth
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // If user is logged in, don't show the landing page (will redirect)
  if (user) {
    return null;
  }

  const features = [
    {
      icon: MagnifyingGlassIcon,
      title: "Intelligent Opportunity Discovery",
      description: "AI scans thousands of tender databases and alerts you to relevant opportunities matching your business profile.",
      color: "text-blue-600"
    },
    {
      icon: DocumentTextIcon,
      title: "Automated Document Analysis",
      description: "Advanced NLP processes tender documents to extract key requirements, deadlines, and evaluation criteria.",
      color: "text-teal-600"
    },
    {
      icon: CheckCircleIcon,
      title: "Compliance Verification",
      description: "AI ensures your submissions meet all requirements and regulatory standards before submission.",
      color: "text-green-600"
    },
    {
      icon: SparklesIcon,
      title: "Smart Proposal Generation",
      description: "Generate compelling, tailored proposals using AI-powered writing assistance and best practice templates.",
      color: "text-purple-600"
    },
    {
      icon: ChartBarIcon,
      title: "Competitive Intelligence",
      description: "Analyze competitor strategies and market trends to optimize your bidding approach.",
      color: "text-orange-600"
    },
    {
      icon: TargetIcon,
      title: "Win Probability Scoring",
      description: "AI calculates your chances of success for each tender based on historical data and match quality.",
      color: "text-red-600"
    }
  ];

  const benefits = [
    {
      metric: "75%",
      label: "Time Saved",
      description: "Reduce tender preparation time with automated processes"
    },
    {
      metric: "3X",
      label: "More Opportunities",
      description: "Discover tender opportunities you would have missed"
    },
    {
      metric: "45%",
      label: "Higher Win Rate",
      description: "Improve success rate with AI-optimized proposals"
    },
    {
      metric: "90%",
      label: "Compliance Rate",
      description: "Eliminate rejection due to non-compliance issues"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Connect & Configure",
      description: "Integrate your systems and set up your business profile for personalized AI matching."
    },
    {
      number: "02",
      title: "Discover Opportunities",
      description: "AI continuously monitors and presents relevant tender opportunities with match scores."
    },
    {
      number: "03",
      title: "Analyze & Prepare",
      description: "Automated document analysis extracts requirements while AI assists in proposal creation."
    },
    {
      number: "04",
      title: "Submit & Track",
      description: "Ensure compliance, submit bids, and track progress with real-time updates."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Procurement Director",
      company: "TechBuild Solutions",
      content: "Tenderly transformed our bidding process. We're now winning 40% more contracts while spending 60% less time on preparation.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Business Development Manager", 
      company: "GreenEnergy Corp",
      content: "The intelligent opportunity discovery found contracts we never would have seen. Our revenue increased by $2.3M in the first year.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "Operations Head",
      company: "InfraTech Limited",
      content: "Compliance verification alone saved us from costly rejections. The ROI was immediate and substantial.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <SparklesIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Tenderly</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How It Works</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Testimonials</a>
              <Link href="/signup" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </Link>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block text-gray-600 hover:text-gray-900">Features</a>
              <a href="#how-it-works" className="block text-gray-600 hover:text-gray-900">How It Works</a>
              <a href="#testimonials" className="block text-gray-600 hover:text-gray-900">Testimonials</a>
              <Link href="/signup" className="block w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  <BoltIcon className="w-4 h-4 mr-2" />
                  AI-Powered Tender Management
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Win More Tenders with 
                  <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"> AI Intelligence</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your tendering process with AI that discovers opportunities, analyzes requirements, ensures compliance, and helps you craft winning proposals.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
                <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                  Free 14-day trial
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                  No credit card required
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-8 shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between text-white">
                      <h3 className="text-lg font-semibold">Tender Opportunities</h3>
                      <div className="bg-green-400 px-3 py-1 rounded-full text-sm font-medium text-green-900">
                        Live
                      </div>
                    </div>
                    
                    {[
                      { title: "Infrastructure Development Project", match: "95%", value: "$2.4M" },
                      { title: "IT Services Modernization", match: "87%", value: "$890K" },
                      { title: "Renewable Energy Installation", match: "92%", value: "$1.8M" }
                    ].map((tender, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-white font-medium text-sm">{tender.title}</h4>
                          <span className="text-green-300 text-sm font-semibold">{tender.match} match</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-white/80 text-sm">Value: {tender.value}</span>
                          <button className="bg-white text-blue-600 px-3 py-1 rounded text-sm font-medium hover:bg-blue-50 transition-colors">
                            Analyze
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <TrendingUpIcon className="w-5 h-5" />
                    <div>
                      <div className="text-sm font-semibold">Win Rate</div>
                      <div className="text-lg font-bold">+45%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful AI Features for Every Stage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From discovery to submission, our AI platform handles every aspect of the tendering process with precision and intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-8 bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Measurable Results That Matter
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of businesses already winning more with AI-powered tendering
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{benefit.metric}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{benefit.label}</div>
                <div className="text-gray-600">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Tenderly Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple, powerful, and automated - get started in minutes
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 text-white rounded-full text-2xl font-bold mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <div className="w-full h-0.5 bg-gradient-to-r from-blue-600 to-teal-600"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600">
              See how businesses are transforming their tender success with AI
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Tendering Success?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of businesses already winning more tenders with AI. Start your free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 flex items-center justify-center">
              Start Free 14-Day Trial
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Schedule Demo
            </button>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-blue-100">
            <div className="flex items-center">
              <ShieldCheckIcon className="w-5 h-5 mr-2" />
              Enterprise Security
            </div>
            <div className="flex items-center">
              <UsersIcon className="w-5 h-5 mr-2" />
              24/7 Support
            </div>
            <div className="flex items-center">
              <ClockIcon className="w-5 h-5 mr-2" />
              Setup in Minutes
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                  <SparklesIcon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Tenderly</span>
              </div>
              <p className="text-gray-400">
                Revolutionizing the tendering process with artificial intelligence.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><Link href="/tenders" className="hover:text-white transition-colors">Browse Tenders</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Tenderly. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}