const { commentModel } = require('../db/models/commentModel');

class CommentService {
    constructor(commentModel) {
        this.commentModel = commentModel;
    }

    async addComment(commentInfo) {
        // db에 저장
        const createdNewComment = await this.commentModel.create(commentInfo);

        return createdNewComment;
    }

    async getComments() {
        const comments = await this.commentModel.findAll();

        return comments;
    }

    async getcommentsByGroupId(groupId) {
        const comments = await this.commentModel.findAllByGroupId(groupId);

        return comments;
    }

    async getCommentsByUserId(_userId) {
        const comments = await this.commentModel.findAllByUserId(_userId);

        return comments;
    }

    async setItem(commentId, toUpdate) {
        const updatedComment = await this.commentModel.update({
            commentId,
            update: toUpdate,
        });

        return updatedComment;
    }

    async deleteItemData(orderItemId) {
        const { deletedCount } = await this.orderItemModel.deleteById(orderItemId);

    // 삭제에 실패한 경우, 에러 메시지 반환
    if (deletedCount === 0) {
        throw new Error(`${orderItemId} 주문의 삭제에 실패하였습니다`);
    }

        return { result: "success" };
    }
}

const commentService = new CommentService(commentModel);

module.exports = { commentService };