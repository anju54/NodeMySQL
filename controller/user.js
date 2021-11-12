const express = require('express');
const app = express();
const connection = require('../util/db');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var router = express.Router();

exports.addData = (req,res) => {
    
    console.log(req.body);
    var postData = {
        "name" : req.body.name,
        "age" : req.body.age,
        "mobile_number" : req.body.mobile_number
    };
    
    connection.query('insert into users.user_t set ? ' , postData , function(err,result){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log("inserted");
            res.send(result);
        }
    })
}

// get api
exports.getData = (req,res) => {
    
    connection.query('select * from users.user_t ', function(err,result){
        if(err)
        console.log(err);
    else{
        console.log("inserted");
        res.send(result);
    }
    })
}

exports.getUserByUserId = (req,res) => {

    connection.query('select * from users.user_t where id = ? ',[req.params.id] ,function(err,result){
        if(err)
        console.log(err);
    else{
        console.log("inserted");
        res.send(result[0]);
    }
    })
}

// update api
exports.update = (req,res) => {
    var id = req.params.id;
    connection.query('update users.user_t set mobile_number = ? where id = ? ', [req.body.mobile_number,id] , function(err,result){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log("upadted");
            res.send("data got updated!");
        }
    })
}

exports.deleteData = (req,res) => {

    connection.query('delete from users.user_t where id = ? ' , [req.params.id] , function(err,result){
        if(err)
            console.log(err);
        else{
            console.log("inserted");
            res.send("record deleted successfully!!");
        }
    })
}

