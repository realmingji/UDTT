const express = require('express');
const groupRouter = express.Router();
const { groupService } = require('../services/groupService');
const { loginRequired } = require('../middleware/loginRequired');


groupRouter.post('/groups/new', loginRequired, 
    async (req, res, next) => {
        try {
            const { title, info, startTime, startDate, status, spot } = req.body;

            const newGroup = await groupService.addGroup({
                title,
                info,
                startTime,
                startDate,
                status,
                spot,
            });

            res.status(201).json(newGroup);
        } catch (error) {
          next(error);
        }
    }
);

groupRouter.get('/groups', 
    async (req, res, next) => {
        try {
            const groups = await groupService.getGroups();

            res.status(200).json(groups);
        } catch (error) {
          next(error);
        }
    }
);

groupRouter.get('/groups/:groupId', 
    async (req, res, next) => {
        try {
            const groupId = req.params.groupId;
            const groupInfo = await groupService.getGroupInfo(groupId);

            res.status(200).json(groupInfo);
        } catch (error) {
          next(error);
        }
    }
);

groupRouter.patch('/groups/:groupId', loginRequired, 
    async (req, res, next) => {
        try {
            const groupId = req.params.groupId;
            const title = req.body.title;
            const info = req.body.info;
            const startTime = req.body.startTime;
            const startDate = req.body.startDate;
            const status = req.body.status;
            const spot = req.body.spot;

            const toUpdate = {
                ...(title && { title }),
                ...(info && { info }),
                ...(startTime && { startTime }),
                ...(startDate && { startDate }),
                ...(status && { status }),
                ...(spot && { spot }),
            };

            const updatedGroup = await groupService.setGroup(groupId, toUpdate);

            res.status(200).json(updatedGroup);
        } catch (error) {
            next(error);
        }
    }
);

groupRouter.delete('/groups/:groupId',loginRequired,
    async (req, res, next) => {
        try {
            const groupId = req.params.groupId;
            const deleteResult = await groupService.deleteGroup(groupId);

            res.status(200).json(deleteResult);
        } catch (error) {
          next(error);
        }
    }
);

module.exports = groupRouter;
