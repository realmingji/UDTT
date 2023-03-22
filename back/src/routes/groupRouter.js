const express = require('express');
const groupRouter = express.Router();
const { groupService } = require('../services/groupService');
const { loginRequired } = require('../middleware/loginRequired');

groupRouter.post('/groups', loginRequired, async (req, res, next) => {
  try {
    // req (request) 에서 데이터 가져오기
    const { title, info, startTime, endTime, status, spot } = req.body;

    // 위 데이터를 유저 db에 추가하기
    const newGroup = await groupService.addGroup({
      title,
      info,
      startTime,
      endTime,
      status,
      spot,
    });
    res.status(201).json(newGroup);
  } catch (error) {
    next(error);
  }
});


groupRouter.get('/groups/:groupId', async function (req, res, next) {
  try {
    const groupId = req.params.groupId;
    const groupData = await groupService.getGroupData(groupId);

    res.status(200).json(groupData);
  } catch (error) {
    next(error);
  }
});

// 소모임 정보 수정
groupRouter.patch('/groups/:groupId', loginRequired, async function (req, res, next) {
  try {
    // params로부터 _id를 가져옴(mongoDB에서 자동 생성해주는 _id)
    const groupId = req.params.groupId;

    // body data 로부터 업데이트할 사용자 정보를 추출함.
    const GroupInfoRequired = { GroupId, currentPassword };

    const title = req.body.title;
    const info = req.body.info;
    const startTime = req.body.startTime;
    const endTime = req.body.endTime;
    const status = req.body.status;
    const spot = req.body.spot;

    // 위 데이터가 undefined가 아니라면, 업데이트용 객체에 삽입
    const toUpdate = {
      ...(title && { title }),
      ...(info && { info }),
      ...(startTime && { startTime }),
      ...(endTime && { endTime }),
      ...(status && { status }),
      ...(spot && { spot }),
    };

    // 그룹 정보를 업데이트함.
    const updatedGroup = await groupService.setGroup(
      groupId,
      toUpdate,
    );

    res.status(200).json(updatedGroup);
  } catch (error) {
    next(error);
  }
});

//사용자 삭제
groupRouter.delete('/groups/:groupId', loginRequired, async function (req, res, next) {
  try {
    // params로부터 id를 가져옴
    const groupId = req.params.groupId;
    const deleteResult = await groupService.deleteGroupData(groupId);

    res.status(200).json(deleteResult);
  } catch (error) {
    next(error);
  }
});

module.exports = groupRouter;
