const express = require('express');
const commentRouter = express.Router();
const { loginRequired } = require('../middleware/loginRequired');
const { commentService } = require('../services/commentService');

commentRouter.post('/comments', loginRequired, 
    async (req, res, next) => {
        try {
            const content = req.body.content;
            const userId = req.body.userId;
            const groupId = req.body.groupId;

            const newComment = await commentService.addComment({
                content,
                userId,
                groupId,
            });

            res.status(201).json(newComment);
        } catch (error) {
          next(error);
        }
    }
);

commentRouter.get('/groups/:groupId', 
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
commentRouter.get('/users/:userId', loginRequired,
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

commentRouter.patch('/comments/commentId', loginRequired,
    async function (req, res, next) {
        try {
            const commentId = req.params.commentId;
            const content = req.body.content;

            const toUpdate = {
                ...(content && { content }),
            };

            const updatedComment = await commentService.setItem(commentId, toUpdate);

            res.status(200).json(updatedComment);
        } catch (error) {
          next(error);
        }
    }
);

commentRouter.delete('/comments/:commentId', loginRequired,
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
