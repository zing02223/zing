module.exports = function(app){
  var dao = app.dao;
  /*
   *var sql1 = dao.selectSQL('demo','1','username ASC',10,['userid','username']);
   *var sql2 = dao.insertSQL('demo',{"userid":"3","username":"zing"});
   *var sql3 = dao.deleteSQL('demo',"1",'username ASC',6);
   *var sql4 = dao.updateSQL('demo',{"username":"zing","demo":"demotest"},'id = "123"');
   */
  app.get('/',function(req,res){
    res.redirect('/login');
    /*
     *console.log(req.session);
     *res.send(req.cookies);
     *res.render('index',{});
     */
  });
  app.get('/:controller/:action',function(req,res){
    res.render(req.params.action,{});
  });
}
