// pages/index.js
// Landing page that redirects to tenders for MVP development
// Assumes all users are authenticated

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  // Always redirect to tenders page for MVP
  useEffect(() => {
    router.push('/tenders');
  }, [router]);

  // Show loading while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
    </div>
  );
}