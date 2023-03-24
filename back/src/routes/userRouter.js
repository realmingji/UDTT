const express = require('express');
require('express-async-errors');
const userRouter = express.Router();

const { loginRequired } = require('../middleware/loginRequired');
const { userService } = require('../services/userService');

//회원가입
userRouter.post('/register', async (req, res, next) => {
  try {
    const { email, nickname, password } = req.body;

    // 위 데이터를 유저 db에 추가하기
    const newUser = await userService.addUser({
      email,
      nickname,
      password,
    });
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

//로그인
userRouter.post('/login', async (req, res, next) => {
  try {
    // req (request) 에서 데이터 가져오기
    const { email, password } = req.body;
    // 위 데이터가 db에 있는지 확인하고,
    // db 있을 시 로그인 성공 및, 토큰 여부 받아오기
    const loginResult = await userService.getUserToken({ email, password });

    res.status(200).json(loginResult);
  } catch (error) {
    next(error);
  }
});

// 로그인한 사용자 정보 불러오기
userRouter.get(
  '/users/:userId',
  loginRequired,
  async function (req, res, next) {
    try {
      const userId = req.currentUserId;
      const currentUserInfo = await userService.getUserData(userId);

      res.status(200).json(currentUserInfo);
    } catch (error) {
      next(error);
    }
  },
);

// // 사용자 정보 수정
// userRouter.patch(
//   '/users/:userId',
//   loginRequired,
//   async function (req, res, next) {
//     try {
//       // params로부터 _id를 가져옴(mongoDB에서 자동 생성해주는 _id)
//       const { userId } = req.params;

//       // body data 로부터 업데이트할 사용자 정보를 추출함.
//       const { nickname } = req.body;

//       // currentPassword 없을 시, 진행 불가
//       if (password) {
//         throw new Error('정보 변경시 본인 확인이 필요 합니다.');
//       }

//       const userInfoRequired = { userId, password };

//       // 위 데이터가 undefined가 아니라면, 업데이트용 객체에 삽입
//       const toUpdate = {
//         ...(nickname && { nickname }),
//         ...(password && { password }),
//       };

//       // 사용자 정보를 업데이트함.
//       const updatedUserInfo = await userService.setUser(
//         userInfoRequired,
//         toUpdate,
//       );

//       res.status(200).json(updatedUserInfo);
//     } catch (error) {
//       next(error);
//     }
//   },
// );

//사용자 삭제
userRouter.delete(
  '/users/:userId',
  loginRequired,
  async function (req, res, next) {
    try {
      // params로부터 id를 가져옴
      const { userId } = req.params.userId;

      const deleteResult = await userService.deleteUser(userId);

      res.status(200).json(deleteResult);
    } catch (error) {
      next(error);
    }
  },
);

module.exports = userRouter;
