import React from 'react';
import { connect } from 'react-redux';
import { compose, branch, renderComponent } from 'recompose';
import { setMapUrl } from 'containers/Map/actions';
import mockData from 'mockResult/mock.json';
import createChart from './createChart';
import './ResultChart.css';

class ResultChart extends React.Component {
  componentDidMount() {
    this.chart = createChart({
      elementTarget: 'chartContainer',
      xAxisText: 'Time',
      yAxisText: 'Cost',
      data: mockData,
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

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  branch(({ from, to }) => !(from && to), renderComponent(() => null))
);
export default enhance(ResultChart);
