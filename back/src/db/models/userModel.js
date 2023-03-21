const { model } = require("mongoose");
const { UserSchema } = require("../schemas/userSchema");

const User = model("users", UserSchema);
class UserModel {
  async findById(userId) {
    const user = await User.findOne({ _id: userId });
    return user;
  }

  async create(userInfo) {
    const createdNewUser = await User.create(userInfo);
    return createdNewUser;
  }

  async update({ userId, update }) {
    const filter = { _id: userId };
    const option = { returnOriginal: false };

    const updatedUser = await User.findOneAndUpdate(filter, update, option);
    return updatedUser;
  }

  async updatePW({ userId, newPasswordHash }) {
    const filter = { _id: userId };
    const option = { returnOriginal: false };

    const updatedUser = await User.findOneAndUpdate(
      filter,
      { password: newPasswordHash },
      option
    );
    return updatedUser;
  }

  async deleteById(userId) {
    const result = await User.deleteOne({ _id: userId });
    return result;
  }
}

module.exports = UserModel;

const userModel = new UserModel();

module.exports = { userModel };
