import React from 'react';
import { Navigate } from 'react-router-dom';
import StudentDashboard from './StudentDashboard';
import TraineeDashboard from './TraineeDashboard';
import CreativeWorkshop from '../workshop/CreativeWorkshop';

export default function Dashboard() {
  const userStr = localStorage.getItem('user');
  const user = userStr ? JSON.parse(userStr) : null;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Show CreativeWorkshop when accessed via the workshop route
  const path = window.location.pathname;
  if (path === '/dashboard/workshop') {
    return <CreativeWorkshop />;
  }

  // Show appropriate dashboard based on user role
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50">
      {user.role === 'student' ? <StudentDashboard /> : <TraineeDashboard />}
    </div>
  );
}