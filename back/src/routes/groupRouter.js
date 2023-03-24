const express = require('express');
const groupRouter = express.Router();
// const { userService } = require('../services/userService');
const { groupService } = require('../services/groupService');
const { loginRequired } = require('../middleware/loginRequired');

// 소모임 생성, 가입 유저 가능
groupRouter.post('/groups/new', loginRequired, async (req, res, next) => {
  try {
    // if (is.emptyObject(req.body)) {
    //   throw new Error(
    //     "Empty object, headers Content-Type: application/json"
    //   );
    // }
    // req (request) 에서 데이터 가져오기
    const { title, info, startTime, endTime, status, spot } = req.body;
    const leaderId = req.currentUserId;
    console.log(`-----currendId: ${leaderId}-----`);
    // const leaderObjectId = await userService.findUserId(leaderId);

    // const memberId = req.currentUserId;

    // 위 데이터를 소모임 db에 추가하기
    const newGroup = await groupService.addGroup({
      title,
      info,
      startTime,
      endTime,
      status,
      leaderId,
      spot,
    });

    res.status(201).json(newGroup);
  } catch (error) {
    next(error);
  }
});

// 소모임 전체 메인 페이지
groupRouter.get('/groups', async (req, res, next) => {
  try {
    const groups = await groupService.getGroups();

    res.status(200).json(groups);
  } catch (error) {
    next(error);
  }
});

// // 소모임 spot별 페이지
// groupRouter.get('/groups/:spotId', async (req, res, next) => {
//   try {
//     const _spotId = req.params.spotId;
//     const groupBySpot = await groupService.getGroupsBySpot(_spotId);

//     res.status(200).json(groupBySpot);
//   } catch (error) {
//     next(error);
//   }
// });

// 그룹 상세보기, 일반 guests 가능
groupRouter.get('/groups/:groupId', async (req, res, next) => {
  try {
    const groupId = req.params.groupId;
    const groupInfo = await groupService.getGroupInfo(groupId);

    res.status(200).json(groupInfo);
  } catch (error) {
    next(error);
  }
});

// 소모임 정보 수정, 생성한 leader 유저 가능
groupRouter.patch('/groups/:groupId', loginRequired, async (req, res, next) => {
  try {
    // if (is.emptyObject(req.body)) {
    //   throw new Error(
    //     "Empty object, headers Content-Type: application/json"
    //   );
    // }
    // params로부터 _id를 가져옴(mongoDB에서 자동 생성해주는 _id)
    const groupId = req.params.leaderId;

    // req(request) 에서 body data 로부터 업데이트할 정보를 추출함.
    const title = req.body.title;
    const info = req.body.info;
    const startTime = req.body.startTime;
    const endTime = req.body.endTime;
    const status = req.body.status;
    const leaderId = req.currentUserId;
    const memberId = req.currentUserId;
    const spot = req.body.spot;

    // 위 데이터가 undefined가 아니라면, 업데이트용 객체에 삽입
    const toUpdate = {
      ...(title && { title }),
      ...(info && { info }),
      ...(startTime && { startTime }),
      ...(endTime && { endTime }),
      ...(status && { status }),
      ...(leaderId && { leaderId }),
      ...(memberId && { memberId }),
      ...(spot && { spot }),
    };

    // 그룹 정보를 업데이트함.
    const updatedGroup = await groupService.setGroup(groupId, toUpdate);

    res.status(200).json(updatedGroup);
  } catch (error) {
    next(error);
  }
});

// 소모임 생성자, 소모임 삭제
groupRouter.delete(
  '/groups/:groupId',
  loginRequired,
  async (req, res, next) => {
    try {
      // params로부터 id를 가져옴
      const groupId = req.params.groupId;
      const deleteResult = await groupService.deleteGroup(groupId);

      res.status(200).json(deleteResult);
    } catch (error) {
      next(error);
    }
  },
);

module.exports = groupRouter;
