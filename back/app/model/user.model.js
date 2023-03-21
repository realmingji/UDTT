const sql = require("./db.js");

// 생성자 
const User = function(user){
    this.nickname = user.nickname;
};

// user 가입, 생성 튜플 추가 
User.create = (newUser, result)=>{
    sql.query("INSERT INTO user SET ?", newUser, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("Created user: ",{id:res.inseertId, ...newUser });
        result(null, {id: res.inseertId, ...newUser});
    });
};

// user 정보 조회, userId로 조회
User.findByID = (userID, result)=>{
    sql.query('SELECT * FROM user WHERE id = ?',userID, (err, res)=>{
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

// user 전체 조회
User.getAll = result =>{
    sql.query('SELECT * FROM user', (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("user: ", res);
        result(null, res);
    });
};

// 유저 닉네임 변경, userId로 수정
User.updateByID = (id, user, result)=>{
    sql.query('UPDATE user SET nickname = ?, WHERE id = ?', 
    [user.nickname, id], (err, res)=>{
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

// 사용자 탈퇴, userId로 삭제
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

// user 전체 삭제 // DB에서 관리 삭제 예정
User.removeAll = result =>{
    sql.query('DELETE FROM user',(err, res)=>{
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

        console.log('deleted ${res.affectedRows} user');
        result(null, res);
    });
};

module.exports = User;

