const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const db = () => {
  mongoose.set('strictQuery', true);
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(console.log('데이터베이스 연결되었습니다!!!!'))
    .catch((err) => console.log(err));
};

module.exports = db;
