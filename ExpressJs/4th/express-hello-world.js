port=process.env.PORT || 3000;
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

app.listen(port);
console.log('listening to : '+port );
