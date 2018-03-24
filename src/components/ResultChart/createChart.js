import Highcharts from 'highcharts';

const createChart = (elementTarget, xAxisText, yAxisText) => {
  return Highcharts.chart(elementTarget, {
    chart: {
      type: 'scatter',
      zoomType: 'xy',
      backgroundColor: 'rgb(241, 241, 241)',
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
    },
    series: [
      {
        name: 'Trips',
        color: 'rgba(119, 152, 191, .5)',
        data: [
          [174, 65.6],
          [192.7, 93.8],
          [188, 72.4],
          [172.1, 74.9],
          [182, 72],
          [180.1, 93],
          [169.4, 65.9],
          [165.1, 65],
          [166.4, 85.9],
          [184.2, 94.5],
          [172.7, 95.9],
          [188, 85.9],
          [170.5, 67.7],
          [160, 72.3],
          [188, 94.3],
          [170.2, 62.3],
        ],
      },
    ],
  });
};

export default createChart;
