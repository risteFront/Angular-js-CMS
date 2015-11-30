var derectives = angular.module('myApp.directives',[])
.directive("highlight",function($filter){
	var dayFilter = $filter('dayName')
	return function(scope ,element , attrs){
		if(dayFilter(scope.Day) ==attrs["highlight"]){
			element.css("color","red");
		}
	}
})
.directive('unorderedList',function(){
	return function(scope , element , attrs){
		var data = scope[attrs['unorderedList']];
		if(angular.isArray(data)){
			var ulist = angular.element("<ul>");
			var propertyExpression = attrs["lsitProperty"]
			element.append(ulist);
			for( var i = 0; i <data.length; i++){
				(function(){
					var index = i;
					var itemli = angular.element("<li>");
					ulist.append(itemli);
					 var watcherFn = function(watchScope){
					 	 return watchScope.$eval(propertyExpression ,data[index]);
					 }
					 scope.$watch(watcherFn , function(newvalue ,oldvalue){
					 itemli.text(newvalue);
					 })

				}())
			}
		}
	}
})