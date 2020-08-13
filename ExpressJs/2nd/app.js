var express=require('express');

var app=express();

app.set('view engine','ejs');

app.get('/year',function(req,res){
    var age=req.param('age');

    var bornYear=2020-age;

    res.render('response',{year:bornYear});
})

app.listen(3000);