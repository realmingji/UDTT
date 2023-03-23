const express = require('express');
const commentRouter = express.Router();
const { loginRequired } = require('../middleware/loginRequired');
const { commentService } = require('../services/commentService');

// 코멘트 작성
commentRouter.post('/comments', loginRequired, 
  async (req, res, next) => {
    try {
      if (is.emptyObject(req.body)) {
        throw new Error(
          "Empty object, headers Content-Type: application/json"
        );
      }

      const { content } = req.body;

      // 위 데이터를 comment db에 추가하기
      const newComment = await commentService.addComment({
        content,
      });
      res.status(201).json(newComment);
    } catch (error) {
      next(error);
    }
});

// 댓글 전체 목록 조회
commentRouter.get("/comments",
  async function (req, res, next) {
    try {
      const commentId = req.params.commentId;
      const commentData = await commentService.getComments(commentId);

      res.status(200).json(commentData);
    } catch (error) {
      next(error);
    }
  }
);

// 특정 소모임의 댓글 목록 조회
commentRouter.get("/groups/:groupId",
  async function (req, res, next) {
    try {
      const groupId = req.params.groupId;
      const comments = await commentService.getCommentsByGroupId(groupId);

      res.status(200).json(comments);
    } catch (error) {
      next(error);
    }
  }
);

// 특정 유저의 댓글 목록 조회
commentRouter.get("/users/:userId", loginRequired,
  async function (req, res, next) {
    try {
      const userId = req.params.userId;
      const comments = await commentService.getCommentsByUserId(userId);

      res.status(200).json(comments);
    } catch (error) {
      next(error);
    }
  }
);

// 댓글 수정
commentRouter.patch("/comments/commentId", loginRequired,
  async function (req, res, next) {
    try {
      if (is.emptyObject(req.body)) {
        throw new Error(
          "Empty object, headers Content-Type: application/json"
        );
      }

      // req (request) 에서 데이터 가져오기
      const commentId = req.params.commentId;
      const content = req.body.content;

      // 위 데이터가 undefined가 아니라면, 즉, 프론트에서 업데이트를 위해
      // 보내주었다면, 업데이트용 객체에 삽입함.
      const toUpdate = {
        ...(content && { content }),
      };

      // 제품 정보를 업데이트함.
      const updatedComment = await commentService.setItem(
        commentId,
        toUpdate
      );

      res.status(200).json(updatedComment);
    } catch (error) {
      next(error);
    }
  }
);

// 댓글 삭제
commentRouter.delete("/comments/:commentId", loginRequired,
  async function (req, res, next) {
    try {
      const commentId = req.params.commentId;
      const deleteResult = await commentService.deleteItemData(commentId);

      res.status(200).json(deleteResult);
    } catch (error) {
      next(error);
    }
  }
);


module.exports = commentRouter;
