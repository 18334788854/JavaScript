"use strict";

var mysql = require("mysql");

var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"xingjian123",
    database:"test"
});

connection.connect();
// console.log(connection);
connection.query('select * from mydb', function(err, rows, fields) {
    if (err) throw err;
    console.log(JSON.stringify(rows));
    // console.log(fields);
});
connection.end();

