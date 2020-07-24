import React from "react";
import { Container } from "./styles";
import ListItem from "./../ListItem/index";
import { FiChevronDown } from "react-icons/fi";

interface CardProps {
  listItems?: {
    message: string;
    createdAt: string;
    actions: string[];
  }[];

  title: string;
}

const Card: React.FC<CardProps> = (props) => (
  <Container>
    <header>
      <h1>{props.title}</h1>
    </header>

    {props.listItems &&
      props.listItems.map((listItem) => (
        <ListItem message={listItem.message} createdAt={listItem.createdAt} />
      ))}

    <footer>
      <FiChevronDown />
      <strong>MORE</strong>
    </footer>
  </Container>
);

export default Card;
