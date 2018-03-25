import Highcharts from 'highcharts';

export const createChart = ({ elementTarget }) => {
  return Highcharts.chart(elementTarget, {
    title: {
      text: 'Ownership Cost for 2010 Toyota Prius II',
    },
    xAxis: {
      categories: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
    },
    labels: {
      items: [
        {
          html: 'Total Cost Ownership',
          style: {
            left: '200px',
            top: '-5px',
            color: (Highcharts.theme && Highcharts.theme.textColor) || 'black',
          },
        },
      ],
    },
    plotOptions: {
      column: {
        stacking: 'normal',
      },
    },

    series: [
      {
        type: 'column',
        name: 'Depreciation',
        stack: 'all',
        data: [2434, 1169, 1022, 925, 828],
      },
      {
        type: 'column',
        name: 'Insurance',
        stack: 'all',
        data: [1775, 1837, 1902, 1968, 2037],
      },
      {
        type: 'column',
        name: 'Fuel',
        stack: 'all',
        data: [788, 812, 840, 874, 913],
      },
      {
        type: 'column',
        name: 'Maintenance',
        stack: 'all',
        data: [2473, 1621, 1004, 970, 2158],
      },
      {
        type: 'column',
        name: 'Repairs',
        stack: 'all',
        data: [869, 1038, 1182, 1303, 1503],
      },
      {
        type: 'column',
        name: 'Taxes & Fees',
        stack: 'all',
        data: [766, 87, 111, 71, 99],
      },
      {
        type: 'pie',
        name: 'Total consumption',
        data: [
          {
            name: 'Depreciation',
            y: 18,
            color: Highcharts.getOptions().colors[0], // Jane's color
          },
          {
            name: 'Insurance',
            y: 27,
            color: Highcharts.getOptions().colors[1], // John's color
          },
          {
            name: 'Fuel',
            y: 12,
            color: Highcharts.getOptions().colors[2], // Joe's color
          },
          {
            name: 'Maintenance',
            y: 23,
            color: Highcharts.getOptions().colors[3], // Joe's color
          },
          {
            name: 'Repairs',
            y: 17,
            color: Highcharts.getOptions().colors[4], // Joe's color
          },
          {
            name: 'Taxes & Fees',
            y: 3,
            color: Highcharts.getOptions().colors[5], // Joe's color
          },
        ],
        center: [220, 30],
        size: 80,
        showInLegend: false,
        dataLabels: {
          enabled: false,
        },
      },
    ],
  });
};
