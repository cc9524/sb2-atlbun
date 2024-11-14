import React from 'react';
import { Calendar, Clock, CheckCircle, AlertCircle, Plus, Users, ArrowRight } from 'lucide-react';

const PROJECTS = [
  {
    id: '1',
    title: '2024春节营销创意',
    description: '为品牌打造春节营销创意内容',
    deadline: '2024-02-10',
    status: 'in-progress',
    progress: 65,
    members: [
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    ],
    tasks: [
      { name: '创意策划', status: 'completed' },
      { name: '视觉设计', status: 'in-progress' },
      { name: '文案撰写', status: 'pending' }
    ]
  },
  {
    id: '2',
    title: '品牌视觉升级',
    description: '企业品牌视觉识别系统升级项目',
    deadline: '2024-03-01',
    status: 'pending',
    progress: 30,
    members: [
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    ],
    tasks: [
      { name: '品牌调研', status: 'completed' },
      { name: 'Logo设计', status: 'in-progress' },
      { name: '应用场景设计', status: 'pending' }
    ]
  }
];

export default function ProjectList() {
  return (
    <div className="space-y-6">
      {/* Create New Project Button */}
      <button className="w-full bg-white border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-indigo-500 hover:bg-gray-50 transition-all duration-200 group">
        <div className="flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
            <Plus className="h-6 w-6 text-gray-400 group-hover:text-indigo-600" />
          </div>
          <span className="mt-2 text-gray-600 group-hover:text-indigo-600">创建新项目</span>
        </div>
      </button>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <div key={project.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-200">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                project.status === 'in-progress' 
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {project.status === 'in-progress' ? '进行中' : '待开始'}
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-6">{project.description}</p>
            
            {/* Progress Bar */}
            <div className="mb-6">
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

            {/* Tasks */}
            <div className="space-y-3 mb-6">
              {project.tasks.map((task, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    {task.status === 'completed' ? (
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    ) : task.status === 'in-progress' ? (
                      <Clock className="h-4 w-4 text-yellow-500 mr-2" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-gray-400 mr-2" />
                    )}
                    <span className={task.status === 'completed' ? 'text-gray-400 line-through' : 'text-gray-600'}>
                      {task.name}
                    </span>
                  </div>
                  <span className={`text-xs ${
                    task.status === 'completed' ? 'text-green-500' :
                    task.status === 'in-progress' ? 'text-yellow-500' : 'text-gray-400'
                  }`}>
                    {task.status === 'completed' ? '已完成' :
                     task.status === 'in-progress' ? '进行中' : '待开始'}
                  </span>
                </div>
              ))}
            </div>

            {/* Project Info */}
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Calendar className="h-4 w-4 mr-1" />
              <span>截止日期: {project.deadline}</span>
            </div>

            {/* Team Members and Action */}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-2">
                  {project.members.map((avatar, index) => (
                    <img
                      key={index}
                      src={avatar}
                      alt={`Team member ${index + 1}`}
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <button className="text-gray-400 hover:text-indigo-600">
                  <Users className="h-5 w-5" />
                </button>
              </div>
              <button className="flex items-center text-indigo-600 hover:text-indigo-700 text-sm font-medium group">
                查看详情
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}