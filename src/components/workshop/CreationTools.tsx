import React, { useState } from 'react';
import { FileText, Image, Video, Music, Sparkles, Wand2, Palette, Lightbulb } from 'lucide-react';

const TOOLS = [
  {
    id: 'text',
    title: '智能文案',
    description: '一键生成营销文案、文章、故事等内容',
    icon: FileText,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    features: ['营销文案生成', '文章改写优化', '多语言翻译', '标题生成']
  },
  {
    id: 'image',
    title: '图像创作',
    description: '将文字描述转换为精美图像',
    icon: Image,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    features: ['图片生成', '风格迁移', '图片修复', '人像编辑']
  },
  {
    id: 'video',
    title: '视频创作',
    description: '智能生成短视频和动画内容',
    icon: Video,
    color: 'text-red-600',
    bgColor: 'bg-red-100',
    features: ['视频生成', '动画制作', '视频剪辑', '特效添加']
  },
  {
    id: 'audio',
    title: '音频制作',
    description: '生成配音、音乐和音效',
    icon: Music,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    features: ['配音生成', '音乐创作', '音效制作', '音频处理']
  }
];

export default function CreationTools() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TOOLS.map((tool) => (
          <div
            key={tool.id}
            className={`bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-200 cursor-pointer transform hover:-translate-y-1 ${
              selectedTool === tool.id ? 'ring-2 ring-indigo-500' : ''
            }`}
            onClick={() => setSelectedTool(tool.id)}
          >
            <div className={`${tool.bgColor} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
              <tool.icon className={`h-6 w-6 ${tool.color}`} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
            <button className="w-full bg-gray-50 text-gray-600 py-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center group">
              <Sparkles className="h-4 w-4 mr-2 group-hover:text-indigo-600" />
              <span className="group-hover:text-indigo-600">开始创作</span>
            </button>
          </div>
        ))}
      </div>

      {/* Selected Tool Details */}
      {selectedTool && (
        <div className="bg-white rounded-xl shadow-sm p-8 mt-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {TOOLS.find(t => t.id === selectedTool)?.title}
              </h2>
              <div className="flex space-x-4">
                <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  <Wand2 className="h-4 w-4 mr-2" />
                  一键生成
                </button>
                <button className="flex items-center px-4 py-2 bg-white text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Palette className="h-4 w-4 mr-2" />
                  高级设置
                </button>
              </div>
            </div>

            {/* Creation Form */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">创作提示</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="描述您想要创作的内容..."
                />
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {TOOLS.find(t => t.id === selectedTool)?.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-gray-600">
                    <Lightbulb className="h-4 w-4 text-indigo-600" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}