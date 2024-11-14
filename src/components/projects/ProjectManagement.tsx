import React, { useState } from 'react';
import { Plus, Calendar, Users, Clock, CheckCircle, AlertCircle, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const STUDIOS = [
  {
    id: '1',
    name: '蜂狂工作室',
    description: '专注于品牌创意和视觉设计',
    members: 8,
    role: 'owner',
    lastActive: '2小时前',
    avatar: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60',
    projects: [
      {
        id: 'p1',
        title: '2024春节营销创意',
        description: '为品牌打造春节营销创意内容',
        deadline: '2024-02-10',
        status: 'active',
        progress: 65
      },
      {
        id: 'p2',
        title: '品牌视觉升级',
        description: '企业品牌视觉识别系统升级项目',
        deadline: '2024-03-01',
        status: 'pending',
        progress: 30
      }
    ]
  },
  {
    id: '2',
    name: '南院工作室',
    description: '探索AI技术在创意领域的应用',
    members: 12,
    role: 'member',
    lastActive: '10分钟前',
    avatar: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&auto=format&fit=crop&q=60',
    projects: [
      {
        id: 'p3',
        title: 'AI模型优化',
        description: '优化现有AI模型性能',
        deadline: '2024-02-15',
        status: 'active',
        progress: 45
      }
    ]
  }
];

export default function ProjectManagement() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">项目管理</h1>
              <p className="mt-1 text-sm text-gray-500">管理工作室和创意项目</p>
            </div>
            <div className="mt-4 md:mt-0">
              <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
                <Plus className="h-5 w-5 mr-2" />
                创建工作室
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Studios */}
        {STUDIOS.map((studio) => (
          <div key={studio.id} className="mb-8">
            {/* Studio Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <img
                  src={studio.avatar}
                  alt={studio.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="ml-4">
                  <h2 className="text-xl font-semibold text-gray-900">{studio.name}</h2>
                  <p className="text-sm text-gray-500">{studio.description}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="w-4 h-4 mr-1" />
                  {studio.members} 成员
                </div>
                <button
                  onClick={() => navigate(`/teams/${studio.id}/manage`)}
                  className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Settings className="w-4 h-4 mr-1.5" />
                  管理
                </button>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Add Project Card */}
              <button className="h-[200px] bg-white border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-indigo-500 hover:bg-gray-50 transition-all duration-200 group">
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                    <Plus className="h-6 w-6 text-gray-400 group-hover:text-indigo-600" />
                  </div>
                  <span className="mt-2 text-gray-600 group-hover:text-indigo-600">创建新项目</span>
                </div>
              </button>

              {/* Project Cards */}
              {studio.projects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => navigate(`/teams/${studio.id}/chat`)}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'active' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {project.status === 'active' ? '进行中' : '待开始'}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                    
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>项目进度</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div 
                          className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.deadline}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}