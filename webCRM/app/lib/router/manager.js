module.exports = function(app){
  var dao = app.dao;
  app.get('/index',function(req,res){
    dao.execute(dao.selectSQL('demo','1','id ASC',10,['id','name']),[],function(rows,fields){
      res.render('index',{title:"管理后台",content:rows});
    });
  });
}
