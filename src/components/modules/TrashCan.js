import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashAlt,
  faTrashRestore,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

export default function TrashCan({ sensor, width }) {
  return (
    <ThemeProvider theme={sensor.sensorValue === 'true' ? theme[0] : theme[1]}>
      <Container width={width}>
        <Title>
          <Icon>
            <FontAwesomeIcon icon={faTrashAlt} />
          </Icon>
          <p>Status do Lixeiro</p>
        </Title>
        <Info>
          <p>
            Status:{' '}
            <strong>
              {' '}
              {sensor.sensorValue === 'true' ? 'Cheio' : 'Normal'}{' '}
            </strong>
          </p>
          <FontAwesomeIcon
            className="trash"
            icon={sensor.value ? faTrashRestore : faTrash}
          />
        </Info>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  width: ${props => props.width};
  height: 260px;
  background-color: ${props => props.theme.colorBackground};
  margin-left: 1.5rem;
  margin-top: 1rem;
  border: 3px double ${props => props.theme.primaryColor};
  border-radius: 3px;
  box-shadow: 0px 0.4px 10px 0px ${props => props.theme.colorShadow};
`;

const Title = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-right: 0.8rem;
  color: #fff;
  background-color: ${props => props.theme.colorBackground};
  border-radius: 0.4rem;
  font-size: 1.1rem;
  p {
    font-weight: bold;
  }
`;

const Icon = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: ${props => props.theme.primaryColor};
  border-radius: 300px;
  box-shadow: 0px 0.4px 10px 0px ${props => props.theme.colorShadow};
  margin-right: 0.5rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  p {
    font-size: 1rem;
    color: #fff;
    padding-bottom: 1rem;
  }

  .trash {
    font-size: 6rem;
    color: ${props => props.theme.primaryColor};
    text-shadow: 4px 4px 60px ${props => props.theme.colorShadow};
  }
`;