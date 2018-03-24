import React from 'react';
import { connect } from 'react-redux';
import { compose, branch, renderComponent } from 'recompose';
import { setMapUrl } from 'containers/Map/actions';
import mockData from 'mockResult/mock.json';
import createChart from './createChart';
import './ResultChart.css';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

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
    const appendedMockData = appendXY(mockData, xAxisText, yAxisText);

    this.chart = createChart({
      elementTarget: 'chartContainer',
      xAxisText: capitalizeFirstLetter(xAxisText),
      yAxisText: capitalizeFirstLetter(yAxisText),
      data: appendedMockData,
      pointerOnClick: this.pointerOnClick,
    });
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
  };
};

const mapDispatchToProps = {
  setMapUrl,
};

ResultChart.defaultProps = {
  xAxisText: 'cost',
  yAxisText: 'time',
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  branch(({ from, to }) => !(from && to), renderComponent(() => null))
);
export default enhance(ResultChart);
