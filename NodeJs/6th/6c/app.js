var operation=require('./operations');
var moment=require('moment');

console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
console.log(operation.sum.sum(8,2));
console.log(operation.subtract.subtract(8,2));
console.log(operation.multiplication.multiplication(8,2));
console.log(operation.divide.divide(8,2));