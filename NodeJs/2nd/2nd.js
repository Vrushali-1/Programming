var fs=require('fs');

var filename=process.argv[2];

console.log(filename);


var file = fs.readFile(filename,'utf8',function(err,data){
    console.log(data);
});
