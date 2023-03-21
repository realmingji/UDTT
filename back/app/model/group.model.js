const sql = require("./db.js");

// 생성자 
const Group = function(group){
    this.title = group.title;
    this.info = group.info;
    this.status = group.status;
};

// group 튜플 추가 
Group.create = (newGroup, result)=>{
    sql.query("INSERT INTO groups SET ?", newGroup, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("Created group: ",{id:res.inseertId, ...newGroup });
        result(null, {id: res.inseertId, ...newGroup});
    });
};

// group id로 조회
Group.findByID = (groupID, result)=>{
    sql.query('SELECT * FROM groups WHERE id = ?',groupID, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if(res.length){
            console.log("found group: ", res[0]);
            result(null, res[0]);
            return;
        }

        // 결과가 없을 시 
        result({kind: "not_found"}, null);
    });
};

// group 전체 조회
Group.getAll = result =>{
    sql.query('SELECT * FROM groups', (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("group: ", res);
        result(null, res);
    });
};

// group id로 수정
Group.updateByID = (id, group, result)=>{
    sql.query('UPDATE groups SET title = ?, info = ?, status = ? WHERE id = ?', 
    [group.title, group.info, group.status, id], (err, res)=>{
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

        console.log("update group: ", {id:id, ... group});
        result(null, {id:id, ...group});
    });
};

// group id로 삭제
Group.remove = (id, result)=>{
    sql.query('DELETE FROM groups WHERE id = ?',id, (err, res)=>{
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

        console.log("deleted group with id: ", id);
        result(null, res);
    });
};

// group 전체 삭제
Group.removeAll = result =>{
    sql.query('DELETE FROM groups',(err, res)=>{
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

        console.log('deleted ${res.affectedRows} groups');
        result(null, res);
    });
};

module.exports = Group;


