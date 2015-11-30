var controllers = angular.module('myApp.controllers',[])
.controller('dayCtrl',function($scope,days){
	var Days=['Sunday','Monday','Thusday','Wednesday','Thursday','Friday','Sutarday'];
	$scope.Day=days.today;
	$scope.tomorrow = days.tomorrow;	

})
.controller('tomorrowCtrl',function($scope){
	var Days=['Sunday','Monday','Thusday','Wednesday','Thursday','Friday','Sutarday'];
	$scope.Day =Days[new Date().getDay()];
	$scope.tomorrow=Days[(new Date().getDay()+1)%7];
})
.controller('defaultCtrl',function($scope){
	$scope.$on('ping',function(){
		$scope.riste="riste";
	})
	$scope.data={};
	$scope.buttonColor = ['Red','Green','Blue'];
	$scope.settings={
		Rows:"Red",
		Columns:"Green"
	}
	$scope.todo=[
	{id:100 ,place:"Store", action:'get croceries',complete:false},
	{id:200, place:"Store", action:'Call numebr',complete:true},
	{id:300, place:"Home", action:'Buy Flowers',complete:false},
	{id:400, place:"Store", action:'Call family',complete:true},
	{id:500, place:"Home", action:'Buy running shoes',complete:false}
	];
	$scope.data={
		rowColor:"Blue",
		colColor:"Green"
	}
	$scope.handleEvent=function(e){
		console.log("Event type" + e.type);
		$scope.data.columnColor = e.type =="mouseover" ? "Green" : "Blue";
	}

	$scope.viewFile = function(){
	  return $scope.showlist ?  "view1/tablelist.html" : "view1/tableprop.html" ;
	}
	$scope.reportChange = function(){
		console.log('Displayed content :'+ $scope.viewFile());
	}
	$scope.message="tap me!";
	$scope.dataValue= false;
	$scope.addItem=function(newValue){
		if(angular.isDefined(newValue) && angular.isDefined(newValue.action)
			&& angular.isDefined(newValue.complete)){
		$scope.todo.push({
			action: newValue.actions + "(" + newValue.location +")",
			complete: false
				});
			}
		}
	$scope.addUser=function(userValue){

		if(myForm.$valid){	
		$scope.poraka= userValue.name
		+ "(" + userValue.email +")" + "(" + userValue.agreed + ")"; 
			console.log($scope.poraka)
		}else{
			$scope.showValidation =true;
		}

	}
	$scope.poraka ="Ready";
	$scope.getValidation=function(error){
		 if (angular.isDefined(error)){
			if (error.email){
				return "Please enter a valid e-mail";
			}else if(error.required){
				return "Please enter a value";
			}
		}
	}
	$scope.requireValue=true;
	$scope.matchPattern= new RegExp("^[a-z]");
	$scope.countryes=['Macedonia','Serbia','London']
	$scope.country ="Macedonia"

	$scope.getCountry=function(country){
		switch(country){
			case "Macedonia":
			return "MK";
			case  "Serbia":
			return "SR";
		}
	}

})
.directive('tab',function(){
	return function(scope, elem , attrs){
		elem.on("touchstart","touched",function(){
			scope.$apply(attrs["tap"]);
		});
	}
})
.controller('riste', ['$scope', function($scope){

}])
