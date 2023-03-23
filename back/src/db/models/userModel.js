const { model } = require('mongoose');
const { UserSchema } = require('../schemas/userSchema');

const User = model('users', UserSchema);

class UserModel {
    async findById(_userId) {
        const user = await User.findOne({ _userId });
        return user;
    }

    async findByNickname(nickname) {
        const user = await User.findOne({ nickname });
        return user;
    }

    async findAll() {
        const users = await User.find({});
        return users;
    }

    async create(userInfo) {
        const createdNewUser = await User.create(userInfo);
        return createdNewUser;
    }

    async update({ _userId, update }) {
        const filter = { _userId };
        const option = { returnOriginal: false };

        const updatedUser = await User.findOneAndUpdate(filter, update, option);
        return updatedUser;
    }

    async deleteById(_userId) {
        const result = await User.deleteOne({ _userId });
        return result;
    }
}

module.exports = UserModel;

const userModel = new UserModel();

module.exports = { userModel };
