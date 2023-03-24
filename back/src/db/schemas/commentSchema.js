const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema(
  {
    // 작성자
    authourId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    groupId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'groups',
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'comments',
    timestamps: true,
  },
);

module.exports = mongoose.model('comments', CommentSchema);
