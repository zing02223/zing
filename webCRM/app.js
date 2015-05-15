require('colors');
//引入express框架
var express = require('express');
var session = require('express-session');
var app = express();

var path = require('path');

var swig = require("swig");

swig.setDefaults({
  cache : false,
  locals : {
    siteName : "CRM"
  }
});

app.engine('html',swig.renderFile);
app.set('view engine','html');
app.set('views',path.join(__dirname,"app/views"));

var dao = require('./app/dao');

app.use(express.static(path.join(__dirname,"app/statics")));
app.use(express.static(path.join(__dirname,"app/views")));

/*
 *var sql1 = dao.selectSQL('demo','1','username ASC',10,['userid','username']);
 *var sql2 = dao.insertSQL('demo',{"userid":"3","username":"zing"});
 *var sql3 = dao.deleteSQL('demo',"1",'username ASC',6);
 *var sql4 = dao.updateSQL('demo',{"username":"zing","demo":"demotest"},'id = "123"');
 */

app.use(session({
  resave : false,
  saveUninitialized : false,
  secret : 'some secret here'
}));

/*
 *app.use(function(req,res,next){
 *  var msgs = req.session.message || [];
 *  res.locals.messages  = msgs;
 *});
 */

app.use(function(req,res,next){
  res.status(404).render('./err/404',{title:404,content:"The page isn\'t found!"});
});

app.get('/',function(req,res){
  console.log(req.session);
  dao.execute(dao.selectSQL('demo','1','id ASC',10,['id','name']),[],function(rows,fields){
    res.send(rows);
  })
});
app.get('/login',function(req,res){
  res.render('login',{test:"test"});
})

var server = app.listen('3000',function(){
  console.log(("server is start and port is "+server.address().port).green);
})
