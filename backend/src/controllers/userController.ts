import { Request, Response } from 'express';
import usersData from '../data/users';
import { User, Post } from '../types/User'; 

const users: User[] = usersData;

export const getUsers = (req: Request, res: Response) => {
  res.json(users);
};

export const getUserById = (req: Request, res: Response): void => {
  try {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

export const getUserPosts = (req: Request, res: Response): void => {
  try {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 4;

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const paginatedPosts = user.posts.slice(startIndex, endIndex);
    const totalPosts = user.posts.length;

    res.json({
      posts: paginatedPosts,
      page,
      totalPages: Math.ceil(totalPosts / limit),
      totalPosts,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

export const updateUserPost = (req: Request, res: Response): void => {
  try {
    const { userId, postId } = req.params;
    const user = users.find(u => u.id === parseInt(userId));
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    const postIndex = user.posts.findIndex(p => p.id === parseInt(postId));
    if (postIndex === -1) {
      res.status(404).json({ error: 'Post not found' });
      return;
    }

    user.posts[postIndex] = { ...user.posts[postIndex], ...req.body };
    res.json(user.posts[postIndex]);
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};