const Group = require("../model/group.model.js");

// 새 객체 생성
exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty!"
        });
    };

    const group = new Group({
        title: req.body.title,
        info: req.body.info,
        status: req.body.status,
    });

    // 데이터베이스에 저장
    Group.create(group, (err, data) =>{
        if(err){
            res.status(500).send({
                message:
                err.message || "Some error occured while creating Group."
            });
        };
    })
};

// 전체 조회 
exports.findAll = (req,res)=>{
    group.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving groups."
          });
        else res.send(data);
      });
};

// id로 조회
exports.findOne = (req,res)=>{
    Group.findById(req.params.groupId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Group with id ${req.params.groupId}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Group with id " + req.params.groupId
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

  Group.updateById(
    req.params.groupId,
    new Group(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Group with id ${req.params.groupId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Group with id " + req.params.groupId
          });
        }
      } else res.send(data);
    }
  );
};

// id로 삭제
exports.delete = (req,res)=>{
    Group.remove(req.params.groupId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Group with id ${req.params.groupId}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Group with id " + req.params.groupId
            });
          }
        } else res.send({ message: `Group was deleted successfully!` });
      });
};

// 전체 삭제
exports.deleteAll = (req,res)=>{
    Group.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all groups."
          });
        else res.send({ message: `All Groups were deleted successfully!` });
      });
};

