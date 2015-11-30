var fitlers =angular.module('myApp.filters',[])
.filter('dayName',function(){
	var dayNames=['Sunday','Monday','Thusday','Wednesday','Thursday','Friday','Sutarday'];
	return function(input){
		return angular.isNumber(input) ? dayNames[input] : input;
	};

})
.filter('labelCase',function(){
	return function( value, reverse){
		if(angular.isString(value)){
			var intermediate = reverse ? value.toUpperCase() : value.toLowerCase();
			return (reverse ? intermediate[0].toLowerCase() : intermediate[0].toUpperCase()) + intermediate.substr(1);
		}else{
			return value;
		}
	}
})
.filter('skip',function(){
	return function(data , count){
		if(angular.isArray(data) && angular.isNumber(count)){
			if(count > data.length && count < 1){
			  return data;
			}else{
				return data.slice(count);
			}
		}else{
			return data;
		}
	}
})
.filter('take',function($filter){
	return function(data,skipedData, takeCount){
		var dataFilter = $filter('skip')(data,skipedData);
		return $filter('limitTo')(dataFilter,takeCount);
	}
})