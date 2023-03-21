module.exports = app =>{
  const comments = require("../controllers/comment.controller.js");
  

  // comment 튜플 생성
  app.post("/comments", comments.create);

  // comment 전체 조회 
  app.get("/comments", comments.findAll);

  // user 본인이 작성한 comment 조회, commentId로 조회
  app.get("/comments/:commentId", comments.findOne);

  // user 본인이 작성한 comment 수정, commentId로 수정
  app.put("/comments/:commentId", comments.update);

  // user 본인이 작성한 comment 삭제, commentId로 삭제
  app.delete("/comments/:commentId", comments.delete);

  // 본인 comment 전체 삭제
  app.delete("/comments", comments.deleteAll);

};

