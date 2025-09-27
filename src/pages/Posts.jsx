import React, { useState } from 'react';
import { usePosts } from '../hooks/usePosts';
// import { useCompletePost } from '../hooks/useCompletePost';

const Posts = () => {
  const { 
    data: posts, 
    isLoading, 
    isError 
  } = usePosts();

  
  if (isLoading) return <div className="p-4">Loading posts...</div>;
  if (isError) return <div className="p-4 text-red-500">Error loading posts</div>;

  return (
    <div className="flex flex-col items-center min-h-screen bg-black py-8">
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

const CommentsSection = ({ post }) => {
  const [comments, setComments] = useState(post.comments || []);
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!body.trim()) return;

    const newComment = {
      id: Date.now(),
      body,
      user: { email_address: "you@example.com" },
      created_at: new Date().toISOString(),
    };

    setComments([newComment, ...comments]);
    setBody("");
  };

  return (
    <div className="bg-gray-800 px-6 py-4 rounded-b-3xl">
      <h3 className="text-lg font-bold text-fuchsia-400 mb-2">Comments</h3>

      <div className="max-h-40 overflow-y-auto mb-2 scrollbar-thin space-y-2">
        {comments.map((c) => (
          <div
            key={c.id}
            className="p-2 bg-gray-700 text-white rounded-lg text-sm"
          >
            <span className="font-bold text-fuchsia-400 mr-2">
              {c.user.email_address}
            </span>
            {c.body}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Add a comment..."
          className="flex-1 px-4 py-2 rounded-full bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 rounded-full bg-fuchsia-700 text-white font-bold hover:bg-fuchsia-800 transition"
        >
          Comment
        </button>
      </form>
    </div>
  );
};

export default Posts;