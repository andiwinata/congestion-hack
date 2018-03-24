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
      series: {
        cursor: 'pointer',
        events: {
          click: function(event) {
            console.log('point clicked', event.point.name);
          },
        },
      },
    },
    series: [
      {
        name: 'Trips',
        color: 'rgba(119, 152, 191, .5)',
        data: [
          { name: 0, x: 174, y: 65.6 },
          { name: 1, x: 192.7, y: 93.8 },
          { name: 2, x: 188, y: 72.4 },
          { name: 3, x: 172.1, y: 74.9 },
          { name: 4, x: 182, y: 72 },
          { name: 5, x: 180.1, y: 93 },
          { name: 6, x: 169.4, y: 65.9 },
          { name: 7, x: 165.1, y: 65 },
          { name: 8, x: 166.4, y: 85.9 },
          { name: 9, x: 184.2, y: 94.5 },
          { name: 10, x: 172.7, y: 95.9 },
          { name: 11, x: 188, y: 85.9 },
          { name: 12, x: 170.5, y: 67.7 },
          { name: 13, x: 160, y: 72.3 },
          { name: 14, x: 188, y: 94.3 },
          { name: 15, x: 170.2, y: 62.3 },
        ],
      },
    ],
  });
};

export default createChart;
