module.exports = function(app){
  var dao = app.dao;
  /*
   *var sql1 = dao.selectSQL('demo','1','username ASC',10,['userid','username']);
   *var sql2 = dao.insertSQL('demo',{"userid":"3","username":"zing"});
   *var sql3 = dao.deleteSQL('demo',"1",'username ASC',6);
   *var sql4 = dao.updateSQL('demo',{"username":"zing","demo":"demotest"},'id = "123"');
   */
  app.get('/index',function(req,res){
    dao.execute(dao.selectSQL('demo','1','id ASC',10,['id','name']),[],function(rows,fields){
      res.render('index',{title:"管理后台",content:rows});
    });
  });
  app.post('/login',function(req,res){
    console.log(req.body.pwd);
    res.send('dege');
  });
  app.get('/login',function(req,res){
    res.render('login',{title:"登录",content:'/login,shengli'});
  });
  app.get('/register',function(req,res){
    res.render('register',{title:"注册",content:'/login,shengli'});
  });
  app.get('/logout',function(req,res){
    res.render('login',{title:"登录",content:'/login,shengli'});
  });
  app.get('/manager',function(req,res){
    res.render('manager/list',{title:'账户管理'});
  });
  app.get('/:controller/:view',function(req,res,err){
    res.render(req.params.view,{});
  });
}
