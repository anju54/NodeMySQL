const express = require('express');
var app = express();
const connection = require('./db');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// get api
app.get('/getData',(req,res) => {
    
    connection.query('select * from users.user_t ', function(err,result){
        if(err)
        console.log(err);
    else{
        console.log("inserted");
        res.send(result);
    }
    })
})


app.post('/deleteUser/:id',(req,res) => {

    // json data
    console.log(req.body);
    
    connection.query('delete from users.user_t where id = ? ' , [req.params.id] , function(err,result){
        if(err)
            console.log(err);
        else{
            console.log("inserted");
            res.send("record deleted successfully!!");
        }
    })
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
// http put method
app.put('/update/:id',(req,res) => { // path param

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
})

// router.put('/update/:id',(req,res) => {
//     var book_types = req.body.book_types;
//     var id = req.params.id;
//     connection.query( 'update test.library set book_types = ? where id = ? ' , [book_types,id], 
//     function(err,result){
//         if(err){
//             console.log(err);
//         }else
//             res.send("record updated");
//     })


app.listen(8086);