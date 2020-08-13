
var express=require('express');


var app=express();

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render('response');
})

app.get('/time',function(req,res){
    var time=new Date;
    res.render('response2',{time:time.toISOString()});
})

app.listen(3000);
console.log('listening to :3000' );
