const Ridegroup = require("../model/ridegroup.model.js");

// 새 객체 생성
exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty!"
        });
    };

    const ridegroup = new Ridegroup({
        title: req.body.title,
        info: req.body.info,
        status: req.body.status,
        start_time: req.body.start_time,
        start_time_end: req.body.start_time
    });

    // 데이터베이스에 저장
    Ridegroup.create(ridegroup, (err, data) =>{
        if(err){
            res.status(500).send({
                message:
                err.message || "Some error occured while creating Ridegroup."
            });
        };
    })
};

// 전체 조회 
exports.findAll = (req,res)=>{
    ridegroup.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving ridegroups."
          });
        else res.send(data);
      });
};

// id로 조회
exports.findOne = (req,res)=>{
    Ridegroup.findById(req.params.ridegroupId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Ridegroup with id ${req.params.ridegroupId}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Ridegroup with id " + req.params.ridegroupId
            });
          }
        } else res.send(data);
      });
};

// id로 갱신
exports.update = (req,res)=>{
    // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Ridegroup.updateById(
    req.params.ridegroupId,
    new Group(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Ridegroup with id ${req.params.ridegroupId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Ridegroup with id " + req.params.ridegroupId
          });
        }
      } else res.send(data);
    }
  );
};

// id로 삭제
exports.delete = (req,res)=>{
    Ridegroup.remove(req.params.ridegroupId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Ridegroup with id ${req.params.ridegroupId}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Ridegroup with id " + req.params.ridegroupId
            });
          }
        } else res.send({ message: `Ridegroup was deleted successfully!` });
      });
};

// 전체 삭제
exports.deleteAll = (req,res)=>{
    Ridegroup.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all ridegroups."
          });
        else res.send({ message: `All Ridegroups were deleted successfully!` });
      });
};

