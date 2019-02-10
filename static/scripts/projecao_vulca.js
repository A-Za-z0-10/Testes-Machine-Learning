var app = angular.module('myApp', ['ngMaterial']);

app.controller("ctrlMain", function($scope, $http, $sce, $interval) { //adicionar $interval
    console.log('ctrlMain loaded');

var slideIndex = 1;
showSlides(slideIndex);

window.plusSlides = function(n) {
  showSlides(slideIndex += n);
}

window.currentSlide = function(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}


var loadData = function() { //criar função loadData
    $http.get('data/vulca_proj.json')
    	.then(function(res){
    		$scope.dados = res.data;
            $scope.date = new Date();    
            console.log('vulca:' , $scope.dados);
            google.charts.load('current', {'packages':['gauge']});
            google.charts.setOnLoadCallback($scope.drawChart);
	});
        $http.get('data/easylink.json')
    .then(function(res){
    $scope.app_dir = res.data;
    console.log('index on!');
    });
}

var dataLoadInteral = undefined; //definir variável dataLoadInteral como undefined
var loadDataTimeSpan = 30000; //definir tempo de atualização (30 segundos)

var quantUpdate = 0;

var autoUpdate = function(){ //criar função autoUpdate
    $interval.cancel(dataLoadInteral);

    loadData(); //chamar função loadData

    if (quantUpdate > 0){
        //plusSlides(1);    
    }

    quantUpdate = quantUpdate + 1;

    dataLoadInteral = $interval(autoUpdate, loadDataTimeSpan);
}

autoUpdate(); //chamar função autoUpdate

    $scope.drawChart = function(){
        var proj1 = $scope.dados[100].percent;
        var viewGeral = google.visualization.arrayToDataTable([['Label', 'Value'],['100',proj1]])
        var geral_config = {min: 0, redFrom: 0, redTo: 70, yellowFrom:70, yellowTo: 90, greenFrom: 90, greenTo: 100, minorTicks: 10}  
        var vGeral = new google.visualization.Gauge(document.getElementById('l100'));
        vGeral.draw(viewGeral,geral_config);
        function resizeHandler () {
            vGeral.draw(viewGeral,geral_config);
        }
        if (window.addEventListener) {
            window.addEventListener('resize', resizeHandler, false);
        }
        else if (window.attachEvent) {
            window.attachEvent('onresize', resizeHandler);
        }
        var proj2 = $scope.dados[200].percent;
        var viewGeral = google.visualization.arrayToDataTable([['Label', 'Value'],['200',proj2]])
        var geral_config = {min: 0, redFrom: 0, redTo: 70, yellowFrom:70, yellowTo: 90, greenFrom: 90, greenTo: 100, minorTicks: 10}  
        var vGeral = new google.visualization.Gauge(document.getElementById('l200'));
        vGeral.draw(viewGeral,geral_config);
        function resizeHandler () {
            vGeral.draw(viewGeral,geral_config);
        }
        if (window.addEventListener) {
            window.addEventListener('resize', resizeHandler, false);
        }
        else if (window.attachEvent) {
            window.attachEvent('onresize', resizeHandler);
        }
        var proj3 = $scope.dados[300].percent;
        var viewGeral = google.visualization.arrayToDataTable([['Label', 'Value'],['300',proj3]])
        var geral_config = {min: 0, redFrom: 0, redTo: 70, yellowFrom:70, yellowTo: 90, greenFrom: 90, greenTo: 100, minorTicks: 10}  
        var vGeral = new google.visualization.Gauge(document.getElementById('l300'));
        vGeral.draw(viewGeral,geral_config);
        function resizeHandler () {
            vGeral.draw(viewGeral,geral_config);
        }
        if (window.addEventListener) {
            window.addEventListener('resize', resizeHandler, false);
        }
        else if (window.attachEvent) {
            window.attachEvent('onresize', resizeHandler);
        }
        var proj4 = $scope.dados[400].percent;
        var viewGeral = google.visualization.arrayToDataTable([['Label', 'Value'],['400',proj4]])
        var geral_config = {min: 0, redFrom: 0, redTo: 70, yellowFrom:70, yellowTo: 90, greenFrom: 90, greenTo: 100, minorTicks: 10}  
        var vGeral = new google.visualization.Gauge(document.getElementById('l400'));
        vGeral.draw(viewGeral,geral_config);
        function resizeHandler () {
            vGeral.draw(viewGeral,geral_config);
        }
        if (window.addEventListener) {
            window.addEventListener('resize', resizeHandler, false);
        }
        else if (window.attachEvent) {
            window.attachEvent('onresize', resizeHandler);
        }
        var proj5 = $scope.dados[500].percent;
        var viewGeral = google.visualization.arrayToDataTable([['Label', 'Value'],['500',proj5]])
        var geral_config = {min: 0, redFrom: 0, redTo: 70, yellowFrom:70, yellowTo: 90, greenFrom: 90, greenTo: 100, minorTicks: 10}  
        var vGeral = new google.visualization.Gauge(document.getElementById('l500'));
        vGeral.draw(viewGeral,geral_config);
        function resizeHandler () {
            vGeral.draw(viewGeral,geral_config);
        }
        if (window.addEventListener) {
            window.addEventListener('resize', resizeHandler, false);
        }
        else if (window.attachEvent) {
            window.attachEvent('onresize', resizeHandler);
        }
        var proj6 = $scope.dados[600].percent;
        var viewGeral = google.visualization.arrayToDataTable([['Label', 'Value'],['600',proj6]])
        var geral_config = {min: 0, redFrom: 0, redTo: 70, yellowFrom:70, yellowTo: 90, greenFrom: 90, greenTo: 100, minorTicks: 10}  
        var vGeral = new google.visualization.Gauge(document.getElementById('l600'));
        vGeral.draw(viewGeral,geral_config);
        function resizeHandler () {
            vGeral.draw(viewGeral,geral_config);
        }
        if (window.addEventListener) {
            window.addEventListener('resize', resizeHandler, false);
        }
        else if (window.attachEvent) {
            window.attachEvent('onresize', resizeHandler);
        }
        var proj7 = $scope.dados[700].percent;
        var viewGeral = google.visualization.arrayToDataTable([['Label', 'Value'],['700',proj7]])
        var geral_config = {min: 0, redFrom: 0, redTo: 70, yellowFrom:70, yellowTo: 90, greenFrom: 90, greenTo: 100, minorTicks: 10}  
        var vGeral = new google.visualization.Gauge(document.getElementById('l700'));
        vGeral.draw(viewGeral,geral_config);
        function resizeHandler () {
            vGeral.draw(viewGeral,geral_config);
        }
        if (window.addEventListener) {
            window.addEventListener('resize', resizeHandler, false);
        }
        else if (window.attachEvent) {
            window.attachEvent('onresize', resizeHandler);
        }
        var proj8 = $scope.dados[800].percent;
        var viewGeral = google.visualization.arrayToDataTable([['Label', 'Value'],['800',proj8]])
        var geral_config = {min: 0, redFrom: 0, redTo: 70, yellowFrom:70, yellowTo: 90, greenFrom: 90, greenTo: 100, minorTicks: 10}  
        var vGeral = new google.visualization.Gauge(document.getElementById('l800'));
        vGeral.draw(viewGeral,geral_config);
        function resizeHandler () {
            vGeral.draw(viewGeral,geral_config);
        }
        if (window.addEventListener) {
            window.addEventListener('resize', resizeHandler, false);
        }
        else if (window.attachEvent) {
            window.attachEvent('onresize', resizeHandler);
        }
        var projHF = $scope.dados.HF.percent;
        var viewGeral = google.visualization.arrayToDataTable([['Label', 'Value'],['HF',projHF]])
        var geral_config = {min: 0, redFrom: 0, redTo: 70, yellowFrom:70, yellowTo: 90, greenFrom: 90, greenTo: 100, minorTicks: 10}  
        var vGeral = new google.visualization.Gauge(document.getElementById('HF'));
        vGeral.draw(viewGeral,geral_config);
        function resizeHandler () {
            vGeral.draw(viewGeral,geral_config);
        }
        if (window.addEventListener) {
            window.addEventListener('resize', resizeHandler, false);
        }
        else if (window.attachEvent) {
            window.attachEvent('onresize', resizeHandler);
        }
        var projGeral = $scope.dados.total.perc;
        var viewGeral = google.visualization.arrayToDataTable([['Label', 'Value'],['Total',projGeral]])
        var geral_config = {min: 0, redFrom: 0, redTo: 70, yellowFrom:70, yellowTo: 90, greenFrom: 90, greenTo: 100, minorTicks: 10}  
        var vGeral = new google.visualization.Gauge(document.getElementById('geral'));
        vGeral.draw(viewGeral,geral_config);
        function resizeHandler () {
            vGeral.draw(viewGeral,geral_config);
        }
        if (window.addEventListener) {
            window.addEventListener('resize', resizeHandler, false);
        }
        else if (window.attachEvent) {
            window.attachEvent('onresize', resizeHandler);
        }
        var projprem = $scope.dados.prem.percent;
        var viewGeral = google.visualization.arrayToDataTable([['Label', 'Value'],['Premium',projprem]])
        var geral_config = {min: 0, redFrom: 0, redTo: 70, yellowFrom:70, yellowTo: 90, greenFrom: 90, greenTo: 100, minorTicks: 10}  
        var vGeral = new google.visualization.Gauge(document.getElementById('prem'));
        vGeral.draw(viewGeral,geral_config);
        function resizeHandler () {
            vGeral.draw(viewGeral,geral_config);
        }
        if (window.addEventListener) {
            window.addEventListener('resize', resizeHandler, false);
        }
        else if (window.attachEvent) {
            window.attachEvent('onresize', resizeHandler);
        }
        var projEliminado = $scope.dados.total.per_eliminado_int;
        var viewGeral = google.visualization.arrayToDataTable([['Label', 'Value'],['Total',projEliminado]])
        var geral_config = {min: 0, redFrom: 1, redTo: 2, yellowFrom:0.54, yellowTo: 1, greenFrom: 0, greenTo: 0.54, minorTicks: 10, max: 2}  
        var vGeral = new google.visualization.Gauge(document.getElementById('eliminadaso'));
        vGeral.draw(viewGeral,geral_config);
        function resizeHandler () {
            vGeral.draw(viewGeral,geral_config);
        }
        if (window.addEventListener) {
            window.addEventListener('resize', resizeHandler, false);
        }
        else if (window.attachEvent) {
            window.attachEvent('onresize', resizeHandler);
        }
      }
})
