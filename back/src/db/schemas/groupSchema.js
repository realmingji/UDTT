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
    //모임 시작 시간
    startTime: {
      type: Date,
      default: new Date(),
      required: true,
    },
    //모임 종료 시간
    endTime: {
      type: Date,
      required: false,
    },
    status: {
      type: String,
      enum: ['Open', 'Close'],
      default: 'Open',
    },
    leaderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    memberId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: false,
    },
    // 장소 추가필요(11개 spot)
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
