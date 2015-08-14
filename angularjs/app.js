//系统高亮提示
require('colors');

//设置开放端口
var PORT = process.env.PORT || 1337;

//引入path依赖包
var path = require("path");

//引入swig依赖包
var swig = require('swig');
swig.setDefaults({
  cache : false,
  locals : {
    title : "Don\'t found angular\'s controller"
  }
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
  res.render('index',{title:'express, swig, requirejs and angularjs \'s demo',name:'demo'});
});

app.get('/hello',function(req,res){
  res.render('hello',{title:'Unit 1 : angular for hello',name:'hello'});
});

app.get('/inputModel',function(req,res){
  res.render('inputModel',{title:'Unit 2 : angular for input modal',name:'inputModel'});
});

app.get('/location',function(req,res){
  res.render('location',{title:'Unit 3 : angular for location',name:'location'});
});

app.get('/shop',function(req,res){
  res.render('shop',{title:'Unit 4 : angular for shop',name:'shop'});
});

app.get('/computeNeeded',function(req,res){
  res.render('computeNeeded',{title:'Unit 5 : angular for computeNeeded',name:'computeNeeded'});
});

app.get('/watchNeeded',function(req,res){
  res.render('watchNeeded',{title:'Unit 6 : angular for watchNeeded',name:'watchNeeded'});
});

app.get('/change2zero',function(req,res){
  res.render('change2zero',{title:'demo : if change input\'s value is null.yes it\'s can',name:'change2zero'});
});

app.get('/form',function(req,res){
  res.render('form',{title:'Unit7  : angular for ng-form',name:'form'});
});

app.get('/items',function(req,res){
  res.render('items',{title:'Unit8  : angular for ng-repeat',name:'items'});
});

app.get('/discount',function(req,res){
  res.render('discount',{title:'Unit8  : angular for ng-repeat',name:'discount'});
});

//设置开启端口
var server  = app.listen(PORT,function(){
  console.log(("server is start and PORT :"+PORT).green);
});
