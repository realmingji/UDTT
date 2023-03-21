const mysql = require("mysql2");
const dbConfig = require("../config/db.config.js");

// 데이터베이스 connection 객체 생성
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

// MySQL connection 실행
connection.connect(error=>{
    if(error) throw error;
    console.log("Successfully connected!!");
    // connection.query("CREATE DATABASE udtt", function(err) {
    //     if(err) throw err;
    //     console.log("Database created");
    // });
});

module.exports = connection;