module.exports = app =>{
  const ridegroups = require("../controllers/ridegroup.controller.js");
  

  // 소모임 생성 (튜플 생성)
  app.post("/ridegroups", ridegroups.create);

  // 소모임 전체 조회 
  app.get("/ridegroups", ridegroups.findAll);

  // 소모임 상세 페이지 groupId로 조회
  app.get("/ridegroups/:ridegroupId", ridegroups.findOne);

  // 소모임 수정 groupId로 수정
  app.put("/ridegroups/:ridegroupId", ridegroups.update);

  // 모임 삭제 groupId로 삭제
  app.delete("/ridegroups/:ridegroupId", ridegroups.delete);

  // 전체 삭제
  app.delete("/ridegroups", ridegroups.deleteAll);

};

