//express js 

var exp = require('express');
var chalk = require('chalk');
var app = exp();// initiating the web server

app.get('/',function(req,res){
    res.send("hello express");//send means write() and end()
});

app.get('/home',function(req,res){
    res.send("this is home path");//send means write() and end()
});

var port = process.env.PORT || process.env.npm_package_config_myport;
app.listen(port,function(){
    console.log('Server is running on port '+port);
})
