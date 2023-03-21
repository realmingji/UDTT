const Comment = require("../model/comment.model.js");

// 새 객체 생성
exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty!"
        });
    };

    const comment = new Comment({
        content: req.body.content,
    });

    // 데이터베이스에 저장
    Comment.create(comment, (err, data) =>{
        if(err){
            res.status(500).send({
                message:
                err.message || "Some error occured while creating th Comment."
            });
        };
    })
};

// 전체 조회 
exports.findAll = (req,res)=>{
    Comment.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving comments."
          });
        else res.send(data);
    });
};

// id로 조회
exports.findOne = (req,res)=>{
    Comment.findById(req.params.commentId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Comment with id ${req.params.commentId}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Comment with id " + req.params.commentId
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
      message: "Comment can not be empty!"
    });
  }

  Comment.updateById(
    req.params.commentId,
    new Comment(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Comment with id ${req.params.commentId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Comment with id " + req.params.commentId
          });
        }
      } else res.send(data);
    }
  );
};

// id로 삭제
exports.delete = (req,res)=>{
  Comment.remove(req.params.commentId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Comment with id ${req.params.commentId}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Comment with id " + req.params.commentId
            });
          }
        } else res.send({ message: `Comment was deleted successfully!` });
      });
};

// 전체 삭제
exports.deleteAll = (req,res)=>{
    Comment.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all comments."
          });
        else res.send({ message: `All Comments were deleted successfully!` });
      });
};

