module.exports = app =>{
  const groups = require("../controllers/group.controller.js");
  

  // 튜플 생성
  app.post("/groups", groups.create);

  // group 전체 조회 
  app.get("/groups", groups.findAll);

  // 모임 상세 페이지 groupId로 조회
  app.get("/groups/:groupId", groups.findOne);

  // 모임 수정 groupId로 수정
  app.put("/groups/:groupId", groups.update);

  // 모임 삭제 groupId로 삭제
  app.delete("/groups/:groupId", groups.delete);

  // 전체 삭제
  app.delete("/groups", groups.deleteAll);

};

