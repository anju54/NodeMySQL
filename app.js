const express = require('express');
var app = express();
const connection = require('./db');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// get api
app.get('/get',(req,res) => {
    res.send("hello there");
})

// http post method // post api
app.post('/addUser',(req,res) => {

    // json data
    console.log(req.body);
    var postData = {
        "name" : req.body.name,
        "age" : req.body.age,
        "mobile_number" : req.body.mobile_number
    };
    
    connection.query('insert into users.user set ? ' , postData , function(err,result){
        if(err)
            console.log(err);
        else{
            console.log("inserted");
            res.send("data added");
        }
    })


})



app.listen(8086);