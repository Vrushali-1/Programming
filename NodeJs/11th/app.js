var fs=require('fs');

var dirName=__dirname;
fs.readdir(dirName, function(err, items) {
    for (var i=0; i<items.length; i++) {
        var stats=fs.statSync(dirName+'/'+items[i]);
        if(stats.isFile()){
           var write=fs.readFile(items[i],'utf8',function(err,data){
               console.log(`FILE: ${i} Contents: ${data}`);
           })
        }
    }
});

