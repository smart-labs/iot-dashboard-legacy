import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
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

export const Title = styled.div`
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

export const Icon = styled.div`
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

export const Info = styled.div`
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
