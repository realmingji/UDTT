const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

/** 모듈 */
app.use(cors()); // CORS 방지
app.use(morgan('dev'));

// body parser

// Content-Type: application/json 형태의 데이터를 인식하고 핸들링
// Content-Type: application/x-www-form-urlencoded 형태의 데이터를 인식하고 핸들링
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 메인 페이지

// router, service 구현

// 에러처리 미들웨어

module.exports = { app };
