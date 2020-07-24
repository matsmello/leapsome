import React from "react";
import { Container } from "./styles";
import MiniButton from "../MiniButton";
import meAgain from "./../../assets/meAgain.jpeg";

interface ListItemProps {
  message: string;
  createdAt: string;
}

const ListItem: React.FC<ListItemProps> = (props) => (
  <Container>
    <img src={meAgain} />
    <div>
      <strong>{props.message}</strong>
      <div>
        <MiniButton>New</MiniButton>
        <MiniButton>To Do</MiniButton>
        <p>{props.createdAt}</p>
      </div>
    </div>
    <MiniButton>Show</MiniButton>
    <MiniButton>Show</MiniButton>
  </Container>
);

export default ListItem;
