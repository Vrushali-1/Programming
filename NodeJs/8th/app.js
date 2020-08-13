var fs=require('fs');

var text=[];

fs.readFile('input.txt','utf8',function(err,data){

     console.log(data);
     text=data.split(" ");
     var sum=0;
     console.log(text);
     for(var i=0;i<text.length;i++){
         sum += Number(text[i]);
     }
     console.log('Data read!');
     console.log(`Sum is : `+sum);
});


