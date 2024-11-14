import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Settings, MessageCircle, Crown, Clock, ChevronRight, Plus } from 'lucide-react';

const TEAMS = [
  {
    id: '1',
    name: '创意工作室',
    description: '专注于品牌创意和视觉设计',
    members: 8,
    role: 'owner',
    lastActive: '2小时前',
    avatar: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: '2',
    name: 'AI研发小组',
    description: '探索AI技术在创意领域的应用',
    members: 12,
    role: 'member',
    lastActive: '10分钟前',
    avatar: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&auto=format&fit=crop&q=60'
  }
];

export default function TeamsList() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header with Create Team Button */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">成员管理</h1>
            <p className="mt-1 text-sm text-gray-500">管理您的团队和成员</p>
          </div>
          <button
            onClick={() => navigate('/teams/create')}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            <Plus className="h-4 w-4 mr-2" />
            创建新团队
          </button>
        </div>

        {/* Teams List */}
        <div className="space-y-4">
          {TEAMS.map((team) => (
            <div
              key={team.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center p-6">
                {/* Team Avatar */}
                <div className="flex-shrink-0">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                    <img
                      src={team.avatar}
                      alt={team.name}
                      className="w-full h-full object-cover"
                    />
                    {team.role === 'owner' && (
                      <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-100 border-2 border-white">
                          <Crown className="h-3 w-3 text-yellow-600" />
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Team Info */}
                <div className="ml-6 flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{team.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">{team.description}</p>
                    </div>
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{team.members} 成员</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{team.lastActive}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-2">
                      {team.role === 'owner' && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          <Crown className="w-3 h-3 mr-1" />
                          团队所有者
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => navigate(`/teams/${team.id}/chat`)}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        聊天室
                      </button>
                      <button
                        onClick={() => navigate(`/teams/${team.id}/manage`)}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        <Settings className="w-4 h-4 mr-2" />
                        管理
                      </button>
                      <button
                        onClick={() => navigate(`/teams/${team.id}`)}
                        className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {TEAMS.length === 0 && (
          <div className="text-center py-12">
            <Users className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">暂无团队</h3>
            <p className="mt-1 text-sm text-gray-500">开始创建您的第一个团队</p>
            <div className="mt-6">
              <button
                onClick={() => navigate('/teams/create')}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <Plus className="h-4 w-4 mr-2" />
                创建新团队
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}