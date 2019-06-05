import React, { useState, useEffect } from 'react';
import TrashCan from '../components/modules/TrashCan';
import AppShell from '../components/app/Shell';
import Card from '../components/Card';
import styled from 'styled-components';
import { faChartArea, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import TOKEN from '../config/map';
import { trashName } from '../config/knotThing';
import baseUrl from '../config/serviceUrl';
import theme from '../styles/theme';
import axios from 'axios';
import io from 'socket.io-client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const Map = ReactMapboxGl({
  accessToken: TOKEN,
});

const socket = io(baseUrl);

export default function SmartTrash() {
  const [state, setState] = useState({ monthly: [] });
  const [door, setDoor] = useState({ monthly: [] });
  const [location] = useState({
    center: [-35.9807185, -8.238999],
    zoom: [16.3],
    marker: [-35.98067017, -8.23853006],
  });

  useEffect(async () => {
    const { data } = await axios.post(`${baseUrl}api/sensor/`, {
      name: trashName,
      sensorId: 1,
    });
    setState(data);
    const event = data.thingId + data.sensorId;
    socket.emit('subscribe', data);
    socket.on(event, async response => {
      setState(response);
    });
  }, []);

  useEffect(async () => {
    const { data } = await axios.post(`${baseUrl}api/sensor/`, {
      name: trashName,
      sensorId: 2,
    });
    setDoor(data);
    const event = data.thingId + data.sensorId;
    socket.emit('subscribe', data);
    socket.on(event, async response => {
      setDoor(response);
    });
  }, []);

  return (
    <AppShell>
      <Container>
        <TrashCan width={'25%'} sensor={state} />
        <Card
          width={'65%'}
          color={3}
          title={'Lixeiro Cheio por mês'}
          info={{ title: 'Quantidade Atual:', scale: '' }}
          sensor={state}
          icon={faChartArea}
        >
          <ResponsiveContainer width="95%" height="100%">
            <AreaChart data={state.monthly}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke={theme[3].primaryColor}
                fill={theme[3].primaryColor}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        <Card
          width={'45%'}
          color={2}
          title={'Lixeiro aberto por mês'}
          info={{ title: 'Quantidade Atual:', scale: '' }}
          sensor={door}
          icon={faChartArea}
        >
          <ResponsiveContainer width="95%" height="100%">
            <AreaChart data={door.monthly}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke={theme[2].primaryColor}
                fill={theme[2].primaryColor}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        <Card
          width={'45%'}
          color={4}
          title={'Localização'}
          info={{ title: '', scale: '' }}
          sensor={{ id: '', value: '' }}
          icon={faMapMarkedAlt}
        >
          <Map
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
          </Map>
        </Card>
      </Container>
    </AppShell>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
  width: 100%;
`;
