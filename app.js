//express js 

var exp = require('express');
var chalk = reuire('chalk');
var app = exp();// initiating the web server

app.get('/',function(req,res){
    res.send("hello express");//send means write() and end()
});

app.get('/home',function(req,res){
    res.send("this is home path");//send means write() and end()
});

app.listen(3000,function(){
    console.log('server is running on port 3000');
})