const { model } = require('mongoose');
const { CommentSchema } = require('../schemas/commentSchema');

const Comment = model("comments", CommentSchema);

class CommentModel {
    async findById(commentId) {
        const comment = await Comment.findOne({ _id: commentId });
        return comment;
    }

    async findAll() {
        const comments = await Comment.find({});
        return comments;
    }

    async findAllByUserId(_userId) {
        const comments = await Comments.find({ _userId });
        return comments;
    }

    async findAllByGroupId(_groupId) {
        const comments = await Comment.find({ _groupId });
        return comments;
    }

    async create(commentInfo) {
        const createdNewComment = await Comment.create(commentInfo);
        return createdNewComment;
    }

    async update({ commentId, update }) {
        const filter = { _id: commentId };
        const option = { returnOriginal: false };

        const updatedComment = await Comment.findOneAndUpdate(
            filter,
            update,
            option
        );
        return updatedComment;
    }

    async deleteById(commentId) {
        const result = await Comment.deleteOne({ _id: commentId });
        return result;
    }
}

module.exports = CommentModel;

const commentModel = new CommentModel();

module.exports = { commentModel };
