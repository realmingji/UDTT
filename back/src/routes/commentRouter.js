const express = require('express');
const commentRouter = express.Router();
const { loginRequired } = require('../middleware/loginRequired');
const { commentService } = require('../services/commentService');

commentRouter.post('/comments', loginRequired, async (req, res) => {
  const { content } = req.body;
  try {
    const newComment = await Comment.create({
      content,
    });
    res.json(newComment);
  } catch (error) {
    res.json(error);
  }
});

// commentRouter.get();
module.exports = commentRouter;
