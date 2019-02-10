app.controller("ctrlMain", function ($scope,$http, dataService) {

	$scope.def_cal = function(){
		periodo = $scope.SelectedPeriod;
		defeito = $scope.SelectedDeffect;
		console.log("Periodo:",periodo,"    Defeito:",defeito);
		window.location="/ready?periodo="+periodo+"&defeito="+defeito;
	}
    console.log('ctrlMain is alive');
    $scope.list = ['undefined'];
});