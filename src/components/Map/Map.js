import React from 'react';
import { addOrReplaceURLParam } from 'containers/utils/URL';
import './Map.css';

const initialUrl = `https://www.google.com/maps/embed/v1/view?center=-33.8688,151.2093&zoom=15`;
const directionUrl = `https://www.google.com/maps/embed/v1/directions
?origin=Sydney+Australia
&destination=Pyrmont+Sydney+Australia
&avoid=tolls|highways`;

const Map = ({ mapUrl }) => {
  const urlWithApi = addOrReplaceURLParam(mapUrl, 'key', process.env.REACT_APP_MAPS_API_KEY);
  return <iframe className="iframe" title="map " frameBorder="0" src={urlWithApi} />;
};

Map.defaultProps = {
  mapUrl: directionUrl,
};

export default Map;
