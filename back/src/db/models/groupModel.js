const { model } = require('mongoose');
const { GroupSchema } = require('../schemas/groupSchema');

const Group = model('groups', GroupSchema);

class GroupModel {
    async create(groupInfo) {
        const createdNewGroup = await Group.create(groupInfo);
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

    async findByUser(userId) {
        const groups = await Group.findOne({ userId });
        return groups;
    }

    async update({ groupId, update }) {
        const filter = { _id: groupId };
        const option = { returnOriginal: false };

        const updatedGroup = await Group.findOneAndUpdate(filter, update, option);
        return updatedGroup;
    }

    async deleteById(groupId) {
        const result = await Group.deleteOne({ _id: groupId });
        return result;
    }
}

module.exports = GroupModel;

const groupModel = new GroupModel();

module.exports = { groupModel };
