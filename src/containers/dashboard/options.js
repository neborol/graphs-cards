export function optionsConfig(firstCol, secondCol){
    const options = {
     chart: {
          type: 'area'
      },
      title: {
          text: '',
      },
      subtitle: {
          text: ''
      },
      xAxis: {
          tickmarkPlacement: 'on',
          title: {
              text: 'Number'
          },
          crosshair: {
              color: '#000000',
              width: 5
          }
      },   

        yAxis: {
            title: {
                text: 'Color Value'
            }
        },

        tooltip: {
            split: true,
            backgroundColor: '#000000',
            useHTML: true,
            style: {"color": "#ffffff"}
        },
  
    plotOptions: {
        area: {
            pointStart: 5,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 3,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },

      series: [{
          name: 'First',
          data: [[5, 2650], [10, 2800], [15, 2000]],
          color: firstCol
      }, {
          name: 'Second',
          data: [[5, 2300], [10, 3100], [15, 1700]],
          color: secondCol
      }],

    credits: {
        enabled: false
    },
  };
  return options;
 }