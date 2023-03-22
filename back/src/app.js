const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/userRouter');
const groupRouter = require('./routes/groupRouter');
const commentRouter = require('./routes/commentRouter');
const passport = require('passport');
const google = require('./passport/googleStrategy');

// const { errorHandler } = require('./middlewares/errorHandler');
// const { loginRequired } = require('./middleware/loginRequired');

const db = require('./db/db');

dotenv.config();

passport.use(google);

const app = express();

app.use(cors()); //CORS 방지
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// api 라우팅
app.use('/api', authRouter);
app.use('/api', userRouter);
app.use('/api', groupRouter);
app.use('/api', commentRouter);

// Error Handler
// app.use(errorHandler);
// app.use(loginRequired);

app.get('/', (req, res) => {
  res.send('Hello, UDTT Started NodeJS Application');
});

app.listen(process.env.PORT, () => {
  console.log('포트가 열렸습니다.');
  db();
});
