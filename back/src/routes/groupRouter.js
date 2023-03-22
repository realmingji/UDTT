const express = require('express');
const groupRouter = express.Router();
const { groupService } = require('../services/groupService');
const { loginRequired } = require('../middleware/loginRequired');

groupRouter.post('/groups', loginRequired, async (req, res, next) => {
  try {
    // req (request) 에서 데이터 가져오기
    const { title, info, startTime, endTime, status, spotId } = req.body;

    // 위 데이터를 유저 db에 추가하기
    const newGroup = await groupService.addGroup({
      title,
      info,
      startTime,
      endTime,
      status,
      spotId,
    });
    res.status(201).json(newGroup);
  } catch (error) {
    next(error);
  }
});

// 로그인한 사용자 정보 불러오기
groupRouter.get('/groups/:groupId', async function (req, res, next) {
  try {
    const GroupId = req.currentGroupId;

    res.status(200).json(currentGroupInfo);
  } catch (error) {
    next(error);
  }
});

// 사용자 정보 수정
groupRouter.patch('/groups/:groupId', async function (req, res, next) {
  try {
    // params로부터 _id를 가져옴(mongoDB에서 자동 생성해주는 _id)
    const { GroupId } = req.params;

    // body data 로부터 업데이트할 사용자 정보를 추출함.
    const GroupInfoRequired = { GroupId, currentPassword };

    // 위 데이터가 undefined가 아니라면, 업데이트용 객체에 삽입
    const toUpdate = {
      ...(GroupId && { GroupId }),
      ...(title && { title }),
      ...(info && { info }),
      ...(startTime && { startTime }),
      ...(endTime && { endTime }),
      ...(status && { status }),
      ...(userId && { userId }),
    };

    // 그룹 정보를 업데이트함.
    const updatedGroupInfo = await GroupService.setGroup(
      GroupInfoRequired,
      toUpdate,
    );

    res.status(200).json(updatedGroupInfo);
  } catch (error) {
    next(error);
  }
});

//사용자 삭제
groupRouter.delete('/groups/:groupId', async function (req, res, next) {
  try {
    // params로부터 id를 가져옴
    const { GroupId } = req.params;

    const deleteResult = await GroupService.deleteGroupData(GroupId);

    res.status(200).json(deleteResult);
  } catch (error) {
    next(error);
  }
});

module.exports = groupRouter;
