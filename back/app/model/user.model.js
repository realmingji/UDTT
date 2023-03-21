const sql = require("./db.js");

// 생성자 
const User = function(user){
    this.nickname = user.nickname;
    this.active = user.active;
};

// user 튜플 추가 
User.create = (newUser, result)=>{
    sql.query("INSERT INTO users SET ?", newUser, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("Created user: ",{id:res.inseertId, ...newUser });
        result(null, {id: res.inseertId, ...newUser});
    });
};

// user id로 조회
User.findByID = (userID, result)=>{
    sql.query('SELECT * FROM users WHERE id = ?',userID, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if(res.length){
            console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
        }

        // 결과가 없을 시 
        result({kind: "not_found"}, null);
    });
};

// customer 전체 조회
User.getAll = result =>{
    sql.query('SELECT * FROM users', (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("user: ", res);
        result(null, res);
    });
};

// user id로 수정
User.updateByID = (id, user, result)=>{
    sql.query('UPDATE users SET nickname = ?, active = ? WHERE id = ?', 
    [user.nickname, user.active, id], (err, res)=>{
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

        console.log("update user: ", {id:id, ... user});
        result(null, {id:id, ...user});
    });
};

// user id로 삭제
User.remove = (id, result)=>{
    sql.query('DELETE FROM users WHERE id = ?',id, (err, res)=>{
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

        console.log("deleted user with id: ", id);
        result(null, res);
    });
};

// customer 전체 삭제
User.removeAll = result =>{
    sql.query('DELETE FROM users',(err, res)=>{
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

        console.log('deleted ${res.affectedRows} users');
        result(null, res);
    });
};

module.exports = User;
 
