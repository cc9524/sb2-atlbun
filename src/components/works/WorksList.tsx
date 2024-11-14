import React from 'react';
import { Eye, Download, Share2, Edit, Trash2, MoreVertical, FileText, Image, Video, Music } from 'lucide-react';

interface WorksListProps {
  searchTerm: string;
  filterCategory: string;
}

const WORKS = [
  {
    id: '1',
    title: '春节主视觉设计',
    category: 'image',
    description: '2024年春节营销主视觉设计，包含海报、banner等多个尺寸',
    views: 1234,
    downloads: 56,
    date: '2024-01-15',
    status: 'published',
    size: '12.5MB'
  },
  {
    id: '2',
    title: '品牌宣传视频',
    category: 'video',
    description: '品牌形象宣传片，时长2分钟，包含产品展示和企业文化',
    views: 892,
    downloads: 34,
    date: '2024-01-14',
    status: 'published',
    size: '256MB'
  },
  {
    id: '3',
    title: '产品介绍文案',
    category: 'text',
    description: '新产品系列的营销文案，包含产品特点和用户价值主张',
    views: 567,
    downloads: 23,
    date: '2024-01-13',
    status: 'draft',
    size: '128KB'
  }
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'image':
      return <Image className="w-5 h-5 text-blue-500" />;
    case 'video':
      return <Video className="w-5 h-5 text-purple-500" />;
    case 'audio':
      return <Music className="w-5 h-5 text-green-500" />;
    case 'text':
      return <FileText className="w-5 h-5 text-orange-500" />;
    default:
      return null;
  }
};

export default function WorksList({ searchTerm, filterCategory }: WorksListProps) {
  const filteredWorks = WORKS.filter(work => {
    const matchesSearch = work.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         work.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterCategory === 'all' || work.category === filterCategory;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      {/* Table Header */}
      <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-500">
        <div className="col-span-5">作品信息</div>
        <div className="col-span-2 text-center">数据</div>
        <div className="col-span-2 text-center">状态</div>
        <div className="col-span-2 text-center">日期</div>
        <div className="col-span-1 text-center">操作</div>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-gray-200">
        {filteredWorks.map((work) => (
          <div key={work.id} className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-gray-50">
            {/* Work Info */}
            <div className="col-span-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  {getCategoryIcon(work.category)}
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-900">{work.title}</h4>
                  <p className="text-sm text-gray-500">{work.description}</p>
                  <p className="text-xs text-gray-400 mt-1">大小: {work.size}</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="col-span-2">
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center text-sm text-gray-500">
                  <Eye className="w-4 h-4 mr-1" />
                  {work.views}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Download className="w-4 h-4 mr-1" />
                  {work.downloads}
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="col-span-2 text-center">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                work.status === 'published'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {work.status === 'published' ? '已发布' : '草稿'}
              </span>
            </div>

            {/* Date */}
            <div className="col-span-2 text-center text-sm text-gray-500">
              {work.date}
            </div>

            {/* Actions */}
            <div className="col-span-1">
              <div className="flex items-center justify-center space-x-2">
                <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">
                  <Share2 className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                </button>
                <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">
                  <Edit className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                </button>
                <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">
                  <MoreVertical className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}