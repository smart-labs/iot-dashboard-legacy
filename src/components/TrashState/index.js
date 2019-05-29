import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faTrashRestore,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import { Container, Title, Icon, Info } from "./styles";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";

export default function TrashState({ sensor, width }) {
  return (
    <ThemeProvider theme={sensor.value ? theme[0] : theme[1]}>
      <Container width={width}>
        <Title>
          <Icon>
            <FontAwesomeIcon icon={faTrashAlt} />
          </Icon>
          <p>Status do Lixeiro</p>
        </Title>
        <Info>
          <p>
            Status: <strong> {sensor.value ? "Cheio" : "Normal"} </strong>
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
