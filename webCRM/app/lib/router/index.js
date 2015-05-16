module.exports = function(app){
  /*
   *var sql1 = dao.selectSQL('demo','1','username ASC',10,['userid','username']);
   *var sql2 = dao.insertSQL('demo',{"userid":"3","username":"zing"});
   *var sql3 = dao.deleteSQL('demo',"1",'username ASC',6);
   *var sql4 = dao.updateSQL('demo',{"username":"zing","demo":"demotest"},'id = "123"');
   */
  app.get('/',function(req,res){
    dao.execute(dao.selectSQL('demo','1','id ASC',10,['id','name']),[],function(rows,fields){
      res.send(rows);
    });
  });
  app.get('/register',function(req,res){
    console.log(req.session);
    res.send('/register');
  });
  app.get('/login',function(req,res){
    res.send('/login');
  });
  app.get('/logout',function(req,res){
    res.send('/logout');
  });
}
