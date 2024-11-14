import React, { useState, useEffect } from 'react';
import { Search, Filter, Star, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Model {
  id: string;
  title: string;
  image: string;
  author: string;
  likes: number;
  downloads: number;
  tags: string[];
  price: number | 'free';
}

const BANNER_IMAGES = [
  'https://res.cloudinary.com/dfojdc0bl/image/upload/v1731415298/%E6%A8%A1%E5%9E%8B%E5%B8%82%E5%9C%BA1_bt2ycn.jpg',
  'https://res.cloudinary.com/dfojdc0bl/image/upload/v1731415299/%E6%A8%A1%E5%9E%8B%E5%B8%82%E5%9C%BA2_ztpexs.jpg',
  'https://res.cloudinary.com/dfojdc0bl/image/upload/v1731415298/%E6%A8%A1%E5%9E%8B%E5%B8%82%E5%9C%BA3_rzi6ed.jpg'
];

const MODELS: Model[] = [
  {
    id: '1',
    title: '3D卡通角色生成模型',
    image: 'https://images.unsplash.com/photo-1615796153287-98eacf0abb13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    author: 'AI创作者',
    likes: 1200,
    downloads: 350,
    tags: ['角色', '3D', '卡通'],
    price: 'free'
  },
  {
    id: '2',
    title: '写实人像生成模型',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    author: 'Studio AI',
    likes: 890,
    downloads: 220,
    tags: ['人像', '写实'],
    price: 299
  },
  {
    id: '3',
    title: '场景概念图生成器',
    image: 'https://images.unsplash.com/photo-1520034475321-cbe63696469a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    author: 'DesignAI',
    likes: 756,
    downloads: 180,
    tags: ['场景', '概念图'],
    price: 199
  }
];

const CATEGORIES = [
  '全部', '人像', '场景', '角色', '动画', '插画', '3D模型', '特效', 'UI设计'
];

export default function ModelMarketplace() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BANNER_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % BANNER_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + BANNER_IMAGES.length) % BANNER_IMAGES.length);
  };

  return (
    <div className="bg-gray-50">
      {/* Split Banner */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Text Section */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">AI模型市场</h1>
              <p className="text-lg text-gray-600">发现和使用高质量的AI模型，释放创意潜能</p>
            </div>

            {/* Banner Carousel */}
            <div className="relative w-full lg:w-[600px] h-[300px] rounded-xl overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {BANNER_IMAGES.map((image, index) => (
                  <div
                    key={index}
                    className="w-full h-full flex-shrink-0"
                  >
                    <img
                      src={image}
                      alt={`Banner ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="h-5 w-5 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="h-5 w-5 text-white" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {BANNER_IMAGES.map((_, index) => (
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
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row gap-4 items-center mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="搜索模型..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-500" />
            <select
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {CATEGORIES.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Model Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODELS.map((model) => (
            <div
              key={model.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => navigate(`/marketplace/${model.id}`)}
            >
              <img src={model.image} alt={model.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{model.title}</h3>
                <p className="text-sm text-gray-600 mb-4">作者: {model.author}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center text-sm text-gray-500">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      {model.likes}
                    </span>
                    <span className="flex items-center text-sm text-gray-500">
                      <Download className="h-4 w-4 text-gray-400 mr-1" />
                      {model.downloads}
                    </span>
                  </div>
                  <span className="text-indigo-600 font-semibold">
                    {model.price === 'free' ? '免费' : `￥${model.price}`}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {model.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}