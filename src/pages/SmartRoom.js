import React, { useState } from 'react';
import AppShell from '../components/app/Shell';
import AreaChartModule from '../components/modules/AreaChart';
import { faChartArea } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const SmartRoom = () => {
  const [state] = useState({ id: 0, value: 0, monthly: [] });
  const [door] = useState({ id: 0, value: 0, monthly: [] });

  return (
      <AppShell title="[Smart]Room" titleIcon={faChartArea} link='/' >
      <Container>
        <AreaChartModule
          width={'30%'}
          color={4}
          title={'Média de Gás por mês'}
          description="Quantidade Atual"
          sensorId={state.id}
          sensorValue={state.value}
          monthly={state.monthly}
        />
        <AreaChartModule
          width={'60%'}
          color={3}
          title={'Média da umidade por mês'}
          description="Quantidade Atual"
          sensorId={state.id}
          sensorValue={state.value}
          monthly={state.monthly}
        />

        <AreaChartModule
          width={'70%'}
          color={0}
          title={'Média de Temperatura por mês'}
          description="Quantidade Atual"
          sensorId={state.id}
          sensorValue={state.value}
          monthly={state.monthly}
        />

        <AreaChartModule
          width={'45%'}
          color={2}
          title={'Média da Corrente consumida por mês'}
          description="Quantidade Atual"
          sensorId={door.id}
          sensorValue={door.value}
          monthly={door.monthly}
        />
        <AreaChartModule
          width={'45%'}
          color={5}
          title={'Média da potência consumida por mês'}
          description="Quantidade Atual"
          sensorId={door.id}
          sensorValue={door.value}
          monthly={door.monthly}
        />
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

export default SmartRoom;
