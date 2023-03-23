const express = require('express');
require('express-async-errors');
const userRouter = express.Router();
// const is = require('@sindresorhus/is');

const { loginRequired } = require('../middleware/loginRequired');
const { userService } = require('../services/userService');


//회원가입
userRouter.post('/register', 
  async (req, res, next) => {
    try {
      if (is.emptyObject(req.body)) {
        throw new Error(
          "Empty object, headers Content-Type: application/json"
        );
      }
      const { userId, nickname, password } = req.body;

      // 위 데이터를 유저 db에 추가하기
      const newUser = await userService.addUser({
        userId,
        nickname,
        password,
      });
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
});

//로그인
userRouter.post('/login', 
  async (req, res, next) => {
    try {
      if (is.emptyObject(req.body)) {
        throw new Error(
          "Empty object, headers Content-Type: application/json"
        );
      }

    // req (request) 에서 데이터 가져오기
    const { userId, password } = req.body;
    // 위 데이터가 db에 있는지 확인하고,
    // db 있을 시 로그인 성공 및, 토큰 여부 받아오기
    const loginResult = await userService.getUserToken({ userId, password });

    res.status(200).json(loginResult);
  } catch (error) {
    next(error);
  }
});

// 로그인한 사용자 정보 불러오기
userRouter.get('/users/:userId', loginRequired, 
  async function (req, res, next) {
    try {
      if (is.object(req.body)) {
        throw new Error(
          "Empty object"
        );
      }
      const _userId = req.currentUserId;
      const currentUserInfo = await userService.getUserData(_userId);

      res.status(200).json(currentUserInfo);
    } catch (error) {
      next(error);
    }
});

// 사용자 정보 수정
userRouter.patch('/users/:userId', loginRequired, 
  async function (req, res, next) {
    try {
      if (is.emptyObject(req.body)) {
        throw new Error(
          "Empty object, headers Content-Type: application/json"
        );
      }
      // params로부터 _id를 가져옴(mongoDB에서 자동 생성해주는 _id)
      const { _userId } = req.params;

      // body data 로부터 업데이트할 사용자 정보를 추출함.
      const { nickname, password } = req.body;

      // body data로부터, 확인용으로 사용할 현재 비밀번호를 추출함.
      const currentPassword = req.body.currentPassword;

      // currentPassword 없을 시, 진행 불가
      if (!currentPassword) {
        throw new Error('정보 변경시 본인 확인이 필요 합니다.');
      }

      const userInfoRequired = { _userId, currentPassword };

      // 위 데이터가 undefined가 아니라면, 업데이트용 객체에 삽입
      const toUpdate = {
        ...(nickname && { nickname }),
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
});

//사용자 삭제
userRouter.delete('/users/:userId', loginRequired, 
  async function (req, res, next) {
    try {
      // params로부터 id를 가져옴
      const { _userId } = req.params.userId;

      const deleteResult = await userService.deleteUser(_userId);

      res.status(200).json(deleteResult);
    } catch (error) {
      next(error);
    }
  }
);   


module.exports = userRouter;
