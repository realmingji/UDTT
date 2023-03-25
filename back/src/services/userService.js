const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { userModel } = require('../db/models/userModel');

dotenv.config();

class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }

    async addUser(userInfo) {
        const { email, nickname, password } = userInfo;

        const user = await this.userModel.findByEmail(email);
        if (user) {
            throw new Error(
            '이 이메일은 현재 사용중 입니다. 다른 이메일로 이용해 주세요.',
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUserInfo = { email, nickname, password: hashedPassword };
        const createdNewUser = await this.userModel.create(newUserInfo);

        return createdNewUser;
    }

    async getUserToken(loginInfo) {
        const { email, password } = loginInfo;

        const user = await this.userModel.findByEmail(email);
        if (!user) {
            throw new Error(
            '입력하신 정보는 확인 되지 않습니다. 다시 한 번 확인해 주세요.',
        );
    }   

        const correctPasswordHash = user.password;
        const isPasswordCorrect = await bcrypt.compare(
          password,
          correctPasswordHash,
        );

        if (!isPasswordCorrect) {
            throw new Error(
                '비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요.',
            );
        }

        const secretKey = process.env.JWT_SECRET_KEY || 'secret-key';
        const token = jwt.sign({ userId: user.userId }, secretKey);

        return { token };
    }

    async getUserData(userId) {
        const user = await this.userModel.findById(userId);

        if (!user) {
            throw new Error('일치하는 내역이 없습니다. 다시 한 번 확인해 주세요.');
        }

        return user;
    }

    async checkUserPassword(userId, password) {
        const user = await this.userModel.findById(userId);

        const correctPasswordHash = user.password;
        const isPasswordCorrect = await bcrypt.compare(
          password,
          correctPasswordHash,
        );

        if (!isPasswordCorrect) {
            throw new Error(
                '비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요.',
            );
        }

        return user;
    }

    async deleteUserData(userId) {
        const { deletedCount } = await this.userModel.deleteById(userId);

        if (deletedCount === 0) {
            throw new Error(`${userEmail} 사용자 데이터의 삭제에 실패하였습니다.`);
        }

        return { result: 'success' };
    }
}

const userService = new UserService(userModel);

module.exports = { userService };
