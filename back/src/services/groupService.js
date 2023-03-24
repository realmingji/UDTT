const { groupModel } = require('../db/models/groupModel2');

class GroupService {
  constructor(groupModel) {
    this.groupModel = groupModel;
  }
  // 소모임 생성
  async addGroup(groupData) {
    // db에 저장
    const createGroup = await this.groupModel.create(groupData);

    return createGroup;
  }

  async getGroups() {
    const groups = await this.groupModel.findAll();

    return groups;
  }

  async getGroupsBySpot(spotId) {
    const groups = await this.groupModel.findBySpot(spotId);

    return groups;
  }

  async getGroupInfo(groupId) {
    const group = await this.groupModel.findById(groupId);

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!group) {
      throw new Error('등록된 소모임이 없습니다.');
    }

    return group;
  }

  async getGroupsByUser(userId) {
    const groups = await this.groupModel.findByUser(userId);

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!groups) {
      throw new Error('등록된 소모임이 없습니다.');
    }

    return groups;
  }

  async setGroup(groupId, toUpdate) {
    const updatedGroup = await this.groupModel.update({
      groupId,
      update: toUpdate,
    });

    return updatedGroup;
  }

  async deleteGroup(groupId) {
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
