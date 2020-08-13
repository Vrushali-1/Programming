var fs = require('fs')
var concat = require('concat-stream')

var read1=fs.createReadStream('input.txt');

var read2=fs.createReadStream('input2.txt');

var write=fs.createWriteStream('writeMe.txt');

var combined= new concat([read1, read2]);

combined.pipe(write);
