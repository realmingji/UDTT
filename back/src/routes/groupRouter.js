const express = require('express');
const groupRouter = express.Router();
const { groupService } = require('../services/groupService');
const { loginRequired } = require('../middlewares/loginRequired');

//
groupRouter.post('/groups', async (req, res, next) => {
  try {
    // req (request) 에서 데이터 가져오기
    const { userId, userName, email, password } = req.body;

    // 위 데이터를 유저 db에 추가하기
    const newUser = await groupService.addUser({
      userId,
      userName,
      email,
      password,
    });
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

//로그인
groupRouter.post('/login', async function (req, res, next) {
  try {
    // req (request) 에서 데이터 가져오기
    const userId = req.body.userId;
    const password = req.body.password;

    // 위 데이터가 db에 있는지 확인하고,
    // db 있을 시 로그인 성공 및, 토큰 및 관리자 여부 받아오기
    const loginResult = await userService.getUserToken({ userId, password });

    res.status(200).json(loginResult);
  } catch (error) {
    next(error);
  }
});

// 로그인한 사용자 정보 불러오기
groupRouter.get('/users', loginRequired, async function (req, res, next) {
  try {
    const userId = req.currentUserId;
    const currentUserInfo = await userService.getUserData(userId);

    res.status(200).json(currentUserInfo);
  } catch (error) {
    next(error);
  }
});

// 사용자 정보 수정
groupRouter.patch(
  '/users/:userId',
  loginRequired,
  async function (req, res, next) {
    try {
      // params로부터 _id를 가져옴(mongoDB에서 자동 생성해주는 _id)
      const { userId } = req.params;

      // body data 로부터 업데이트할 사용자 정보를 추출함.
      const { userName, password } = req.body;

      // body data로부터, 확인용으로 사용할 현재 비밀번호를 추출함.
      const currentPassword = req.body.currentPassword;

      // currentPassword 없을 시, 진행 불가
      if (!currentPassword) {
        throw new Error('정보를 변경 하려면, 본인 확인이 필요합니다.');
      }

      const userInfoRequired = { userId, currentPassword };

      // 위 데이터가 undefined가 아니라면, 업데이트용 객체에 삽입
      const toUpdate = {
        ...(userName && { userName }),
        ...(password && { password }),
      };

      // 사용자 정보를 업데이트함.
      const updatedUserInfo = await userService.setUser(
        userInfoRequired,
        toUpdate,
      );

      res.status(200).json(updatedUserInfo);
    } catch (error) {
      next(error);
    }
  },
);

//사용자 삭제
groupRouter.delete(
  '/users/:userId',
  loginRequired,
  async function (req, res, next) {
    try {
      // params로부터 id를 가져옴
      const { userId } = req.params;

      const deleteResult = await userService.deleteUserData(userId);

      res.status(200).json(deleteResult);
    } catch (error) {
      next(error);
    }
  },
);

//수정, 삭제 전 현재 비밀번호 확인
groupRouter.post(
  '/users/currentPassword',
  loginRequired,
  async function (req, res, next) {
    try {
      // req (request) 에서 데이터 가져오기
      const userId = req.currentUserId;
      const password = req.body.password;

      // 비밀번호가 알맞는지 여부를 체크함
      const checkResult = await userService.checkUserPassword(userId, password);

      res.status(200).json(checkResult);
    } catch (error) {
      next(error);
    }
  },
);

module.exports = groupRouter;
