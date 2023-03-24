const { model } = require('mongoose');
const { GroupSchema } = require('../schemas/groupSchema');

const Group = model('groups', GroupSchema);

class GroupModel {
  async create(groupData) {
    const createdNewGroup = await Group.create(groupData);
    return createdNewGroup;
  }

  async findAll() {
    const groups = await Group.find({});
    return groups;
  }

  async findById(groupId) {
    const group = await Group.findOne({_id: groupId });
    return group;
  }

  // ----- spot 제외 -----
  // // spotId 필요시 schema 구성 (spot->place)
  // async findOneBySpot(spot) {
  //   const group = await Group.findOne({ spot });
  //   return group;
  // }

  // async findBySpot(spot) {
  //   const groups = await Group.find({ spot });
  //   return groups;
  // }

  async findByUser(userId) {
    const groups = await Group.findOne({ userId });
    return groups;
  }

  async update({ groupId, update }) {
    const filter = { id: groupId };
    const option = { returnOriginal: false };

    const updatedGroup = await Group.findOneAndUpdate(filter, update, option);
    return updatedGroup;
  }

  async deleteById(groupId) {
    const result = await Group.deleteOne({ id: groupId });
    return result;
  }
}

module.exports = GroupModel;

const groupModel = new GroupModel();

module.exports = { groupModel };
