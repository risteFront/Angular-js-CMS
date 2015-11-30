 var app = angular.module('myApp.controllers')
.controller('topLevelCtrl',function($scope){
	$scope.dataValue=" Hello Riste";

	$scope.revereseText=function(){
		$scope.dataValue= $scope.dataValue.split("").reverse().join("");
	}
		$scope.changeCase=function(){
			var array=[];
			angular.forEach($scope.dataValue.split(""), function(char ,index){
				array.push(index %2 == 1
					? char.toLowerCase() : char.toUpperCase());
			})
			$scope.dataValue=array.join("");
		}
});
app.controller('firstChildCtrl',function($scope){
	$scope.changeCase=function(){
		$scope.dataValue = $scope.dataValue.toUpperCase();
	}
	
});
app.controller("secondChildCtrl",function($scope){

 $scope.changeCase =function(){
 	$scope.dataValue = $scope.dataValue.toLowerCase();
 }
 $scope.revereseText=function(){
		$scope.dataValue= $scope.dataValue.split("").reverse().join("");
	}


	$scope.shiftFour= function(){
		var array = [];
		angular.forEach($scope.dataValue.split(""),function(char , index){
			array.push(index > 4 ? char.toUpperCase() : char);
		})
		$scope.dataValue = array.join("");
	}
})
.factory('Data',function (){
 	return { message :"This is a test"}

 })
.filter("reverse",function(Data){
	return function(text){
		return text.split("").reverse().join("") + Data.message;
	}
})
.directive('superhero',function(){
	return{
	restrict :'A',
	link: function(){
		alert("I'm a syper hero");
	}
	}

})
.directive('spiderman',function(){
	return{
	restrict :'A',
	link: function(){
		alert("I'm a spiderman");
	}
	}

})
 .controller('simpleCtrl',function($scope,Data){
		$scope.buttonEnabled=true;
		$scope.clickCounter= 0;
		$scope.handleClick= function(){
			$scope.clickCounter ++;
		}
		$scope.$watch('buttonEnabled',function(newValue){
			$('$jqui button').button({
				disabled: !newValue
			})
		})
		 $scope.products = [
                    { name: "Apples", category: "Fruit", price: 1.20, expiry: 10 },
                    { name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
                    { name: "Pears", category: "Fruit", price: 2.02, expiry: 6 },

                    { name: "Tuna", category: "Fish", price: 20.45, expiry: 3 },
                    { name: "Salmon", category: "Fish", price: 17.93, expiry: 2 },
                    { name: "Trout", category: "Fish", price: 12.93, expiry: 4 },

                    { name: "Beer", category: "Drinks", price: 2.99, expiry: 365 },
                    { name: "Wine", category: "Drinks", price: 8.99, expiry: 365 },
                    { name: "Whiskey", category: "Drinks", price: 45.99, expiry: 365 }
                ];
                $scope.getExpireDay=function(days){
                	var now = new Date();
                	return now.setDate(now.getDate() + days);
                }
                $scope.limitVal= "5";
                $scope.limitRange =[];

                for(var i = (0 - $scope.products.length); i <= $scope.products.length; i++){
                	$scope.limitRange.push(i.toString());
                }
                $scope.selectItems=function(items){
                	return items.category=="Fish" || items.name=="Beer";
                }
                $scope.incrementPrice=function(){
                	for( var i = 0; i < $scope.products.length; i++){
                		$scope.products[i].price++;
                	}
                }
                $scope.data = Data;
                $scope.mask1 = '(999)-999-999';
               


             
  })