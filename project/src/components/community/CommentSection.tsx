import { User, Clock } from 'lucide-react';
import { Comment } from '../../types/community';

interface CommentSectionProps {
  comments: Comment[];
}

const CommentSection = ({ comments }: CommentSectionProps) => {
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };

  return (
    <div className="bg-gray-50 p-5 border-t border-gray-200">
      <h3 className="font-medium text-gray-900 mb-4">Comments</h3>
      
      {comments.length === 0 ? (
        <p className="text-gray-500 text-sm">No comments yet. Be the first to comment!</p>
      ) : (
        <div className="space-y-4">
          {comments.map((comment, index) => (
            <div key={index} className="flex space-x-3">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                  <User className="h-4 w-4 text-green-700" />
                </div>
              </div>
              <div className="flex-1 bg-white p-3 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-gray-900">{comment.author}</span>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{formatDate(comment.createdAt)}</span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">{comment.content}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <form className="mt-6">
        <textarea
          placeholder="Write a comment..."
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        ></textarea>
        <div className="mt-2 text-right">
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Post Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentSection;