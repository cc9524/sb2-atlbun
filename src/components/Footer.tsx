import React from 'react';
import { Brush } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <Brush className="h-8 w-8 text-indigo-600" />
              <div className="ml-2">
                <span className="text-xl font-bold text-gray-900">蜂潮</span>
                <span className="text-lg font-medium text-indigo-600">AIGC共创平台</span>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              释放创意，连接未来
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">产品</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">功能介绍</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">定价方案</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">更新日志</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">资源</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">帮助中心</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">创作指南</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">API文档</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">关于</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">关于我们</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">联系我们</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">加入我们</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-100 pt-8">
          <p className="text-center text-gray-600">© 2024 蜂潮AIGC共创平台. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
}