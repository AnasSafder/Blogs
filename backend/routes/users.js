const express = require('express');
const router = express.Router();
const users = require('../data/users');

router.get('/', (req, res) => {
  res.json(users);
});

router.get('/:id', (req, res) => {
  try {const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
    
  } catch (error) {
    return res.status(500).json ({success: false, message:error})  }
});

router.get('/:id/posts', (req, res) => {
  try {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: 'User not found' });

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 4;

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
    return res.status(500).json({ success: false, message: error });
  }
});

router.post('/:userId/post/:postId', (req, res) => {

  try {
     const { userId, postId } = req.params;
  const user = users.find(u => u.id === parseInt(userId));
  if (!user) return res.status(404).json({ error: 'User not found' });

  const postIndex = user.posts.findIndex(p => p.id === parseInt(postId));
  if (postIndex === -1) return res.status(404).json({ error: 'Post not found' });

  user.posts[postIndex] = { ...user.posts[postIndex], ...req.body };
  res.json(user.posts[postIndex]);
    
  } catch (error) {
    return res.status(500).json ({success:false, message:error})
  }
 
});

module.exports = router;
