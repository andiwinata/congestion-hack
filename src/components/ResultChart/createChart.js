import Highcharts from 'highcharts';
import { COST, TIME, ENVIRONMENT, HEALTH } from 'containers/Trip/constants';
import { capitalizeFirstLetter } from 'containers/utils/utils';

const addUnitLabel = keyName => {
  const lowerKeyName = keyName.toLowerCase();
  switch (lowerKeyName) {
    case COST:
      return `${capitalizeFirstLetter(keyName)} (AUD)`;
    case TIME:
      return `${capitalizeFirstLetter(keyName)} (mins)`;
    case ENVIRONMENT:
      return `${capitalizeFirstLetter(keyName)} (gr of CO2)`;
    case HEALTH:
      return `${capitalizeFirstLetter(keyName)} (cal)`;
    default:
      return capitalizeFirstLetter(keyName);
  }
};

// adding prefix suffix for tooltip
const addPrefixSuffix = (text, keyName) => {
  const lowerKeyName = keyName.toLowerCase();
  switch (lowerKeyName) {
    case COST:
      return `${capitalizeFirstLetter(keyName)}: $${text}`;
    case TIME:
      return `${capitalizeFirstLetter(keyName)}: ${text} mins`;
    case ENVIRONMENT:
      return `${capitalizeFirstLetter(keyName)}: ${text} gr CO2`;
    case HEALTH:
      return `${capitalizeFirstLetter(keyName)}: ${text} cal`;
    default:
      return `${capitalizeFirstLetter(keyName)}: ${text}`;
  }
};

const createXAxis = xAxisText => ({
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
});

const createTooltipPointFormat = (xAxisText, yAxisText) =>
  `${addPrefixSuffix('{point.x}', xAxisText)}, ${addPrefixSuffix('{point.y}', yAxisText)}`;

export const updateChart = ({ chart, xAxisText, yAxisText, data }) => {
  try {
    chart.xAxis[0].update(createXAxis(xAxisText), false);
    chart.yAxis[0].update(createXAxis(yAxisText), false);
    chart.series[0].setData(data, false);
    chart.update({
      plotOptions: {
        scatter: { tooltip: { pointFormat: createTooltipPointFormat(xAxisText, yAxisText) } },
      },
    });
  } catch (e) {
    console.log('ERROR', e);
  }
};

export const createChart = ({ elementTarget, xAxisText, yAxisText, data, pointerOnClick }) => {
  return Highcharts.chart(elementTarget, {
    chart: {
      type: 'scatter',
      zoomType: 'xy',
      backgroundColor: '#fff',
    },
    title: {
      text: 'Trip chart',
    },
    xAxis: createXAxis(xAxisText),
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
          pointFormat: createTooltipPointFormat(xAxisText, yAxisText),
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
