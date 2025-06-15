// pages/index.js
// This is the landing page of the application
// It shows marketing content for non-logged-in users and redirects logged-in users to the tenders page

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuth } from '../contexts/AuthContext';
import { 
  MagnifyingGlassIcon,
  DocumentTextIcon,
  CpuChipIcon,
  ChartBarIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

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
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  // If user is logged in, don't show the landing page (will redirect)
  if (user) {
    return null;
  }

  // Landing page content for non-logged-in users
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            {/* Hero Title */}
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Streamline the Tender<br />
              Process with AI
            </h1>
            
            {/* Hero Subtitle */}
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              A bidder-first tender platform leveraging AI to<br />
              simplify and expedite the tendering journey
            </p>
            
            {/* CTA Button */}
            <Link href="/tenders" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
              Available Tenders
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful AI Features for Every Stage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From discovery to submission, our AI platform handles every aspect of<br />
              the tendering process with precision and intelligence.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Feature 1: Intelligent Opportunity Discovery */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MagnifyingGlassIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Intelligent Opportunity Discovery
              </h3>
              <p className="text-gray-600 leading-relaxed">
                AI scans thousands of tender<br />
                databases and alerts you to<br />
                relevant opportunities matching<br />
                your business profile.
              </p>
            </div>

            {/* Feature 2: Automated Document Analysis */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <DocumentTextIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Automated Document Analysis
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced NLP processes tender<br />
                documents to extract key<br />
                requirements, deadlines, and<br />
                evaluation criteria.
              </p>
            </div>
          </div>

          {/* Center Feature */}
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CpuChipIcon className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Smart Proposal Generation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Generate compelling, tailored<br />
              proposals using AI-powered<br />
              writing assistance and best<br />
              practice templates.
            </p>
          </div>

          {/* Bottom Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Feature 4: Competitive Intelligence */}
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ChartBarIcon className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Competitive Intelligence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Analyze competitor strategies<br />
                and market trends to optimize<br />
                your bidding approach.
              </p>
            </div>

            {/* Feature 5: Win Probability Scoring */}
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrophyIcon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Win Probability Scoring
              </h3>
              <p className="text-gray-600 leading-relaxed">
                AI calculates your chances of<br />
                success for each tender based<br />
                on historical data and match<br />
                quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Measurable Results That Matter
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of businesses already winning more with<br />
              AI-powered tendering
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">75%</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Time Saved</div>
              <p className="text-gray-600 text-sm">
                Reduce tender<br />
                preparation time<br />
                with automated<br />
                processes
              </p>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">3X</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">More opportunities</div>
              <p className="text-gray-600 text-sm">
                Discover tender<br />
                opportunities you<br />
                would have missed
              </p>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">45%</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Higher Win Rate</div>
              <p className="text-gray-600 text-sm">
                Improve success<br />
                rate with AI-<br />
                optimized<br />
                proposals
              </p>
            </div>

            {/* Stat 4 */}
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">90%</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Compliance Rate</div>
              <p className="text-gray-600 text-sm">
                Eliminate rejection<br />
                due to non-<br />
                compliance issues
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Tenderly</h3>
              <p className="text-gray-400 mb-4">
                Revolutionizing the tendering process with<br />
                artificial intelligence.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/tenders" className="hover:text-white transition-colors">Pricing</Link></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/company" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/company" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/company" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/company" className="hover:text-white transition-colors">Help center</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}