import React, { useState } from 'react';
import { User, LogOut, Settings, CreditCard, BarChart2, Crown, Bell, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showPublishMenu, setShowPublishMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md fixed w-full z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <img 
              src="https://res.cloudinary.com/dfojdc0bl/image/upload/v1731573123/ZT54T0_I3X_3NPR9_N7E_r0sj8y.png" 
              alt="蜂潮AIGC共创平台" 
              className="h-32"
            />
          </div>
          <div className="flex items-center space-x-8">
            <button onClick={() => navigate('/dashboard/workshop')} className="text-gray-700 hover:text-indigo-600 transition-colors">
              创意空间
            </button>

            {/* Publish Menu */}
            <div className="relative">
              <button
                onMouseEnter={() => setShowPublishMenu(true)}
                onMouseLeave={() => setShowPublishMenu(false)}
                className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors"
              >
                <Plus className="h-5 w-5 mr-1" />
                发布
              </button>
              {showPublishMenu && (
                <div
                  onMouseEnter={() => setShowPublishMenu(true)}
                  onMouseLeave={() => setShowPublishMenu(false)}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2 border border-gray-100"
                >
                  <button
                    onClick={() => navigate('/dashboard/upload')}
                    className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-50"
                  >
                    发布作品
                  </button>
                  <button
                    onClick={() => navigate('/dashboard/publish-model')}
                    className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-50"
                  >
                    发布模型
                  </button>
                  <button
                    onClick={() => navigate('/dashboard/projects/new')}
                    className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-50"
                  >
                    发布项目
                  </button>
                </div>
              )}
            </div>

            {/* Login Button */}
            <button 
              onClick={() => navigate('/login')}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-200 hover:scale-105"
            >
              登录
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}