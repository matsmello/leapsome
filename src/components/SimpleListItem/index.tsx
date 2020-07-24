import React from "react";
import { Container } from "./styles";
import MiniButton from "../MiniButton";
import meAgain from "./../../assets/meAgain.jpeg";

const SimpleListItem: React.FC = () => (
  <Container>
    <img src={meAgain} />
    <div>
      <strong>Daniel Goldstein</strong>
      <div>
        <MiniButton>feedback</MiniButton>
        <MiniButton>plan 1.3</MiniButton>
      </div>
    </div>
  </Container>
);

export default SimpleListItem;
