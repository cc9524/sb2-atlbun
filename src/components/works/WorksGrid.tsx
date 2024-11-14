import React from 'react';
import { Eye, Download, Share2, Edit, Trash2, MoreVertical } from 'lucide-react';

interface WorksGridProps {
  searchTerm: string;
  filterCategory: string;
}

const WORKS = [
  {
    id: '1',
    title: '春节主视觉设计',
    category: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1672911640817-9c70ae0b1692?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    views: 1234,
    downloads: 56,
    date: '2024-01-15',
    status: 'published'
  },
  {
    id: '2',
    title: '品牌宣传视频',
    category: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    views: 892,
    downloads: 34,
    date: '2024-01-14',
    status: 'published'
  },
  {
    id: '3',
    title: '产品介绍文案',
    category: 'text',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    views: 567,
    downloads: 23,
    date: '2024-01-13',
    status: 'draft'
  }
];

export default function WorksGrid({ searchTerm, filterCategory }: WorksGridProps) {
  const filteredWorks = WORKS.filter(work => {
    const matchesSearch = work.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterCategory === 'all' || work.category === filterCategory;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredWorks.map((work) => (
        <div
          key={work.id}
          className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-200 group"
        >
          {/* Thumbnail */}
          <div className="relative aspect-video">
            <img
              src={work.thumbnail}
              alt={work.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay with Actions */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2">
              <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                <Eye className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                <Download className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                <Share2 className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                <Edit className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-medium text-gray-900">{work.title}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                work.status === 'published'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {work.status === 'published' ? '已发布' : '草稿'}
              </span>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center">
                  <Eye className="w-4 h-4 mr-1" />
                  {work.views}
                </span>
                <span className="flex items-center">
                  <Download className="w-4 h-4 mr-1" />
                  {work.downloads}
                </span>
              </div>
              <span>{work.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}