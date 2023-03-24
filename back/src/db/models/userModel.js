const { model } = require('mongoose');
const { UserSchema } = require('../schemas/userSchema');

const User = model('users', UserSchema);

class UserModel {
  async findById(userId) {
    const user = await User.findOne({ userId });
    return user;
  }

  async findByEmail(email) {
    const user = await User.findOne({ email });
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

  async update({ userId, update }) {
    const filter = { userId };
    const option = { returnOriginal: false };

    const updatedUser = await User.findOneAndUpdate(filter, update, option);
    return updatedUser;
  }

  async deleteById(userId) {
    const result = await User.deleteOne({ userId });
    return result;
  }
}

module.exports = UserModel;

const userModel = new UserModel();

module.exports = { userModel };
