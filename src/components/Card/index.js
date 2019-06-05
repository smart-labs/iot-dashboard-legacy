import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Title, Icon, Info } from './styles';
import theme from '../../styles/theme';
import { ThemeProvider } from 'styled-components';

function Card({ sensor, color, title, info, width, icon, children }) {
  return (
    <ThemeProvider theme={theme[color]}>
      <Container width={width}>
        <Title>
          <Icon>
            <FontAwesomeIcon icon={icon} />
          </Icon>
          <p>{title}</p>
        </Title>
        <Info>
          <p>
            {info.title} <strong> {sensor.quantityCurrent} </strong>{" "}
            {info.scale}
          </p>
        </Info>
        {children}
      </Container>
    </ThemeProvider>
  );
}

export default Card;