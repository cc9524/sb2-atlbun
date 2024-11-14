import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CAROUSEL_IMAGES = [
  'https://res.cloudinary.com/dfojdc0bl/image/upload/v1731397477/%E9%A6%96%E9%A1%B5_ycwviv.png',
  'https://res.cloudinary.com/dfojdc0bl/image/upload/v1731397815/%E9%A6%96%E9%A1%B52_b1y5sh.jpg',
  'https://res.cloudinary.com/dfojdc0bl/image/upload/v1731397815/%E9%A6%96%E9%A1%B53_gkfqud.png'
];

export default function Hero() {
  const navigate = useNavigate();
  const user = localStorage.getItem('user');
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleCreateClick = () => {
    if (!user) {
      navigate('/login');
    } else {
      navigate('/marketplace');
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image Carousel with Overlay */}
      <div className="absolute inset-0 z-0">
        {CAROUSEL_IMAGES.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: currentSlide === index ? 1 : 0,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Carousel Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen pb-32">
        <div className="pt-32 sm:pt-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
                释放创意的
                <span className="text-indigo-400">无限可能</span>
              </h1>
              <p className="mt-8 text-xl leading-8 text-gray-200 max-w-3xl mx-auto">
                打造专业的数字创意平台，为创作者提供一站式解决方案。从灵感激发到作品变现，助您实现创作梦想。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <div className="flex flex-col items-center justify-center gap-6">
            <button 
              onClick={handleCreateClick}
              className="group relative px-16 py-8 text-2xl font-semibold overflow-hidden rounded-2xl backdrop-blur-sm transition-all duration-300"
            >
              {/* Gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Inner background with blur */}
              <div className="absolute inset-[2px] bg-black/30 backdrop-blur-xl rounded-2xl"></div>
              
              {/* Button content */}
              <span className="relative bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                开始体验
              </span>

              {/* Shine effect */}
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000"></div>
            </button>

            <button className="flex items-center text-xl font-semibold text-white/90 hover:text-white group backdrop-blur-sm px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300">
              了解更多 
              <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {CAROUSEL_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'w-8 bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </div>
  );
}