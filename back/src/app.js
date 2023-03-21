const express = require('express');
const app = express();
const userRouter = require('./routes/userRouter');
const Router = require('./routes/Router');
const Router = require('./routes/Router');
const { errorHandler } = require('./middlewares/errorHandler');

app.get('/', (req, res) => {
  res.send('Hello, UDTT Started NodeJS Application');
});
app.listen(5000, () => console.log('5000 port listening on port'));

app.use(cors()); //CORS 방지

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// api 라우팅
app.use('/api', userRouter);
app.use('/api', Router);
app.use('/api', Router);

// Error Handler
app.use(errorHandler);

module.exports = { app };
