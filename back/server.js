const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.json({message: "Hello World!"});
});

require("./app/routes/customer.route.js")(app);
require("./app/routes/user.route.js")(app);
require("./app/routes/group.route.js")(app);
require("./app/routes/comment.route.js")(app);

// 포트넘버 설정
app.listen(8080, ()=>{
    console.log("Server is running on port 8080.");
});