import React from 'react';
import styled from 'styled-components';

const AppShell = ({ children }) => {
  return (
    <StyledWrapper>
      <p>&copy; SmartLabs 2019</p>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.footer`
  color: white;
  text-align: center;
  padding: 2em 0;
`;

export default AppShell;
