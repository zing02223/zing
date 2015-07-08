//系统高亮提示
require('colors');

//设置开放端口
var PORT = process.env.PORT || 1337;

//引入path依赖包
var path = require("path");

//引入swig依赖包
var swig = require('swig');
swig.setDefaults({
  cache : false
});

//引入express依赖包
var express = require('express');
var app = express();

//设置静态资源路径
app.use(express.static(path.join(__dirname,"static")));

//设置模版引擎解析的文件
app.engine('html',swig.renderFile);
app.set('view engine','html');

//设置模版文件路径
app.set('views',path.join(__dirname,"app/views"));

app.get('/',function(req,res){
  res.render('index',{title:'swig'});
});

//设置开启端口
var server  = app.listen(PORT,function(){
  console.log(("server is start and PORT :"+PORT).green);
});
