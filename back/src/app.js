const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const userRouter = require('./routes/userRouter');
const groupRouter = require('./routes/groupRouter');
const commentRouter = require('./routes/commentRouter');
const { loginRequired } = require('./middleware/loginRequired');
const { errorHandler } = require('./middleware/errorHandler');


const db = require('./db/db');

dotenv.config();

const app = express();

app.use(cors({
  origin: true,
  credentials: true,
}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use('/api', userRouter);
app.use('/api', groupRouter);
app.use('/api', commentRouter);


app.use(errorHandler);
app.use(loginRequired);


app.get('/', (req, res) => {
    res.send('Hello, UDTT Started NodeJS Application');
});

app.listen(process.env.PORT, () => {
    console.log(`CORS-enabled web server listening on port ${process.env.PORT}`);
    db();
});


// const crypto = require('crypto');

// const password = 'abc123';
// const secret = 'MySecretKey1$1$234';

// const hashed = crypto.createHmac('sha256', secret).update(password).digest('hex');

// console.log(hashed);