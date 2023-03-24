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
      type: Date,
      default: new Date(),
      required: true,
    },
    endTime: {
      type: Date,
      required: false,
    },
    status: {
      type: String,
      // enum: ['Open', 'Close'],
      default: 'OPEN',
      required: true,
    },
    leaderId: {
      type: String,
      ref: 'users',
      required: true,
    },
    memberId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: false,
    },
    spot: {
      type: String,
      // enum: ['강서', '광나루', '난지', '뚝섬', '망원', '반포', '양화', '여의도', '이촌', '잠실', '잠원'],
      required: true,
    },
  },
  {
    collection: 'groups',
    timestamps: true,
  },
);

module.exports = mongoose.model('groups', GroupSchema);
