app.controller("ctrlMain", function ($scope,$http, dataService) {

    console.log('ctrlMain_report');

    $scope.send_report = function(){
    	var name = $scope.UserName;
    	var email = $scope.UserMail;
    	var report = $scope.UserReport;

    	var url = '/report/send?'+
    	'name='+name+
    	'&email='+email+
    	'&report='+report; 
    	//console.log(name,email, report);
    	window.location = url;
    }
});