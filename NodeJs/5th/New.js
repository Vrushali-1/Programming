var fs=require('fs');
var name=process.argv[2].toLowerCase();
var wordToFind = process.argv[3];

fs.readFile(name,'utf8',function(err,data){
    if (err) throw err;
    var word1=data.toLowerCase().split(' ');
    console.log(word1);
    count=0;
    var count1=word1.forEach(function(word1){
        if(word1===wordToFind)
          return count++;
    });


    console.log('The word '+wordToFind+' appears '+count);
})