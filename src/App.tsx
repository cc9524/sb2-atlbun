import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CreatorWorkshop from './components/CreatorWorkshop';
import Footer from './components/Footer';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import Dashboard from './components/dashboard/Dashboard';
import ModelMarketplace from './components/marketplace/ModelMarketplace';
import ModelDetail from './components/marketplace/ModelDetail';
import CreativeWorkshop from './components/workshop/CreativeWorkshop';
import ProjectManagement from './components/projects/ProjectManagement';
import CreativeTools from './components/tools/CreativeTools';
import WorksManagement from './components/works/WorksManagement';
import WorkUpload from './components/upload/WorkUpload';
import InspirationPage from './components/inspiration/InspirationPage';
import TeamsList from './components/teams/TeamsList';
import TeamChat from './components/teams/TeamChat';
import TeamManage from './components/teams/TeamManage';
import ProfilePage from './components/profile/ProfilePage';
import { Palette, Boxes, ShieldCheck, Users, Sparkles, Workflow } from 'lucide-react';

const features = [
  {
    icon: <Boxes className="w-6 h-6" />,
    title: "模型展示与交易",
    description: "浏览和交易高质量的数字创意模型"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "用户权限管理",
    description: "灵活的角色分配和权限控制系统"
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "创作工坊",
    description: "专业的创作环境和工具集"
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "一键创作",
    description: "智能辅助工具，简化创作流程"
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "作品提交",
    description: "便捷的作品上传和发布流程"
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "版权认证",
    description: "保护创作者权益，确保作品安全"
  }
];

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow">
              <Hero />
              <Features features={features} />
              <CreatorWorkshop />
              <Footer />
            </div>
          </div>
        } />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />

        {/* Previously protected routes, now public */}
        <Route path="/dashboard" element={
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
        } />
        <Route path="/dashboard/workshop" element={
          <DashboardLayout>
            <CreativeWorkshop />
          </DashboardLayout>
        } />
        <Route path="/dashboard/projects" element={
          <DashboardLayout>
            <ProjectManagement />
          </DashboardLayout>
        } />
        <Route path="/dashboard/tools" element={
          <DashboardLayout>
            <CreativeTools />
          </DashboardLayout>
        } />
        <Route path="/dashboard/works" element={
          <DashboardLayout>
            <WorksManagement />
          </DashboardLayout>
        } />
        <Route path="/dashboard/upload" element={
          <DashboardLayout>
            <WorkUpload />
          </DashboardLayout>
        } />
        <Route path="/marketplace" element={
          <DashboardLayout>
            <ModelMarketplace />
          </DashboardLayout>
        } />
        <Route path="/marketplace/:modelId" element={
          <DashboardLayout>
            <ModelDetail />
          </DashboardLayout>
        } />
        <Route path="/inspiration" element={
          <DashboardLayout>
            <InspirationPage />
          </DashboardLayout>
        } />
        <Route path="/teams" element={
          <DashboardLayout>
            <TeamsList />
          </DashboardLayout>
        } />
        <Route path="/teams/:teamId/chat" element={
          <DashboardLayout>
            <TeamChat />
          </DashboardLayout>
        } />
        <Route path="/teams/:teamId/manage" element={
          <DashboardLayout>
            <TeamManage />
          </DashboardLayout>
        } />
        <Route path="/profile" element={
          <DashboardLayout>
            <ProfilePage />
          </DashboardLayout>
        } />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}