const express = require("express");
const app = express();
const cors = require("cors");
const mysql2 = require('mysql2');

// port4000でサーバ立ち上げ
const server = app.listen(4000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

app.disable('x-powered-by');
app.use(cors()).use(express.json());

// mysqlに接続
const connection = mysql2.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'user',
    password: 'password',
    database: 'sample_database',
});

connection.connect((err) => {
    if (err) throw err;
    console.log('connected mysql');
});
