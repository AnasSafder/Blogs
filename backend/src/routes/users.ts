import { Router } from 'express';
import {
  getUsers,
  getUserById,
  getUserPosts,
  updateUserPost
} from '../controllers/userController';

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.get('/:id/posts', getUserPosts);
router.post('/:userId/post/:postId', updateUserPost);

export default router;
