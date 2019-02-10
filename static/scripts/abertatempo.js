var app = angular.module('myApp', ['ngMaterial']);

app.controller("ctrlMain", function($scope, $http, $sce, $interval) {
    console.log('ctrlMain loaded');

var loadData = function() { //criar função loadData
  var url = '/api/get_json';
$http.get(url)
	.then(function(res){
		$scope.CURING = res.data;
    $scope.CURING = $scope.CURING.data;
    $scope.date = new Date();    
		console.log('CURING:' , $scope.CURING);

	});
var url = '/api/get_json';
$http.get(url)
  .then(function(res){
     $scope.setup = res.data;
     $scope.time = $scope.setup.last_update
     //console.log('update',$scope.time)
     $scope.setup = $scope.setup.data;
     $scope.date = new Date(); 
     google.charts.load('current', {'packages':['corechart']});
     google.charts.setOnLoadCallback($scope.drawChart);
  });
var url_1 = "/api/get_easylink";
 $http.get(url_1)
	.then(function(res){
	$scope.app_dir = res.data;
	console.log('index on!');
	});
}

var dataLoadInteral = undefined; //definir variável dataLoadInteral como undefined
var loadDataTimeSpan = 30000; //definir tempo de atualização (30 segundos)

var autoUpdate = function(){ //criar função autoUpdate
  $interval.cancel(dataLoadInteral);

    loadData(); //chamar função loadData

  dataLoadInteral = $interval(autoUpdate, loadDataTimeSpan);
}

autoUpdate(); //chamar função autoUpdate

$scope.drawChart = function() {
  
  var data = new google.visualization.DataTable();
  //var formatter = new google.visualization.DateFormat({pattern: 'HH:MM:SS'});
  data.addColumn('string', 'MAQUINA' , { role: 'annotation' });
  data.addColumn('number', 'TIME');
  data.addColumn('number', 'TYRES');
  console.log("Grafico ooook!!");
  
  
  for (var i = 0; i < $scope.setup.length; i++) {
    data.addRow([$scope.setup[i]['MCH_NUMBER'], $scope.setup[i]['STP_TOTAL_TIME'], $scope.setup[i]['PERDA_EM_PNEUS']]);
  } ;

 
  var options_stacked = {
          title :'10 BOTTOM OPEN NOT JUSTIFIED CURING', 
          titleTextStyle: {color: 'white', fontSize: 20, opacity: 10,},
          chartArea:{width:'80%'},
          colors: ['#00BFFF','#ADD8E6'],
          height: 400,
          width: '100%',
          legend: {textStyle: {color: 'white'},position: 'top', maxLines: 30},
          hAxis: {
            textStyle: {
            color: 'white'
            },
            title: 'Machines', titleTextStyle: {color: 'white'},
            minValue:0},
          vAxis: {
            textStyle: {
            color: 'white'
            },  
            title: 'Tyres', titleTextStyle: {color: 'white'},
          },
          animation:
           {
               "startup": true,
               duration: 2000,
               easing: 'out'
           },
           backgroundColor: '#222b30',

        };    
   // Display the chart inside the <div> element with id="piechart" 
    

    var chart = new google.visualization.ColumnChart(document.getElementById('barchart'));  
    chart.draw(data, options_stacked);
    google.visualization.events.addListener(barchart, 'select', function() {
    table.setSelection(orgchart.getSelection());

  });
}



});