module.exports = function(req,res,next){
  if(req.body && !req.session.user_uuid){
    res.redirect('/login');
  } else {
    next();
  }
}
