import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Home,
  Sparkles,
  FolderKanban,
  Palette,
  Image as ImageIcon,
  User,
  Crown,
  Video,
  Youtube,
  Instagram,
  MessageCircle,
  Lightbulb
} from 'lucide-react';

interface NavGroup {
  title: string;
  items: NavItem[];
}

interface NavItem {
  title: string;
  path: string;
  icon: React.ReactNode;
  badge?: string;
  description?: string;
}

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: (collapsed: boolean) => void;
}

const NAV_GROUPS: NavGroup[] = [
  {
    title: '探索',
    items: [
      {
        title: '模型市场',
        path: '/marketplace',
        icon: <Sparkles className="w-5 h-5" />,
        description: '探索AI模型'
      },
      {
        title: '创意灵感',
        path: '/inspiration',
        icon: <Lightbulb className="w-5 h-5" />,
        description: '发现优秀作品',
        badge: 'New'
      }
    ]
  },
  {
    title: '创作',
    items: [
      {
        title: '项目管理',
        path: '/dashboard/projects',
        icon: <FolderKanban className="w-5 h-5" />,
        description: '管理创作项目和工作室'
      },
      {
        title: '创作工具',
        path: '/dashboard/tools',
        icon: <Palette className="w-5 h-5" />,
        description: 'AI辅助创作'
      },
      {
        title: '我的作品',
        path: '/dashboard/works',
        icon: <ImageIcon className="w-5 h-5" />,
        description: '作品管理'
      }
    ]
  },
  {
    title: '更多',
    items: [
      {
        title: '个人中心',
        path: '/profile',
        icon: <User className="w-5 h-5" />,
        description: '账号管理'
      },
      {
        title: '会员中心',
        path: '/membership',
        icon: <Crown className="w-5 h-5" />,
        description: '会员权益',
        badge: 'Pro'
      }
    ]
  }
];

const SOCIAL_LINKS = [
  { icon: <Video className="w-5 h-5" />, name: '抖音' },
  { icon: <Youtube className="w-5 h-5" />, name: 'B站' },
  { icon: <Instagram className="w-5 h-5" />, name: '小红书' },
  { icon: <MessageCircle className="w-5 h-5" />, name: '微信' }
];

export default function Sidebar({ isCollapsed }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="flex flex-col h-full">
        {/* Navigation Groups */}
        <nav className="flex-1 p-4">
          {NAV_GROUPS.map((group, groupIndex) => (
            <div key={`group-${groupIndex}`} className={groupIndex !== 0 ? 'mt-8' : ''}>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-3">
                {group.title}
              </h3>
              <div className="space-y-3">
                {group.items.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <div key={item.path} className="px-2">
                      <button
                        onClick={() => navigate(item.path)}
                        className={`w-full group rounded-xl transition-all duration-200 border ${
                          isActive 
                            ? 'bg-indigo-50 border-indigo-200' 
                            : 'border-gray-200 hover:border-indigo-200 hover:bg-gray-50'
                        }`}
                      >
                        <div className="p-3">
                          <div className="flex items-center">
                            <div className={`flex-shrink-0 ${
                              isActive ? 'text-indigo-600' : 'text-gray-500 group-hover:text-indigo-600'
                            }`}>
                              {item.icon}
                            </div>
                            <div className="ml-3 flex-1">
                              <div className="flex items-center justify-between">
                                <span className={`text-sm font-medium ${
                                  isActive ? 'text-indigo-600' : 'text-gray-900'
                                }`}>
                                  {item.title}
                                </span>
                                {item.badge && (
                                  <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-indigo-100 text-indigo-600 rounded-full">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              {item.description && (
                                <p className="text-xs text-gray-500 mt-0.5">
                                  {item.description}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Social Links */}
        <div className="mt-auto px-4 py-4 border-t border-gray-200">
          <div className="flex justify-around">
            {SOCIAL_LINKS.map((link, index) => (
              <button
                key={`social-${index}`}
                className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
                title={link.name}
              >
                {link.icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}