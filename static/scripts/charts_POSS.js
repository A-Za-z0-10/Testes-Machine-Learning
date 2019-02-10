console.log("load chart function")

var drawChart = function(chartData, divName, list_data, list_columns, list_columns1,list_columns2){
	var dias = chartData[list_data];
	var datos = chartData[list_columns];
	var datos1 = chartData[list_columns1];
	var datos2 = chartData[list_columns2];

	var trace1 = {
	  x: dias, 
	  y: datos, 
	  type: 'scatter',
	  name:'Uniformity'
	};
	var trace2 = {
	  x: dias, 
	  y: datos1, 
	  type: 'scatter',
	  name:'Visual'
	};
	var trace3 = {
	  x: dias, 
	  y: datos2, 
	  type: 'scatter',
	  name:'RaioX'
	};

	var layout = {
		tickvals:dias,
    showlegend:false,
        title: 'Defeituoso',
        paper_bgcolor: "#263238",
        plot_bgcolor: "#263238",
        titlefont: {
            color: "#ffffff"
        },
        xaxis: {
          title: 'Dia',
          color: '#ffffff',
	      dtick:1,
          titlefont: {
            color: '#ffffff'
          }
        },
        yaxis: {
          title: 'Indice Defeituoso',
          color: '#ffffff',
          titlefont: {
            color: '#ffffff'
          }
        }
      }

	var data = [trace1,trace2,trace3];
	Plotly.newPlot(divName, data, layout);

}
var drawChart_out = function(chartData, divName, list_data, list_columns, list_columns1){
	var dias = chartData[list_data];
	var datos = chartData[list_columns];
  var datos1 = chartData[list_columns1];

	var trace1 = {
	  x: dias, 
	  y: datos, 
	  type: 'scatter',
	  name:'Out',
    line: {
      dash: 'dashdot',
      width: 4
  }
	};

  var trace2 = {
    x:dias,
    y: datos1,
    type: 'scatter',
    name:'Prog'
  };

	var layout = {
        title: 'Outgoing',
        showlegend: false,
        paper_bgcolor: "#263238",
        plot_bgcolor: "#263238",
        titlefont: {
            color: "#ffffff"
        },
        xaxis: {
          title: 'Dia',
          color: '#ffffff',
          dtick:1,
          titlefont: {
            color: '#ffffff'
          }
        },
        yaxis: {
          title: 'OUTGOING',
          color: '#ffffff',
          titlefont: {
            color: '#ffffff'
          },
        legend: {
    x: 1,
    y: 1
  }
        }
      }

	var data = [trace1,trace2];
	Plotly.newPlot(divName, data, layout);

}
var drawLineChart = function(chartdata, divname, x_key, y_key, title, y_key1, y_key2){
    var chartSpace = document.getElementById(divname);

    var xValue = chartdata[x_key]
    var yValue = chartdata[y_key]
    var yValue1 = chartdata[y_key1]
    var yValue2 = chartdata[y_key2]

    var trace1 = [{
        x: xValue,
        y: yValue,
        type: 'line',
        mode: "lines+markers+text",
        text: yValue,
        textposition: 'top',
        hoverinfo: 'x',
        textfont: {
          color: '#ffffff'
        },
        line:{
          color: '#ffc300'
        },
        marker:{
            color: 'rbg(158,202,225)',
            opacity: 0.8,        
            
        }
      }];

    var trace2 = [{
    	x: xValue,
    	y: yValue1
    }]

      var data = [trace1, trace2];
      var layout = {
        title: title,
        showlegend:false,
        paper_bgcolor: "#263238",
        plot_bgcolor: "#263238",
        titlefont: {
            color: "#ffffff"
        },
        xaxis: {
          title: 'Dia',
          color: '#ffffff',
          dtick:1,
          titlefont: {
            color: '#ffffff'
          }
        },
        yaxis: {
          title: 'Indice Defeituoso',
          color: '#ffffff',
          titlefont: {
            color: '#ffffff'
          }
        }
      }

      Plotly.newPlot(divname, data, layout);
      window.addEventListener('resize', function(){
          Plotly.Plots.resize(chartSpace);
      }, false);
}
var drawChart_raiox = function(chartData, divName, list_data, list_columns, list_columns1){
	var dias = chartData[list_data];
	var datos = chartData[list_columns];
	var datos1 = chartData[list_columns1];

	var trace1 = {
	  x: dias, 
	  y: datos, 
	  type: 'scatter',
	  name:'Producao'
	};
	var trace2 = {
	  x: dias, 
	  y: datos1, 
	  type: 'scatter',
	  name:'Scrap'
	};

	var layout = {
		tickvals:dias,
        title: 'Raio-X',
        paper_bgcolor: "#263238",
        plot_bgcolor: "#263238",
        titlefont: {
            color: "#ffffff"
        },
        xaxis: {
          title: 'Dia',
          color: '#ffffff',
	      dtick:1,
          titlefont: {
            color: '#ffffff'
          }
        },
        yaxis: {
          title: 'PERCENTUAL',
          color: '#ffffff',
          titlefont: {
            color: '#ffffff'
          }
        }
      }

	var data = [trace1,trace2];
	Plotly.newPlot(divName, data, layout);

}
var drawChart_cost = function(chartData, divName, title, day_list_fore, data_list_fore, day_list_efet,data_list_efet,day_list_delt,data_list_delt){
	//Coleta dados FORECAST
	var day_fore = chartData[day_list_efet];
	var data_fore = chartData[data_list_fore];
	//Coleta dados EFETIVO
	var day_efet = chartData[day_list_efet];
	var data_efet = chartData[data_list_efet];
	//Coleta dados DELTA
	var day_delt = chartData[day_list_efet];
	var data_delt = chartData[data_list_delt];

	var trace1 = {
	  x: day_fore, 
	  y: data_fore, 
	  name:'FORECAST'
	};
	var trace2 = {
	  x: day_efet, 
	  y: data_efet, 
	  name:'EFETIVO'
	};
	var trace3 = {
	  name:'DELTA',
    x: day_delt, 
	  y: data_delt 
	  
	};
	var layout = {
    showlegend: false,
		tickvals:day_fore,
    title: title,
    paper_bgcolor: "#263238",
    plot_bgcolor: "#263238",
    titlefont: {
      color: "#ffffff"
    },
    xaxis: {
      title: 'Dia',
      color: '#ffffff',
      dtick:1,
      titlefont: {
        color: '#ffffff'
      }
    },
    yaxis: {
    title: '',
    color: '#ffffff',
    titlefont: {
      color: '#ffffff'
      }
    },
    size: 1200,
    bgcolor: '#E2E2E2',
    bordercolor: '#FFFFFF',
    borderwidth: 2
      };

	var data = [trace1,trace2,trace3];
	Plotly.newPlot(divName, data, layout);

}
var drawChart_eff = function(chartData, divName, title){
  //Coleta dados FORECAST
  var day = chartData['days'];
  var list_1 = chartData['list_1'];
  var list_2 = chartData['list_2'];
  var list_3 = chartData['list_3'];

  var trace1 = {
    x: day, 
    y: list_1, 
    name:'DECLARADO'
  };
  var trace2 = {
    x: day, 
    y: list_2, 
    name:'SAP'
  };
  var trace3 = {
    name:'FCT',
    x: day, 
    y: list_3 
    
  };
  var layout = {
    showlegend: false,
    tickvals:day,
    title: title,
    paper_bgcolor: "#263238",
    plot_bgcolor: "#263238",
    titlefont: {
      color: "#ffffff"
    },
    xaxis: {
      title: 'Dia',
      color: '#ffffff',
      dtick:1,
      titlefont: {
        color: '#ffffff'
      }
    },
    yaxis: {
    title: '',
    color: '#ffffff',
    titlefont: {
      color: '#ffffff'
      }
    },
    size: 1200,
    bgcolor: '#E2E2E2',
    bordercolor: '#FFFFFF',
    borderwidth: 2
      };

  var data = [trace1,trace2,trace3];
  Plotly.newPlot(divName, data, layout);

}