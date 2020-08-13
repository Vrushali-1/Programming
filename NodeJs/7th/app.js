var strftime=require('strftime');
var http=require('http');

var myServer=http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end(`Local Hour Of The Server : ${strftime('%H',new Date())}`);
})

myServer.listen(3000,'192.168.0.108');
console.log('server stared');
