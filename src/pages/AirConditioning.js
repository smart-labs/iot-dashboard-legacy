import React from 'react';
import AppShell from '../components/app/Shell';
import { faFan } from '@fortawesome/free-solid-svg-icons';
import AirConditioningModule from '../components/modules/AirConditioning';
import styled from 'styled-components';

const AirConditioning = () => {
  return (
    <AppShell title="[Smart]Air" titleIcon={faFan}>
      <Container>
        <AirConditioningModule />
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

export default AirConditioning;
