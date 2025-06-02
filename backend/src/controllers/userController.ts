import { Request, Response } from 'express';
import { findUserById } from '../utils/userHelpers';
import { UpdatePostBody } from '../types/User';
import { GetUserPostsQuery } from '../types/User';

const DEFAULT_POSTS_LIMIT = 4;


export const getUsers = (req: Request, res: Response) => {
  res.json(require('../data/users')); 
};

export const getUserById = (req: Request, res: Response): void => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ success: false, message: 'Invalid user ID' });
      return;
    }

    const user = findUserById(id);
    if (!user) {
      res.status(404).json({ success: false, message: 'User not found' });
      return;
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};

export const getUserPosts = (
  req: Request<{ id: string }, any, any, GetUserPostsQuery>,
  res: Response
): void => {
  try {
    const userId = parseInt(req.params.id);
    if (isNaN(userId)) {
      res.status(400).json({ success: false, message: 'Invalid user ID' });
      return;
    }

    const user = findUserById(userId);
    if (!user) {
      res.status(404).json({ success: false, message: 'User not found' });
      return;
    }

    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || DEFAULT_POSTS_LIMIT;

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
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};


export const updateUserPost = (
  req: Request<{ userId: string; postId: string }, any, UpdatePostBody>,
  res: Response
): void => {
  try {
    const userId = parseInt(req.params.userId);
    const postId = parseInt(req.params.postId);

    if (isNaN(userId) || isNaN(postId)) {
      res.status(400).json({ success: false, message: 'Invalid userId or postId' });
      return;
    }

    const user = findUserById(userId);
    if (!user) {
      res.status(404).json({ success: false, message: 'User not found' });
      return;
    }

    const postIndex = user.posts.findIndex(p => p.id === postId);
    if (postIndex === -1) {
      res.status(404).json({ success: false, message: 'Post not found' });
      return;
    }

  const { title, content } = req.body;

 if (typeof title === 'string') {
  user.posts[postIndex].title = title;
 }

 if (typeof content === 'string') {
  user.posts[postIndex].content = content;
 }

 res.json({ success: true, post: user.posts[postIndex] });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};

// export const deleteUserPost = (req: Request, res: Response) => {
//   const { userId, postId } = req.params;

//   const users = users.find(u => u.id === userId);
//   if (!user) {
//     return res.status(404).json({ success: false, message: 'User not found' });
//   }

//   const postIndex = user.posts.findIndex(p => p.id === postId);
//   if (postIndex === -1) {
//     return res.status(404).json({ success: false, message: 'Post not found' });
//   }

//   user.posts.splice(postIndex, 1);

//   return res.json({ success: true, message: `Post ${postId} deleted successfully` });
// };
