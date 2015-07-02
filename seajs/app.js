var port = process.env.PORT || 1337;
//加载express框架
var express = require("express");
var app = express();

//加载body-parser包
//var bodyParser = require('body-parser');

//加载path包
var path = require('path');

//加载swig引擎
var swig = require("swig");
//设置swig配置基本属性
swig.setDefaults({
  cache : false,
  locals : {
    baseConfig : {
      libPath : './lib/'
    },
    title : "没有设置网页标题"
  }
});


//设置swig解析扩展名为html的模版引擎
app.engine('html',swig.renderFile);
app.set("view engine",".html");
app.set("views",path.join(__dirname,"./views/pages"));

//设置statics静态文件
app.use(express.static(path.join(__dirname,"./statics")));
app.get("/",function(req,res){
  res.render('index',{
    title : '首页'
  });
});

app.get('/list',function(req,res){
  res.render('list',{});
});

var server = app.listen(port,function(){
  console.log("server is started on port : "+port);
});
