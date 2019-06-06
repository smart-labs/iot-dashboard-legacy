import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';

const AppShell = ({ children, title, titleIcon }) => {
  return (
    <StyledWrapper>
      <Header title={title} icon={titleIcon} />
      {children}
      <Footer />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  background: #17171e;
  min-height: 100vh;
`;

export default AppShell;
