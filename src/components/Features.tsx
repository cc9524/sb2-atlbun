import React from 'react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeaturesProps {
  features: Feature[];
}

export default function Features({ features }: FeaturesProps) {
  return (
    <div className="relative py-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-indigo-50/50 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-t from-purple-50/50 to-transparent rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            全方位的创作支持
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            为您提供完整的数字创意解决方案
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-gray-100 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Decorative gradient background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Content */}
              <div className="relative">
                <div className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-3 group-hover:from-indigo-500/20 group-hover:to-purple-500/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {feature.description}
                </p>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}