import React from 'react';
import { connect } from 'react-redux';
import { compose, branch, renderComponent } from 'recompose';
import { setMapUrl } from 'containers/Map/actions';
import mockData from 'mockResult/mock.json';
import { createChart, updateChart } from './createChart';
import './ResultChart.css';

const appendXY = (mockData, xKey, yKey) => {
  return mockData.map(data => {
    return {
      ...data,
      x: data[xKey],
      y: data[yKey],
    };
  });
};

class ResultChart extends React.Component {
  componentDidMount() {
    const { xAxisText, yAxisText } = this.props;
    const appendedXYMockData = appendXY(mockData, xAxisText, yAxisText);

    this.chart = createChart({
      elementTarget: 'chartContainer',
      xAxisText,
      yAxisText,
      data: appendedXYMockData,
      pointerOnClick: this.pointerOnClick,
    });
  }

  componentDidUpdate(prevProps) {
    const { xAxisText, yAxisText } = this.props;
    const appendedXYMockData = appendXY(mockData, xAxisText, yAxisText);

    updateChart({ chart: this.chart, xAxisText, yAxisText, data: appendedXYMockData });
  }

  pointerOnClick = event => {
    this.props.setMapUrl(event.point.name);
  };

  componentWillUnmount() {
    this.chart.destroy();
  }

  render() {
    const { from, to } = this.props;

    if (!(from && to)) {
      return null;
    }

    return (
      <div id="chartContainer" className="resultChartWrapper">
        This is chart
      </div>
    );
  }
}

const mapStateToProps = ({ trip }) => {
  return {
    from: trip.from,
    to: trip.to,
    yAxisText: trip.option1,
    xAxisText: trip.option2,
  };
};

const mapDispatchToProps = {
  setMapUrl,
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  branch(({ from, to, xAxisText, yAxisText }) => !(from && to && xAxisText && yAxisText), renderComponent(() => null))
);

export default enhance(ResultChart);
