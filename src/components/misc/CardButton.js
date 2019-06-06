import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const CardButton = ({ title, icon, history, to }) => {
  const goToPage = () => history.push(to);

  return (
    <StyledWrapper onClick={goToPage}>
      {title}
      <FontAwesomeIcon icon={icon} />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  color: blue;
`;

export default withRouter(CardButton);
