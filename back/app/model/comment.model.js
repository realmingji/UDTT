const sql = require("./db.js");

// 생성자 
const Comment = function(comment){
    this.content = comment.content;
};

// comment 튜플 추가 
Comment.create = (newComment, result)=>{
    sql.query("INSERT INTO comments SET ?", newComment, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("Created comment: ",{id:res.inseertId, ...newComment });
        result(null, {id: res.inseertId, ...newComment});
    });
};

// comment id로 조회
Comment.findByID = (commentID, result)=>{
    sql.query('SELECT * FROM comments WHERE id = ?',commentID, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if(res.length){
            console.log("found comment: ", res[0]);
            result(null, res[0]);
            return;
        }

        // 결과가 없을 시 
        result({kind: "not_found"}, null);
    });
};

// comment 전체 조회
Comment.getAll = result =>{
    sql.query('SELECT * FROM comments', (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("comment: ", res);
        result(null, res);
    });
};

// comment id로 수정
Comment.updateByID = (id, comment, result)=>{
    sql.query('UPDATE comments SET content = ?, WHERE id = ?', 
    [comment.content, id], (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if(res.affectedRows ==0){
            // id 결과가 없을 시 
            result({kind: "not_found"}, null);
            return;
        }

        console.log("update comment: ", {id:id, ... comment});
        result(null, {id:id, ...comment});
    });
};

// customer id로 삭제
Comment.remove = (id, result)=>{
    sql.query('DELETE FROM comments WHERE id = ?',id, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if(res.affectedRows ==0){
            // id 결과가 없을 시 
            result({kind: "not_found"}, null);
            return;
        }

        console.log("deleted comment with id: ", id);
        result(null, res);
    });
};

// comment 전체 삭제
Comment.removeAll = result =>{
    sql.query('DELETE FROM comments',(err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if(res.affectedRows ==0){
            // id 결과가 없을 시 
            result({kind: "not_found"}, null);
            return;
        }

        console.log('deleted ${res.affectedRows} comments');
        result(null, res);
    });
};

module.exports = Comment;


