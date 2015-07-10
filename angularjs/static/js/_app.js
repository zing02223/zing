console.log(1);
define(['angular'],function(angular){
  return angular.module('myapp',[],function($interpolateProvider){
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
  })
});
