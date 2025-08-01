import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import FeaturedSection from '@/components/FeaturedSection';
import RecentPosts from '@/components/RecentPosts';
import { BlogPost, FeaturedPost } from '@/types';

export const metadata: Metadata = {
  title: 'Beyond UI - SaaS Solutions & Design',
  description: 'Unlock business efficiency with innovative SaaS solutions and cutting-edge UI/UX design.',
};

async function getData() {
  const featuredPost: FeaturedPost = {
    id: '1',
    title: 'Unlocking Business Efficiency with SaaS Solutions',
    description: 'Discover how modern SaaS solutions can transform your business operations and drive growth.',
    image: '/api/placeholder/800/400',
    category: 'Business'
  };

  const otherFeaturedPosts = [
    {
      title: 'Revolutionizing industries through SaaS implementation',
      description: 'How SaaS is changing the landscape of various industries worldwide.',
      image: '/api/placeholder/64/64'
    },
    {
      title: 'Synergizing saas and UX design for elevating digital experiences',
      description: 'The perfect blend of functionality and user experience in modern applications.',
      image: '/api/placeholder/64/64'
    },
    {
      title: 'Navigating saas waters with intuitive UI and UX',
      description: 'Best practices for creating user-friendly SaaS interfaces.',
      image: '/api/placeholder/64/64'
    },
    {
      title: 'Sculpting saas success - the art of UI and UX design',
      description: 'Crafting exceptional user experiences in SaaS products.',
      image: '/api/placeholder/64/64'
    },
    {
      title: 'Transforming saas platforms - a UI/UX design odyssey',
      description: 'A comprehensive guide to modernizing SaaS platform design.',
      image: '/api/placeholder/64/64'
    }
  ];

  const recentPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Mastering UI Elements: A Practical Guide for Designers',
      excerpt: 'Dive into the world of user interfaces with our expert guides, latest trends, and practical tips.',
      author: 'Jennifer Taylor',
      readTime: '3 min read',
      image: '/api/placeholder/400/300'
    },
    {
      id: '2',
      title: 'Crafting Seamless Experiences: The Art of Intuitive UI Design',
      excerpt: 'Explore the principles and techniques that drive user-centric UI design, ensuring a seamless and intuitive experience.',
      author: 'Jennifer Taylor',
      readTime: '5 min read',
      image: '/api/placeholder/400/300'
    },
    {
      id: '3',
      title: 'Beyond Aesthetics: The Power of Emotional UX Design',
      excerpt: 'Delve into the realm of emotional design and discover how incorporating empathy and psychological principles can create more engaging user experiences.',
      author: 'Ryan A.',
      readTime: '2 min read',
      image: '/api/placeholder/400/300'
    }
  ];

  return {
    featuredPost,
    otherFeaturedPosts,
    recentPosts
  };
}

export default async function Home() {
  const { featuredPost, otherFeaturedPosts, recentPosts } = await getData();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        <FeaturedSection 
          featuredPost={featuredPost}
          otherPosts={otherFeaturedPosts}
        />
        
        <RecentPosts posts={recentPosts} />
      </main>
    </div>
  );
}