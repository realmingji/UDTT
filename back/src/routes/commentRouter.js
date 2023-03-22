const express = require('express');
const commentRouter = express.Router();
// const { loginRequired } = require('../middleware/loginRequired');

commentRouter.post('/comment', async (req, res) => {
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
module.exports = commentRouter;
