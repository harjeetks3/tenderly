// pages/index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/AuthContext';
import HomePage from '../components/HomePage/HomePage';

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
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // If user is logged in, don't show the landing page (will redirect)
  if (user) {
    return null;
  }

  // Render the HomePage component for non-authenticated users
  return <HomePage />;
}