import React, { useState, useRef } from 'react';
import { Star, Clock, ExternalLink, MessageSquare, Image, Video, Music, History, Bot, Sparkles, Wand, FileText } from 'lucide-react';
import TaskHistory from './TaskHistory';
import TaskStatusBar from './TaskStatusBar';

interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: string;
  rating: number;
  users: number;
}

interface ToolCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  tools: Tool[];
}

const TOOL_CATEGORIES: ToolCategory[] = [
  {
    id: 'llm',
    title: '大语言模型',
    icon: Bot,
    tools: [
      {
        id: 'assistant',
        name: 'Assistant',
        description: '通用助手机器人，对于需要最新信息的查询，它可以访问网络的内容。',
        url: 'https://www.anthropic.com/assistant',
        icon: '👾',
        rating: 4.8,
        users: 12000
      },
      {
        id: 'claude',
        name: 'Claude-3.5-Sonic',
        description: 'Anthropic最强大的模型，使用截至2024年10月22日的最新模型。',
        url: 'https://www.anthropic.com/claude',
        icon: '🌟',
        rating: 4.9,
        users: 15000
      },
      {
        id: 'grok',
        name: 'Grok-beta',
        description: 'Grok-beta是xAI最智能语言模型的早期预览版本，它具有最先进的功能。',
        url: 'https://www.x.ai/grok',
        icon: '🤖',
        rating: 4.7,
        users: 8000
      }
    ]
  },
  {
    id: 'image',
    title: '图像生成',
    icon: Image,
    tools: [
      {
        id: 'flux-pro',
        name: 'FLUX-pro-1.1',
        description: '最新的图像生成模型，具有最先进的技术。',
        url: 'https://flux.ai',
        icon: '🎨',
        rating: 4.9,
        users: 10000
      },
      {
        id: 'ideogram',
        name: 'Ideogram-v2',
        description: '最新的图像生成模型，擅长字体和视觉设计。',
        url: 'https://ideogram.ai',
        icon: '✨',
        rating: 4.8,
        users: 9000
      },
      {
        id: 'dalle',
        name: 'DALL-E-3',
        description: 'OpenAI的图像生成模型，擅长根据提示生成细节丰富的图像。',
        url: 'https://openai.com/dall-e-3',
        icon: '🎯',
        rating: 4.9,
        users: 20000
      }
    ]
  },
  {
    id: 'video',
    title: '视频生成',
    icon: Video,
    tools: [
      {
        id: 'runway',
        name: 'Runway',
        description: '最新的文本到视频的生成模型，称为Gen-3 Alpha Turbo。',
        url: 'https://runway.ml',
        icon: '🎬',
        rating: 4.7,
        users: 5000
      },
      {
        id: 'pika',
        name: 'Pika',
        description: '文本、图像到视频生成工具。',
        url: 'https://pika.art',
        icon: '📽️',
        rating: 4.6,
        users: 4000
      },
      {
        id: 'mochi',
        name: 'Mochi-preview',
        description: '具备高质量视频生成功能的模型。',
        url: 'https://mochi.video',
        icon: '🎥',
        rating: 4.5,
        users: 3000
      }
    ]
  }
];

export default function CreativeTools() {
  const [showHistory, setShowHistory] = useState(false);
  const toolsRef = useRef<Record<string, HTMLDivElement | null>>({});

  const handlePhaseClick = (tool: string) => {
    const element = toolsRef.current[tool];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex h-full">
      <div className={`flex-1 bg-gray-50 transition-all duration-300 ${showHistory ? 'mr-80' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header with History Toggle */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">创作工具</h1>
            <button
              onClick={() => setShowHistory(!showHistory)}
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <History className="w-4 h-4 mr-2" />
              创作历史
            </button>
          </div>

          {/* Task Status Bar */}
          <TaskStatusBar onPhaseClick={handlePhaseClick} />

          {/* Tool Categories */}
          <div className="space-y-12">
            {TOOL_CATEGORIES.map((category) => (
              <div 
                key={category.id} 
                className="space-y-6"
                ref={(el) => toolsRef.current[category.id] = el}
              >
                <div className="flex items-center space-x-2">
                  <category.icon className="w-6 h-6 text-gray-600" />
                  <h2 className="text-xl font-semibold text-gray-900">{category.title}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.tools.map((tool) => (
                    <a
                      key={tool.id}
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 bg-white p-4 rounded-xl border border-gray-200 hover:border-indigo-500 transition-all duration-200 group"
                    >
                      <div className="flex-shrink-0 text-2xl">{tool.icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium text-gray-900 truncate group-hover:text-indigo-600">
                            {tool.name}
                          </h3>
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-indigo-600" />
                        </div>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-2">{tool.description}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="flex items-center text-xs text-gray-500">
                            <Star className="w-3 h-3 text-yellow-400 mr-1" />
                            {tool.rating}
                          </div>
                          <div className="flex items-center text-xs text-gray-500">
                            <Clock className="w-3 h-3 mr-1" />
                            {tool.users.toLocaleString()}+ 用户
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Task History Sidebar */}
      {showHistory && (
        <div className="fixed right-0 top-0 w-80 h-full bg-white border-l border-gray-200 overflow-y-auto">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">创作历史</h2>
              <button
                onClick={() => setShowHistory(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* Add history content here */}
          </div>
        </div>
      )}
    </div>
  );
}