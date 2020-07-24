import React from "react";
import { Container } from "./styles";
import MiniButton from "../MiniButton";
import meAgain from "./../../assets/meAgain.jpeg";

const ListItem: React.FC = () => (
  <Container>
    <img src={meAgain} />
    <div>
      <strong>Lucy, please write your assessment for Daniel Goldstein</strong>
      <div>
        <MiniButton>New</MiniButton>
        <MiniButton>To Do</MiniButton>
        <p>5 hours ago</p>
      </div>
    </div>
    <MiniButton>Show</MiniButton>
    <MiniButton>Show</MiniButton>
  </Container>
);

export default ListItem;
