import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { addOrReplaceURLParam } from 'containers/utils/URL';
import './Map.css';

const Map = ({ mapUrl }) => {
  // const urlWithApi = addOrReplaceURLParam(mapUrl, 'key', process.env.REACT_APP_MAPS_API_KEY);
  return <iframe className="iframe" title="map" frameBorder="0" src={mapUrl} />;
};

const mapStateToProps = ({ map: { url }}) => ({ mapUrl: url })
const enhance = compose(
  connect(mapStateToProps)
)

export default enhance(Map);
