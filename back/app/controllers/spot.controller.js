const Spot = require("../model/spot.model.js");

// 새 객체 생성
exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty!"
        });
    };

    const spot = new Spot({
        place: req.body.place,
    });

    // 데이터베이스에 저장
    Spot.create(spot, (err, data) =>{
        if(err){
            res.status(500).send({
                message:
                err.message || "Some error occured while creating th Spot."
            });
        };
    })
};

// 소모임 spot 전체 페이지, spot 전체 조회 
exports.findAll = (req,res)=>{
    Spot.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving spots."
          });
        else res.send(data);
      });
};

// spot별 소모임 페이지, spotId로 조회
exports.findOne = (req,res)=>{
    Spot.findById(req.params.spotId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Spot with id ${req.params.spotId}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Spot with id " + req.params.spotId
            });
          }
        } else res.send(data);
      });
};


//------------------------------- DB에서 controll, 삭제 예정
// spotId로 수정, 갱신 // 삭제 예정, DB에서 진행
exports.update = (req,res)=>{
    // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Spot.updateById(
    req.params.spotId,
    new Spot(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.spotId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Spot with id " + req.params.spotId
          });
        }
      } else res.send(data);
    }
  );
};

// spotId로 삭제 // 삭제 예정, DB에서 진행
exports.delete = (req,res)=>{
    Spot.remove(req.params.spotId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Spot with id ${req.params.spotId}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Spot with id " + req.params.spotId
            });
          }
        } else res.send({ message: `Spot was deleted successfully!` });
      });
};

// spot 전체 삭제 // 기능 삭제 DB에서 목적에 따라 테이블 DROP, TRUNCATE, DELETE 사용
exports.deleteAll = (req,res)=>{
    Spot.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all spots."
          });
        else res.send({ message: `All Spots were deleted successfully!` });
      });
};

