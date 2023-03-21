const sql = require("./db.js");

// 생성자 
const Spot = function(spot){
    this.place = spot.place;
};

// spot 튜플 추가 // DB에서 관리, 삭제 예정
Spot.create = (newSpot, result)=>{
    sql.query("INSERT INTO spots SET ?", newSpot, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("Created spot: ",{id:res.inseertId, ...newSpot});
        result(null, {id: res.inseertId, ...newSpot});
    });
};

// spot별 소모임 조회, spotId로 조회
Spot.findByID = (spotID, result)=>{
    sql.query('SELECT * FROM spots WHERE id = ?',spotID, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if(res.length){
            console.log("found spot: ", res[0]);
            result(null, res[0]);
            return;
        }

        // 결과가 없을 시 
        result({kind: "not_found"}, null);
    });
};

// 소모임 메인페이지, spot 전체 조회
Spot.getAll = result =>{
    sql.query('SELECT * FROM spots', (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("spot: ", res);
        result(null, res);
    });
};

// -----------------------------------DB에서 관리
// spotId로 수정
Spot.updateByID = (id, spot, result)=>{
    sql.query('UPDATE spots SET place = ?, WHERE id = ?', 
    [spot.place, id], (err, res)=>{
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

        console.log("update spot: ", {id:id, ... spot});
        result(null, {id:id, ...spot});
    });
};

// spotId로 삭제
Spot.remove = (id, result)=>{
    sql.query('DELETE FROM spots WHERE id = ?',id, (err, res)=>{
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

        console.log("deleted spot with id: ", id);
        result(null, res);
    });
};

// spot 전체 삭제
Spot.removeAll = result =>{
    sql.query('DELETE FROM spots',(err, res)=>{
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

        console.log('deleted ${res.affectedRows} spots');
        result(null, res);
    });
};

module.exports = Spot;


