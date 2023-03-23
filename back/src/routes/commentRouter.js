const express = require('express');
const commentRouter = express.Router();
const { loginRequired } = require('../middleware/loginRequired');
const { commentService } = require('../services/commentService');

// 코멘트 작성
commentRouter.post('/comments', loginRequired, async (req, res, next) => {
  try {
    if (is.object(req.body)) {
      throw new Error(
        "Empty object"
      );
    }
    const { content } = req.body;

    // 위 데이터를 comment db에 추가하기
    const newComment = await userService.addComment({
      content,
    });
    res.status(201).json(newComment);
  } catch (error) {
    next(error);
  }
});

commentRouter.patch('/comments/:commentId', loginRequired, async (req, res) => {
  
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

commentRouter.delete('/comments/:commentId', loginRequired, async (req, res) => {
  
  const findByCommentId = async (req, res) => {
  try {
    const deleteComment = await Comment.delete({
      content,
    });
    res.json(deleteComment);
  } catch (error) {
    res.json(error);
  }

}
);



})




// commentRouter.get();
module.exports = commentRouter;
