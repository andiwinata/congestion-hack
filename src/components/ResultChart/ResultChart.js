import React from 'react';
import { connect } from 'react-redux';
import './ResultChart.css';

class ReactChart extends React.Component {
  render() {
    const { from, to } = this.props;

    if (!(from && to)) {
      return null;
    }

    return <div className="resultChartWrapper">This is chart</div>;
  }
}

const mapStateToProps = ({ trip }) => {
  return {
    from: trip.from,
    to: trip.to,
  };
};

export default connect(mapStateToProps)(ReactChart);
