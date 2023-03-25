const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      default: new Date(),
      required: false,
    },
    StartDate: {
      type: String,
      default: new Date(),
      required: false,
    },
    status: {
      type: String,
      default: 'OPEN',
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    spot: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'groups',
    timestamps: true,
  },
);

module.exports = mongoose.model('groups', GroupSchema);