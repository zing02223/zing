//引入express框架
var express = require('express');
var app = express();

require('colors');

var path = require('path');

console.log(path.join(__dirname,'app','lib'));
console.log(process);

var server = app.listen('3000',function(){
  console.log(("server is start and port is "+server.address().port).green);
})
