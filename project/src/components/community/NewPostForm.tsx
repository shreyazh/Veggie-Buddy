import { useState } from 'react';
import { X } from 'lucide-react';
import { Post } from '../../types/community';

interface NewPostFormProps {
  onSubmit: (post: Omit<Post, 'id' | 'createdAt' | 'author' | 'likes' | 'comments'>) => void;
  onCancel: () => void;
}

const NewPostForm = ({ onSubmit, onCancel }: NewPostFormProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('question');
  const [image, setImage] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) {
      alert('Please fill in all required fields');
      return;
    }
    
    onSubmit({
      title,
      content,
      category,
      image: image || undefined,
    });
    
    // Reset form
    setTitle('');
    setContent('');
    setCategory('question');
    setImage('');
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Create New Post</h2>
        <button
          onClick={onCancel}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block mb-1 font-medium text-gray-700">
            Title*
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="content" className="block mb-1 font-medium text-gray-700">
            Content*
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={5}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          ></textarea>
        </div>
        
        <div className="mb-4">
          <label htmlFor="category" className="block mb-1 font-medium text-gray-700">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="question">Question</option>
            <option value="success-story">Success Story</option>
            <option value="problem">Problem</option>
            <option value="tip">Tip</option>
          </select>
        </div>
        
        <div className="mb-4">
          <label htmlFor="image" className="block mb-1 font-medium text-gray-700">
            Image URL (optional)
          </label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="https://example.com/image.jpg"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPostForm;