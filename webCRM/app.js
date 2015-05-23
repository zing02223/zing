//引入终端命令行高亮
require('colors');
//引入express框架
var express = require('express');
//引入session模块
var session = require('express-session');
var app = express();

//引入path模块
var path = require('path');

//引入post请求解析参数
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended : false
}));

//引入md5加密的中间件
var crypto = require('crypto');
var md5 = crypto.createHash('md5');
console.log(md5.update('zing').digest('base64'));

//引入swig模版引擎
var swig = require("swig");

//设置swig模版引擎初始化 cache不缓存，本地存储对象数据
swig.setDefaults({
  cache : false,
  locals : {
    title : 'title-test',
    global : {
      siteName : "CRM",
      author : "zing",
      email : "zing02223@hotmail.com"
    }
  }
});

//指定引擎渲染的模版
app.engine('html',swig.renderFile);
app.set('view engine','html');
//设置模版资源路径
app.set('views',path.join(__dirname,"app/views"));

//设置静态资源资源路径
app.use(express.static(path.join(__dirname,"app/statics")));
app.use(express.static(path.join(__dirname,"app/views")));
app.use(express.static(path.join(__dirname,"app/statics/lib/admin-lte")));

function error(status,msg){
  var err = new Error(msg);
  err.status = status;
  return err;
}

//初始化session设置
app.use(session({
  resave : false,
  saveUninitialized : false,
  secret : 'adf234DSAF#2DFW$QDS@#',
  cookie : {
             maxAge : 1800000
           }
}));

//引入数据操作模块
app.dao = require('./app/dao');
//引入路由规则文件
var routes = require('./app/lib/router');
routes(app);
/*
 *app.get('/api',function(req,res,next){
 *  var key = req.query['api-key'];
 *  if(!key){
 *    return next(error(400,"服务器无法理解此请求。"))
 *  }
 *  if(!~apikeys.indexOf(key)){
 *    return next(error(401,"invalid api key"));
 *  }
 *  req.key = key;
 *  next();
 *});
 */

app.use(function(req,res,next){
  res.status(404).render('./err/404',{title:404,content:"The page isn\'t found!"});
});

app.use(function(err,req,res,next){
  res.status(err.status || 500);
  console.log(err);
  res.render('./err/500',{title:"Error",content:"服务器内部错误，请联系管理员"})
});

var server = app.listen('3000',function(){
  console.log(("server is start and port is "+server.address().port).green);
})
