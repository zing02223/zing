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
      $scope.funding.needed = $scope.funding.startingEstimate * 10 || 0;
    }
    $scope.$watch('funding.startingEstimate',$scope.computeNeeded);
  }).controller('change2zeroCtrol',function($scope){
    $scope.inputValue = "200";
    $scope.change2zero = function(){
      console.log(this);
    }
  }).controller('formCtrol',function($scope){
    $scope.startingEstimate = "0";
    $scope.computeNeeded = function(){
      $scope.needed = $scope.startingEstimate * 10 || 0;
    }
    $scope.requestFunding = function(){
      console.log("this is form submit");
    }
    $scope.reset = function(){
      $scope.startingEstimate = 0;
    }
    $scope.$watch('startingEstimate',$scope.computeNeeded)
  }).controller('itemsCtrol',function($scope){
    $scope.items = [
      {"id":0,"name":"john","age":50},
      {"id":1,"name":"tommy","age":31},
      {"id":2,"name":"sam","age":21}
    ];
    $scope.addItem = function(){
      $scope.items.push({"id":3,"name":"lily","age":18});
      $scope.items.splice(1,0,{"id":4,"name":"lucy","age":18});
    }
  }).controller('discountCtrol',function($scope){
    $scope.bill = {};
    $scope.items = [
      {"id":0,"title":"product1","quantity":0,"price":20},
      {"id":1,"title":"product2","quantity":0,"price":50},
      {"id":2,"title":"product3","quantity":0,"price":10}
    ];
    $scope.calculateDiscount = function(){
      var len = $scope.items.length,total = 0;
      for(len > 0;len--;){
        total += $scope.items[len].quantity * $scope.items[len].price;
      }
      $scope.bill.totalCart = total;
      $scope.bill.discount = total > 100 ? 10 : 0;
      $scope.bill.subtotal = total - $scope.bill.discount;
    }
    $scope.$watch('items',$scope.calculateDiscount,true);
  });
});
