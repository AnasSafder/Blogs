import { Router } from 'express';
import {
  getUsers,
  getUserById,
  getUserPosts,
  updateUserPost,
  // deleteUserPost
} from '../controllers/userController';

import {
  validateGetUserById,
  validateGetUserPosts,
  validateUpdatePost,
  validateDeletePost
} from '../middlewares/validators';

const router = Router();

router.get('/', getUsers);
router.get('/:id', validateGetUserById, getUserById);
router.get('/:id/posts', validateGetUserPosts, getUserPosts);
router.patch('/:userId/post/:postId', validateUpdatePost, updateUserPost);
// router.delete('/:userId/posts/:postId', validateDeletePost, deleteUserPost);

export default router;
