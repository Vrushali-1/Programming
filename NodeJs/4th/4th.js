var fs=require('fs');
data=process.argv[2];
fs.writeFile('writeMe.txt',data,function(err){
    console.log('The file was saved!');
});
