import React from 'react';
import AppShell from '../components/app/Shell';
import AreaChartModule from '../components/modules/AreaChart';
import { faChartArea } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import baseUrl from '../config/serviceUrl';
import axios from 'axios';

class SmartRoom extends React.Component {
  state = {
    corrente: [],
    tensao: [],
    potencia: [],
    correnteValue: 0,
    tensaoValue: 0,
    potenciaValue: 0,
  };

  doiderabixo = async () => {
    const correnteResponse = await axios.get(
      `${baseUrl}api/energy/SmartEnergy/1`
    );

    const tensaoResponse = await axios.get(
      `${baseUrl}api/energy/SmartEnergy/2`
    );

    const cc = (this.state.corrente.length === 0
      ? correnteResponse.data.flatMap(v =>
          v.data ? { value: v.data.value } : []
        )
      : correnteResponse.data[0] && correnteResponse.data[0].data
      ? [
          { value: correnteResponse.data[0].data.value },
          ...this.state.corrente.reverse(),
        ]
      : this.state.corrente.reverse()
    )
      .slice(0, 20)
      .reverse();

    const tt = (this.state.tensao.length === 0
      ? tensaoResponse.data.flatMap(v =>
          v.data ? { value: v.data.value } : []
        )
      : tensaoResponse.data[0] && tensaoResponse.data[0].data
      ? [
          { value: tensaoResponse.data[0].data.value },
          ...this.state.tensao.reverse(),
        ]
      : this.state.tensao.reverse()
    )
      .slice(0, 20)
      .reverse();

    this.setState({
      corrente: cc,
      tensao: tt,
      potencia: [
        ...this.state.potencia,
        {
          value: (
            (cc[cc.length - 1].value / 1000) *
            tt[tt.length - 1].value
          ).toFixed(0),
        },
      ],

      correnteValue: cc[cc.length - 1].value,
      tensaoValue: tt[tt.length - 1].value,
      potenciaValue: (
        (cc[cc.length - 1].value / 1000) *
        tt[tt.length - 1].value
      ).toFixed(0),
    });
  };

  componentDidMount() {
    this.doiderabixo();
    setInterval(this.doiderabixo, 5000);
  }

  render() {
    const {
      corrente,
      tensao,
      potencia,
      correnteValue,
      tensaoValue,
      potenciaValue,
    } = this.state;

    return (
      <AppShell title="[Smart]Room" titleIcon={faChartArea} link="/">
        <Container>
          <AreaChartModule
            width={'calc(90% + 1.5em)'}
            color={2}
            title={'Consumo de energia'}
            description="Quantidade Atual"
            sensorValue={`${correnteValue} mA`}
            monthly={corrente}
          />

          <AreaChartModule
            width={'30%'}
            color={4}
            title={'Uso de tensão'}
            description="Quantidade Atual"
            sensorValue={`${tensaoValue} V`}
            monthly={tensao}
          />

          <AreaChartModule
            width={'60%'}
            color={3}
            title={'Uso de potência'}
            description="Quantidade Atual"
            sensorValue={`${potenciaValue} W`}
            monthly={potencia}
          />
        </Container>
      </AppShell>
    );
  }
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

export default SmartRoom;
