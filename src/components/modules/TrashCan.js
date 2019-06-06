import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashAlt,
  faTrashRestore,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Card from './Card';

const TrashCanModule = ({ sensor, width }) => {
  return (
    <Card
      width={width}
      title="Status do Lixeiro"
      icon={faTrashAlt}
      color={1}
      description={'Status'}
      quantityCurrent={sensor.sensorValue === 'true' ? 'Cheio' : 'Normal'}
      scale=""
    >
      <Info>
        <FontAwesomeIcon
          className="trash"
          icon={sensor.value ? faTrashRestore : faTrash}
        />
      </Info>
    </Card>
  );
};

const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  .trash {
    font-size: 6rem;
    color: ${props => props.theme.primaryColor};
    text-shadow: 4px 4px 60px ${props => props.theme.colorShadow};
  }
`;

export default TrashCanModule;
