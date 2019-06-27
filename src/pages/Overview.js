import React from 'react';
import AppShell from '../components/app/Shell';
import { faChartArea } from '@fortawesome/free-solid-svg-icons';
import CardButton from '../components/misc/CardButton';
import styled from 'styled-components';
import baseUrl from '../config/serviceUrl';
import io from 'socket.io-client';
import HomeModule from '../components/modules/home';


const socket = io(baseUrl);

const Overview = () => {
  return (
    <AppShell title="[Smart]Labs">
      <Container>
        <HomeModule />
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

export default Overview;
