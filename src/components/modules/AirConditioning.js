import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faFan,
  faMinus,
  faPlus,
  faPowerOff,
  faWind
} from '@fortawesome/free-solid-svg-icons';
import Card from './Card';
import styled from 'styled-components';
import baseUrl from '../../config/serviceUrl';
import axios from 'axios';

const AirConditioningModule = () => {
  const [powerState, setPowerState] = React.useState(false);
  const [temperature, setTemperature] = React.useState(19);
  const [fanSpeed, setFanSpeed] = React.useState(5);

  const sendDataToSensor = async value => {
    console.log(value);
    const response = await axios.post(`${baseUrl}api/air/`, {
      name: 'Remote Control',
      value,
    });
    console.log(response);
    return response;
  };

  const decreaseTemperature = async () => {
    setTemperature(temperature - 1);
    await sendDataToSensor(temperature - 1);
  };

  const increaseTemperature = async () => {
    setTemperature(temperature + 1);
    await sendDataToSensor(temperature + 1);
  };

  const increaseFanSpeed = async () => {
    setFanSpeed((fanSpeed % 5) + 1);
    await sendDataToSensor((fanSpeed % 5) + 1); 
  };

  const switchPowerState = async () => {
    setPowerState(!powerState);
    await sendDataToSensor(powerState ? -1 : 0);
  };

  return (
    <Card
      width={'45%'}
      color={4}
      title={'Ar-condicionado'}
      description=""
      scale=""
      sensorId=""
      sensorValue=""
      icon={faFan}
    >
      <StyledWrapper>

        <StyledPowerButton powerState={powerState} onClick={switchPowerState}>
          <Icon icon={faPowerOff} />
        </StyledPowerButton>

        <Container>
          <div className="rangeButton">
            <Icon icon={faMinus} onClick={decreaseTemperature} />
            <span>{temperature}ºC</span>
            <Icon icon={faPlus} onClick={increaseTemperature} />
          </div>

          <div className="rangeButton" onClick={increaseFanSpeed}>
              <StyledSpeed fanSpeed={fanSpeed}>
                <Icon icon={faWind} />
              </StyledSpeed>
              <span>{fanSpeed}</span>
          </div>
        </Container>
      
      </StyledWrapper>
    </Card>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .rangeButton {
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 0.2em;
    padding: 0.5em 1em;
    margin: 0 0.5em;
    display: flex;
    color: white;

    svg {
      font-size: 2.5em;
      padding: 6px;
      cursor: pointer;
    }

    span {
      font-size: 1.5em;
      padding: 0 0.5em;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

`;

const StyledPowerButton = styled.div`
  color: ${props => (props.powerState ? '#00e38c' : '#e64356')};
  font-size: 3em;
  padding-bottom: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const StyledSpeed = styled.div`
  color: ${props => (`rgba(255, 255, 255, ${0.2*props.fanSpeed})`)};
  transition: all 0.3s ease;
`;


export default AirConditioningModule;

