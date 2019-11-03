const express = require('express');
var app = express();
const bodyParser = require("body-parser");
var mysql = require('mysql');
app.use(bodyParser.json());

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'NAVGURUKUL1',
    database: 'navgurukul_informations'
});
connection.connect(function(err) {
    if (err) throw err
    console.log('You are now connected...')
})

//rest api to get all results
app.get('/api', function (req, res) {
    connection.query('select * from data', function (error, results) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });

app.post('/api',(req,res) => {
    var postData  = req.body;
    connection.query('INSERT INTO data SET ?', postData, function (error) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
})

//rest api to update record into mysql database
app.put('/api', function (req, res) {
    connection.query('UPDATE `data` SET `name`=?, `Adress`=?,`email`=?,`age`=? where `id`=?', [req.body.name,req.body.Adress, req.body.email, req.body.age, req.body.id], function (error, results) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });

//rest api to delete record from mysql database
app.delete('/api', function (req, res) {
    console.log(req.body);
    connection.query('DELETE FROM `data` WHERE `id`=2', [req.body.id], function (error, results) {
       if (error) throw error;
       res.end('Record has been deleted!');
     });
 });
app.listen(5000,function(){
    console.log("Started on PORT 5000");
});
