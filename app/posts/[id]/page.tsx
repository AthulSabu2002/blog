'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import PostImage from '@/components/PostImage';
import ReactQueryProvider from '@/components/ReactQueryProvider';

const PostPage = () => {
  return (
    <ReactQueryProvider>
      <Post />
    </ReactQueryProvider>
  );
};

const Post = () => {
  const params = useParams();
  const postId = params.id as string;
  
  const { data: post, isLoading, isError } = useQuery({
    queryKey: ['post', postId],
    queryFn: async () => {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL + `/${postId}`;
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch post: ${response.status}`);
      }
      
      const postData = await response.json();
      
      return {
        id: postData.id || postId,
        title: postData.title || 'Untitled Post',
        description: postData.description || '',
        image: postData.image || '/api/placeholder/800/400',
        category: postData.category || 'Uncategorized',
        content: postData.content || '<p>No content available.</p>',
        author: postData.author || 'Unknown Author',
        date: new Date(postData.date).toLocaleDateString() || new Date().toLocaleDateString(),
        readTime: postData.readTime || '3 min read',
        featured: postData.featured || false,
      };
    },
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (isError || !post) {
    return <div className="min-h-screen flex items-center justify-center">Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <div className="max-w-4xl mx-auto px-4 py-6 flex items-start gap-4">
        <div className="bg-white overflow-hidden shadow-md w-full">
          <div className="relative h-80 w-full">
            <PostImage
              src={post.image}
              alt={post.title}
              priority
            />
          </div>

          <div className="p-8">
            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <div className="flex items-center">
                <span>{post.author}</span>
                <span className="mx-2">•</span>
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              {post.featured && (
                <span className="inline-block bg-amber-50 text-amber-800 border border-amber-200 px-3 py-1 rounded-sm text-sm font-medium">
                  Featured
                </span>
              )}
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {post.category && (
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {post.category}
                </span>
              )}
            </div>

            <div className="prose max-w-none">
              {post.description && (
                <p className="text-lg text-gray-700 mb-6">{post.description}</p>
              )}

              <div
                className="mt-8 text-gray-800 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostPage;