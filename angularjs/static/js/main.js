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
  }).controller('demoCtrol',function($scope){
    $scope.text = "angular demo";
  }).controller('helloCtrol',function($scope){
    $scope.greeting = {text : "hello"};
  }).controller('inputModelCtrol',function($scope,$location){
    console.log($location.url())
  }).controller('shopCtrol',function($scope){
    $scope.items = [
      {title:'红米2A,关于总数，有bug',quantity:1,price:499},
      {title:'红米手机2',quantity:1,price:599},
      {title:'小米手机4',quantity:1,price:1499},
      {title:'小米Note',quantity:1,price:1999},
      {title:'小米平板',quantity:1,price:1299},
      {title:'小米路由器',quantity:1,price:699}
    ];
    (function(){
      var i,len = $scope.items.length;
      $scope.all = 0;
      for(len;len--;){
        i = $scope.items[len].quantity * $scope.items[len].price;
        $scope.all+=i;
      }
    })();
    $scope.needed = function(){
      $scope.all += this.item.quantity * this.item.price;
    }
    $scope.remove = function(index){
      $scope.items.splice(index,1);
    }
  }).controller('computeNeededCtrol',function($scope){
    $scope.funding = {stratingEstimate: 0};
    $scope.computeNeeded = function(index){
      $scope.funding.needed = $scope.funding.startingEstimate * 10;
    }
  }).controller('watchNeededCtrol',function($scope){
    $scope.funding = {stratingEstimate: 0};
    $scope.computeNeeded = function(index){
      $scope.funding.needed = $scope.funding.startingEstimate * 10;
    }
    $scope.$watch('funding.startingEstimate',$scope.computeNeeded);
  });
});
