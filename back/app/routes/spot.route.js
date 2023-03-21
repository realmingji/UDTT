module.exports = app =>{
  const spots = require("../controllers/spot.controller.js");
  

  // spot 생성 튜플 생성 // 기능 삭제 DB에서 추가
  // app.post("/spots", spots.create);

  // 모임 메인 페이지 (spot 전체 조회) 
  app.get("/spots", spots.findAll);

  // id로 조회, URI /spots/1
  app.get("/spots/:spotId", spots.findOne);

  // spot 수정 // 기능 삭제 DB에서 변경
  // app.put("/spots/:spotId", spots.update);

  // spot 삭제 // 기능 삭제 DB에서 삭제
  // app.delete("/spots/:spotId", spots.delete);

  // spot 전체 삭제 // 기능 삭제 DB에서 목적에 따라 테이블 DROP, TRUNCATE, DELETE 사용
  // app.delete("/spots", spots.deleteAll);

};

