import React from 'react';
import Image from 'next/image';
import { FeaturedPost } from '../types';

interface FeaturedSectionProps {
  featuredPost: FeaturedPost;
  otherPosts: Array<{
    title: string;
    description: string;
    image: string;
  }>;
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({ featuredPost, otherPosts }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 min-h-screen flex flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-grow">
        <div className="lg:col-span-2">
          <div className="relative h-[72vh] rounded-2xl overflow-hidden group cursor-pointer">
            <Image
              src="/api/placeholder/800/400"
              alt={featuredPost.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm mb-3">
                {featuredPost.category}
              </span>
              <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight">
                {featuredPost.title}
              </h2>
            </div>
          </div>
        </div>

        <div className="space-y-6 h-[72vh] flex flex-col">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Other featured posts</h3>
          <div className="overflow-y-auto flex-grow pr-2">
            {otherPosts.map((post, index) => (
              <div key={index} className="flex space-x-4 group cursor-pointer mb-6 last:mb-0">
                <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
                  <Image
                    src="/api/placeholder/64/64"
                    alt={post.title}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                    {post.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pb-12"></div>
    </div>
  );
};

export default FeaturedSection;