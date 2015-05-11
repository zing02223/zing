/*
 *返回类型
 *@arg      every type
 */
exports.returnType = function(arg){
  return Object.prototype.toString.call(arg).slice(8,-1);
}
