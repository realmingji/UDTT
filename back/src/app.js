// express 받아오기
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors()); //CORS 방지

// Content-Type: application/x-www-form-urlencoded 형태의 데이터를 인식하고 핸들링
app.use(express.urlencoded({ extended: false }));

// Content-Type: application/json 형태의 데이터를 인식하고 핸들링
app.use(express.json());

module.exports = { app };