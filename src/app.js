const express = require("express");
const app = express();

// port 4000でサーバ立ち上げ
const server = app.listen(4000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

// Hello World!が返ってくるgetのapi
// app.get("/api/hello", (req, res, next) => {
//     res.send("Hello World!");
// });

// jsonが返ってくるapi
app.get("/api/json", (req, res, next) => {
    res.json({
        db1: "mysql",
        db2: "postgres",
        db3: "oracle"
    })
});