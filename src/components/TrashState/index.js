import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faTrashRestore,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import { Container, Title, Icon, Info } from "./styles";
import { ThemeProvider } from "styled-components";

export default function TrashState({ trash }) {
  const theme = [
    {
      trashStateColorBackground: "rgba(230, 67, 86, 0.1)",
      trashStateColorShadow: "rgba(230, 67, 86, 0.61)",
      trashStatePrimaryColor: "rgba(230, 67, 86, 1)"
    },
    {
      trashStateColorBackground: "rgba(33, 217, 154, 0.1)",
      trashStateColorShadow: "rgba(33, 217, 154, 0.61)",
      trashStatePrimaryColor: "rgba(33, 217, 154, 1)"
    }
  ];

  return (
    <ThemeProvider theme={trash.state ? theme[0] : theme[1]}>
      <Container>
        <Title>
          <Icon>
            <FontAwesomeIcon icon={faTrashAlt} />
          </Icon>
          <p>Status do Lixeiro</p>
        </Title>
        <Info>
          <p>Status: {trash.state ? "Cheio" : "Normal"}</p>
          <FontAwesomeIcon
            className="trash"
            icon={trash.state ? faTrashRestore : faTrash}
          />
        </Info>
      </Container>
    </ThemeProvider>
  );
}
