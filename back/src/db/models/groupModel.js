// ----- groupModel2 사용 / 삭제 예정 -----

// const { model } = require('mongoose');
// const { GroupSchema } = require('../schemas/groupSchema');

// const Group = model('groups', GroupSchema);

// class GroupModel {
//   //모임 메인 페이지 조회
//   // async findAll({

//   // })

//   //모임별 상세 페이지
//   async findByGroup(groupId) {
//     const group = await Group.find({ group_Id: groupId });
//     return group;
//   }

//   //spot별 페이지
//   async findBySpot(spotId) {
//     const spot = await Group.find({ spotId: spotId });
//     return spot;
//   }

//   //마이페이지 내가 참여한 모임 조회
//   async findByUser(userId) {
//     const user = await Group.find({ _id: userId });
//     return user;
//   }

//   //모임 등록
//   async create(ridegroup) {
//     const createdNewGroup = await Group.create(ridegroup);
//     return createdNewGroup;
//   }

//   //모임 수정
//   async update({ userId, update }) {
//     const filter = { _id: userId };
//     const option = { returnOriginal: false };

//     const updatedGroup = await Group.findOneAndUpdate(filter, update, option);
//     return updatedGroup;
//   }

//   //모임 삭제
//   async deleteById(userId) {
//     const result = await User.deleteOne({ _id: userId });
//     return result;
//   }
// }

// module.exports = GroupModel;

// const groupModel = new GroupModel();

// module.exports = { groupModel };
