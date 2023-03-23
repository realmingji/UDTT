const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const db = () => {
  mongoose.set('strictQuery', true);
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(console.log('Database connection established'))
    .catch((err) => console.log(err));
};

module.exports = db;
