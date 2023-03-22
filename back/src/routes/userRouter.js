const express = require('express');
const userRouter = express.Router();
const { userService } = require('../services/userService');
//회원가입
userRouter.post('/register', async (req, res, next) => {
  try {
    // req (request) 에서 데이터 가져오기
    const { userId, nickname, email, password } = req.body;

    // 위 데이터를 유저 db에 추가하기
    const newUser = await userService.addUser({
      userId,
      nickname,
      email,
      password,
    });
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

//로그인
userRouter.post('/login', async function (req, res, next) {
  try {
    // req (request) 에서 데이터 가져오기
    const userEmail = req.body.userEmail;
    const password = req.body.password;

    // 위 데이터가 db에 있는지 확인하고,
    // db 있을 시 로그인 성공 및, 토큰 여부 받아오기
    const loginResult = await userService.getUserToken({ userEmail, password });

    res.status(200).json(loginResult);
  } catch (error) {
    next(error);
  }
});

// 로그인한 사용자 정보 불러오기
userRouter.get('/users', async function (req, res, next) {
  try {
    const userId = req.currentUserId;
    const currentUserInfo = await userService.getUserData(userId);

    res.status(200).json(currentUserInfo);
  } catch (error) {
    next(error);
  }
});

// 사용자 정보 수정
userRouter.patch('/users/:userId', async function (req, res, next) {
  try {
    // params로부터 _id를 가져옴(mongoDB에서 자동 생성해주는 _id)
    const { userId } = req.params;

    // body data 로부터 업데이트할 사용자 정보를 추출함.
    const { nickname, password } = req.body;

    // body data로부터, 확인용으로 사용할 현재 비밀번호를 추출함.
    const currentPassword = req.body.currentPassword;

    // currentPassword 없을 시, 진행 불가
    if (!currentPassword) {
      throw new Error('정보를 변경 하려면, 본인 확인이 필요합니다.');
    }

    const userInfoRequired = { userId, currentPassword };

    // 위 데이터가 undefined가 아니라면, 업데이트용 객체에 삽입
    const toUpdate = {
      ...(userName && { nickname }),
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
userRouter.delete('/users/:userId', async function (req, res, next) {
  try {
    // params로부터 id를 가져옴
    const { userId } = req.params;

    const deleteResult = await userService.deleteUserData(userId);

    res.status(200).json(deleteResult);
  } catch (error) {
    next(error);
  }
});

//수정, 삭제 전 현재 비밀번호 확인
userRouter.post('/users/currentPassword', async function (req, res, next) {
  try {
    // req (request) 에서 데이터 가져오기
    const userEmail = req.currentUserEmail;
    const password = req.body.password;

    // 비밀번호가 알맞는지 여부를 체크함
    const checkResult = await userService.checkUserPassword(userEmail, password);

    res.status(200).json(checkResult);
  } catch (error) {
    next(error);
  }
});

module.exports = userRouter;
