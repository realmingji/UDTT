const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema(
  {
    groupId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
    //모임 시작 시간
    startTime: {
      type: Date,
      required: true,
    },
    //모임 종료 시간
    endTime: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ['Open', 'Close'],
      default: 'Open',
    },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    // 장소 추가필요(11개 spot)
    spotId: {
      type: String,
      enum: ['', '', '', ''],
    },
  },
  {
    collection: 'groups',
    timestamps: true,
  },
);

module.exports = mongoose.model('groups', GroupSchema);
