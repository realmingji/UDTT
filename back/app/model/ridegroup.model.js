const sql = require("./db.js");

// 생성자 
const Ridegroup = function(ridegroup){
    this.title = ridegroup.title;
    this.info = ridegroup.info;
    this.status = ridegroup.status;
    this.start_time = ridegroup.start_time || new Date;
    this.end_time = ridegroup.end_time;
};

// 소모임 생성, ridegroup 튜플 추가 
Ridegroup.create = (newRidegroup, result)=>{
    sql.query("INSERT INTO ridegroup SET ?", newRidegroup, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("Created ridegroup: ",{id:res.inseertId, ...newRidegroup });
        result(null, {id: res.inseertId, ...newRidegroup});
    });
};

// 소모임 조회 ridegroupId로 조회
Ridegroup.findByID = (ridegroupID, result)=>{
    sql.query('SELECT * FROM ridegroups WHERE id = ?',ridegroupID, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if(res.length){
            console.log("found ridegroup: ", res[0]);
            result(null, res[0]);
            return;
        }

        // 결과가 없을 시 
        result({kind: "not_found"}, null);
    });
};

// 소모임 전체 조회 group 전체 조회
Ridegroup.getAll = result =>{
    sql.query('SELECT * FROM ridegroup', (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("ridegroup: ", res);
        result(null, res);
    });
};

// 소모임 수정 ridegroupId로 수정
Ridegroup.updateByID = (id, ridegroup, result)=>{
    sql.query('UPDATE ridegroup SET title = ?, info = ?, status = ?, start_time = ?, end_time =?, WHERE id = ?', 
    [ridegroup.title, ridegroup.info, ridegroup.status, ridegroup.start_time, ridegroup.end_time, id], (err, res)=>{
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

        console.log("update ridegroup: ", {id:id, ... ridegroup});
        result(null, {id:id, ...ridegroup});
    });
};

// 소모임 삭제, ridegroupId로 삭제
Ridegroup.remove = (id, result)=>{
    sql.query('DELETE FROM ridegroups WHERE id = ?',id, (err, res)=>{
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

        console.log("deleted ridegroup with id: ", id);
        result(null, res);
    });
};

// 소모임 전체삭제 ridegroup 전체 삭제
Ridegroup.removeAll = result =>{
    sql.query('DELETE FROM ridegroups',(err, res)=>{
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

        console.log('deleted ${res.affectedRows} ridegroups');
        result(null, res);
    });
};

module.exports = Ridegroup;


