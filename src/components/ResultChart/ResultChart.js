import React from 'react';
import { connect } from 'react-redux';
import { compose, branch, renderComponent } from 'recompose';
import createChart from './createChart';
import './ResultChart.css';

class ResultChart extends React.Component {
  componentDidMount() {
    this.chart = createChart('chartContainer', 'Time', 'Cost');
  }

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

const enhance = compose(connect(mapStateToProps), branch(({ from, to }) => !(from && to), renderComponent(() => null)));
export default enhance(ResultChart);
