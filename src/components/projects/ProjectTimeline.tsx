import React from 'react';
import { Calendar, Clock, CheckCircle, AlertCircle } from 'lucide-react';

interface TimelineProps {
  searchTerm: string;
  filterStatus: string;
}

const PROJECTS = [
  {
    id: '1',
    title: '2024春节营销创意',
    startDate: '2024-01-15',
    endDate: '2024-02-10',
    status: 'active',
    progress: 65,
    description: '为品牌打造春节营销创意内容',
    team: [
      {
        name: '张三',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
      },
      {
        name: '李四',
        avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
      }
    ],
    milestones: [
      { name: '创意策划', date: '2024-01-20', status: 'completed' },
      { name: '视觉设计', date: '2024-01-30', status: 'active' },
      { name: '内容制作', date: '2024-02-05', status: 'pending' },
      { name: '发布上线', date: '2024-02-10', status: 'pending' }
    ]
  },
  {
    id: '2',
    title: '品牌视觉升级',
    startDate: '2024-02-01',
    endDate: '2024-03-01',
    status: 'pending',
    progress: 30,
    description: '企业品牌视觉识别系统升级项目',
    team: [
      {
        name: '王五',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
      }
    ],
    milestones: [
      { name: '品牌调研', date: '2024-02-10', status: 'completed' },
      { name: 'Logo设计', date: '2024-02-20', status: 'active' },
      { name: '视觉规范', date: '2024-02-25', status: 'pending' },
      { name: '应用设计', date: '2024-03-01', status: 'pending' }
    ]
  }
];

export default function ProjectTimeline({ searchTerm, filterStatus }: TimelineProps) {
  const filteredProjects = PROJECTS.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || project.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-8">
      {filteredProjects.map((project) => (
        <div key={project.id} className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
              <p className="text-gray-500 mt-1">{project.description}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              project.status === 'active' ? 'bg-green-100 text-green-800' :
              project.status === 'completed' ? 'bg-blue-100 text-blue-800' :
              'bg-yellow-100 text-yellow-800'
            }`}>
              {project.status === 'active' ? '进行中' :
               project.status === 'completed' ? '已完成' : '未开始'}
            </span>
          </div>

          <div className="flex items-center gap-6 mb-6">
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="h-4 w-4 mr-1" />
              {project.startDate} - {project.endDate}
            </div>
            <div className="flex -space-x-2">
              {project.team.map((member, index) => (
                <img
                  key={index}
                  src={member.avatar}
                  alt={member.name}
                  className="w-8 h-8 rounded-full border-2 border-white"
                  title={member.name}
                />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            <div className="space-y-6 relative">
              {project.milestones.map((milestone, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className={`w-4 h-4 rounded-full ${
                    milestone.status === 'completed' ? 'bg-green-500' :
                    milestone.status === 'active' ? 'bg-blue-500' :
                    'bg-gray-300'
                  }`}></div>
                  <div className="flex-1 bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">{milestone.name}</span>
                      <span className="text-sm text-gray-500">{milestone.date}</span>
                    </div>
                    <div className="mt-2 flex items-center text-sm">
                      {milestone.status === 'completed' ? (
                        <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                      ) : milestone.status === 'active' ? (
                        <Clock className="h-4 w-4 text-blue-500 mr-1" />
                      ) : (
                        <AlertCircle className="h-4 w-4 text-gray-400 mr-1" />
                      )}
                      <span className={
                        milestone.status === 'completed' ? 'text-green-600' :
                        milestone.status === 'active' ? 'text-blue-600' :
                        'text-gray-500'
                      }>
                        {milestone.status === 'completed' ? '已完成' :
                         milestone.status === 'active' ? '进行中' : '待开始'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}