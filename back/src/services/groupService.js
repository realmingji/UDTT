const { groupModel } = require('../db/models/groupModel');

class GroupService {
  constructor(groupModel) {
    this.groupModel = groupModel;
  }
  // 소모임 생성
  async addgroup(groupConfig) {
    // 객체 destructuring
    const { title, info, startTime, endTime, status, userId, spotId } =
      groupConfig;
    // db에 저장
    const group = await this.groupModel.findByGroupConfig(groupConfig);
    if (!groupConfig) {
      throw new Error('모임 정보가 부족합니다. 빈 칸을 채워주세요.');
    }
    const createdNewGroup = await this.groupModel.create(groupConfig);

    return createdNewGroup;
  }

  async getGroups() {
    const groups = await this.groupModel.findAll();

    return groups;
  }

  async getGroupsByUserId(userId) {
    const groups = await this.groupModel.findAllByUserId(userId);

    return groups;
  }

  async setGroup(groupId, toUpdate) {
    const updatedGroup = await this.groupModel.update({
      groupId,
      update: toUpdate,
    });

    return updatedGroup;
  }

  async deleteGrouptData(groupId) {
    const deleteGroup = await this.groupModel.deleteById(groupId);
    return deleteGroup;
  }
}

const groupService = new GroupService(groupModel);

module.exports = { groupService };

// 빈 칸이 발생한 경우 (Null)
// TODO: 제목, 정보, 모임시작시간, 모임종료시간 member정보, spot
// endTime Null
// status default 'OPEN'
// "라이더 모임의 Title을 입력 해 주세요."
// "라이더 모임을 간단하게 소개 해 주세요."
// "라이더 모임이 시작되는 시간을 알려주세요."
// "라이더 모임의 장소를 알려주세요."
