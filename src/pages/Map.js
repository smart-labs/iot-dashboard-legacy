import React from 'react';
import AppShell from '../components/app/Shell';
import { faChartArea } from '@fortawesome/free-solid-svg-icons';
import CardButton from '../components/misc/CardButton';
import styled from 'styled-components';
import baseUrl from '../config/serviceUrl';
import io from 'socket.io-client';
import HomeModule from '../components/modules/home';

const socket = io(baseUrl);

const rooms = [
  { d: 'M 0,0 l 5,0 l 0,5 l -5,0 z' },
  { d: 'M 5,0 l 6,0 l 0,5 l -6,0 z' },
  { d: 'M 0,5 l 5,0 l 0,6 l -5,0 z' },
  { d: 'M 5,5 l 6,0 l 0,6 l -6,0 z' },

  // { d: 'M 0,0 l 5,0 l 0,5 l -5,0 z' },
  // { d: 'M 0,0 l 5,0 l 0,5 l -5,0 z' },
  // { d: 'M 0,0 l 5,0 l 0,5 l -5,0 z' },
  // { d: 'M 0,0 l 5,0 l 0,5 l -5,0 z' },
];

const walls = [];

const Overview = () => {
  return (
    <AppShell title="[Smart]Labs">
      <styles.Wrapper>
        <styles.Map viewBox="0 0 100 100">
          {rooms.map(({ ...props }, index) => (
            <styles.Shape key={`room-${index}`} {...props} />
          ))}
          {walls.map(({ ...props }, index) => (
            <styles.Shape wall key={`wall-${index}`} {...props} />
          ))}
        </styles.Map>
      </styles.Wrapper>
    </AppShell>
  );
};

const styles = {
  Map: styled.svg`
    width: 100%;
    margin: 0 10%;
    transform: rotateX(60deg) rotateZ(45deg);
  `,

  Shape: styled.path`
    stroke: none;
    fill: ${props => (props.wall ? 'black' : 'white')};
  `,

  Wrapper: styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-top: 3rem;
    width: 100%;
  `,
};

export default Overview;
