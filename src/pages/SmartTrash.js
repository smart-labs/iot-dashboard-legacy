import React, { useState, useEffect } from 'react';
import AppShell from '../components/app/Shell';
import MapModule from '../components/modules/Map';
import TrashCanModule from '../components/modules/TrashCan';
import AreaChartModule from '../components/modules/AreaChart';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { trashName } from '../config/knotThing';
import baseUrl from '../config/serviceUrl';
import axios from 'axios';
import io from 'socket.io-client';

const socket = io(baseUrl);

const SmartTrash = () => {
  const [state, setState] = useState({ monthly: [] });
  const [door, setDoor] = useState({ monthly: [] });
  const [location] = useState({
    center: [-35.9807185, -8.238999],
    zoom: [16.3],
    marker: [-35.98067017, -8.23853006],
  });

  useEffect(() => {
    axios
      .post(`${baseUrl}api/sensor/`, {
        name: trashName,
        sensorId: 1,
      })
      .then(({ data }) => {
        setState(data);
        const event = data.thingId + data.sensorId;
        socket.emit('subscribe', data);
        socket.on(event, async response => {
          setState(response);
        });
      });

    axios
      .post(`${baseUrl}api/sensor/`, {
        name: trashName,
        sensorId: 2,
      })
      .then(({ data }) => {
        setDoor(data);
        const event = data.thingId + data.sensorId;
        socket.emit('subscribe', data);
        socket.on(event, async response => {
          setDoor(response);
        });
      });
  }, []);

  return (
    <AppShell title="[Smart]Trash" titleIcon={faTrash} link="/">
      <Container>
        <TrashCanModule width={'25%'} sensor={state} />
        <AreaChartModule
          width={'65%'}
          color={3}
          title={'Lixeiro Cheio por mês'}
          description="Quantidade Atual"
          sensorId={state.id}
          sensorValue={state.quantityCurrent}
          monthly={state.monthly}
        />

        <AreaChartModule
          width={'45%'}
          color={2}
          title={'Lixeiro aberto por mês'}
          description="Quantidade Atual"
          sensorId={door.id}
          sensorValue={door.quantityCurrent}
          monthly={door.monthly}
        />

        <MapModule location={location} />
      </Container>
    </AppShell>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
  width: 100%;
`;

export default SmartTrash;
