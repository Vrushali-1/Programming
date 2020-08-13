var fs=require('fs');
name=process.argv[2]
data=process.argv[3];
fs.writeFile(name,data,function(err){
    console.log('The file was saved!');
    var text=fs.readFile(name,'utf8',function(err,data){
        console.log(data);
    })
});
