module.exports = function(app){
  var dao = app.dao;
  app.get('/register',function(req,res){
    res.render('register',{title:"注册",content:'/login,shengli'});
  });
  app.get('/login',function(req,res){
    res.render('login',{title:"登录",content:'/login,shengli'});
  });
  app.get('/logout',function(req,res){
    res.redirect('login');
  });
}
