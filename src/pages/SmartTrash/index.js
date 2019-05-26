import React, { useState } from "react";
import Header from "../../components/Header";
import TrashState from "../../components/TrashState";
import { Container } from "./styles";

export default function SmartTrash() {
  const [knotThings, setKnotThings] = useState([{ id: 1, state: 1 }]);

  return (
    <>
      <Header />
      <Container>
        {knotThings.map(knotThing => (
          <TrashState key={knotThing.id} trash={knotThing} />
        ))}
      </Container>
    </>
  );
}
