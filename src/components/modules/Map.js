import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import accessToken from '../../config/map';
import Card from './Card';

const MapView = ReactMapboxGl({ accessToken });

const MapModule = ({ location }) => {
  return (
    <Card
      width={'45%'}
      color={4}
      title={'Localização'}
      description=""
      scale=""
      sensorId=""
      sensorValue=""
      icon={faMapMarkedAlt}
    >
      <MapView
        style="mapbox://styles/mapbox/dark-v9"
        zoom={location.zoom}
        center={location.center}
        containerStyle={{
          height: '100%',
          width: '100%',
        }}
      >
        <Layer
          type="symbol"
          id="marker"
          layout={{ 'icon-image': 'marker-15' }}
          title="Ok"
        >
          <Feature coordinates={location.marker} />
        </Layer>
      </MapView>
    </Card>
  );
};

export default MapModule;
