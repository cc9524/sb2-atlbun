import React, { useState, useEffect } from 'react';
import { Heart, Info, Search, TrendingUp, Clock, Globe, Filter, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const BANNERS = [
  {
    id: 1,
    title: "探索创意灵感",
    description: "发现精彩创作，激发无限可能",
    image: "https://res.cloudinary.com/dfojdc0bl/image/upload/v1731402869/%E5%88%9B%E6%84%8F%E7%A9%BA%E9%97%B42_vogpit.jpg"
  },
  {
    id: 2,
    title: "创作者社区",
    description: "连接创作者，分享创意火花",
    image: "https://res.cloudinary.com/dfojdc0bl/image/upload/v1731402868/%E5%88%9B%E6%84%8F%E7%A9%BA%E9%97%B41_fmqn6j.jpg"
  }
];

const WORKS = [
  {
    id: '1',
    title: '春日少女',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    author: 'AI创作者',
    likes: 1200,
    modelInfo: {
      name: 'LEOSAM FilmGirl Ultra',
      version: 'v1.0',
      sampler: 'DPM++ 2M Karras',
      cfg: 7,
      steps: 20,
      seed: 97147603
    }
  },
  {
    id: '2',
    title: '赛博朋克城市',
    image: 'https://images.unsplash.com/photo-1615796153287-98eacf0abb13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    author: 'Studio AI',
    likes: 890,
    modelInfo: {
      name: 'Cyberpunk Diffusion',
      version: 'v2.0',
      sampler: 'Euler a',
      cfg: 8,
      steps: 30,
      seed: 12345678
    }
  },
  {
    id: '3',
    title: '梦幻花园',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&auto=format&fit=crop&q=60',
    author: 'DesignAI',
    likes: 756,
    modelInfo: {
      name: 'Dreamlike Diffusion',
      version: 'v1.5',
      sampler: 'DPM++ SDE',
      cfg: 7.5,
      steps: 25,
      seed: 87654321
    }
  },
  {
    id: '4',
    title: '未来科技',
    image: 'https://images.unsplash.com/photo-1520034475321-cbe63696469a?w=500&auto=format&fit=crop&q=60',
    author: 'TechAI',
    likes: 634,
    modelInfo: {
      name: 'Future Tech',
      version: 'v3.0',
      sampler: 'Euler',
      cfg: 8,
      steps: 30,
      seed: 45678901
    }
  }
];

const TAGS = ['全部', '人像', '风景', '动漫', '概念艺术', '科幻', '奇幻', '写实'];

export default function InspirationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('推荐');
  const [viewMode, setViewMode] = useState('所有人');
  const [selectedTags, setSelectedTags] = useState<string[]>(['全部']);
  const [hoveredWork, setHoveredWork] = useState<string | null>(null);
  const [showModelInfo, setShowModelInfo] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BANNERS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleTagClick = (tag: string) => {
    if (tag === '全部') {
      setSelectedTags(['全部']);
    } else {
      const newTags = selectedTags.includes('全部') 
        ? [tag]
        : selectedTags.includes(tag)
          ? selectedTags.filter(t => t !== tag)
          : [...selectedTags, tag];
      setSelectedTags(newTags.length === 0 ? ['全部'] : newTags);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % BANNERS.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + BANNERS.length) % BANNERS.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Carousel */}
      <div className="relative h-[200px] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {BANNERS.map((banner) => (
            <div
              key={banner.id}
              className="relative w-full h-full flex-shrink-0"
            >
              <img
                src={banner.image}
                alt={banner.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent">
                <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
                  <div className="max-w-lg">
                    <h2 className="text-3xl font-bold text-white mb-2">{banner.title}</h2>
                    <p className="text-lg text-white/90">{banner.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {BANNERS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'w-6 bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-wrap items-center gap-4 mb-6">
          {/* Search */}
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="搜索作品..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Sort and View Filters */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                className="flex items-center gap-1 px-4 py-2 bg-white rounded-full border border-gray-200 hover:border-gray-300"
                onClick={() => setSortBy(sortBy === '推荐' ? '最新' : '推荐')}
              >
                {sortBy === '推荐' ? <TrendingUp className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
                <span>{sortBy}</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
            </div>

            <div className="relative">
              <button
                className="flex items-center gap-1 px-4 py-2 bg-white rounded-full border border-gray-200 hover:border-gray-300"
                onClick={() => setViewMode(viewMode === '所有人' ? '我关注的' : '所有人')}
              >
                <Globe className="h-4 w-4" />
                <span>{viewMode}</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedTags.includes(tag)
                  ? 'bg-indigo-100 text-indigo-600'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {WORKS.map((work) => (
            <div
              key={work.id}
              className="relative group"
              onMouseEnter={() => setHoveredWork(work.id)}
              onMouseLeave={() => {
                setHoveredWork(null);
                setShowModelInfo(null);
              }}
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full aspect-[3/4] object-cover rounded-lg"
              />
              
              {hoveredWork === work.id && (
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg transition-opacity">
                  {/* Author */}
                  <div className="absolute top-4 left-4 text-white text-sm">
                    {work.author}
                  </div>

                  {/* Actions */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                      <Heart className="h-4 w-4 text-white" />
                    </button>
                    <button
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowModelInfo(showModelInfo === work.id ? null : work.id);
                      }}
                    >
                      <Info className="h-4 w-4 text-white" />
                    </button>
                  </div>

                  {/* Model Info Popup */}
                  {showModelInfo === work.id && (
                    <div className="absolute top-16 right-4 w-64 bg-white rounded-lg shadow-lg p-4 z-10">
                      <h4 className="font-medium text-gray-900 mb-2">模型信息</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-500">模型</span>
                          <span className="text-gray-900">{work.modelInfo.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">版本</span>
                          <span className="text-gray-900">{work.modelInfo.version}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">采样器</span>
                          <span className="text-gray-900">{work.modelInfo.sampler}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">CFG</span>
                          <span className="text-gray-900">{work.modelInfo.cfg}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">步数</span>
                          <span className="text-gray-900">{work.modelInfo.steps}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">种子</span>
                          <span className="text-gray-900">{work.modelInfo.seed}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}