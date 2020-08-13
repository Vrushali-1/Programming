var fs=require('fs');

var text=[];

fs.readFile('input.txt','utf8',function(err,data){

     console.log(data);
     var target=process.argv[2];
     var count=0;
     text=data.split(" ");
     console.log(text);
     for(var i=0;i<text.length;i++){
         if(text[i]===target){
            count++;
         }
     }
     console.log('Data read!');
     console.log('Occurrence of '+target+' : '+count);
});




