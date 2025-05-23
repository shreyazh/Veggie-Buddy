export interface Comment {
  id: string;
  content: string;
  author: string;
  createdAt: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  category: string;
  image?: string;
  createdAt: string;
  author: string;
  likes: number;
  comments: Comment[];
}