const express = require("express");
const app = express();

// port 4000でサーバ立ち上げ
const server = app.listen(4000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

// Hello World!が返ってくるgetのapi
app.get("/api/hello", (req, res, next) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hello World!");
});