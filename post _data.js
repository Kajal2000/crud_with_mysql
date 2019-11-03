const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const mysql = mysql()
app.use(bodyParser.json());

var connection = mysql.createConnection({host: 'localhost',
user: 'root',
password: 'NAVGURUKUL1',
database: 'navgurukul_informations'
});

connection.connect();
app.post('/api',(req,res) => {
   const con = {
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
    adress : req.body.adress
   };
    var sql = "INSERT INTO con (id,name,age,email,adress) VALUES (?,?,?,?)";
    connection.query(sql,values, function(err, result)  {
        if(err){
            res.send(400).send("There is some error!!!!!!!");
        }else{
            res.send('Data is posted');
        }
    })
})
    app.listen(8006,function(){
    console.log("Started on PORT 8006");
});