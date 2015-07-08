require.config({
  paths : {
    "angular" : "/lib/angularjs/angular.min"
  },
  shim : {
    "angular" : {
      exports : "angular"
    }
  }
});
define(['angular'],function(angular){
  angular.module('myapp',[],function($interpolateProvider){
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
  }).controller('testCtrol',function($scope){
    $scope.items = [
      {title:"",quantity:8,price:4}
    ];
  });
});
