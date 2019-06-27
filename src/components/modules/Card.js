import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from '../../styles/theme';
import { ThemeProvider } from 'styled-components';

const Card = ({
  color,
  title,
  description,
  scale,
  quantityCurrent,
  width,
  height,
  icon,
  children,
}) => {
  return (
    <ThemeProvider theme={theme[color]}>
      <Container width={width} height={height}>
        <Title>
          <Icon>
            <FontAwesomeIcon icon={icon} />
          </Icon>
          <p>{title}</p>
        </Title>
        <Info>
          <p>
            <span>
              {description}
              {description && ': '}
            </span>
            <strong>{quantityCurrent}</strong>
            <span>{scale}</span>
          </p>
        </Info>
        {children}
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  width: ${props => props.width};
  height: ${props => props.height || "250px"};
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
`;

export default Card;
