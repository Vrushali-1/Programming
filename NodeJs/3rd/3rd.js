var fs=require('fs');

var dirName=__dirname;
fs.readdir(dirName, function(err, items) {
    for (var i=0; i<items.length; i++) {
        var stats=fs.statSync(dirName+'/'+items[i]);
        if(stats.isFile()){
            console.log('FILE:'+items[i]);
        }else if(stats.isDirectory()){
            console.log('DIR:'+items[i]);
        }
    }
});