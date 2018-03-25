import React from 'react';
import { createChart } from './createChart';

class CarCostChart extends React.Component {
  componentDidMount() {
    this.chart = createChart({
      elementTarget: 'carChartContainer',
    });
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  render() {
    return <div id="carChartContainer">this is car chart</div>;
  }
}

export default CarCostChart;
