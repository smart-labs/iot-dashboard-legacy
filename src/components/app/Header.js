import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({ title = '', icon }) => {
  const getTitle = () => {
    const highlightStart = title.indexOf('[');
    const highlightEnd = title.indexOf(']');
    const prefix = title.substring(0, highlightStart);
    const highlight = title.substring(highlightStart + 1, highlightEnd);
    const sufix = title.substring(highlightEnd + 1);

    return (
      <>
        <span>{prefix}</span>
        <strong>{highlight}</strong>
        <span>{sufix} </span>
      </>
    );
  };

  return (
    <StyledWrapper>
      <h1>
        {getTitle()}
        {icon && <FontAwesomeIcon icon={icon} />}
      </h1>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.header`
  background-color: #1c1d25;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 4rem;
  box-shadow: 0px 0.4px 15px 0px rgba(33, 217, 154, 0.61);
  font-size: 0.9rem;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;

  h1 {
    color: #fff;
  }

  strong {
    color: #00e38c;
    text-shadow: 4px 4px 31px rgba(33, 217, 154, 0.61);
  }
`;

export default React.memo(Header);
