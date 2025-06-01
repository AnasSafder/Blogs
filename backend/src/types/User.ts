export interface Post {
  id: number;
  title: string;
  content: string;
  image: string;
  date: string;
}

export interface User {
  id: number;
  name: string;
  picture: string;
  posts: Post[];
}
