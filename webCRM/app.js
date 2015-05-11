//引入express框架
var express = require('express');
var app = express();

require('colors');

var path = require('path');
var dao = require('./app/dao');

/*
 *var sql1 = dao.selectSQL('wf_admin','1','username ASC',10,['userid','username']);
 *var sql2 = dao.insertSQL('wf_admin',{"userid":"3","username":"zing"});
 *var sql3 = dao.deleteSQL('wf_admin',"1",'username ASC',6);
 *var sql4 = dao.updateSQL('wf_admin',{"username":"zing","demo":"demotest"},'id = "123"');
 */

app.get('/',function(req,res){
  dao.execute(dao.selectSQL('wf_admin','1','username ASC',10,['userid','username']),[],function(rows,fields){
    res.send(rows);
  })
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
