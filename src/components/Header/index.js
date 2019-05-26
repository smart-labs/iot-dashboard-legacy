import React from "react";

import { Container } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <Container>
      <h1>
        <strong>Smart </strong>
        Trash <FontAwesomeIcon icon={faTrash} />
      </h1>
    </Container>
  );
}
