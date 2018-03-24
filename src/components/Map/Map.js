import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import './Map.css';

const Map = ({ mapUrl }) => {
  return (
    <div className="mapWrapper">
      <iframe className="iframe" title="map" frameBorder="0" src={mapUrl} />
    </div>
  );
};

const mapStateToProps = ({ map: { url } }) => ({ mapUrl: url });
const enhance = compose(connect(mapStateToProps));

export default enhance(Map);
