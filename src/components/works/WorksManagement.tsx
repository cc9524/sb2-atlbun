import React, { useState } from 'react';
import { Grid, List, Share2, Download, Edit, Trash2, Filter, Search, BarChart2, TrendingUp, Users, Eye } from 'lucide-react';
import WorksGrid from './WorksGrid';
import WorksList from './WorksList';
import WorksStats from './WorksStats';

const STATS = [
  {
    id: 1,
    name: '总浏览量',
    value: '124,892',
    change: '+12.3%',
    icon: Eye,
    trend: 'up'
  },
  {
    id: 2,
    name: '总下载量',
    value: '8,234',
    change: '+8.2%',
    icon: Download,
    trend: 'up'
  },
  {
    id: 3,
    name: '作品数量',
    value: '45',
    change: '+4',
    icon: BarChart2,
    trend: 'up'
  },
  {
    id: 4,
    name: '粉丝数量',
    value: '2,312',
    change: '+123',
    icon: Users,
    trend: 'up'
  }
];

export default function WorksManagement() {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-gray-50">
      {/* Header with Stats */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">我的作品</h1>
              <p className="mt-1 text-sm text-gray-500">管理和分享您的创意作品</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
                <Share2 className="h-4 w-4 mr-2" />
                分享作品集
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.id}
                className="bg-white overflow-hidden rounded-lg border border-gray-200 hover:border-indigo-500 transition-all duration-200"
              >
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <stat.icon className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          {stat.name}
                        </dt>
                        <dd className="flex items-baseline">
                          <div className="text-2xl font-semibold text-gray-900">
                            {stat.value}
                          </div>
                          <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                            stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {stat.change}
                            <TrendingUp className={`self-center flex-shrink-0 h-4 w-4 ${
                              stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                            } ml-1`}/>
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters and View Toggle */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Search Bar */}
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="搜索作品..."
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Filters Group */}
          <div className="flex gap-3 items-center">
            {/* Category Filter */}
            <div className="relative">
              <select
                className="appearance-none bg-white pl-3 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors text-sm font-medium text-gray-700 cursor-pointer min-w-[140px]"
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                <option value="all">所有分类</option>
                <option value="image">图片作品</option>
                <option value="video">视频作品</option>
                <option value="audio">音频作品</option>
                <option value="text">文本作品</option>
              </select>
            </div>

            {/* View Toggle */}
            <div className="bg-gray-100 p-1 rounded-lg flex items-center">
              <button
                onClick={() => setView('grid')}
                className={`flex items-center px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                  view === 'grid'
                    ? 'bg-white text-indigo-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Grid className="h-4 w-4 mr-1.5" />
                网格
              </button>
              <button
                onClick={() => setView('list')}
                className={`flex items-center px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                  view === 'list'
                    ? 'bg-white text-indigo-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <List className="h-4 w-4 mr-1.5" />
                列表
              </button>
            </div>
          </div>
        </div>

        {/* Works Content */}
        {view === 'grid' ? (
          <WorksGrid searchTerm={searchTerm} filterCategory={filterCategory} />
        ) : (
          <WorksList searchTerm={searchTerm} filterCategory={filterCategory} />
        )}
      </div>
    </div>
  );
}