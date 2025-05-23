import { useState } from 'react';
import { MessageSquare, ThumbsUp, Clock, User } from 'lucide-react';
import { Post } from '../../types/community';
import CommentSection from './CommentSection';

interface PostCardProps {
  post: Post;
  onLike: () => void;
}

const PostCard = ({ post, onLike }: PostCardProps) => {
  const [showComments, setShowComments] = useState(false);
  
  const toggleComments = () => {
    setShowComments(!showComments);
  };
  
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };
  
  // Get category style
  const getCategoryStyle = (category: string) => {
    switch (category) {
      case 'question':
        return 'bg-blue-100 text-blue-800';
      case 'success-story':
        return 'bg-green-100 text-green-800';
      case 'problem':
        return 'bg-red-100 text-red-800';
      case 'tip':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
              <User className="h-5 w-5 text-green-700" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{post.author}</h3>
              <div className="flex items-center text-xs text-gray-500">
                <Clock className="h-3 w-3 mr-1" />
                <span>{formatDate(post.createdAt)}</span>
              </div>
            </div>
          </div>
          <span className={`text-xs px-2 py-1 rounded-full ${getCategoryStyle(post.category)}`}>
            {post.category.replace('-', ' ')}
          </span>
        </div>
        
        <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
        
        <div className="text-gray-700 mb-4">
          {post.content}
        </div>
        
        {post.image && (
          <img 
            src={post.image} 
            alt="Post" 
            className="w-full h-64 object-cover rounded-md mb-4"
          />
        )}
        
        <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-4">
          <button
            onClick={onLike}
            className="flex items-center text-gray-600 hover:text-green-700"
          >
            <ThumbsUp className={`h-5 w-5 mr-1 ${post.likes > 0 ? 'text-green-600' : ''}`} />
            <span>{post.likes}</span>
          </button>
          
          <button
            onClick={toggleComments}
            className="flex items-center text-gray-600 hover:text-green-700"
          >
            <MessageSquare className="h-5 w-5 mr-1" />
            <span>{post.comments.length} Comments</span>
          </button>
        </div>
      </div>
      
      {showComments && <CommentSection comments={post.comments} />}
    </div>
  );
};

export default PostCard;