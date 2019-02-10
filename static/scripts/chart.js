var plot = function(list, data) {
	var traces = {};//cria lista vazia

	for (var i = 0; i<5 ; i++) {
		var lista = [];
		if (i==0) {
			i="0";
		}
		for (var y=2; y < list.length; y++) {
			lista.push(data[i][list[y]]);
		}
		traces[data[i].MACHINE] = lista;
		console.log('lists',lista);
	}

	var x=list.slice(2)
	console.log('dict',traces);
	console.log(Object.keys(traces)[0])

	var trace1 = {
	  x: x,
	  y: traces[Object.keys(traces)[0]],
	  name: Object.keys(traces)[0]
	};
	var trace2 = {
	  x: x,
	  y: traces[Object.keys(traces)[1]],
	  name: Object.keys(traces)[1]
	};
	var trace3 = {
	  x: x,
	  y: traces[Object.keys(traces)[2]],
	  name: Object.keys(traces)[2]
	};
	var trace4 = {
	  x: x,
	  y: traces[Object.keys(traces)[3]],
	  name: Object.keys(traces)[3]
	};
	var trace5 = {
	  x: x,
	  y: traces[Object.keys(traces)[4]],
	  name: Object.keys(traces)[4]
	};

	var layout = {
		colorway:'#FC1A1A#FE575#FE7B7B#FFB4B4',
		font:{
			color:'#ffffff'
		},
		color:"#ffffff",
		title:'TOP 5 VULCANIZADORES COM MAIS DEFEITOS',
        titlefont: {
            color: "#ffffff"
        },
		color:'#4b4b4b4',
		paper_bgcolor: '#4b4b4b',
  		plot_bgcolor: '#4b4b4b',
  		aaxis:{
  			color:"#ffffff"
  		},
  		yaxis: {
  			tickfont:{
  				color: "#ffffff"
  			},
  			color:'#ffffff',
	    	title: 'Eliminado por defeito',
	    	titlefont: {
	      		size: 18,
	      		color: '#ffffff'
	      	}
	    },
	    xaxis: {
	    	tickfont:{
  				color: "#ffffff"
  			},
	    	color:'#4b4b4b',
	    	title: 'Dias',
	    	titlefont: {
	      		size: 18,
	      		color: '#ffffff'
	    	}
		}
	}

	var data = [trace1, trace2, trace3, trace4, trace5];
	Plotly.newPlot('plot_chart', data,layout);
};