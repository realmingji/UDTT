const { commentModel } = require('../db/models/commentModel');
const { groupModel } = require('../db/models/groupModel2');

class CommentService {
  constructor(commentModel, groupModel) {
    this.commentModel = commentModel;
    // this.groupModel = groupModel;
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
    const group = await this.groupModel.findById(groupId);
    const comments = await this.commentModel.findAllByGroupId(group._Id);

    return comments;
  }

  async getCommentsByUserId(_userId) {
    const comments = await this.commentModel.findAllByUserId(_userId);

    return comments;
  }

  async setComment(commentId, toUpdate) {
    const updatedComment = await this.commentModel.update({
      commentId,
      update: toUpdate,
    });

    return updatedComment;
  }

  async deleteCommentData(commentId) {
    const { deletedCount } = await this.commentModel.deleteById(commentId);

    // 삭제에 실패한 경우, 에러 메시지 반환
    if (deletedCount === 0) {
      throw new Error(`${commentId} 삭제 되지 않았습니다. 다시 시도해 주세요.`);
    }

    return { result: 'success' };
  }
}

const commentService = new CommentService(commentModel, groupModel);

module.exports = { commentService };
