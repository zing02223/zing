//引入express框架
var express = require('express');
var app = express();

require('colors');

var path = require('path');
var dao = require('./app/dao');

app.use(express.static(path.join(__dirname,"app/statics")));
app.use(express.static(path.join(__dirname,"app/views")));

/*
 *var sql1 = dao.selectSQL('demo','1','username ASC',10,['userid','username']);
 *var sql2 = dao.insertSQL('demo',{"userid":"3","username":"zing"});
 *var sql3 = dao.deleteSQL('demo',"1",'username ASC',6);
 *var sql4 = dao.updateSQL('demo',{"username":"zing","demo":"demotest"},'id = "123"');
 */
app.use(function(req,res){
  res.status(404);
  res.send({error: "Don't find this page"});
});

app.get('/',function(req,res){
  dao.execute(dao.selectSQL('demo','1','id ASC',10,['id','name']),[],function(rows,fields){
    res.json(rows);
  })
});
app.get('/abc',function(req,res){
  res.send('this is action');
})
/*
 *dao.execute(sql1,[],function(rows,fields){
 *  console.log(rows);
 *})
 */

//console.log(path.join(__dirname,'app','lib'));

var server = app.listen('3000',function(){
  console.log(("server is start and port is "+server.address().port).green);
})
