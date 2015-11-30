'use strict';
var model={
	user:"riste"
	
}
// Declare app level module which depends on views, and components
var  myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myApp.controllers',
  'myApp.directives',
  'myApp.filters',
  'ui.mask'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}])





var now = new Date();
myApp.value('dateNow',now)
.service("days",function(dateNow){
	this.today = dateNow.getDay();
	this.tomorrow= dateNow.getDay() + 1;
})
