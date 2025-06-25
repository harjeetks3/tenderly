// pages/index.js
// Landing page with new hero section matching the screenshot design
// Shows marketing content for non-logged-in users and redirects logged-in users to the tenders page

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/AuthContext';
import HeroSection from '../components/HomePage/HeroSection';

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
    <div>
      {/* Hero Section matching the screenshot */}
      <HeroSection />

      {/* Additional sections can be added here */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Powerful AI Features for Every Stage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From discovery to submission, our AI platform handles every aspect of the tendering 
              process with precision and intelligence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}