angular.module('starter')
.controller('HemocentroListController', function($scope) {

	$scope.hemocentros = [];
	 $scope.hemocentros.push({
		name : 'Santa Casa Taquaritinga',
		address: 'Rua xxxxxxxx',
		number: 45,
		city: 'Taquaritinga',
		state: 'SP'
	})

})
.controller('HemocentroViewController', function($scope) {

	$scope.notes = [];
	$scope.notes.push({
		date: '09/01/2017',
		short_description: 'Agradecimento',
		text: 'ISFIAHfoisahifhsaiofh oishfio hsaiofh sioaf hsiao hsihis'
	});

	$scope.campaigns = [];
	$scope.campaigns.push({
		date: '12/01/2017',
		initTime: '8:00',
		endTime: '17:00',
		text: 'IFisajfiajfio jsiaofj iosajf iosaj fiosaj iosaji osajio so is i',
		observations: 'isfiafjisafjisajfisafisafsa'
	});


})