// components/Layout.jsx
// Optimized layout component with conditional sidebar for authenticated users only
// Landing page gets full screen width without sidebar

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ToastContainer from './ToastContainer';
import { useAuth } from '../contexts/AuthContext';

export default function Layout({ children }) {
  const { user } = useAuth();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // For non-authenticated users, render without sidebar (full width)
  if (!user) {
    return (
      <div className="min-h-screen">
        <main className="min-h-screen">
          {children}
        </main>
        <ToastContainer />
      </div>
    );
  }

  // For authenticated users, render with sidebar
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Sidebar */}
      <Sidebar 
        isCollapsed={sidebarCollapsed} 
        setIsCollapsed={setSidebarCollapsed} 
      />
      
      {/* Main Content Area with proper left margin to account for fixed sidebar */}
      <div className={`transition-all duration-300 ease-in-out ${sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-60'}`}>
        {/* Main content */}
        <main className="min-h-screen">
          <div className="max-w-7xl mx-auto w-full px-4 py-6 lg:px-8 lg:py-8">
            {children}
          </div>
        </main>
        
        {/* Footer */}
        <footer className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <a
                href="https://bolt.new"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 transition focus-ring rounded-md px-2 py-1"
              >
                <span className="text-sm">Built on</span>
                <div className="bg-black text-white px-2 py-1 rounded text-xs font-bold">
                  BOLT
                </div>
              </a>
            </div>
          </div>
        </footer>
      </div>
      
      {/* Toast notification container */}
      <ToastContainer />
    </div>
  );
}