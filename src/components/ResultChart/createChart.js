import Highcharts from 'highcharts';

const createChart = ({ elementTarget, xAxisText, yAxisText, data, pointerOnClick }) => {
  return Highcharts.chart(elementTarget, {
    chart: {
      type: 'scatter',
      zoomType: 'xy',
      backgroundColor: '#fff',
    },
    title: {
      text: 'Trip chart',
    },
    xAxis: {
      title: {
        enabled: true,
        text: xAxisText,
      },
      tickInterval: 1,
      minPadding: 0,
      maxPadding: 0,
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true,
    },
    yAxis: {
      title: {
        text: yAxisText,
      },
    },
    plotOptions: {
      scatter: {
        marker: {
          radius: 5,
          states: {
            hover: {
              enabled: true,
              lineColor: 'rgb(100,100,100)',
            },
          },
        },
        states: {
          hover: {
            marker: {
              enabled: false,
            },
          },
        },
        tooltip: {
          headerFormat: '<b>{series.name}</b><br>',
          pointFormat: `${xAxisText}: {point.x}, ${yAxisText}: {point.y}`,
        },
      },
      series: {
        cursor: 'pointer',
        events: {
          click: pointerOnClick,
        },
      },
    },
    series: [
      {
        name: 'Trips',
        color: 'rgba(119, 152, 191, .5)',
        data,
      },
    ],
  });
};

export default createChart;
