import React from 'react';
import { usePosts } from '../hooks/usePosts';
import CommentsSection from '../components/CommenSection';

const Posts = () => {
  const { 
    data: posts, 
    isLoading, 
    isError 
  } = usePosts();

  
  if (isLoading) return <div className="p-4">Loading posts...</div>;
  if (isError) return <div className="p-4 text-red-500">Error loading posts</div>;

  return (
    <div className="flex flex-col items-center min-h-screen bg-black mt-8 mb-20">
      <h1 className="text-4xl font-extrabold text-white mb-8 tracking-tight">
        TikTok Feed
      </h1>
      <div className="w-full max-w-lg space-y-10">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-900 rounded-3xl shadow-2xl border-4 border-fuchsia-700 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-6">
              <span className="font-bold text-fuchsia-400 text-lg">
                {post.user.email_address}
              </span>
              <span className="text-xs text-gray-400">
                {new Date(post.created_at).toLocaleString()}
              </span>
            </div>

            {/* Body */}
            <div className="px-6 pt-4 pb-2">
              <h2 className="text-2xl font-bold text-white mb-2">
                {post.title}
              </h2>
              <p className="text-gray-300 mb-4">{post.body}</p>

              {post.media_file && (
                <div className="flex justify-center mb-4">
                  {post.media_type === "image" && (
                    <img
                      src={post.media_file}
                      alt="post"
                      className="rounded-lg"
                    />
                  )}
                  {post.media_type === "video" && (
                    <video controls className="rounded-lg">
                      <source src={post.media_file} type="video/mp4" />
                    </video>
                  )}
                  {post.media_type === "audio" && (
                    <audio controls>
                      <source src={post.media_file} type="audio/mpeg" />
                    </audio>
                  )}
                </div>
              )}
            </div>

            {/* Comments */}
            <CommentsSection post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;