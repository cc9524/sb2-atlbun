import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CreatorWorkshop() {
  const navigate = useNavigate();
  const features = [
    "智能创作助手",
    "专业模板库",
    "实时协作功能",
    "版本控制系统"
  ];

  return (
    <div className="relative bg-gradient-to-b from-white to-gray-50 py-24 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/4 w-[1000px] h-[1000px] bg-gradient-to-br from-indigo-50/40 via-purple-50/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/4 w-[800px] h-[800px] bg-gradient-to-tl from-purple-50/40 via-indigo-50/40 to-transparent rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
                专业的创作工坊
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                提供直观的创作工具和专业的创作环境，让您的创意轻松成形。智能辅助功能帮助您提高创作效率，实现快速迭代。
              </p>
              
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:scale-150 transition-transform duration-300"></div>
                    <p className="ml-3 text-gray-600 group-hover:text-indigo-600 transition-colors">{feature}</p>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => navigate('/dashboard/workshop')}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 group"
              >
                开始创作
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10"></div>
              <img
                src="https://res.cloudinary.com/dfojdc0bl/image/upload/v1731401089/%E9%A6%96%E9%A1%B5%E4%B8%93%E4%B8%9A%E7%9A%84%E5%88%9B%E4%BD%9C%E5%B7%A5%E5%9D%8A_rcnii1.jpg"
                alt="创作工坊界面"
                className="w-full h-full object-cover rounded-2xl transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 via-transparent to-purple-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-purple-400/20 to-indigo-400/20 rounded-full blur-xl animate-pulse delay-150"></div>
          </div>
        </div>
      </div>
    </div>
  );
}