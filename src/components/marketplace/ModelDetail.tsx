import React, { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Download, Share2, MessageSquare, Info, Settings, Shield, ThumbsUp, ArrowLeft } from 'lucide-react';

// 模拟数据
const MODELS_DATA = {
  '1': {
    id: '1',
    title: '3D卡通角色生成模型',
    description: '专业的3D卡通角色生成模型，适用于游戏、动画等场景创作。',
    cover: 'https://images.unsplash.com/photo-1615796153287-98eacf0abb13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    content: `
      <div class="prose max-w-none">
        <h2>模型说明</h2>
        <p>这是一个专业的3D卡通角色生成模型，可以快速生成各种风格的卡通角色。适用于游戏开发、动画制作等场景。</p>
        <h3>主要特点：</h3>
        <ul>
          <li>支持多种卡通风格</li>
          <li>可自定义角色特征</li>
          <li>高质量3D模型输出</li>
        </ul>
        <p>支持批量生成，可以快速创建角色系列。</p>
      </div>
    `,
    author: {
      name: 'AI创作者',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      followers: 1200
    },
    stats: {
      likes: 1200,
      downloads: 350,
      views: 5600
    },
    tags: ['角色', '3D', '卡通'],
    price: 'free',
    parameters: {
      steps: 30,
      cfg_scale: 8.0,
      sampler: "Euler a",
      negative_prompt: "低质量, 变形, 不自然姿势"
    },
    license: {
      personal: true,
      commercial: true,
      modification: true,
      redistribution: false
    },
    comments: [
      {
        id: 1,
        user: '游戏开发者A',
        avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        content: '角色生成效果非常棒，节省了大量建模时间！',
        time: '2024-01-15',
        likes: 24
      },
      {
        id: 2,
        user: '动画师B',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        content: '风格统一，很适合制作动画角色。',
        time: '2024-01-14',
        likes: 15
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1615796153287-98eacf0abb13?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1615796153287-98eacf0abb13?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1615796153287-98eacf0abb13?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    ]
  },
  // ... 其他模型数据
};

export default function ModelDetail() {
  const { modelId } = useParams();
  const navigate = useNavigate();
  const [newComment, setNewComment] = React.useState('');
  
  const infoRef = useRef<HTMLDivElement>(null);
  const paramsRef = useRef<HTMLDivElement>(null);
  const licenseRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const commentsRef = useRef<HTMLDivElement>(null);

  const modelData = modelId ? MODELS_DATA[modelId as keyof typeof MODELS_DATA] : null;

  if (!modelData) {
    return <div>模型不存在</div>;
  }

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    setNewComment('');
  };

  return (
    <div className="bg-gray-50">
      {/* 返回按钮 */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/marketplace')}
            className="flex items-center text-gray-600 hover:text-indigo-600 py-4"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            返回模型市场
          </button>
        </div>
      </div>

      {/* 快速导航 */}
      <div className="sticky top-16 z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 py-4">
            <button
              onClick={() => scrollToSection(infoRef)}
              className="text-gray-500 hover:text-indigo-600 flex items-center"
            >
              <Info className="h-5 w-5 mr-2" />
              模型信息
            </button>
            <button
              onClick={() => scrollToSection(paramsRef)}
              className="text-gray-500 hover:text-indigo-600 flex items-center"
            >
              <Settings className="h-5 w-5 mr-2" />
              推荐参数
            </button>
            <button
              onClick={() => scrollToSection(licenseRef)}
              className="text-gray-500 hover:text-indigo-600 flex items-center"
            >
              <Shield className="h-5 w-5 mr-2" />
              许可范围
            </button>
            <button
              onClick={() => scrollToSection(galleryRef)}
              className="text-gray-500 hover:text-indigo-600 flex items-center"
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              返图展示
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 头部信息 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <img src={modelData.cover} alt={modelData.title} className="w-full h-96 object-cover rounded-lg" />
            </div>
            <div className="md:w-1/2">
              <div className="flex items-center gap-4 mb-4">
                {modelData.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{modelData.title}</h1>
              <div className="flex items-center gap-4 mb-6">
                <img src={modelData.author.avatar} alt={modelData.author.name} className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-medium text-gray-900">{modelData.author.name}</p>
                  <p className="text-sm text-gray-500">{modelData.author.followers} 关注者</p>
                </div>
              </div>
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span>{modelData.stats.likes}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-5 w-5 text-gray-400" />
                  <span>{modelData.stats.downloads}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Share2 className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                {modelData.price === 'free' ? '免费下载' : `￥${modelData.price} 购买使用`}
              </button>
            </div>
          </div>
        </div>

        {/* 模型信息 */}
        <div ref={infoRef} className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">模型信息</h2>
          <div dangerouslySetInnerHTML={{ __html: modelData.content }} />
        </div>

        {/* 推荐参数 */}
        <div ref={paramsRef} className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">推荐参数</h2>
          <div className="space-y-4">
            {Object.entries(modelData.parameters).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between py-2 border-b border-gray-200">
                <span className="font-medium text-gray-600">{key}</span>
                <span className="text-gray-900">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 许可范围 */}
        <div ref={licenseRef} className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">许可范围</h2>
          <div className="space-y-4">
            {Object.entries(modelData.license).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between py-2 border-b border-gray-200">
                <span className="font-medium text-gray-600">{key}</span>
                <span className={`${value ? 'text-green-600' : 'text-red-600'}`}>
                  {value ? '允许' : '不允许'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 返图展示 */}
        <div ref={galleryRef} className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">返图展示</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {modelData.gallery.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>

        {/* 评论区 */}
        <div ref={commentsRef} className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-6 flex items-center">
            <MessageSquare className="h-5 w-5 mr-2" />
            评论区
          </h2>
          
          <form onSubmit={handleSubmitComment} className="mb-8">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="写下你的评论..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              rows={3}
            />
            <div className="mt-2 flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                发表评论
              </button>
            </div>
          </form>

          <div className="space-y-6">
            {modelData.comments.map((comment) => (
              <div key={comment.id} className="flex gap-4">
                <img src={comment.avatar} alt={comment.user} className="w-10 h-10 rounded-full" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{comment.user}</span>
                    <span className="text-sm text-gray-500">{comment.time}</span>
                  </div>
                  <p className="text-gray-600 mb-2">{comment.content}</p>
                  <button className="flex items-center gap-1 text-gray-500 hover:text-indigo-600">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{comment.likes}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}