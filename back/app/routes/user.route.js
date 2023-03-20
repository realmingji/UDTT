
module.exports = app =>{
  const users = require("../controllers/user.controller.js");
  

  // 튜플 생성
  app.post("/users", users.create);

  // 전체 조회 
  app.get("/users", users.findAll);

  // id로 조회
  app.get("/users/:userId", users.findOne);

  // id로 수정
  app.put("/users/:userId", users.update);

  // id로 삭제
  app.delete("/users/:userId", users.delete);

  // 전체 삭제
  app.delete("/users", users.deleteAll);

};

