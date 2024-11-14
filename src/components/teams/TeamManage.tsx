import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Users, Settings, Shield, UserPlus, UserMinus, Crown, Mail, ArrowLeft } from 'lucide-react';

const TEAM_MEMBERS = [
  {
    id: '1',
    name: '张三',
    email: 'zhangsan@example.com',
    role: 'owner',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    joinDate: '2024-01-15'
  },
  {
    id: '2',
    name: '李四',
    email: 'lisi@example.com',
    role: 'admin',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    joinDate: '2024-01-16'
  },
  {
    id: '3',
    name: '王五',
    email: 'wangwu@example.com',
    role: 'member',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    joinDate: '2024-01-17'
  }
];

export default function TeamManage() {
  const { teamId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={() => navigate('/dashboard/projects')}
            className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            返回项目管理
          </button>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">团队管理</h1>
          <p className="mt-1 text-sm text-gray-500">管理团队成员和设置</p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <Users className="w-8 h-8 text-indigo-600" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">总成员</h3>
                <p className="text-2xl font-semibold text-indigo-600">8</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <Shield className="w-8 h-8 text-green-600" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">管理员</h3>
                <p className="text-2xl font-semibold text-green-600">2</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <Settings className="w-8 h-8 text-purple-600" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">权限组</h3>
                <p className="text-2xl font-semibold text-purple-600">3</p>
              </div>
            </div>
          </div>
        </div>

        {/* Member Management */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900">成员列表</h2>
              <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <UserPlus className="h-4 w-4 mr-2" />
                邀请成员
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    成员
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    角色
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    加入时间
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    操作
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {TEAM_MEMBERS.map((member) => (
                  <tr key={member.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={member.avatar}
                          alt={member.name}
                        />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{member.name}</div>
                          <div className="text-sm text-gray-500">{member.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {member.role === 'owner' && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            <Crown className="w-3 h-3 mr-1" />
                            所有者
                          </span>
                        )}
                        {member.role === 'admin' && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            <Shield className="w-3 h-3 mr-1" />
                            管理员
                          </span>
                        )}
                        {member.role === 'member' && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            <Users className="w-3 h-3 mr-1" />
                            成员
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {member.joinDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end space-x-2">
                        <button className="text-gray-400 hover:text-gray-500">
                          <Mail className="w-4 h-4" />
                        </button>
                        <button className="text-gray-400 hover:text-gray-500">
                          <Settings className="w-4 h-4" />
                        </button>
                        {member.role !== 'owner' && (
                          <button className="text-red-400 hover:text-red-500">
                            <UserMinus className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}