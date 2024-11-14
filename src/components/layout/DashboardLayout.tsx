import React from 'react';
import Navbar from '../Navbar';
import Sidebar from './Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex">
        <Sidebar isCollapsed={false} onToggle={() => {}} />
        <main className="flex-1 ml-64 pt-16">
          {children}
        </main>
      </div>
    </div>
  );
}