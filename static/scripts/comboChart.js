var loadComboChart = function(list1,list2,list3){
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawVisualization);

    var average1 = (list1[0]+list1[1]+list1[2]+list1[3])/4;
    var average2 = (list2[0]+list2[1]+list2[2]+list2[3])/4;
    var average3 = (list3[0]+list3[1]+list3[2]+list3[3])/4;

    function drawVisualization() {
    // Some raw data (not necessarily accurate)
    var data = google.visualization.arrayToDataTable([
        ['Class', 'A', 'B', 'C', 'D','Average'],
        ['1',list1[0],list1[1],list1[2],list1[3],average1],
        ['2',list2[0],list2[1],list2[2],list2[3],average2],
        ['3',list3[0],list3[1],list3[2],list3[3],average3],
    ]);

    var options = {
    backgroundColor: '#F0F8FF',
    title : 'Cycling hit by shifts and classes',
    vAxis: {title: 'Hit (%)'},
    hAxis: {title: 'Shift'},
    seriesType: 'bars',
    series: {4: {type: 'line'}}
    };

    var chart = new google.visualization.ComboChart(document.getElementById('classesChart'));
    chart.draw(data, options);
    }
};