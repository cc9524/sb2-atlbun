import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Settings, Sparkles, ArrowRight, Upload, Image, FolderHeart, ChevronLeft, ChevronRight, Wand2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BANNERS = [
  {
    id: 1,
    title: "AI创作新纪元",
    description: "释放创意，连接未来",
    image: "https://res.cloudinary.com/dfojdc0bl/image/upload/v1731397815/%E9%A6%96%E9%A1%B52_b1y5sh.jpg",
    link: "/tutorials/ai-creation"
  },
  {
    id: 2,
    title: "创作者计划",
    description: "加入我们的创作者社区",
    image: "https://res.cloudinary.com/dfojdc0bl/image/upload/v1731382503/%E5%BC%80%E6%8B%8D_yoq67i.jpg",
    link: "/creator-program"
  },
  {
    id: 3,
    title: "新手教程",
    description: "从零开始的AI创作之旅",
    image: "https://res.cloudinary.com/dfojdc0bl/image/upload/v1731397815/%E9%A6%96%E9%A1%B53_gkfqud.png",
    link: "/tutorials/beginner"
  }
];

const FEATURES = [
  {
    title: "项目管理",
    description: "管理您的创作项目",
    icon: Calendar,
    color: "from-blue-500/90 to-indigo-600/90",
    action: "projects",
    bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    stats: ["50+ 项目模板", "实时协作", "智能调度"]
  },
  {
    title: "创作工具",
    description: "智能AI创作工具",
    icon: Wand2,
    color: "from-purple-500/90 to-pink-600/90",
    action: "tools",
    bgImage: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&auto=format&fit=crop&q=60",
    stats: ["一键生成", "多场景应用", "风格定制"]
  },
  {
    title: "我的作品",
    description: "查看已完成作品",
    icon: FolderHeart,
    color: "from-orange-500/90 to-red-600/90",
    action: "works",
    bgImage: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&auto=format&fit=crop&q=60",
    stats: ["作品展示", "数据分析", "分享功能"]
  },
  {
    title: "作品上传",
    description: "上传分享您的作品",
    icon: Upload,
    color: "from-emerald-500/90 to-teal-600/90",
    action: "upload",
    bgImage: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&auto=format&fit=crop&q=60",
    stats: ["批量上传", "智能标签", "版权保护"]
  }
];

export default function CreativeWorkshop() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentSlide((prev) => (prev + 1) % BANNERS.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % BANNERS.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + BANNERS.length) % BANNERS.length);
  };

  const handleFeatureClick = (action: string) => {
    switch (action) {
      case 'projects':
        navigate('/dashboard/projects');
        break;
      case 'tools':
        navigate('/dashboard/tools');
        break;
      case 'works':
        navigate('/dashboard/works');
        break;
      case 'upload':
        navigate('/dashboard/upload');
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Banner Carousel */}
      <div className="relative h-[300px] overflow-hidden">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {BANNERS.map((banner, index) => (
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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                  <div className="max-w-lg">
                    <h2 className="text-4xl font-bold text-white mb-4">{banner.title}</h2>
                    <p className="text-xl text-white/90 mb-8">{banner.description}</p>
                    <button 
                      onClick={() => navigate(banner.link)}
                      className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-colors"
                    >
                      了解更多
                    </button>
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

      {/* Feature Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature) => (
            <button
              key={feature.title}
              onClick={() => handleFeatureClick(feature.action)}
              className="group relative w-full aspect-[3/4] overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Background Image Layer */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={feature.bgImage} 
                  alt={feature.title}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} mix-blend-multiply`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
              </div>
              
              {/* Content Overlay */}
              <div className="relative h-full w-full p-6 flex flex-col">
                {/* Top Section */}
                <div className="flex-1">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[10deg]">
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/80 text-sm">{feature.description}</p>
                </div>

                {/* Stats Section */}
                <div className="space-y-3 mb-6">
                  {feature.stats.map((stat, index) => (
                    <div 
                      key={index}
                      className="flex items-center text-sm text-white/90"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white/70 mr-2"></div>
                      {stat}
                    </div>
                  ))}
                </div>

                {/* Bottom Action */}
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-white/90">
                    开始体验
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                    <ArrowRight className="h-5 w-5 text-white transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-x-16 -translate-y-16 group-hover:translate-y-0 transition-transform duration-500"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-x-12 translate-y-12 group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}