import Highcharts from 'highcharts';

const addUnitLabel = (keyName) => {
  const lowerKeyName = keyName.toLowerCase();
  switch (lowerKeyName) {
    case 'cost':
      return `${keyName} (AUD)`;
    case 'time':
      return `${keyName} (mins)`;
    case 'environment':
      return `${keyName} (gr of CO2)`;
    case 'health':
      return `${keyName} (cal)`;
    default:
      return keyName;
  }
};

// adding prefix suffix for tooltip
const addPrefixSuffix = (text, keyName) => {
  const lowerKeyName = keyName.toLowerCase();
  switch (lowerKeyName) {
    case 'cost':
      return `${keyName}: $${text}`;
    case 'time':
      return `${keyName}: ${text} mins`;
    case 'environment':
      return `${keyName}: ${text} gr CO2`;
    case 'health':
      return `${keyName}: ${text} cal`;
    default:
      return `${keyName}: ${text}`;
  }
};

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
        text: addUnitLabel(xAxisText),
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
        text: addUnitLabel(yAxisText),
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
          pointFormat: `${addPrefixSuffix('{point.x}', xAxisText)}, ${addPrefixSuffix('{point.y}', yAxisText)}`,
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
