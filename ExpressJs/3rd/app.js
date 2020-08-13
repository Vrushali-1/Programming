var express=require('express');
var app=express();
var port=process.argv[2];
app.set('view engine','ejs');

app.get('/home',function(req,res){
    res.render('response');
});

app.listen(port);
console.log('Listening to port : '+port);