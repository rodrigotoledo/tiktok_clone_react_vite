import { useState, useEffect, useRef } from 'react';
import { useCreateComment } from '../hooks/useCreateComment';
import { useComments } from '../hooks/useComments';

const CommentsSection = ({ post }) => {
  const [body, setBody] = useState('');
  const token = localStorage.getItem('authToken'); // ou context

  // agora busca os comentários por post.id
  const { data: comments = [], isLoading } = useComments(post.id);

  const { mutate, isPending } = useCreateComment();

  const commentsEndRef = useRef(null);
  const [shouldScroll, setShouldScroll] = useState(false);

  useEffect(() => {
    if (shouldScroll && commentsEndRef.current) {
      commentsEndRef.current.focus();
      commentsEndRef.current.scrollTop = commentsEndRef.current.scrollHeight;
      setShouldScroll(false); // reseta
    }
  }, [comments, shouldScroll]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!body.trim()) return;

    mutate(
      { postId: post.id, body, token },
      {
        onSuccess: () => {
          setBody('');
          setShouldScroll(true);
        },
      }
    );
  };

  return (
    <div className="bg-gray-800 px-6 py-4 rounded-b-3xl">
      <h3 className="text-lg font-bold text-fuchsia-400 mb-2">Comments</h3>

      {isLoading ? (
        <p className="text-gray-400">Loading comments...</p>
      ) : (
        <div ref={commentsEndRef} className="max-h-40 overflow-y-auto mb-2 scrollbar-thin space-y-2">
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
      )}

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
          disabled={isPending}
          className="ml-2 px-4 py-2 rounded-full bg-fuchsia-700 text-white font-bold hover:bg-fuchsia-800 transition"
        >
          {isPending ? 'Sending...' : 'Comment'}
        </button>
      </form>
    </div>
  );
};

export default CommentsSection;
