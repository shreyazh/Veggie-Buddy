import { useState, useEffect } from 'react';
import { Post } from '../types/community';
import { postsData } from '../data/communityData';

export const useCommunityPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    // In a real app, this would fetch from an API or database
    const fetchPosts = () => {
      setIsLoading(true);
      
      try {
        // Simulate API delay
        setTimeout(() => {
          setPosts(postsData);
          setIsLoading(false);
        }, 800);
      } catch (err) {
        setError('Failed to load community posts');
        setIsLoading(false);
      }
    };
    
    fetchPosts();
  }, []);
  
  const addPost = (post: Omit<Post, 'id' | 'createdAt' | 'author' | 'likes' | 'comments'>) => {
    const newPost: Post = {
      id: Date.now().toString(),
      title: post.title,
      content: post.content,
      category: post.category,
      image: post.image,
      createdAt: new Date().toISOString(),
      author: 'Current User', // In a real app, this would be the logged-in user
      likes: 0,
      comments: [],
    };
    
    setPosts([newPost, ...posts]);
  };
  
  const likePost = (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };
  
  const addComment = (postId: string, content: string) => {
    setPosts(posts.map(post => 
      post.id === postId ? { 
        ...post, 
        comments: [
          ...post.comments,
          {
            id: Date.now().toString(),
            content,
            author: 'Current User', // In a real app, this would be the logged-in user
            createdAt: new Date().toISOString(),
          }
        ] 
      } : post
    ));
  };
  
  return { posts, isLoading, error, addPost, likePost, addComment };
};