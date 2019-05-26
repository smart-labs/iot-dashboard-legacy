import styled from "styled-components";

export const Container = styled.div`
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
