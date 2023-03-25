const express = require('express');
require('express-async-errors');
const userRouter = express.Router();
const { userService } = require('../services/userService');
const { loginRequired } = require('../middleware/loginRequired');


userRouter.post('/register', 
    async (req, res, next) => {
        try {
            const { email, nickname, password } = req.body;

            const newUser = await userService.addUser({
                email,
                nickname,
                password,
            });
            res.status(201).json(newUser);
        } catch (error) {
          next(error);
        }
    }
);

userRouter.post('/login', 
    async (req, res, next) => {
        try {
            const { email, password } = req.body;
            const loginResult = await userService.getUserToken({ email, password });

            res.status(200).json(loginResult);
        } catch (error) {
          next(error);
        }
    }
);

userRouter.get('/users/:userId', loginRequired,
    async function (req, res, next) {
        try {
            const userId = req.currentUserId;
            const currentUserInfo = await userService.getUserData(userId);

            res.status(200).json(currentUserInfo);
        } catch (error) {
          next(error);
        }
    }
);

userRouter.delete('/users/:userId', loginRequired,
    async function (req, res, next) {
        try {
            const { userId } = req.params.userId;
            const deleteResult = await userService.deleteUser(userId);

            res.status(200).json(deleteResult);
        } catch (error) {
          next(error);
        }
    }
);

module.exports = userRouter;
