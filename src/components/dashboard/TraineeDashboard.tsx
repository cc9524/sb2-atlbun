import React from 'react';
import { Palette, Image, Box } from 'lucide-react';

export default function TraineeDashboard() {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <h1 className="text-2xl font-semibold text-gray-900">创作工坊</h1>
        
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white overflow-hidden shadow rounded-lg cursor-pointer hover:shadow-md transition-shadow">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Palette className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">开始创作</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    使用智能工具开始您的创作之旅
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg cursor-pointer hover:shadow-md transition-shadow">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Image className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">我的作品</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    管理和展示您的创作作品
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg cursor-pointer hover:shadow-md transition-shadow">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Box className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">资源中心</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    获取创作素材和模板资源
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