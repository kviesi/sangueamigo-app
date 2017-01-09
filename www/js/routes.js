angular.module('starter')
.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('hemocentro_list');

	$stateProvider

	.state('hemocentro_list', {
      url : '/hemocentro_list',
      templateUrl : 'templates/hemocentro/list.html',
      controller: 'HemocentroListController'
	})
	.state('hemocentro_view', {
      url : '/hemocentro_view',
      templateUrl : 'templates/hemocentro/view.html',
      controller: 'HemocentroViewController'
	})

})