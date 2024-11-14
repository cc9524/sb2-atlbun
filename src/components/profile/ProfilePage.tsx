import React, { useState } from 'react';
import { Calendar, Battery, Zap, Lock, Plus, X, CheckCircle } from 'lucide-react';

interface Tool {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'inactive';
  expiryDate: string;
  usageLimit: number;
  currentUsage: number;
  icon: string;
}

const AI_TOOLS: Tool[] = [
  {
    id: '1',
    name: 'ChatGPT',
    description: '智能对话和内容创作助手',
    status: 'active',
    expiryDate: '2024-12-31',
    usageLimit: 1000,
    currentUsage: 350,
    icon: '🤖'
  },
  {
    id: '2',
    name: 'Midjourney',
    description: '高质量AI图像生成工具',
    status: 'active',
    expiryDate: '2024-12-31',
    usageLimit: 500,
    currentUsage: 280,
    icon: '🎨'
  },
  {
    id: '3',
    name: 'Runway',
    description: '专业级AI视频创作平台',
    status: 'inactive',
    expiryDate: '-',
    usageLimit: 100,
    currentUsage: 0,
    icon: '🎥'
  }
];

export default function ProfilePage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  const handleApply = (tool: Tool) => {
    setSelectedTool(tool);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">个人中心</h1>
          <p className="mt-1 text-sm text-gray-500">管理您的AI工具使用权限和配额</p>
        </div>

        {/* Active Tools Section */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">已开通工具</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AI_TOOLS.filter(tool => tool.status === 'active').map((tool) => (
              <div key={tool.id} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{tool.icon}</span>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{tool.name}</h3>
                      <p className="text-sm text-gray-500">{tool.description}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <Zap className="w-3 h-3 mr-1" />
                    已开通
                  </span>
                </div>

                {/* Usage Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>使用量</span>
                    <span>{tool.currentUsage}/{tool.usageLimit}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${
                        (tool.currentUsage / tool.usageLimit) > 0.8
                          ? 'bg-red-500'
                          : (tool.currentUsage / tool.usageLimit) > 0.5
                          ? 'bg-yellow-500'
                          : 'bg-green-500'
                      }`}
                      style={{ width: `${(tool.currentUsage / tool.usageLimit) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Tool Info */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    有效期至：{tool.expiryDate}
                  </div>
                  <div className="flex items-center">
                    <Battery className="w-4 h-4 mr-1" />
                    {Math.round((1 - tool.currentUsage / tool.usageLimit) * 100)}% 剩余
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Available Tools Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-6">可申请工具</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AI_TOOLS.filter(tool => tool.status === 'inactive').map((tool) => (
              <div key={tool.id} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{tool.icon}</span>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{tool.name}</h3>
                      <p className="text-sm text-gray-500">{tool.description}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    <Lock className="w-3 h-3 mr-1" />
                    未开通
                  </span>
                </div>

                <button
                  onClick={() => handleApply(tool)}
                  className="w-full mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  申请开通
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Application Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">申请提交成功</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center justify-center py-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <p className="text-gray-600 text-center">
                    您申请开通 <span className="font-medium">{selectedTool?.name}</span> 的请求已提交，
                    待管理员审核通过后即可使用。
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <button
                  onClick={() => setShowModal(false)}
                  className="w-full inline-flex justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  确定
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}