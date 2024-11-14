import React from 'react';
import { BookOpen, Star, Clock } from 'lucide-react';

export default function StudentDashboard() {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <h1 className="text-2xl font-semibold text-gray-900">学习中心</h1>
        
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">课程学习</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    浏览和学习精选的AIGC课程内容
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Star className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">作品展示</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    查看优秀作品案例和创作灵感
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Clock className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">学习记录</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    追踪您的学习进度和成果
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}