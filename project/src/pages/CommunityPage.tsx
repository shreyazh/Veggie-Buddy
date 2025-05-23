import { useState } from 'react';
import { Plus, MessageSquare, ThumbsUp, Filter, Bookmark } from 'lucide-react';
import { useCommunityPosts } from '../hooks/useCommunityPosts';
import PostCard from '../components/community/PostCard';
import NewPostForm from '../components/community/NewPostForm';
import CommunityFilters from '../components/community/CommunityFilters';
import { Post } from '../types/community';

const CommunityPage = () => {
  const { posts, isLoading, addPost, likePost } = useCommunityPosts();
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState<'recent' | 'popular'>('recent');
  
  const toggleNewPostForm = () => {
    setShowNewPostForm(!showNewPostForm);
  };
  
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  
  const handleNewPost = (post: Omit<Post, 'id' | 'createdAt' | 'author' | 'likes' | 'comments'>) => {
    addPost(post);
    setShowNewPostForm(false);
  };
  
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };
  
  const handleSortChange = (sort: 'recent' | 'popular') => {
    setSortBy(sort);
  };
  
  const filteredPosts = posts.filter(post => {
    if (activeFilter === 'all') return true;
    return post.category === activeFilter;
  });
  
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === 'recent') {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    } else {
      return b.likes - a.likes;
    }
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Community Forum</h1>
        <p className="mt-2 text-lg text-gray-600">
          Connect with fellow gardeners, share your experiences, and get advice.
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4 order-2 lg:order-1">
          {/* Mobile Controls */}
          <div className="flex flex-col space-y-4 lg:hidden mb-6">
            <button 
              onClick={toggleNewPostForm}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              <Plus className="h-5 w-5" />
              New Post
            </button>
            
            <button 
              onClick={toggleFilters}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-md"
            >
              <Filter className="h-5 w-5" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>
          
          {/* Filters */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
            <div className="bg-white rounded-lg shadow p-4 sticky top-4">
              <h2 className="text-xl font-semibold mb-4">Filters</h2>
              <CommunityFilters 
                activeFilter={activeFilter}
                sortBy={sortBy}
                onFilterChange={handleFilterChange}
                onSortChange={handleSortChange}
              />
              
              {/* Desktop New Post Button */}
              <div className="hidden lg:block mt-6">
                <button 
                  onClick={toggleNewPostForm}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  <Plus className="h-5 w-5" />
                  New Post
                </button>
              </div>
              
              {/* Community Stats */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-medium text-gray-900 mb-3">Community Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-800">{posts.length}</div>
                    <div className="text-xs text-green-700">Posts</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-800">42</div>
                    <div className="text-xs text-green-700">Active Users</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-800">128</div>
                    <div className="text-xs text-green-700">Comments</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-800">15</div>
                    <div className="text-xs text-green-700">New Today</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="w-full lg:w-3/4 order-1 lg:order-2">
          {/* New Post Form */}
          {showNewPostForm && (
            <div className="mb-6 bg-white rounded-lg shadow p-4">
              <NewPostForm onSubmit={handleNewPost} onCancel={() => setShowNewPostForm(false)} />
            </div>
          )}
          
          {/* Posts */}
          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading community posts...</p>
            </div>
          ) : sortedPosts.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <MessageSquare className="h-12 w-12 mx-auto text-gray-400" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">No posts found</h3>
              <p className="mt-1 text-gray-500">
                {activeFilter !== 'all'
                  ? `There are no posts in the ${activeFilter} category yet.`
                  : 'Be the first to start a conversation!'}
              </p>
              <button 
                onClick={toggleNewPostForm}
                className="mt-6 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Create New Post
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {sortedPosts.map(post => (
                <PostCard 
                  key={post.id} 
                  post={post} 
                  onLike={() => likePost(post.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;