var http=require('http');
var moment=require('moment')

var myServer=http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain '});
    res.end(`${moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}`);
   
});

myServer.listen(3000,'192.168.0.108');
console.log('server stared');