var buttonsCloseCard = document.getElementById("buttonCloseCard");
var seniorCards = document.getElementById("seniorCardss");
/*console.log(seniorCards);*/
seniorCards.style.display = 'block';

var app = angular.module('myApp', ['ngMaterial']);

app.controller("ctrlMain", function($scope, $http, $sce, $interval, $mdDialog) { //adicionar $interval
    /*console.log('ctrlMain loaded');*/

var loadData = function() { //criar função loadData
    $http.get('/api/poss/collect')
    	.then(function(res){
    		$scope.dados = res.data;

            $scope.changePlot = function(type){
                var ids = ["cost_material_indireto", "cost_transporte_semi_pronto","cost_manutencao","cost_materiais_de_exercicio","cost_transporte_de_material","cost_manutencao_fixo","cost_epi","cost_material_indireto_fixo","cost_cv_cc"];
                for (id in ids){
                    if(ids[id] == type){
                        document.getElementById(type).style.display = 'block';
                    }
                    else{
                        document.getElementById(ids[id]).style.display = 'none';
                    }
                };
                //console.log("deu certo!!");
                document.getElementById(type).style.display = 'block';                //loadData();
            }
            $scope.date = new Date();    
            console.log('Colletor data:' , $scope.dados);

            drawChart($scope.dados.quality.chart_data,'defeituoso_chart','day_list','defeituoso_unif','defeituoso_visu','defeituoso_raiox');
            //drawLineChart($scope.dados.quality.chart_data,'myDiv','day_list','defeituoso_unif','Defeituoso','defeituoso_visu','defeituoso_raiox');
            
            drawChart_out($scope.dados.quality.chart_data,'out_chart','day_list_outgoing','outgoing_1','outgoing_2');
            //GRAFICO QUALIDADE RAIO X DESABILITADO drawChart_raiox($scope.dados.quality.chart_data,'raiox_chart','day_list_raiox','raiox_prod','raiox_scrap');

            //Gera graficos aba cost
            drawChart_cost($scope.dados.cost.indirect_material,'cost_material_indireto','MATERIAL INDIRETO','i_forecast','d_forecast','i_efetivo','d_efetivo','i_delta','d_delta');
	        drawChart_cost($scope.dados.cost.transporte_semi_pronto,'cost_transporte_semi_pronto','TRANSFERENCIA','i_forecast','d_forecast','i_efetivo','d_efetivo','i_delta','d_delta');
            drawChart_cost($scope.dados.cost.manutencao,'cost_manutencao','MANUTENCAO - VARIAVEL','i_forecast','d_forecast','i_efetivo','d_efetivo','i_delta','d_delta');
            drawChart_cost($scope.dados.cost.materiais_de_exercicio,'cost_materiais_de_exercicio','MATERIAIS DE EXERCICIO','i_forecast','d_forecast','i_efetivo','d_efetivo','i_delta','d_delta');
            drawChart_cost($scope.dados.cost.transporte_de_materiais,'cost_transporte_de_material','TRANSPORTE DE MATERIAL','i_forecast','d_forecast','i_efetivo','d_efetivo','i_delta','d_delta');
            drawChart_cost($scope.dados.cost.manutencao_fixo,'cost_manutencao_fixo','GAS NATURAL','i_forecast','d_forecast','i_efetivo','d_efetivo','i_delta','d_delta');
            drawChart_cost($scope.dados.cost.epi,'cost_epi','ENERGIA ELETRICA','i_forecast','d_forecast','i_efetivo','d_efetivo','i_delta','d_delta');
            drawChart_cost($scope.dados.cost.material_indireto,'cost_material_indireto_fixo','VAPOR BIOMASSA','i_forecast','d_forecast','i_efetivo','d_efetivo','i_delta','d_delta');
            drawChart_cost($scope.dados.cost.cv_cc,'cost_cv_cc','CV/CC','i_forecast','d_forecast','i_efetivo','d_efetivo','i_delta','d_delta');
            drawChart_cost($scope.dados.cost.gelo_seco,'cost_gelo_seco','GELO SECO','i_forecast','d_forecast','i_efetivo','d_efetivo','i_delta','d_delta');

            drawChart_eff($scope.dados.eff.DV_UPMB.chart,'dv_upmb','UPMB');
            drawChart_eff($scope.dados.eff.DV_UPPC.chart,'dv_uppc','UPPC');
            drawChart_eff($scope.dados.eff.DV_UPVA.chart,'dv_upva','UPVA');

            drawChart_eff($scope.dados.eff.IF_MANUT.chart,'if_manut','MANUTENCAO');
            drawChart_eff($scope.dados.eff.IF_QUAL.chart,'if_qual','QUALIDADE');
            drawChart_eff($scope.dados.eff.IF_OUTROS.chart,'if_outros','OUTROS');

            drawChart_eff($scope.dados.eff.IV_MANUT.chart,'iv_manut','MANUTENCAO');
            drawChart_eff($scope.dados.eff.IV_QUAL.chart,'iv_qual','QUALIDADE');
            drawChart_eff($scope.dados.eff.IV_OUTROS.chart,'iv_outros','OUTROS');
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

$scope.show_dds = function(ev) {
    $mdDialog.show({
    controller: DialogController,
    templateUrl: '/api/poss/dds',
    parent: angular.element(document.body),
    targetEvent: ev,
    clickOutsideToClose:true,
    fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
    $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
    $scope.status = 'You cancelled the dialog.';
    });
    
    function DialogController($scope, $mdDialog) {
        $scope.hide = function() {
        $mdDialog.hide();
        };

        $scope.cancel = function() {
        $mdDialog.cancel();
        };

        $scope.answer = function(answer) {
        $mdDialog.hide(answer);
        };
}
};
$scope.show_ddq = function(ev) {
    $mdDialog.show({
    controller: DialogController,
    templateUrl: '/api/poss/ddq',
    parent: angular.element(document.body),
    targetEvent: ev,
    clickOutsideToClose:true,
    fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
    $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
    $scope.status = 'You cancelled the dialog.';
    });
    
    function DialogController($scope, $mdDialog) {
        $scope.hide = function() {
        $mdDialog.hide();
        };

        $scope.cancel = function() {
        $mdDialog.cancel();
        };

        $scope.answer = function(answer) {
        $mdDialog.hide(answer);
        };
}
};

$scope.closeCard = function(){
    seniorCards.style.display = 'none';
    /*console.log("CLOSE CARD FUNCTION RUN");*/
    buttonsCloseCard.innerHTML = "open card";
};

})
app.config(['$interpolateProvider', function($interpolateProvider) {
	$interpolateProvider.startSymbol('{a');
	$interpolateProvider.endSymbol('a}');
	/*console.log('mudado angular');*/
  }]);




