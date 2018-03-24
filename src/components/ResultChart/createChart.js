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
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true,
    },
    yAxis: {
      title: {
        text: yAxisText,
      },
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: 100,
      y: 70,
      floating: true,
      backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
      borderWidth: 1,
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
          pointFormat: '{point.x}, {point.y}',
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
